// NAVIGATION
// ═══════════════════════════════════════════════════════
function nav(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  const btn=document.querySelector(`[data-page="${id}"]`);
  if(btn) btn.classList.add('active');
  if(id==='progress') initCharts();
}
document.querySelectorAll('.nav-item').forEach(btn=>{
  btn.addEventListener('click',()=>nav(btn.dataset.page));
});
const _h=new Date().getHours();
document.getElementById('greeting').textContent=_h<12?'Good morning, ready to study?':_h<18?'Good afternoon!':'Good evening!';

// ═══════════════════════════════════════════════════════

// NOTIFICATIONS & OVERLAY
// ═══════════════════════════════════════════════════════
function toast(msg,type='info'){
  const wrap=document.getElementById('notif-wrap');
  const el=document.createElement('div');
  el.className=`notif ${type}`;el.textContent=msg;
  wrap.appendChild(el);
  setTimeout(()=>{el.style.transition='opacity .4s';el.style.opacity='0';setTimeout(()=>el.remove(),400);},3800);
}
function showOverlay(title,msg,pct=0){
  let ov=document.getElementById('proc-overlay');
  if(!ov){
    ov=document.createElement('div');ov.id='proc-overlay';ov.className='processing-overlay';
    ov.innerHTML=`<div class="spinner-lg"></div><h3 id="ov-title"></h3><p id="ov-msg"></p><div class="processing-progress"><div class="processing-progress-fill" id="ov-bar" style="width:0%"></div></div>`;
    document.body.appendChild(ov);
  }
  document.getElementById('ov-title').textContent=title;
  document.getElementById('ov-msg').textContent=msg;
  document.getElementById('ov-bar').style.width=pct+'%';
  ov.style.display='flex';
}
function updateOverlay(msg,pct){
  const m=document.getElementById('ov-msg'),b=document.getElementById('ov-bar');
  if(m)m.textContent=msg;if(b)b.style.width=pct+'%';
}
function hideOverlay(){const ov=document.getElementById('proc-overlay');if(ov)ov.style.display='none';}

// ═══════════════════════════════════════════════════════

// STATS
// ═══════════════════════════════════════════════════════
function renderStats(){
  document.getElementById('s-docs').textContent=S.kb.length;
  document.getElementById('s-quiz').textContent=S.stats.quiz;
  document.getElementById('s-chats').textContent=S.stats.chats;
  document.getElementById('lib-kb-info')&&(document.getElementById('lib-kb-info').textContent=`Knowledge base: ${S.kb.length} document${S.kb.length!==1?'s':''}`);
}

// ═══════════════════════════════════════════════════════
