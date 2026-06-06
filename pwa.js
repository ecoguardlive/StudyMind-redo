// PWA — Service Worker & Install Prompt
// ═══════════════════════════════════════════════════════

// Register service worker for offline support
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('./sw.js')
      .then(reg=>console.log('[SW] Registered, scope:', reg.scope))
      .catch(err=>console.warn('[SW] Registration failed:', err));
  });
}

// Capture the beforeinstallprompt event so we can show the Install button
let _installPrompt=null;

window.addEventListener('beforeinstallprompt', e=>{
  e.preventDefault();
  _installPrompt=e;
  const btn=document.getElementById('installBtn');
  const note=document.getElementById('installNote');
  if(btn){ btn.style.display='inline-flex'; }
  if(note){ note.style.display='none'; }
});

function installPWA(){
  if(!_installPrompt) return;
  _installPrompt.prompt();
  _installPrompt.userChoice.then(result=>{
    if(result.outcome==='accepted'){
      toast('✅ StudyMind installed! Find it on your home screen.','success');
    }
    _installPrompt=null;
    const btn=document.getElementById('installBtn');
    if(btn) btn.style.display='none';
  });
}

// When already installed as standalone, hide the install note
if(window.matchMedia('(display-mode: standalone)').matches ||
   window.navigator.standalone===true){
  const note=document.getElementById('installNote');
  if(note) note.textContent='✅ Running as installed app.';
}

// ═══════════════════════════════════════════════════════
