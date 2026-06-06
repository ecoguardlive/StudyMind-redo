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
