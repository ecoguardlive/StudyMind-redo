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
