// LIBRARY
// ═══════════════════════════════════════════════════════
const uploadBtn=document.getElementById('uploadBtn');
const fileInput=document.getElementById('fileInput');
const uploadZone=document.getElementById('upload-zone');

uploadBtn.addEventListener('click',e=>{e.stopPropagation();fileInput.click();});
uploadZone.addEventListener('click',()=>fileInput.click());
uploadZone.addEventListener('dragover',e=>{e.preventDefault();uploadZone.classList.add('drag');});
uploadZone.addEventListener('dragleave',()=>uploadZone.classList.remove('drag'));
uploadZone.addEventListener('drop',e=>{
  e.preventDefault();uploadZone.classList.remove('drag');
  handleFiles(Array.from(e.dataTransfer.files));
});

fileInput.addEventListener('change',async e=>{
  await handleFiles(Array.from(e.target.files||[]));
  e.target.value='';
});

async function handleFiles(files){
  const pdfs=files.filter(f=>f.name.toLowerCase().endsWith('.pdf'));
  if(!pdfs.length){toast('Please select PDF files.','warning');return;}
  for(const file of pdfs){
    const existId=btoa(file.name+file.size).replace(/[^a-z0-9]/gi,'').substring(0,12);
    if(S.kb.find(d=>d.id===existId)){toast(`Already added: ${file.name}`,'info');continue;}
    showOverlay('Reading PDF…',`Opening ${file.name}`,5);
    try{
      const {text,totalPages}=await processPDF(file);
      const doc={
        id:existId,name:file.name,size:file.size,
        date:new Date().toLocaleDateString(),
        text,totalPages,isPablo:false
      };
      S.userDocs.push(doc);
      addToKB(doc); // triggers onKBUpdate
      updateOverlay('Done!',100);
      toast(`✅ Added: ${file.name} (${totalPages} pages)`,'success');
    }catch(err){
      console.error(err);
      toast(`❌ Failed: ${file.name} — ${err.message}`,'error');
    }finally{hideOverlay();}
  }
}

function renderLibrary(){
  const grid=document.getElementById('docs-grid');
  if(!grid) return;

  const cards=S.kb.map(doc=>{
    const isActive=S.activeDocId===doc.id;
    return `<div class="doc-card${isActive?' active-doc':''}">
      <div class="kb-size-badge">${doc.isPablo?'Pre-loaded':fmtSize(doc.size)}</div>
      <div class="doc-thumb">${doc.isPablo?'📘':'📄'}</div>
      ${doc.isPablo?'<div class="preloaded-badge">✓ Pre-loaded</div>':''}
      ${isActive&&!doc.isPablo?'<div class="active-badge">✓ Active</div>':''}
      <div class="doc-title">${doc.name}</div>
      <div class="doc-meta"><span>${doc.date}</span><span>${doc.totalPages||'?'} pages</span></div>
      <div class="doc-actions">
        <button class="btn ${isActive?'btn-outline':'btn-primary'} btn-sm" onclick="setActiveDoc('${doc.id}')">${isActive?'✓ Selected':'Set Active'}</button>
        <div class="doc-btn-row">
          <button class="btn btn-outline btn-sm" onclick="setSelectedSrc('${doc.id}','q');doGenQuiz()">🧠 Quiz</button>
          <button class="btn btn-outline btn-sm" onclick="setSelectedSrc('${doc.id}','fc');doGenFC()">🃏 Cards</button>
        </div>
        ${!doc.isPablo?`<button class="btn btn-outline btn-sm" style="color:var(--red)" onclick="removeDoc('${doc.id}')">🗑 Remove</button>`:''}
      </div>
    </div>`;
  }).join('');

  grid.innerHTML=cards||`<div class="empty-state"><p>No documents yet</p><span>Upload PDFs to get started.</span></div>`;
}

function setActiveDoc(id){
  S.activeDocId=id;
  updateRefPanel();renderLibrary();saveState();
  const doc=S.kb.find(d=>d.id===id);
  if(doc) toast(`📄 "${doc.name}" is now active.`,'success');
}

function removeDoc(id){
  removeFromKB(id);
  toast('Document removed.','info');
}

function clearUserDocs(){
  if(!confirm('Remove all uploaded documents?')) return;
  S.userDocs=[];
  S.kb=[PABLO_DOC];
  S.activeDocId='pablo';
  S.selectedSrcId='all';
  onKBUpdate();
  toast('Uploaded documents cleared.','info');
}

function updateRefPanel(){
  const doc=S.kb.find(d=>d.id===S.activeDocId)||PABLO_DOC;
  document.getElementById('ref-name')&&(document.getElementById('ref-name').textContent=doc.name);
  document.getElementById('ref-meta')&&(document.getElementById('ref-meta').textContent=`${doc.totalPages||'?'} pages · ${doc.date}`);
}

function fmtSize(b){if(!b)return '—';if(b<1024)return b+' B';if(b<1048576)return Math.round(b/1024)+' KB';return (b/1048576).toFixed(1)+' MB';}

// ═══════════════════════════════════════════════════════
