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


// Multi-provider support
function getProviderConfig(key){
  key=normalizeApiKey(key);
  if(key.startsWith('gsk_')) return {provider:'groq',url:'https://api.groq.com/openai/v1/chat/completions',model:'llama-3.3-70b-versatile'};
  if(key.startsWith('sk-or-')) return {provider:'openrouter',url:'https://openrouter.ai/api/v1/chat/completions',model:'openai/gpt-4o-mini'};
  return null;
}
