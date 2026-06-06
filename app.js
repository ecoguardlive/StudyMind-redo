
/* ==== data.js ==== */
pdfjsLib.GlobalWorkerOptions.workerSrc='https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';

// PABLO PRE-LOADED CONTENT
// ═══════════════════════════════════════════════════════
const PABLO_CONTENT=`PABLO – MECH 106 BASIC MECHANICS
University of Energy and Natural Resources (UENR), Sunyani, Ghana
Course Instructor: Mr. Prosper Owusu

COURSE CONTENTS: Introduction & Fundamental Concepts, Forces & Moments, Statics (Equilibrium of Particles and Rigid Bodies, Structures, Friction), Dynamics (Basic Dynamics of Particles)

COURSE OBJECTIVES:
- Understand and apply Newton's laws of motion to particles and rigid bodies
- Understand the basis of force and moments, draw free body diagrams
- Analyze 2D and 3D equilibrium of system of forces (tensions in ropes/cables, forces in links, support and contact reactions)
- Find support reactions and internal forces of 2D determinant structures
- Solve static and dynamic problems involving dry friction
- Solve 2D problems involving equation of motion, impulse-momentum, work-energy

ASSESSMENT: Continuous Assessment 40% (Homework 10%, Quiz 25%, Attendance 5%), End of Semester Exams 60% (Statics 3/4, Dynamics 1/4)

UNIT 1: INTRODUCTION AND FUNDAMENTAL CONCEPTS
What is Mechanics? A branch of physical science which describes and predicts the conditions of rest or motion of bodies under the action of forces.
- Mechanics of Rigid Bodies: Statics (equilibrium under balanced forces) and Dynamics (motion under unbalanced forces)
- Dynamics divides into Kinematics (motion without reference to forces) and Kinetics (relates motion to forces)

FUNDAMENTAL DEFINITIONS:
- Space: geometric region with three coordinates measured from a reference/origin
- Time: interval between two events
- Mass: quantity of matter possessed by a body
- Force: action of one body upon another; characterized by point of application, magnitude, and direction; represented as a vector

PARTICLE: a very small amount of matter assumed to occupy a single point in space; has mass but negligible size; all forces assumed concurrent

RIGID BODY: combination of many particles occupying fixed positions with respect to each other; size and shape assumed constant

NEWTON'S LAWS OF MOTION:
1st Law: If resultant force on a particle is zero, the particle remains at rest or continues in straight-line motion (Law of Inertia)
2nd Law: F = ma — the rate of change of momentum is proportional to the applied external force; if resultant is not zero, acceleration is proportional to resultant and in same direction
3rd Law: Forces of action and reaction between bodies in contact have the same magnitude, same line of action, and opposite sense

NEWTON'S LAW OF GRAVITATION: F = Gm₁m₂/r² where G = 6.67384×10⁻¹¹ m³/kg·s²
Weight: W = mg where g = 9.81 m/s² (gravitational acceleration on Earth's surface)

SYSTEMS OF UNITS:
- SI (metric): base units — meter (m), kilogram (kg), second (s), Newton (N = kg·m/s²)
- US Customary: foot (ft), pound (lb), second (s)

UNIT 2: FORCES AND MOMENTS
SYSTEMS OF FORCES: A force system is a collection of forces at specified locations.
Types: Collinear (common line of action), Parallel (parallel lines of action), Concurrent (lines of action intersect at common point), Coplanar (all forces in same plane), Spatial (forces in 3D space)

RESULTANT OF TWO FORCES (Parallelogram Law): The combined effect of two forces is represented by a single resultant force — the diagonal of a parallelogram with the two forces as adjacent sides.
- Vector addition: R = P + Q (commutative: P + Q = Q + P)
- Cosine rule: R² = P² + Q² – 2PQ·cosB
- Sine rule: sinA/P = sinB/R = sinC/Q

RECTANGULAR COMPONENTS: F = Fxi + Fyj
- Fx = F·cosθ, Fy = F·sinθ
- R = √(Rx² + Ry²), θ = tan⁻¹(Ry/Rx)
- For multiple forces: Rx = ΣFx, Ry = ΣFy

RECTANGULAR COMPONENTS IN 3D SPACE:
F = Fxi + Fyj + Fzk
Direction cosines: Fx = F·cosθx, Fy = F·cosθy, Fz = F·cosθz
Unit vector: λ = cosθxi + cosθyj + cosθzk; cos²θx + cos²θy + cos²θz = 1

VECTOR/CROSS PRODUCT: V = P × Q
- Magnitude: V = PQ·sinθ
- Direction: right-hand rule
- Not commutative: P×Q = -Q×P
- Distributive: P×(Q₁+Q₂) = P×Q₁ + P×Q₂

MOMENT OF A FORCE (Torque):
- Moment about a point: M = r × F (vector product of position vector and force)
- Moment magnitude: M = F·d where d = perpendicular distance (moment arm)
- Varignon's Theorem: moment of a force = sum of moments of its components
- Couple: two equal and opposite forces → net force = 0 but moment ≠ 0; M = F·d

UNIT 3: EQUILIBRIUM OF PARTICLES AND RIGID BODIES
EQUILIBRIUM: A body is in equilibrium when the resultant of all forces acting on it is zero.
Conditions:
- ΣFx = 0, ΣFy = 0 (2D)
- ΣFx = 0, ΣFy = 0, ΣFz = 0 (3D)
- ΣM = 0 (moments about any point)

FREE BODY DIAGRAM (FBD): A diagram showing a body isolated from its surroundings with all external forces and reactions clearly labeled. Essential step in solving any equilibrium problem.

SUPPORT REACTIONS:
- Pin support: provides Rx and Ry (two unknowns)
- Roller support: provides one force perpendicular to surface
- Fixed support: provides Rx, Ry, and moment M (three unknowns)

UNIT 4: STRUCTURES
TRUSS: A structure composed of two-force members connected at joints (pins). Forces are only axial (tension or compression).
- Method of Joints: analyze forces at each pin using ΣFx=0 and ΣFy=0
- Method of Sections: cut through members, use equilibrium of a section

FRAMES AND MACHINES: Structures with multi-force members; separate members for analysis.

UNIT 5: FRICTION
DRY FRICTION: Coulomb friction between two surfaces.
- F ≤ μₛN (static friction, impending motion)
- F = μₖN (kinetic friction, sliding)
- μₛ = coefficient of static friction (tan φₛ = μₛ)
- μₖ = coefficient of kinetic friction (< μₛ)

UNIT 6: DYNAMICS OF PARTICLES
KINEMATICS: Study of motion without reference to forces.
- Position: x(t), velocity: v = dx/dt, acceleration: a = dv/dt = d²x/dt²
- For constant acceleration: v = v₀ + at, x = x₀ + v₀t + ½at², v² = v₀² + 2a(x-x₀)

KINETICS: Relates forces to motion.
- Newton's 2nd Law: ΣF = ma
- Work-Energy: U₁₋₂ = ΔKE = ½mv₂² - ½mv₁²
- Impulse-Momentum: F·Δt = Δ(mv) = m·v₂ - m·v₁`;

const PABLO_DOC={id:'pablo',name:'PABLO_01_BASIC_MECHANICS.pdf',totalPages:183,date:'Pre-loaded',isPablo:true,text:PABLO_CONTENT,size:0};

// ═══════════════════════════════════════════════════════

// DEFAULT FALLBACK CONTENT
// ═══════════════════════════════════════════════════════
const DEFAULT_QS=[
  {question:"What is the definition of Mechanics?",options:["Study of chemical reactions","Branch of physical science describing conditions of rest or motion under forces","Study of electrical circuits","Analysis of fluid thermodynamics"],answer:1},
  {question:"Newton's First Law states that a particle at rest will remain at rest when:",options:["A net force acts on it","The resultant force on it is zero","Gravity is absent","It has no mass"],answer:1},
  {question:"The formula F = ma is Newton's:",options:["First Law","Second Law","Third Law","Law of Gravitation"],answer:1},
  {question:"What is a Free Body Diagram (FBD)?",options:["A diagram of the solar system","A body isolated from its surroundings showing all external forces","A sketch of molecular bonds","A circuit diagram"],answer:1},
  {question:"In the SI system, force is measured in:",options:["Pounds","Watts","Newtons","Joules"],answer:2},
  {question:"The Parallelogram Law is used to find the:",options:["Volume of a body","Resultant of two forces","Mass of an object","Temperature of a system"],answer:1}
];
const DEFAULT_FC=[
  {q:"What is Mechanics?",a:"A branch of physical science that describes and predicts the conditions of rest or motion of bodies under the action of forces."},
  {q:"State Newton's First Law of Motion.",a:"If the resultant force on a particle is zero, the particle will remain at rest or continue to move in a straight line (Law of Inertia)."},
  {q:"State Newton's Second Law of Motion.",a:"F = ma — if the resultant force is not zero, acceleration is proportional to the resultant and in same direction."},
  {q:"State Newton's Third Law of Motion.",a:"The forces of action and reaction between bodies in contact have the same magnitude, same line of action, and opposite sense."},
  {q:"What is a Free Body Diagram?",a:"A diagram showing a body isolated from its surroundings with all external forces and reactions clearly labeled. Essential first step in any equilibrium problem."},
  {q:"What is the Parallelogram Law?",a:"The combined effect of two forces is represented by the diagonal of a parallelogram with the two forces as adjacent sides. R² = P² + Q² – 2PQ·cosB"},
  {q:"Difference between Statics and Dynamics?",a:"Statics: equilibrium under balanced forces (resultant=0). Dynamics: motion under unbalanced forces (resultant≠0)."},
  {q:"Conditions for equilibrium of a rigid body?",a:"ΣFx = 0, ΣFy = 0 (force equilibrium) and ΣM = 0 (moment equilibrium about any point)."},
  {q:"Define Moment of a Force.",a:"Moment (torque) = force × perpendicular distance: M = F·d. Also M = r × F (vector product)."},
  {q:"What is Coulomb (Dry) Friction?",a:"Static friction: F ≤ μₛN. Kinetic friction: F = μₖN. μₛ = static coefficient; μₖ < μₛ."}
];

// ═══════════════════════════════════════════════════════


/* ==== state.js ==== */
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


/* ==== ui.js ==== */
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


/* ==== persistence.js ==== */
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


/* ==== settings.js ==== */
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


/* ==== api.js ==== */
// GEMINI / CLAUDE / OPENAI API
// ═══════════════════════════════════════════════════════
function normalizeApiKey(key){
  return (key||'').toString().trim().replace(/^['"]|['"]$/g,'').split(/\s+/)[0];
}

function detectProvider(key){
  key=normalizeApiKey(key);
  if(!key) return null;
  if(key.startsWith('sk-ant-')) return 'claude';
  if(key.startsWith('AIza')||key.includes('AIza')) return 'gemini';
  if(key.startsWith('sk-proj-')||key.startsWith('sk-')) return 'openai';
  return 'claude';
}

function providerLabel(key){
  const p=detectProvider(key);
  if(p==='claude') return 'Claude (Anthropic)';
  if(p==='gemini') return 'Gemini (Google)';
  if(p==='openai') return 'GPT-4o-mini (OpenAI)';
  return 'AI';
}

async function callGemini({prompt,jsonMode=false,maxTokens=2000}){
  const key=normalizeApiKey(S.apiKey);
  if(!key) throw new Error('NO_API_KEY');
  const provider=detectProvider(key);

  if(provider==='claude'){
    const sys=jsonMode?'Respond ONLY with valid JSON. No markdown, no backticks, no explanation.':'You are a helpful study assistant.';
    const r=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:maxTokens,system:sys,messages:[{role:'user',content:prompt}]})
    });
    if(!r.ok){const e=await r.json().catch(()=>({}));if(r.status===401)throw new Error('BAD_API_KEY');throw new Error('Claude: '+(e?.error?.message||r.statusText));}
    const d=await r.json();
    return d.content?.[0]?.text||'';
  }

  if(provider==='gemini'){
    const cfg={maxOutputTokens:maxTokens,temperature:0.7};
    if(jsonMode) cfg.responseMimeType='application/json';
    const r=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key='+key,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({contents:[{role:'user',parts:[{text:prompt}]}],generationConfig:cfg})
    });
    if(!r.ok){const e=await r.json().catch(()=>({}));if(r.status===400)throw new Error('BAD_API_KEY');throw new Error('Gemini: '+(e?.error?.message||r.statusText));}
    const d=await r.json();
    return d.candidates?.[0]?.content?.parts?.[0]?.text||'';
  }

  if(provider==='openai'){
    const msgs=jsonMode
      ?[{role:'system',content:'Respond ONLY with valid JSON. No markdown, no backticks.'},{role:'user',content:prompt}]
      :[{role:'system',content:'You are a helpful study assistant.'},{role:'user',content:prompt}];
    const body={model:'gpt-4o-mini',max_tokens:maxTokens,temperature:0.7,messages:msgs};
    if(jsonMode) body.response_format={type:'json_object'};
    const r=await fetch('https://api.openai.com/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},
      body:JSON.stringify(body)
    });
    if(!r.ok){const e=await r.json().catch(()=>({}));if(r.status===401)throw new Error('BAD_API_KEY');throw new Error('OpenAI: '+(e?.error?.message||r.statusText));}
    const d=await r.json();
    return d.choices?.[0]?.message?.content||'';
  }

  throw new Error('Unknown provider');
}

// FIX: checkApiKey — hide banner when key exists, show when it doesn't.
// Also updates the Settings hint element if present.
function checkApiKey(){
  const banner=document.getElementById('api-key-banner');
  if(banner) banner.style.display=S.apiKey?'none':'flex';

  // Show masked key confirmation in Settings
  const hint=document.getElementById('apiKeyHint');
  if(hint){
    if(S.apiKey){
      hint.textContent='✅ Key saved: '+S.apiKey.slice(0,10)+'… ('+providerLabel(S.apiKey)+')';
      hint.style.display='block';
    } else {
      hint.textContent='';
      hint.style.display='none';
    }
  }
}

// FIX: saveApiKey — read banner input first, settings input second (not backwards).
// Clear only whichever input exists. Show masked confirmation immediately.
function saveApiKey(){
  const bannerInput=document.getElementById('apiKeyInput');
  const settingsInput=document.getElementById('apiKeySettings');

  // Prefer whichever input has a value; banner takes priority since user is typing there
  const bannerValue=bannerInput?.value.trim()||'';
  const settingsValue=settingsInput?.value.trim()||'';
  const raw=bannerValue||settingsValue; // FIX: banner first (was settingsValue||bannerValue)

  const normalized=normalizeApiKey(raw);
  if(!normalized){toast('Please enter an API key.','warning');return;}

  S.apiKey=normalized;

  // Clear whichever input was used
  if(bannerInput) bannerInput.value='';
  if(settingsInput) settingsInput.value='';

  const lbl=providerLabel(normalized);
  saveState();
  checkApiKey(); // FIX: called after S.apiKey is set — banner hides immediately
  toast('✅ API key saved! Provider: '+lbl,'success');
}

// ═══════════════════════════════════════════════════════


/* ==== pdf.js ==== */
// PDF PROCESSING
// ═══════════════════════════════════════════════════════
async function processPDF(file){
  const arrayBuffer=await file.arrayBuffer();
  const pdf=await pdfjsLib.getDocument({data:arrayBuffer}).promise;
  const totalPages=pdf.numPages;
  const maxPages=Math.min(totalPages,50);
  let extractedText='';
  for(let i=1;i<=maxPages;i++){
    updateOverlay(`Extracting page ${i} of ${maxPages}…`,Math.round((i/maxPages)*80));
    const page=await pdf.getPage(i);
    try{
      const tc=await page.getTextContent();
      const pageText=tc.items.map(it=>it.str).join(' ').trim();
      if(pageText.length>20) extractedText+=`=== PAGE ${i} ===\n${pageText}\n\n`;
    }catch(e){/* skip */}
  }
  return {text:extractedText.trim(),totalPages};
}

// ═══════════════════════════════════════════════════════


/* ==== library.js ==== */
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


/* ==== flashcards.js ==== */
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


/* ==== quiz.js ==== */
// QUIZ
// ═══════════════════════════════════════════════════════
function loadQuiz(qs){
  S.quiz.qs=qs;S.quiz.total=qs.length;S.quiz.cur=0;S.quiz.correct=0;S.quiz.dotColors=[];
  renderQ();
}

function renderQ(){
  if(!S.quiz.qs.length) return;
  const q=S.quiz.qs[S.quiz.cur];const tot=S.quiz.total;
  document.getElementById('quiz-counter').textContent=`Q ${S.quiz.cur+1} of ${tot}`;
  document.getElementById('q-badge').textContent=`Question ${S.quiz.cur+1}`;
  document.getElementById('quiz-progress').style.width=`${((S.quiz.cur+1)/tot)*100}%`;
  document.getElementById('q-text').textContent=q.question;
  document.getElementById('quiz-next-btn').disabled=true;
  document.getElementById('quiz-next-btn').textContent=S.quiz.cur===tot-1?'🏁 Finish':'Next →';
  document.getElementById('q-options').innerHTML=q.options.map((o,i)=>
    `<button class="option" onclick="pickOpt(this,${i},${q.answer})"><div class="option-letter">${'ABCD'[i]}</div><span class="option-text">${o}</span></button>`
  ).join('');
  buildDots();
}

function pickOpt(el,i,correct){
  document.querySelectorAll('.option').forEach(o=>o.classList.add('answered'));
  const isCorrect=i===correct;
  if(isCorrect){el.classList.add('correct');S.quiz.correct++;S.stats.correct++;}
  else{el.classList.add('wrong');document.querySelectorAll('.option')[correct].classList.add('correct');}
  S.quiz.dotColors[S.quiz.cur]=isCorrect?'correct':'wrong';
  document.getElementById('quiz-next-btn').disabled=false;
  S.stats.quiz++;S.stats.totalQ++;
  renderStats();updateProgressStats();saveState();
  buildDots();
}

function buildDots(){
  const el=document.getElementById('quiz-dots');el.innerHTML='';
  for(let i=0;i<S.quiz.total;i++){
    const d=document.createElement('div');
    const color=S.quiz.dotColors[i]||'';
    d.className='quiz-dot'+(i===S.quiz.cur?' current':color?' '+color:'');
    el.appendChild(d);
  }
}

function quizNext(){
  if(S.quiz.cur<S.quiz.total-1){S.quiz.cur++;renderQ();}
  else{
    const pct=Math.round((S.quiz.correct/S.quiz.total)*100);
    S.activityLog.unshift({type:'Quiz',score:pct,correct:S.quiz.correct,total:S.quiz.total,date:new Date().toLocaleString()});
    S.quiz.history.push(pct);
    if(S.quiz.history.length>10) S.quiz.history=S.quiz.history.slice(-10);
    toast(`🎉 Quiz done! ${S.quiz.correct}/${S.quiz.total} (${pct}%) — Loading fresh questions…`,pct>=70?'success':'info');
    S.chartsInited=false;saveState();
    setTimeout(()=>{ doGenQuiz(); },2200);
  }
}
function quizSkip(){if(S.quiz.cur<S.quiz.total-1){S.quiz.cur++;renderQ();}}

async function doGenQuiz(){
  nav('quiz');
  const srcId=S.selectedSrcId;
  const statusEl=document.getElementById('quiz-status');
  showOverlay('Generating Quiz…','Building questions from your knowledge base…',10);
  statusEl.textContent='⏳ Generating questions from your knowledge base…';

  if(!S.apiKey){
    hideOverlay();
    statusEl.textContent='⚠️ No API key — using default questions. Add your API key in Settings.';
    toast('Add an API key in Settings to generate custom questions.','warning');
    loadQuiz(DEFAULT_QS);
    return;
  }

  try{
    const ctx=getKBContext(srcId);
    const srcLabel=srcId==='all'?`all ${S.kb.length} documents`:S.kb.find(d=>d.id===srcId)?.name||'selected document';

    const _seed=Math.floor(Math.random()*9000)+1000;
    const prompt=`You are a quiz generator for MECH 106 Basic Mechanics at UENR, Ghana.

Generate exactly 25 multiple-choice quiz questions from the following study material.

STUDY MATERIAL (${srcLabel}):
${ctx.slice(0,25000)}

Rules:
- Each question tests a specific concept, definition, formula, or principle
- Provide exactly 4 answer options per question
- "answer" field is a 0-based index (0=A, 1=B, 2=C, 3=D)
- Make distractors plausible
- Cover a wide variety of topics across the full material
- Do NOT repeat similar questions
- Variety seed: ${_seed} — each call must pick different questions from across the material
- Return ONLY a valid JSON array, no markdown, no explanation

Format: [{"question":"...","options":["A","B","C","D"],"answer":0},...]`;

    updateOverlay('AI is generating questions…',50);
    const result=await callGemini({prompt,jsonMode:true,maxTokens:4000});
    updateOverlay('Processing…',90);
    const clean=result.replace(/```json|```/gi,'').trim();
    const qs=JSON.parse(clean);
    if(Array.isArray(qs)&&qs.length){
      loadQuiz(qs);
      statusEl.textContent=`✅ ${qs.length} questions from: ${srcLabel}`;
      toast(`✅ ${qs.length} questions generated!`,'success');
    }else throw new Error('Empty result');
  }catch(err){
    console.error('Quiz gen:',err);
    statusEl.textContent=`⚠️ Using defaults (${err.message==='NO_API_KEY'?'no API key':err.message})`;
    if(err.message==='NO_API_KEY') toast('Add your API key in Settings.','warning');
    else toast('Using default questions.','warning');
    loadQuiz(DEFAULT_QS);
  }finally{hideOverlay();}
}

// ═══════════════════════════════════════════════════════


/* ==== summary.js ==== */
// SUMMARIES
// ═══════════════════════════════════════════════════════
async function genSummary(type){
  const srcId=S.selectedSrcId;
  const out=document.getElementById('summary-output');
  if(!S.apiKey){
    out.innerHTML=`<div class="summary-card"><p style="color:var(--orange)">⚠️ No API key configured. Add your API key in <strong>Settings</strong> to generate summaries.</p></div>`;
    return;
  }

  const typeMap={
    summary:{label:'Summary',instr:'Write a comprehensive, well-structured summary covering all major topics and concepts.'},
    guide:{label:'Study Guide',instr:'Create a detailed study guide with sections for each major topic, key formulas, and important points to remember.'},
    questions:{label:'Practice Questions',instr:'Generate 10 short-answer practice questions with model answers covering the key concepts.'},
    keyterms:{label:'Key Terms Glossary',instr:'Create an alphabetically organized glossary of all key terms and definitions.'}
  };
  const {label,instr}=typeMap[type];
  const ctx=getKBContext(srcId);
  const srcLabel=srcId==='all'?`all ${S.kb.length} documents`:S.kb.find(d=>d.id===srcId)?.name||'selected';

  out.innerHTML=`<div class="summary-card"><p style="color:var(--fg3);font-style:italic">⏳ Generating ${label} from ${srcLabel}…</p></div>`;

  try{
    const prompt=`You are an expert study assistant for MECH 106 Basic Mechanics at UENR, Ghana.

${instr}

STUDY MATERIAL (${srcLabel}):
${ctx.slice(0,14000)}

Be thorough, accurate, and educational. Format clearly with headings and sections.`;

    const result=await callGemini({prompt,maxTokens:3000});
    out.innerHTML=`<div class="summary-card">
      <div class="summary-title">${label} — ${srcLabel}</div>
      <div class="summary-content">${result}</div>
    </div>`;
    S.activityLog.unshift({type:label,score:100,correct:1,total:1,date:new Date().toLocaleString()});
    saveState();
  }catch(err){
    out.innerHTML=`<div class="summary-card"><p style="color:var(--red)">❌ Error: ${err.message}</p></div>`;
  }
}

// ═══════════════════════════════════════════════════════


/* ==== chat.js ==== */
// AI TUTOR
// ═══════════════════════════════════════════════════════
document.getElementById('chat-in').addEventListener('keydown',e=>{
  if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();}
});

function prefill(el){
  document.getElementById('chat-in').value=el.textContent;
  nav('ai-tutor');
  document.getElementById('chat-in').focus();
}

async function sendMsg(){
  const input=document.getElementById('chat-in');
  const text=input.value.trim();
  if(!text||S.generating) return;
  S.generating=true;input.value='';
  document.getElementById('send-btn').disabled=true;

  addMsg('You',text,true);
  const thinkEl=addMsg('AI Tutor','⏳ Thinking…',false,true);

  if(!S.apiKey){
    thinkEl.querySelector('.msg-bubble').textContent='⚠️ Please add your API key in Settings to use the AI Tutor.';
    thinkEl.querySelector('.msg-bubble').classList.remove('thinking');
    S.generating=false;document.getElementById('send-btn').disabled=false;return;
  }

  try{
    const ctx=getKBContext('all');
    const prompt=`You are StudyMind AI, an expert tutor for MECH 106 Basic Mechanics at UENR, Sunyani, Ghana.

KNOWLEDGE BASE (${S.kb.length} document${S.kb.length!==1?'s':''}):
${ctx.slice(0,12000)}

STUDENT QUESTION: ${text}

Answer clearly, accurately, and educationally. Show formulas and worked examples where helpful. Be encouraging and supportive.`;

    const answer=await callGemini({prompt,maxTokens:1500});
    thinkEl.querySelector('.msg-bubble').textContent=answer;
    thinkEl.querySelector('.msg-bubble').classList.remove('thinking');
    S.stats.chats++;renderStats();saveState();
  }catch(err){
    let msg='⚠️ Could not reach the AI service. Check your internet connection.';
    if(err.message==='NO_API_KEY') msg='⚠️ No API key. Add your API key in Settings.';
    else if(err.message==='BAD_API_KEY') msg='⚠️ Invalid API key. Check it in Settings.';
    else if(err.message.includes('429')) msg='⚠️ Rate limit reached. Wait a moment and try again.';
    thinkEl.querySelector('.msg-bubble').textContent=msg;
    thinkEl.querySelector('.msg-bubble').classList.remove('thinking');
  }finally{
    S.generating=false;document.getElementById('send-btn').disabled=false;
  }
}

function addMsg(sender,text,isUser,thinking=false){
  const msgs=document.getElementById('chat-msgs');
  const el=document.createElement('div');
  el.className=`msg ${isUser?'user':'ai'}`;
  el.innerHTML=`<div class="msg-meta">${sender}</div><div class="msg-bubble${thinking?' thinking':''}">${text}</div>`;
  msgs.appendChild(el);msgs.scrollTop=msgs.scrollHeight;
  return el;
}

// ═══════════════════════════════════════════════════════


/* ==== progress.js ==== */
// PROGRESS CHARTS
// ═══════════════════════════════════════════════════════
function updateProgressStats(){
  document.getElementById('p-total-q').textContent=S.stats.totalQ||0;
  document.getElementById('p-correct').textContent=S.stats.correct||0;
  const acc=S.stats.totalQ>0?Math.round((S.stats.correct/S.stats.totalQ)*100)+'%':'—';
  document.getElementById('p-accuracy').textContent=acc;
  document.getElementById('p-cards').textContent=S.stats.cardsMastered||0;
}

function renderActivityLog(){
  const el=document.getElementById('activity-list');
  if(!S.activityLog.length){el.innerHTML='<p style="color:var(--fg3);font-size:12px">No activity yet.</p>';return;}
  el.innerHTML=S.activityLog.slice(0,8).map(a=>{
    const cls=a.score>=70?'':'low';
    return `<div class="activity-item"><div><div class="activity-type">${a.type}</div><div class="activity-meta">${a.date}</div></div><div class="activity-score ${cls}">${a.score}% (${a.correct}/${a.total})</div></div>`;
  }).join('');
}

const CHART_OPTS={
  scales:{
    x:{grid:{color:'rgba(255,255,255,0.05)'},ticks:{color:'#5a6483',font:{size:10}}},
    y:{grid:{color:'rgba(255,255,255,0.05)'},ticks:{color:'#5a6483',font:{size:10}}}
  },
  plugins:{legend:{display:false}}
};

function initCharts(){
  updateProgressStats();renderActivityLog();
  if(S.chartsInited) return;
  S.chartsInited=true;

  const scoreLabels=S.quiz.history.length?S.quiz.history.map((_,i)=>`Quiz ${i+1}`):['—'];
  const scoreData=S.quiz.history.length?S.quiz.history:[0];
  if(S.scoreChart) S.scoreChart.destroy();
  S.scoreChart=new Chart(document.getElementById('scoreChart').getContext('2d'),{
    type:'line',
    data:{labels:scoreLabels,datasets:[{data:scoreData,borderColor:'#4f8ef7',backgroundColor:'rgba(79,142,247,.1)',borderWidth:2,pointRadius:4,fill:true,tension:0.4}]},
    options:{...CHART_OPTS,scales:{...CHART_OPTS.scales,y:{...CHART_OPTS.scales.y,min:0,max:100}}}
  });

  if(S.topicChart) S.topicChart.destroy();
  const acc=S.stats.totalQ>0?Math.round(S.stats.correct/S.stats.totalQ*100):0;
  S.topicChart=new Chart(document.getElementById('topicChart').getContext('2d'),{
    type:'bar',
    data:{
      labels:['Fund. Concepts','Forces','Equilibrium','Structures','Friction','Dynamics'],
      datasets:[{data:[acc,0,0,0,0,0],backgroundColor:['#4f8ef7','rgba(79,142,247,.2)','rgba(79,142,247,.2)','rgba(79,142,247,.2)','rgba(79,142,247,.2)','rgba(79,142,247,.2)'],borderRadius:5}]
    },
    options:{...CHART_OPTS,scales:{...CHART_OPTS.scales,y:{...CHART_OPTS.scales.y,min:0,max:100}}}
  });

  const hm=document.getElementById('heatmap');hm.innerHTML='';
  const today=new Date();
  const actMap={};
  S.activityLog.forEach(a=>{const d=new Date(a.date);actMap[d.toDateString()]=(actMap[d.toDateString()]||0)+1;});
  for(let w=19;w>=0;w--){
    const col=document.createElement('div');col.className='heatmap-col';
    for(let d=6;d>=0;d--){
      const date=new Date(today);date.setDate(today.getDate()-w*7-d);
      const cnt=actMap[date.toDateString()]||0;
      const cell=document.createElement('div');
      cell.className='heatmap-cell'+(cnt>=4?' i4':cnt>=3?' i3':cnt>=2?' i2':cnt>=1?' i1':'');
      cell.title=`${date.toDateString()}: ${cnt} sessions`;
      col.appendChild(cell);
    }
    hm.appendChild(col);
  }
}

// ═══════════════════════════════════════════════════════


/* ==== pwa.js ==== */
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

