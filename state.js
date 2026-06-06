// STATE — single source of truth
// ═══════════════════════════════════════════════════════
const S={
  // Knowledge Base: all indexed documents (always includes PABLO)
  kb:[PABLO_DOC],
  userDocs:[],         // user-uploaded docs
  activeDocId:'pablo', // which doc is "active" for tutor reference panel
  selectedSrcId:'all', // which doc to use for quiz/fc/summary generation

  quiz:{qs:[],cur:0,total:0,correct:0,history:[],dotColors:[]},
  fc:{deck:[],cur:0,flipped:false,known:0},

  stats:{quiz:0,chats:0,correct:0,totalQ:0,cardsMastered:0},
  settings:{web:false,doc:true,allDocs:true},
  profile:{name:'',email:''},
  apiKey:'',

  generating:false,
  chartsInited:false,
  scoreChart:null,
  topicChart:null,
  activityLog:[]
};

// ═══════════════════════════════════════════════════════

// KNOWLEDGE BASE MANAGEMENT
// ═══════════════════════════════════════════════════════
function getKB(){return S.kb;}

function addToKB(doc){
  // Remove existing with same id, then add
  S.kb=S.kb.filter(d=>d.id!==doc.id);
  S.kb.push(doc);
  onKBUpdate();
}

function removeFromKB(id){
  if(id==='pablo') return;
  S.kb=S.kb.filter(d=>d.id!==id);
  S.userDocs=S.userDocs.filter(d=>d.id!==id);
  if(S.activeDocId===id) S.activeDocId='pablo';
  if(S.selectedSrcId===id) S.selectedSrcId='all';
  onKBUpdate();
}

function getKBContext(srcId){
  // Returns combined text context for AI calls
  const docs=srcId&&srcId!=='all'
    ? S.kb.filter(d=>d.id===srcId)
    : S.settings.allDocs ? S.kb : S.kb.filter(d=>d.isPablo);
  return docs.map((d,i)=>`=== DOCUMENT ${i+1}: ${d.name} ===\n${(d.text||'').slice(0,40000)}`).join('\n\n');
}

function getKBSummary(){
  return S.kb.map(d=>`• ${d.name} (${d.totalPages||'?'} pages)`).join('\n');
}

// Called whenever KB changes — updates all UI that depends on docs
function onKBUpdate(){
  setSyncState('syncing','Updating knowledge base…');
  renderLibrary();
  renderStats();
  renderKBDocList();
  renderDocSelectors();
  updateRefPanel();
  saveState();
  setTimeout(()=>setSyncState('ready',`Knowledge base: ${S.kb.length} doc${S.kb.length!==1?'s':''}`),600);
}

function setSyncState(state,label){
  const dot=document.getElementById('sync-dot');
  const lbl=document.getElementById('sync-label');
  if(dot) dot.className='sync-dot'+(state==='syncing'?' syncing':'');
  if(lbl) lbl.textContent=label;
}

function renderKBDocList(){
  const el=document.getElementById('kb-doc-list');
  if(!el) return;
  el.innerHTML=S.kb.map(d=>`<div class="kb-doc-item"><div class="kb-dot"></div><span>${d.name.replace('.pdf','').substring(0,28)}${d.name.length>28?'…':''}</span></div>`).join('');
}

// Renders source selectors for quiz, flashcards, summary pages
function renderDocSelectors(){
  const containers={
    'quiz-doc-selector':'quiz','fc-doc-selector':'fc','summary-doc-selector':'sum'
  };
  const allOption=(ctx)=>`<button class="btn btn-sm ${S.selectedSrcId==='all'?'btn-primary':'btn-outline'}" onclick="setSelectedSrc('all','${ctx}')">All Docs</button>`;
  const docOptions=(ctx)=>S.kb.map(d=>`<button class="btn btn-sm ${S.selectedSrcId===d.id?'btn-primary':'btn-outline'}" onclick="setSelectedSrc('${d.id}','${ctx}')">${d.name.replace('_',' ').replace('.pdf','').substring(0,18)}</button>`).join('');

  ['quiz-doc-selector','fc-doc-selector'].forEach(cid=>{
    const el=document.getElementById(cid);
    if(!el) return;
    const prefix=el.querySelector('span');
    el.innerHTML='';
    if(prefix) el.appendChild(prefix);
    el.insertAdjacentHTML('beforeend', allOption('q')+docOptions('q'));
  });

  const sumSel=document.getElementById('summary-doc-selector');
  if(sumSel){
    sumSel.innerHTML=allOption('s')+docOptions('s');
  }
}

function setSelectedSrc(id,ctx){
  S.selectedSrcId=id;
  renderDocSelectors();
  saveState();
}

// ═══════════════════════════════════════════════════════
