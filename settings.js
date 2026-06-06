// SETTINGS
// ═══════════════════════════════════════════════════════
function toggleSetting(key){
  S.settings[key]=!S.settings[key];
  const ids={web:'webTgl',doc:'docTgl',allDocs:'allDocsTgl'};
  document.getElementById(ids[key]).classList.toggle('on',S.settings[key]);
  updateWebBadge();saveState();
  if(key==='web') toast(S.settings.web?'🌐 Web search ON':'🌐 Web search OFF','info');
}
function updateWebBadge(){
  const el=document.getElementById('web-status');if(el) el.textContent=S.settings.web?'ON ✅':'OFF';
}
function saveProfile(){
  const name=document.getElementById('nameIn').value.trim();
  if(!name){toast('Please enter your name.','warning');return;}
  S.profile.name=name;S.profile.email=document.getElementById('emailIn').value.trim();
  document.getElementById('profile-name').textContent=name;
  document.getElementById('user-avatar').textContent=name[0].toUpperCase();
  saveState();toast('✅ Profile saved!','success');
}

// ═══════════════════════════════════════════════════════
