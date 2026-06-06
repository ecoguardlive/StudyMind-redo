// FLASHCARDS
// ═══════════════════════════════════════════════════════
function loadFC(deck,srcLabel){
  S.fc.deck=deck;S.fc.cur=0;S.fc.flipped=false;S.fc.known=0;
  document.getElementById('fc-source-tag').textContent=`Source: ${srcLabel||'PABLO Basic Mechanics'}`;
  showFC();
}

function showFC(){
  if(!S.fc.deck.length) return;
  const c=S.fc.deck[S.fc.cur];
  document.getElementById('fc-q').textContent=c.q;
  document.getElementById('fc-a').textContent=c.a;
  document.getElementById('fc-counter').textContent=`${S.fc.cur+1} / ${S.fc.deck.length}`;
  const pct=Math.round(((S.fc.cur+1)/S.fc.deck.length)*100);
  document.getElementById('fc-pct').textContent=pct+'%';
  document.getElementById('fc-bar').style.width=pct+'%';
  document.getElementById('fc-inner').classList.remove('flipped');
  document.getElementById('fc-btns').style.display='none';
  S.fc.flipped=false;
}

document.getElementById('fc-scene').addEventListener('click',()=>{
  if(!S.fc.deck.length) return;
  S.fc.flipped=!S.fc.flipped;
  document.getElementById('fc-inner').classList.toggle('flipped',S.fc.flipped);
  document.getElementById('fc-btns').style.display=S.fc.flipped?'grid':'none';
});

// FIX: reset S.fc.known before triggering doGenFC so the counter is clean
// for the next deck. Without this, known count bleeds across sessions.
function fcDone(type){
  if(type==='know'){S.fc.known++;S.stats.cardsMastered++;updateProgressStats();}
  if(S.fc.cur<S.fc.deck.length-1){
    S.fc.cur++;showFC();
  } else {
    const pct=Math.round((S.fc.known/S.fc.deck.length)*100);
    S.activityLog.unshift({type:'Flashcards',score:pct,correct:S.fc.known,total:S.fc.deck.length,date:new Date().toLocaleString()});
    toast(`🎓 Done! Knew ${S.fc.known}/${S.fc.deck.length} (${pct}%) — Loading fresh cards…`,pct>=70?'success':'info');
    S.chartsInited=false;
    saveState();
    // FIX: explicitly reset known count before starting new generation
    // so the next deck's score isn't polluted by the previous deck
    const prevKnown=S.fc.known;
    S.fc.known=0;
    setTimeout(()=>{ doGenFC(); }, 2200);
  }
}

async function doGenFC(){
  nav('flashcards');
  const srcId=S.selectedSrcId;
  const sub=document.getElementById('fc-subtitle');
  showOverlay('Generating Flashcards…','Building cards from your knowledge base…',10);
  sub.textContent='⏳ Generating flashcards…';

  if(!S.apiKey){
    hideOverlay();
    sub.textContent='⚠️ No API key — using default cards. Add your API key in Settings.';
    toast('Add an API key in Settings to generate custom flashcards.','warning');
    loadFC(DEFAULT_FC,'PABLO Basic Mechanics (default)');
    return;
  }

  try{
    const ctx=getKBContext(srcId);
    const srcLabel=srcId==='all'?`all ${S.kb.length} documents`:S.kb.find(d=>d.id===srcId)?.name||'selected document';

    const _seed=Math.floor(Math.random()*9000)+1000;
    const prompt=`You are a flashcard generator for MECH 106 Basic Mechanics at UENR, Ghana.

Generate exactly 20 flashcards from the following study material.

STUDY MATERIAL (${srcLabel}):
${ctx.slice(0,25000)}

Rules:
- Each card covers one specific concept, definition, formula, or key fact
- Questions are clear and concise
- Answers are complete but brief (2–4 sentences)
- Cover a wide variety of topics across the full material
- Do NOT repeat similar cards
- Variety seed: ${_seed} — each call must pick different cards from across the material
- Return ONLY a valid JSON array, no markdown, no explanation

Format: [{"q":"question","a":"answer"},...]`;

    updateOverlay('AI is generating flashcards…',50);
    const result=await callGemini({prompt,jsonMode:true,maxTokens:4000});
    updateOverlay('Processing…',90);
    const clean=result.replace(/```json|```/gi,'').trim();
    const cards=JSON.parse(clean);
    if(Array.isArray(cards)&&cards.length){
      loadFC(cards,srcLabel);
      sub.textContent=`✅ ${cards.length} cards from: ${srcLabel}`;
      toast(`✅ ${cards.length} flashcards generated!`,'success');
    }else throw new Error('Empty result');
  }catch(err){
    console.error('FC gen:',err);
    sub.textContent=`⚠️ Using defaults (${err.message==='NO_API_KEY'?'no API key':err.message})`;
    if(err.message==='NO_API_KEY') toast('Add your API key in Settings.','warning');
    else toast('Using default flashcards.','warning');
    loadFC(DEFAULT_FC,'PABLO Basic Mechanics (default)');
  }finally{hideOverlay();}
}

// ═══════════════════════════════════════════════════════
