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
