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
