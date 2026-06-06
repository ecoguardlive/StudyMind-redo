// PERSISTENCE
// ═══════════════════════════════════════════════════════

// FIX: saveState now surfaces quota errors as a toast instead of silently
// swallowing them. Silent failures caused S.apiKey to vanish between sessions,
// making "new cards not generating" after a deck was completed.
function saveState(){
  try{
    localStorage.setItem('studymind_v2',JSON.stringify({
      userDocs:S.userDocs.map(d=>({...d,text:(d.text||'').slice(0,150000)})),
      activeDocId:S.activeDocId,selectedSrcId:S.selectedSrcId,
      stats:S.stats,settings:S.settings,profile:S.profile,
      apiKey:S.apiKey,quizHistory:S.quiz.history,
      activityLog:S.activityLog.slice(0,20)
    }));
  }catch(e){
    // FIX: warn user when localStorage is full so they know data won't persist
    console.warn('saveState failed (quota?):', e);
    toast('⚠️ Storage full — progress may not save. Try removing old documents.','warning');
  }
}

function loadState(){
  try{
    const saved=JSON.parse(localStorage.getItem('studymind_v2')||'{}');
    if(saved.settings) S.settings={...S.settings,...saved.settings};
    if(saved.stats) S.stats={...S.stats,...saved.stats};
    if(saved.apiKey) S.apiKey=saved.apiKey;
    if(saved.profile){
      S.profile=saved.profile;
      document.getElementById('nameIn').value=S.profile.name||'';
      document.getElementById('emailIn').value=S.profile.email||'';
      if(S.profile.name){
        document.getElementById('profile-name').textContent=S.profile.name;
        document.getElementById('user-avatar').textContent=S.profile.name[0].toUpperCase();
      }
    }
    if(saved.userDocs&&saved.userDocs.length){
      S.userDocs=saved.userDocs.map(d=>({...d,isPablo:false}));
      S.userDocs.forEach(d=>{S.kb.push(d);});
    }
    if(saved.activeDocId) S.activeDocId=saved.activeDocId;
    if(saved.selectedSrcId) S.selectedSrcId=saved.selectedSrcId;
    if(saved.quizHistory) S.quiz.history=saved.quizHistory;
    if(saved.activityLog) S.activityLog=saved.activityLog;

    // FIX: show masked key placeholder in Settings input so user knows a key
    // is already stored (instead of empty field suggesting nothing is saved)
    if(saved.apiKey){
      const settingsInput=document.getElementById('apiKeySettings');
      if(settingsInput){
        settingsInput.value='';
        settingsInput.placeholder=`Key saved: ${saved.apiKey.slice(0,10)}… — paste to replace`;
      }
    }
  }catch(e){
    console.warn('loadState failed:',e);
  }

  document.getElementById('webTgl').classList.toggle('on',S.settings.web);
  document.getElementById('docTgl').classList.toggle('on',S.settings.doc);
  document.getElementById('allDocsTgl').classList.toggle('on',S.settings.allDocs);
  updateWebBadge();
  updateRefPanel();
  renderLibrary();
  renderStats();
  updateProgressStats();
  renderKBDocList();
  renderDocSelectors();
  // FIX: checkApiKey called after S.apiKey is loaded so banner and hint
  // both reflect the actual stored state on every page load
  checkApiKey();
}

// ═══════════════════════════════════════════════════════

// STREAK
// ═══════════════════════════════════════════════════════
function updateStreak(){
  try{
    const today=new Date().toDateString();
    const data=JSON.parse(localStorage.getItem('sm_streak')||'{"last":"","count":0}');
    const yesterday=new Date(Date.now()-86400000).toDateString();
    if(data.last===today){/* same day */}
    else if(data.last===yesterday){data.count++;data.last=today;}
    else{data.count=1;data.last=today;}
    localStorage.setItem('sm_streak',JSON.stringify(data));
    document.getElementById('streak-val').textContent=data.count+' Day'+(data.count!==1?'s':'');
  }catch(e){}
}

// ═══════════════════════════════════════════════════════

// BOOT
// ═══════════════════════════════════════════════════════
loadState();
loadQuiz(DEFAULT_QS);
loadFC(DEFAULT_FC);
updateStreak();
setSyncState('ready',`Knowledge base: ${S.kb.length} doc${S.kb.length!==1?'s':''}`);
