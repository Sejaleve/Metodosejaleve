// ═══════════════════════════════
// DADOS
// ═══════════════════════════════
var DD={
  1:{s:1,q:'O que estou carregando que não é meu?'},
  2:{s:1,q:'Que emoção aparece com mais frequência no meu corpo?'},
  3:{s:1,q:'Quando foi a última vez que me senti leve? O que havia de diferente?'},
  4:{s:1,q:'O que meu corpo tenta me dizer quando estou sobrecarregado(a)?'},
  5:{s:1,q:'Que padrão percebo em como reajo ao estresse?'},
  6:{s:1,q:'Se meu corpo pudesse falar, o que ele diria agora?'},
  7:{s:1,rev:1},
  8:{s:2,q:'Quando sinto resistência emocional, o que faço com ela?'},
  9:{s:2,q:'Que vulnerabilidade tenho dificuldade de admitir?'},
  10:{s:2,q:'Como me julgo nos momentos difíceis?'},
  11:{s:2,q:'Que emoção costumo evitar? O que acontece quando ela aparece?'},
  12:{s:2,q:'Que padrão de relacionamento se repete na minha vida?'},
  13:{s:2,q:'O que observo em mim que ainda não entendo completamente?'},
  14:{s:2,rev:2},
  15:{s:3,q:'Que padrão emocional se repete há mais tempo na minha vida?'},
  16:{s:3,q:'Como a autocrítica se manifesta em mim? Que voz ela usa?'},
  17:{s:3,q:'O que a minha zona de conforto me protege de sentir?'},
  18:{s:3,q:'Que emoção está por trás da minha maior dificuldade?'},
  19:{s:3,q:'Quando me comporto de um jeito que não gosto, o que me move?'},
  20:{s:3,q:'Qual gatilho emocional me tira mais rápido do eixo?'},
  21:{s:3,rev:3},
  22:{s:4,q:'De onde veio o padrão que mais me incomoda hoje?'},
  23:{s:4,q:'Que crença sobre mim está por trás dos meus maiores medos?'},
  24:{s:4,q:'Que mecanismo de defesa uso com mais frequência?'},
  25:{s:4,q:'Como a criança que fui influencia as reações que tenho hoje?'},
  26:{s:4,q:'O que aprendi sobre emoções na minha família de origem?'},
  27:{s:4,q:'Se eu pudesse falar com meu padrão com compaixão, o que diria?'},
  28:{s:4,rev:4},
  29:{s:4,q:'Sintetize seus aprendizados dos primeiros 30 dias.',sp:'cp1'},
  30:{s:4,q:'Feche o ciclo do Despertar e abra espaço para a Integração.',sp:'f1'},
  31:{s:5,f:2,q:'O que noto no meu corpo durante uma refeição?'},
  32:{s:5,f:2,q:'Que emoção aparece quando como com pressa?'},
  33:{s:5,f:2,q:'Que sensações percebo antes de sentir fome de verdade?'},
  34:{s:5,f:2,q:'Comer é um momento de cuidado ou de tarefa para mim?'},
  35:{s:5,f:2,q:'O que minha relação com a comida diz sobre minha relação comigo?'},
  36:{s:5,f:2,q:'Que emoções costumo anestesiar com comida?'},
  37:{s:5,f:2,rev:5},
  38:{s:6,f:2,q:'Quando meu corpo entra em alerta, o que sinto primeiro?'},
  39:{s:6,f:2,q:'Quais situações me colocam em alerta sem que eu perceba?'},
  40:{s:6,f:2,q:'Como costumo reagir quando estou em alerta — fujo, luto ou congelo?'},
  41:{s:6,f:2,q:'Que padrão de fuga uso com mais frequência?'},
  42:{s:6,f:2,q:'O que meu corpo precisa quando está em alerta?'},
  43:{s:6,f:2,q:'Quando consegui regular o alerta de forma saudável?'},
  44:{s:6,f:2,rev:6},
  45:{s:7,f:2,q:'O que mudou na minha relação com a comida este mês?'},
  46:{s:7,f:2,q:'Que gatilhos identifiquei com mais clareza esta semana?'},
  47:{s:7,f:2,q:'Como meu corpo responde diferente quando estou presente na refeição?'},
  48:{s:7,f:2,q:'Que padrão de fuga tenho observado se repetindo?'},
  49:{s:7,f:2,q:'O que o SOS Alerta revelou sobre meus padrões?'},
  50:{s:7,f:2,q:'Que hábito quero diminuir e o que ele tenta proteger em mim?'},
  51:{s:7,f:2,rev:7},
  52:{s:8,f:2,q:'Como estou me sentindo em relação ao hábito que escolhi diminuir?'},
  53:{s:8,f:2,q:'O que substituiu o hábito a diminuir nos momentos de alerta?'},
  54:{s:8,f:2,q:'Que percepção nova surgiu sobre meu sistema de alerta?'},
  55:{s:8,f:2,q:'Como meu corpo sinaliza que está saindo do alerta?'},
  56:{s:8,f:2,q:'O que a Fase 2 revelou que a Fase 1 ainda não mostrou?'},
  57:{s:8,f:2,q:'Que ferramenta desta fase quero continuar usando na Fase 3?'},
  58:{s:8,f:2,rev:8},
  59:{s:8,f:2,q:'Checkpoint Fase 2: o que integrei sobre meu sistema de alerta?',sp:'cp2'},
  60:{s:8,f:2,q:'Feche o ciclo da Integração e abra espaço para a Expansão.',sp:'f2'},
  61:{s:9,f:3,q:'Que sinal do novo caminho percebi hoje?'},
  62:{s:9,f:3,q:'O que meu corpo sente quando celebro uma pequena vitória?'},
  63:{s:9,f:3,q:'Que movimento fez bem ao meu corpo esta semana?'},
  64:{s:9,f:3,q:'Como o sol ou a natureza afetaram meu estado hoje?'},
  65:{s:9,f:3,q:'Que padrão antigo não apareceu hoje e eu não havia notado?'},
  66:{s:9,f:3,q:'O que está ficando natural que antes era esforço?'},
  67:{s:9,f:3,rev:9},
  68:{s:10,f:3,q:'Que movimento corporal me ajudou a regular emoção esta semana?'},
  69:{s:10,f:3,q:'Como estou celebrando os sinais do novo caminho no cotidiano?'},
  70:{s:10,f:3,q:'Que sensação no corpo indica que estou no novo padrão?'},
  71:{s:10,f:3,q:'O que quero ancorar desta fase para não perder?'},
  72:{s:10,f:3,q:'Como o movimento está mudando minha relação com as emoções?'},
  73:{s:10,f:3,q:'Que desejos estão surgindo com mais clareza?'},
  74:{s:10,f:3,rev:10},
  75:{s:11,f:3,q:'Que desejo genuíno está se revelando?'},
  76:{s:11,f:3,q:'Como meu corpo diz "sim" para o que é realmente meu?'},
  77:{s:11,f:3,q:'Que passo pequeno em direção ao que desejo posso dar hoje?'},
  78:{s:11,f:3,q:'O que estava esperando permissão para querer?'},
  79:{s:11,f:3,q:'Como a leveza que cultivei muda o que desejo?'},
  80:{s:11,f:3,q:'Que versão de mim está emergindo que ainda não reconheço?'},
  81:{s:11,f:3,rev:11},
  82:{s:12,f:3,q:'O que em mim mudou de forma que eu não imaginava antes?'},
  83:{s:12,f:3,q:'Que hábito criado nessa jornada quero levar para sempre?'},
  84:{s:12,f:3,q:'Como me sinto no meu corpo hoje comparado ao Dia 1?'},
  85:{s:12,f:3,q:'Que padrão antigo perdi e o que isso me diz?'},
  86:{s:12,f:3,q:'Que desejo desta fase já está em movimento?'},
  87:{s:12,f:3,q:'Quem sou eu agora, depois de 87 dias de jornada?'},
  88:{s:12,f:3,rev:12},
  89:{s:12,f:3,q:'Checkpoint Fase 3: o que você expandiu e consolidou?',sp:'cp3'},
  90:{s:12,f:3,q:'Celebre. 90 dias. O que leva como legado?',sp:'f3'}
};
var SI={
  1:{n:'Reconhecer',rd:7,f:1,ex:'Mapeamento Corporal das Emoções',exd:'Feche os olhos. Passe atenção pelo corpo da cabeça aos pés. Onde você sente tensão? Onde sente leveza? Mapeie — sem tentar mudar nada.',bx:'Meditação Scanner Corporal + E-book',bn:'Acesse o material enviado pela sua terapeuta.'},
  2:{n:'Observar',rd:14,f:1,ex:'Observador Compassivo',exd:'Escolha uma situação em que você reagiu e não gostou. O que estava sentindo antes? O que a emoção queria proteger?',bx:'Vídeo: Como Observar Emoções',bn:'Acesse o material enviado pela sua terapeuta.'},
  3:{n:'Identificar',rd:21,f:1,ex:'Mapa de Gatilhos Emocionais',exd:'Liste 3 situações que te tiraram do eixo. Para cada uma: gatilho, emoção, comportamento. Apenas identificar — sem julgamento.',bx:'Guia de Identificação de Gatilhos',bn:'Acesse o material enviado pela sua terapeuta.'},
  4:{n:'Compreender',rd:28,f:1,ex:'A Origem dos Padrões',exd:'Escolha um padrão que identificou. De onde ele veio? Escreva com curiosidade e compaixão — você estava se protegendo.',bx:'Áudio: O Peso da Mochila + Workbook',bn:'Acesse o material enviado pela sua terapeuta.'},
  5:{n:'Acolher',rd:37,f:2,ex:'Diário da Refeição',exd:'Escolha uma refeição desta semana. Descreva: o que comeu, onde estava, que emoção havia, que sensações notou. Sem julgamento.',bx:'Meditação Guiada: Refeição com Presença',bn:'Acesse o material enviado pela sua terapeuta.'},
  6:{n:'Praticar',rd:44,f:2,ex:'Mapa do Meu Alerta',exd:'Escreva: quais são seus 3 principais gatilhos de alerta? Para cada um: padrão de fuga e regulação que funcionou.',bx:'Áudio: Entendendo o Ciclo do Cortisol',bn:'Acesse o material enviado pela sua terapeuta.'},
  7:{n:'Consolidar',rd:51,f:2,ex:'Análise dos Meus Padrões',exd:'Olhe para o histórico. Qual gatilho apareceu mais vezes? Que nível de alerta foi mais frequente? O que isso revela?',bx:'Workbook: Reconhecendo Padrões de Fuga',bn:'Acesse o material enviado pela sua terapeuta.'},
  8:{n:'Integrar',rd:58,f:2,ex:'Carta de Integração',exd:'Escreva uma carta curta para si sobre o que a Fase 2 revelou. O que seu sistema de alerta tentava te proteger? O que leva para a Fase 3?',bx:'Meditação de Fechamento da Fase 2 + Workbook Fase 3',bn:'Acesse o material enviado pela sua terapeuta.'},
  9:{n:'Celebrar',rd:67,f:3,ex:'Diário dos Sinais',exd:'Liste 5 sinais do novo caminho desta semana — podem ser pequenos. Para cada um diga: "Isso já faz parte do que estou construindo."',bx:'Meditação: Celebrando os Novos Caminhos',bn:'Acesse o material enviado pela sua terapeuta.'},
  10:{n:'Ancorar',rd:74,f:3,ex:'Mapa do Movimento',exd:'Que forma de movimento você descobriu esta semana? Como seu corpo se sentiu antes e depois? Que emoção foi regulada?',bx:'Áudio: Corpo como Veículo de Transformação',bn:'Acesse o material enviado pela sua terapeuta.'},
  11:{n:'Expandir',rd:81,f:3,ex:'Carta dos Desejos',exd:'Escreva sem filtro: o que você deseja para os próximos 90 dias? Sem "mas", sem "e se". Leia em voz alta — como o corpo responde?',bx:'Workbook: Da Leveza ao Desejo',bn:'Acesse o material enviado pela sua terapeuta.'},
  12:{n:'Celebrar',rd:88,f:3,ex:'Carta de Celebração',exd:'Escreva para a pessoa que você era no Dia 1. O que ela precisava ouvir? O que você sabe agora que ela ainda não sabia?',bx:'Meditação de Fechamento dos 90 Dias + Workbook Legado',bn:'Acesse o material enviado pela sua terapeuta.'}
};
var SN={1:'Reconhecer',2:'Observar',3:'Identificar',4:'Compreender',5:'Acolher',6:'Praticar',7:'Consolidar',8:'Integrar',9:'Celebrar',10:'Ancorar',11:'Expandir',12:'Celebrar'};
var SPRINTS=[
  {n:1,d:'1–15',l:'Despertar · Base fisiológica',h:['💧','🌙','🫁'],f:1},
  {n:2,d:'16–30',l:'Despertar · Presença e Percepção',h:['💧','🌙','🫁','🎯','✨','🧠'],f:1},
  {n:3,d:'31–45',l:'Integração · Implementação',h:['🍽','🚨'],f:2},
  {n:4,d:'46–60',l:'Integração · Métricas + hábito a diminuir',h:['🍽','🚨','⬇️'],f:2},
  {n:5,d:'61–75',l:'Expansão · Celebração e Movimento',h:['✨','🏃'],f:3},
  {n:6,d:'76–90',l:'Expansão · Desejo e Legado',h:['✨','🏃','🌟'],f:3}
];
var H_S1=[{i:'💧',n:'Hidratação',t:'8 copos de 250ml · meta do dia'},{i:'🌙',n:'Sono',t:'Respeitar os horários · qualidade importa'},{i:'🫁',n:'Respiração consciente',t:'1–3 sessões intencionais'}];
var H_S2=[{i:'💧',n:'Hidratação',t:'8 copos de 250ml'},{i:'🌙',n:'Sono',t:'Respeitar os horários'},{i:'🫁',n:'Respiração consciente',t:'1–3 sessões'},{i:'🎯',n:'Atenção plena',t:'1 atividade com presença total'},{i:'✨',n:'Prazer e alegria',t:'1 microprazer · saborear no presente'},{i:'🧠',n:'Percepção dos pensamentos',t:'À noite · observar sem julgar'}];
var H_F2S3=[{i:'🍽',n:'Refeição com atenção plena',t:'Meditação guiada · app Ferramentas'},{i:'🚨',n:'SOS Alerta',t:'Em alerta: identificar · nomear · agir'}];
var H_F2S4=[{i:'🍽',n:'Refeição com atenção plena',t:'Presença à mesa · registre nas métricas'},{i:'🚨',n:'SOS Alerta',t:'Registre gatilho e técnica'},{i:'⬇️',n:'Hábito a diminuir',t:'Observe e registre a frequência',c:1}];
var H_F3S5=[{i:'✨',n:'Celebrando os sinais',t:'Reconheça e diga: isso já faz parte do que construo'},{i:'🏃',n:'Movimento corporal',t:'30 min · o que o corpo pede · sol e natureza'}];
var H_F3S6=[{i:'✨',n:'Celebrando os sinais',t:'Registre gratidão + sinal nas métricas'},{i:'🏃',n:'Movimento corporal',t:'Tipo · duração · antes/depois · sol'},{i:'🌟',n:'Desejo do dia',t:'1 gesto alinhado ao que desejo',d:1}];

// ═══════════════════════════════
// ESTADO
// ═══════════════════════════════
var curDay=1, curRev=1;

// ═══════════════════════════════
// STORAGE
// ═══════════════════════════════
function lsG(k){try{return JSON.parse(localStorage.getItem(k)||'null');}catch(e){return null;}}
function lsS(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
function getDS(d){return lsG('sl_d'+d)||{};}
function setDK(d,k,v){var s=getDS(d);s[k]=v;lsS('sl_d'+d,s);}
function getM(d){return lsG('sl_m'+d)||{};}
function setM(d,k,v){var m=getM(d);m[k]=v;lsS('sl_m'+d,m);}

// ═══════════════════════════════
// HELPERS
// ═══════════════════════════════
function getSem(d){return d<=7?1:d<=14?2:d<=21?3:d<=30?4:d<=37?5:d<=44?6:d<=51?7:d<=58?8:d<=65?9:d<=72?10:d<=79?11:12;}
function getSprint(d){return d<=15?1:d<=30?2:d<=45?3:d<=60?4:d<=75?5:6;}
function getFase(d){return d<=30?1:d<=60?2:3;}
function getHabs(d){
  var f=getFase(d),sp=getSprint(d);
  if(f===1)return getSem(d)>=2?H_S2:H_S1;
  if(f===2)return sp>=4?H_F2S4:H_F2S3;
  return sp>=6?H_F3S6:H_F3S5;
}
function calcH(a,b){try{var A=a.split(':').map(Number),B=b.split(':').map(Number),t=(B[0]*60+B[1])-(A[0]*60+A[1]);if(t<0)t+=1440;return(t/60).toFixed(1);}catch(e){return '';}}
function toast(msg){var t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},2600);}
var REVDAYS=[7,14,21,28,37,44,51,58,67,74,81,88];

// ═══════════════════════════════
// RENDER HOME
// ═══════════════════════════════
function renderHome(){
  var sem=getSem(curDay),fase=getFase(curDay),sp=getSprint(curDay);
  var di=DD[curDay]||{s:sem,q:'Reflexão do dia '+curDay+'.'};
  var fNames={1:'Despertar',2:'Integração',3:'Expansão'};
  document.getElementById('lbl-dia').textContent='Dia '+curDay+' · Semana '+sem+' · '+SN[sem];
  document.getElementById('home-q').textContent=di.rev?'Hoje é dia de revisão — acesse a aba Revisão.':di.q;
  var badge=document.getElementById('home-badge');
  badge.textContent='Fase '+fase+' · '+fNames[fase];
  badge.className='phase-badge f'+fase;
  var s=getDS(curDay);
  document.getElementById('f-intencao').value=s.intencao||'';
  document.getElementById('f-emocao').value=s.emocao||'';
  document.getElementById('f-reflexao').value=s.reflexao||'';
  document.getElementById('f-insights').value=s.insights||'';
  document.getElementById('r-energia').value=s.energia||5;
  document.getElementById('v-energia').textContent=s.energia||5;
  document.getElementById('r-presenca').value=s.presenca||5;
  document.getElementById('v-presenca').textContent=s.presenca||5;
  ['manha','meio','noite'].forEach(function(a){document.getElementById('anc-'+a).classList.toggle('done',!!s['anc_'+a]);});
  // Métricas — sprints 2, 4, 6 (com métrica) e não revisão
  var showM=(sp===2||sp===4||sp===6)&&!REVDAYS.includes(curDay);

  // Hábitos — só aparecem quando NÃO há métricas ativas
  var habSec=document.getElementById('hab-section');
  if(showM||REVDAYS.includes(curDay)){
    habSec.style.display='none';
  } else {
    habSec.style.display='block';
    var habs=getHabs(curDay),hl=document.getElementById('habits-list');
    hl.innerHTML='';
    habs.forEach(function(h,i){
      var row=document.createElement('div');
      row.className='habit-row'+(s['h'+i]?' checked':'');
      row.setAttribute('data-hi',i);
      var nm=h.n;
      if(h.c){var cn=lsG('sl_ch')||'';if(cn)nm+=' — '+cn;}
      if(h.d){var dn=lsG('sl_dh')||'';if(dn)nm+=' — '+dn;}
      row.innerHTML='<div class="habit-check">'+(s['h'+i]?'✓':'')+'</div><span style="font-size:15px">'+h.i+'</span><div style="flex:1"><div class="habit-name">'+nm+'</div><div class="habit-tip">'+h.t+'</div></div>';
      hl.appendChild(row);
    });
  }

  // Métricas
  document.getElementById('metrics-section').style.display=showM?'block':'none';
  if(showM){document.getElementById('met-badge').textContent='Sprint '+sp+' · Sem '+sem;renderMetrics();}
  // Pensamentos
  var showP=fase===1&&sem>=2&&!REVDAYS.includes(curDay);
  document.getElementById('pens-section').style.display=showP?'block':'none';
  if(showP){
    var m=getM(curDay);
    document.getElementById('p-pen').value=m.pp||'';
    document.getElementById('p-emo').value=m.pe||'';
    document.getElementById('p-persp').value=m.ppersp||'';
    document.getElementById('pf-sim').classList.toggle('sel',m.pf===1);
    document.getElementById('pf-nao').classList.toggle('sel',m.pf===0);
  }
  // Celebração fase 3
  // Celebração: só sprint 5 (sem métrica). Sprint 6 tem métrica de sinal integrada
  var showC=fase===3&&sp===5&&!REVDAYS.includes(curDay);
  document.getElementById('celeb-section').style.display=showC?'block':'none';
  if(showC){
    var m2=getM(curDay);
    var mantras=['Isso já faz parte do que estou construindo.','Eu vejo o que chegou e me abro para mais.'];
    document.getElementById('mantra-txt').textContent=mantras[curDay%2];
    document.getElementById('c-sinal').value=m2.csinal||'';
    document.getElementById('c-senti').value=m2.csenti||'';
  }
  // Fase 2 tools
  // Fase2 tools: só sprints sem métrica (sprint 3), não sprint 4 que já tem métricas
  document.getElementById('fase2-tools').style.display=(fase===2&&sp===3&&!REVDAYS.includes(curDay))?'block':'none';
  // Custom habit card sprint 4
  var showCH=fase===2&&sp>=4;
  document.getElementById('custom-hab-card').style.display=showCH?'block':'none';
  if(showCH){
    document.getElementById('ch-input').value=lsG('sl_ch')||'';
    var cat=lsG('sl_chcat')||'';
    document.querySelectorAll('.cat-btn').forEach(function(b){b.classList.toggle('sel',b.getAttribute('data-cat')===cat);});
  }
}

// ═══════════════════════════════
// MÉTRICAS
// ═══════════════════════════════
function scaleHTML(vals,key,cur,lblMin,lblMax){
  var h='';
  if(lblMin||lblMax){
    h='<div class="scale-labeled"><div class="scale-row">';
    vals.forEach(function(v){h+='<button class="scale-btn'+(cur===v?' sel':'')+'" data-sk="'+key+'" data-sv="'+v+'">'+v+'</button>';});
    h+='</div><div class="scale-extremes"><span>'+( lblMin||'')+'</span><span>'+(lblMax||'')+'</span></div></div>';
  } else {
    h='<div class="scale-row">';
    vals.forEach(function(v){h+='<button class="scale-btn'+(cur===v?' sel':'')+'" data-sk="'+key+'" data-sv="'+v+'">'+v+'</button>';});
    h+='</div>';
  }
  return h;
}
function renderMetrics(){
  var m=getM(curDay),sp=getSprint(curDay),sem=getSem(curDay),fase=getFase(curDay),h='';
  if(fase===1){
    // Água
    var ac=m.ac||0,ch='<div class="cups-row">';
    for(var i=1;i<=10;i++)ch+='<button class="cup-btn'+(ac>=i?' sel':'')+'" data-cup="'+i+'">'+i+'</button>';
    ch+='</div>';
    h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">💧</span><span class="metric-name">Hidratação</span>'+(ac?'<span class="met-badge">'+ac+'/8</span>':'')+'</div><div class="field-label" style="margin-bottom:5px">Copos de água (250ml)</div>'+ch+(ac?'<div class="auto-note" style="margin-top:6px">'+(ac>=8?'✓ Meta atingida — '+ac+' copos hoje!':''+ac+' de 8 copos · faltam '+(8-ac))+'</div>':'')+'</div>';
    // Sono
    var sd=m.sd||'',sa=m.sa||'',sq=m.sq||0,hs=sd&&sa?calcH(sd,sa):'';
    var qe=['','😞','😕','😐','😊','😌'],qh='<div class="scale-labeled"><div class="scale-row">';
    for(var j=1;j<=5;j++)qh+='<button class="scale-btn'+(sq===j?' sel':'')+' sq-btn" data-sk="sq" data-sv="'+j+'" style="font-size:14px;width:32px;height:32px">'+qe[j]+'</button>';
    qh+='</div><div class="scale-extremes"><span>péssimo</span><span>ótimo</span></div></div>';
    h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">🌙</span><span class="metric-name">Sono</span>'+(hs?'<span class="met-badge">'+hs+'h</span>':'')+'</div><div style="display:flex;gap:10px;margin-bottom:10px"><div style="flex:1"><div class="field-label" style="margin-bottom:4px">Dormiu</div><input type="time" class="tfield" id="m-sd" value="'+sd+'"></div><div style="flex:1"><div class="field-label" style="margin-bottom:4px">Acordou</div><input type="time" class="tfield" id="m-sa" value="'+sa+'"></div></div><div class="field-label" style="margin-bottom:5px">Qualidade</div>'+qh+'</div>';
    // Respiração
    var rs=m.rs||'',re=m.re,rc=m.rc||'';
    var sops=['Nenhuma','1×','2×','3×+'],sh='<div class="sessions-row">';
    sops.forEach(function(o){sh+='<button class="sess-btn'+(rs===o?' sel':'')+'" data-rso="'+o+'">'+o+'</button>';});
    sh+='</div>';
    h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">🫁</span><span class="metric-name">Respiração</span></div><div class="field-label" style="margin-bottom:5px">Sessões intencionais</div>'+sh+'<div class="field-label" style="margin-bottom:5px;margin-top:10px">Uso espontâneo?</div><div class="yesno-row" style="margin-bottom:'+(re===true?'10':'0')+'px"><button class="yn-btn yn-yes'+(re===true?' sel':'')+'" data-re="1">✓ Sim</button><button class="yn-btn yn-no'+(re===false?' sel':'')+'" data-re="0">Não hoje</button></div>'+(re===true?'<div style="margin-top:8px"><div class="field-label" style="margin-bottom:4px">Em qual momento?</div><input class="line-field" id="m-rc" value="'+rc+'" placeholder="Ex: antes de uma conversa difícil..."></div>':'')+'</div>';
    if(sem>=2){
      // Atenção
      var ap=m.ap||0,am2=m.am||'';
      var apd=['','Ausente','Breve','Moderada','Boa','Plena'];
      h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">🎯</span><span class="metric-name">Atenção plena</span>'+(ap?'<span class="met-badge">'+apd[ap]+'</span>':'')+'</div><div class="field-label" style="margin-bottom:5px">Presença percebida</div>'+scaleHTML([1,2,3,4,5],'ap',ap,'ausente','plena')+'<div style="margin-top:10px"><div class="field-label" style="margin-bottom:4px">Qual atividade?</div><input class="line-field" id="m-am" value="'+am2+'" placeholder="Ex: caminhar, comer, tomar banho..."></div></div>';
      // Prazer
      var pp2=m.pp2||'',pi=m.pi||0;
      h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">✨</span><span class="metric-name">Prazer e alegria</span></div><div class="field-label" style="margin-bottom:4px">Qual foi o prazer de hoje?</div><input class="line-field" id="m-pp2" value="'+pp2+'" placeholder="Ex: café, música, conversa..." style="margin-bottom:10px"><div class="field-label" style="margin-bottom:5px">Intensidade</div>'+scaleHTML([1,2,3,4,5],'pi',pi,'fraco','intenso')+'</div>';
    }
  }
  if(fase===2){
    var rp=m.rp||0,rv=m.rv||'',rs2=m.rs2;
    var rpd=['','Piloto auto.','Pouco presente','Oscilei','Bastante','Plena'],rph=scaleHTML([1,2,3,4,5],'rp',rp,'automático','plena');
    var vops=['Devagar','Normal','Rápido'],vh='<div class="sessions-row">';
    vops.forEach(function(v){vh+='<button class="sess-btn'+(rv===v?' sel':'')+'" data-rv="'+v+'">'+v+'</button>';});
    vh+='</div>';
    h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">🍽</span><span class="metric-name">Refeição com atenção plena</span>'+(rp?'<span class="met-badge">Presença '+rp+'/5</span>':'')+'</div><div class="field-label" style="margin-bottom:5px">Presença percebida</div>'+rph+(rp?'<div style="font-size:11px;color:var(--warm-light);margin:4px 0 10px">'+rpd[rp]+'</div>':'<div style="margin-bottom:10px"></div>')+'<div class="field-label" style="margin-bottom:5px">Velocidade</div>'+vh+'<div class="field-label" style="margin-bottom:5px;margin-top:10px">Notou sinais de saciedade?</div><div class="yesno-row"><button class="yn-btn yn-yes'+(rs2===true?' sel':'')+'" data-rs2="1">✓ Sim</button><button class="yn-btn yn-no'+(rs2===false?' sel':'')+'" data-rs2="0">Não notei</button></div></div>';
    var su=m.su,sn=m.sn||0,sg=m.sg||'',st=m.st||'';
    var snd=['','Leve','Moderado','Alto','Muito alto','Crítico'],snh=scaleHTML([1,2,3,4,5],'sn',sn,'leve','crítico');
    h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">🚨</span><span class="metric-name">SOS Alerta</span>'+(sn?'<span class="met-badge">'+snd[sn]+'</span>':'')+'</div><div class="field-label" style="margin-bottom:5px">Usou o SOS hoje?</div><div class="yesno-row" style="margin-bottom:10px"><button class="yn-btn yn-yes'+(su===true?' sel':'')+'" data-su="1">✓ Sim</button><button class="yn-btn yn-no'+(su===false?' sel':'')+'" data-su="0">Não precisei</button></div>'+(su===true?'<div class="field-label" style="margin-bottom:5px">Nível de alerta</div>'+snh+(sn?'<div style="font-size:11px;color:var(--warm-light);margin:4px 0 10px">'+snd[sn]+'</div>':'<div style="margin-bottom:10px"></div>')+'<div class="field-label" style="margin-bottom:4px">Gatilho</div><input class="line-field" id="m-sg" value="'+sg+'" placeholder="O que causou o alerta?" style="margin-bottom:10px"><div class="field-label" style="margin-bottom:4px">Técnica usada</div><input class="line-field" id="m-st" value="'+st+'" placeholder="Ex: respiração, movimento...">':'')+'</div>';
    var chn=lsG('sl_ch')||'';
    if(chn){
      var hn=m.hn||0,ho=m.ho||'';
      var hnd=['0x','1x','2x','3x','4x','5x+'],hnh='<div class="cups-row">';
      for(var k3=0;k3<=5;k3++)hnh+='<button class="cup-btn'+(hn===k3?' sel':'')+'" data-hdn="'+k3+'">'+hnd[k3]+'</button>';
      hnh+='</div>';
      h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">⬇️</span><span class="metric-name">Hábito a diminuir — '+chn+'</span></div><div class="field-label" style="margin-bottom:5px">Quantas vezes hoje?</div>'+hnh+'<div style="margin-top:10px"><div class="field-label" style="margin-bottom:4px">Observação</div><input class="line-field" id="m-ho" value="'+ho+'" placeholder="Que emoção ou gatilho estava por trás?"></div></div>';
    }
  }
  if(fase===3){
    var cg=m.cg||0,cs2=m.cs2||'';
    h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">✨</span><span class="metric-name">Celebrando os Sinais</span></div><div class="field-label" style="margin-bottom:4px">Sinal percebido hoje</div><input class="line-field" id="m-cs2" value="'+cs2+'" placeholder="O que o novo caminho trouxe hoje?" style="margin-bottom:10px"><div class="field-label" style="margin-bottom:5px">Intensidade da gratidão (1–5)</div>'+scaleHTML([1,2,3,4,5],'cg',cg,'leve','profunda')+'</div>';
    var mt=m.mt||[],md=m.md||'',ma=m.ma||0,mdp=m.mdp||0,msol=m.msol;
    var tops=['Caminhada','Dança','Yoga','Alongamento','Corrida','Outro'],th='<div class="mov-grid">';
    tops.forEach(function(t2){th+='<button class="mov-btn'+(mt.indexOf(t2)>-1?' sel':'')+'" data-mt="'+t2+'">'+t2+'</button>';});
    th+='</div>';
    h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">🏃</span><span class="metric-name">Movimento corporal</span></div><div class="field-label" style="margin-bottom:6px">Tipo de movimento</div>'+th+'<div class="field-label" style="margin-bottom:4px">Duração</div><input class="line-field" id="m-md" value="'+md+'" placeholder="Ex: 30 min" style="margin-bottom:10px"><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px"><div><div class="field-label" style="margin-bottom:5px">Antes (estado)</div>'+scaleHTML([1,2,3,4,5],'ma',ma,'pesado','leve')+'</div><div><div class="field-label" style="margin-bottom:5px">Depois (estado)</div>'+scaleHTML([1,2,3,4,5],'mdp',mdp,'pesado','leve')+'</div></div><div class="field-label" style="margin-bottom:5px">Sol e natureza hoje?</div><div class="yesno-row"><button class="yn-btn yn-yes'+(msol===true?' sel':'')+'" data-msol="1">✓ Sim</button><button class="yn-btn yn-no'+(msol===false?' sel':'')+'" data-msol="0">Não hoje</button></div></div>';
    var dp=m.dp||'';
    h+='<div class="metric-row"><div class="metric-header"><span style="font-size:15px">🌟</span><span class="metric-name">Desejo do dia</span></div><div class="field-label" style="margin-bottom:4px">Que gesto hoje se alinha com o que desejo?</div><input class="line-field" id="m-dp" value="'+dp+'" placeholder="Pequeno e concreto..."></div>';
  }
  document.getElementById('metrics-content').innerHTML=h;
  // Wire text inputs
  function wir(id,mkey){var el=document.getElementById(id);if(el)el.addEventListener('blur',function(){setM(curDay,mkey,this.value);});}
  if(fase===1){
    var sdEl=document.getElementById('m-sd'),saEl=document.getElementById('m-sa');
    if(sdEl)sdEl.addEventListener('change',function(){setM(curDay,'sd',this.value);renderMetrics();});
    if(saEl)saEl.addEventListener('change',function(){setM(curDay,'sa',this.value);renderMetrics();});
    wir('m-rc','rc');wir('m-am','am');wir('m-pp2','pp2');
  }
  if(fase===2){wir('m-sg','sg');wir('m-st','st');wir('m-ho','ho');}
  if(fase===3){wir('m-cs2','cs2');wir('m-md','md');wir('m-dp','dp');}
}

// ═══════════════════════════════
// REVISÃO
// ═══════════════════════════════
function renderReview(){
  var w=curRev,el=document.getElementById('rev-content'),lbl=document.getElementById('rev-label');
  if(w==='cp1'||w==='cp2'||w==='cp3'){
    var fn=parseInt(w.replace('cp',''));
    lbl.textContent='Checkpoint · Fase '+fn;
    el.innerHTML=buildCP(fn);return;
  }
  var wn=parseInt(w),info=SI[wn];
  if(!info){el.innerHTML='<div style="padding:2rem 1.25rem;color:var(--warm-light);font-size:14px">Semana não disponível.</div>';return;}
  lbl.textContent='Semana '+wn+' · '+info.n+' · Dia '+info.rd;
  var pergs={
    1:['Que padrões emocionais observei esta semana?','Como meu corpo respondeu às situações difíceis?','O que aprendi sobre mim que não sabia?'],
    2:['Que resistências observei em mim?','Onde apareceu vulnerabilidade? Como me relacionei com ela?','O que ficou mais claro sobre meus padrões?'],
    3:['Que gatilhos identifiquei?','Como a autocrítica se manifestou?','O que estou aprendendo sobre minha zona de conforto?'],
    4:['De onde vêm os padrões que mais me incomodam?','Que crenças estou questionando?','O que a compaixão revela sobre minha história?'],
    5:['Como foi minha relação com a comida?','Que emoções apareceram nas refeições?','O que a presença na comida revelou?'],
    6:['Que gatilhos de alerta identifiquei?','Que padrão de fuga usei mais?','Quando consegui regular o alerta?'],
    7:['O que os dados das métricas revelam?','Que padrão está mais claro?','Como o hábito a diminuir se relaciona com o alerta?'],
    8:['O que a Fase 2 integrou em mim?','Como mudou minha relação com o corpo?','O que levo para a Fase 3?'],
    9:['Que sinais do novo caminho percebi?','Como o movimento afetou meu estado?','O que está ficando natural?'],
    10:['Que forma de movimento mais me regula?','Como estou ancorando os novos padrões?','Que desejos estão emergindo?'],
    11:['Que desejo genuíno está mais claro?','O que meu corpo diz sobre meus desejos?','Que passo concreto dei hoje?'],
    12:['O que mudou de forma irreversível?','Que hábito desta jornada quero manter?','Quem sou eu agora?']
  };
  var qs=pergs[wn]||['O que observei?','O que precisa de atenção?','O que quero ajustar?'],qh='';
  qs.forEach(function(q){qh+='<div class="rev-card"><div class="rev-label">Reflexão</div><div class="question" style="font-size:1.05rem">'+q+'</div><textarea class="field" rows="3" placeholder="Escreva livremente..."></textarea></div>';});
  var msum=wn<=4?bMS1((wn-1)*7+1,wn*7):wn<=8?bMS2((wn-1)*7+1,wn*7):bMS3((wn-1)*7+1,wn*7);
  var fc=info.f===3?'var(--gold)':info.f===2?'var(--sand)':'var(--sage)';
  el.innerHTML=qh+msum+
    '<div class="exercise-card"><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--sage);margin-bottom:6px">Mini-exercício · Sem '+wn+'</div><div style="font-size:13px;font-weight:500;color:var(--warm-dark);margin-bottom:6px">'+info.ex+'</div><div style="font-size:13px;color:var(--warm-mid);line-height:1.7">'+info.exd+'</div></div>'+
    '<div class="bonus-card"><div style="font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--sand);margin-bottom:6px">Bônus</div><div style="font-size:13px;color:var(--warm-dark);margin-bottom:4px">'+info.bx+'</div><div style="font-size:12px;color:var(--warm-light);font-style:italic">'+info.bn+'</div></div>';
}
function bMS1(s0,s1){
  var ta=0,th=0,hd=0;
  for(var d=s0;d<=Math.min(s1,curDay);d++){var m=getM(d);if(m.ac)ta+=m.ac;if(m.sd&&m.sa){var h=parseFloat(calcH(m.sd,m.sa));if(h>0){th+=h;hd++;}}}
  var ds=Math.min(s1,curDay)-s0+1;
  return '<div class="msum-grid"><div class="msum-card"><div style="font-size:12px;margin-bottom:3px">💧</div><div style="font-size:11px;font-weight:500;margin-bottom:3px">Água · média</div><div class="msum-val">'+(ds>0?(ta/ds).toFixed(1):0)+'/8</div><div class="msum-sub">copos/dia</div></div><div class="msum-card"><div style="font-size:12px;margin-bottom:3px">🌙</div><div style="font-size:11px;font-weight:500;margin-bottom:3px">Sono · média</div><div class="msum-val">'+(hd>0?(th/hd).toFixed(1):0)+'h</div><div class="msum-sub">por noite</div></div></div>';
}
function bMS2(s0,s1){
  var tr=0,rd=0,sn=0;
  for(var d=s0;d<=Math.min(s1,curDay);d++){var m=getM(d);if(m.rp){tr+=m.rp;rd++;}if(m.su===true)sn++;}
  return '<div class="msum-grid"><div class="msum-card"><div style="font-size:12px;margin-bottom:3px">🍽</div><div style="font-size:11px;font-weight:500;margin-bottom:3px">Refeição</div><div class="msum-val">'+(rd?(tr/rd).toFixed(1)+'/5':'—')+'</div><div class="msum-sub">presença média</div></div><div class="msum-card"><div style="font-size:12px;margin-bottom:3px">🚨</div><div style="font-size:11px;font-weight:500;margin-bottom:3px">SOS usado</div><div class="msum-val">'+sn+'×</div><div class="msum-sub">na semana</div></div></div>';
}
function bMS3(s0,s1){
  var tg=0,gd=0,mv=0,sl=0;
  for(var d=s0;d<=Math.min(s1,curDay);d++){var m=getM(d);if(m.cg){tg+=m.cg;gd++;}if(m.mt&&m.mt.length>0)mv++;if(m.msol===true)sl++;}
  return '<div class="msum-grid"><div class="msum-card"><div style="font-size:12px;margin-bottom:3px">✨</div><div style="font-size:11px;font-weight:500;margin-bottom:3px">Gratidão</div><div class="msum-val">'+(gd?(tg/gd).toFixed(1)+'/5':'—')+'</div><div class="msum-sub">intensidade</div></div><div class="msum-card"><div style="font-size:12px;margin-bottom:3px">🏃</div><div style="font-size:11px;font-weight:500;margin-bottom:3px">Movimento</div><div class="msum-val">'+mv+'d</div><div class="msum-sub">sol: '+sl+'×</div></div></div>';
}
function buildCP(f){
  var qs={1:['O que integrei sobre meus padrões nos primeiros 30 dias?','Que mudança mais me surpreendeu?','O que ainda precisa de atenção?'],2:['O que aprendi sobre meu sistema de alerta?','Como mudou minha relação com o corpo?','O que levo para a Fase 3?'],3:['Quem sou eu depois de 90 dias?','Que legado quero criar a partir daqui?','O que celebro com o coração?']};
  var h='';qs[f].forEach(function(q){h+='<div class="rev-card"><div class="rev-label">Checkpoint Fase '+f+'</div><div class="question" style="font-size:1.05rem">'+q+'</div><textarea class="field" rows="4" placeholder="Escrita livre..."></textarea></div>';});
  var ms=f===3?bMS3(61,90):f===2?bMS2(31,60):bMS1(1,30);
  h+=ms;
  if(f===3)h+='<div class="celeb-card"><div class="celeb-title">Mantras de fechamento</div><div class="mantra-block"><div class="mantra-text">Isso já faz parte do que estou construindo.</div></div><div class="mantra-block"><div class="mantra-text">Eu vejo o que chegou e me abro para mais.</div></div></div>';
  return h;
}

// ═══════════════════════════════
// TRACKER
// ═══════════════════════════════
function renderTracker(){
  var g=document.getElementById('days-grid');g.innerHTML='';
  for(var d=1;d<=90;d++){
    var s=getDS(d),done=false;
    Object.values(s).forEach(function(v){if(v===true||typeof v==='string'&&v.length>0)done=true;});
    var dot=document.createElement('div');
    dot.className='day-dot'+(d===curDay?' today':done?' done':d>curDay?' future':'');
    dot.textContent=d;dot.setAttribute('data-day',d);
    g.appendChild(dot);
  }
  var sm=document.getElementById('sprints-map');sm.innerHTML='';
  var fc={1:'var(--sage-light)',2:'var(--sand-light)',3:'var(--gold-light)'};
  SPRINTS.forEach(function(s){
    var active=getSprint(curDay)===s.n;
    var tags=s.h.map(function(e){return '<span class="sprint-tag">'+e+'</span>';}).join('');
    var div=document.createElement('div');
    div.className='sprint-card'+(active?' active':'');
    div.style.borderLeft=active?'3px solid var(--sage)':'3px solid '+fc[s.f];
    div.innerHTML='<div class="sprint-num">'+s.n+'</div><div style="flex:1"><div class="sprint-days">Dias '+s.d+' · Fase '+s.f+'</div><div class="sprint-theme">'+s.l+'</div><div class="sprint-tags">'+tags+'</div></div>';
    sm.appendChild(div);
  });
}

// ═══════════════════════════════
// SAVE
// ═══════════════════════════════
function saveDay(){
  var s=getDS(curDay);
  s.intencao=document.getElementById('f-intencao').value;
  s.emocao=document.getElementById('f-emocao').value;
  s.reflexao=document.getElementById('f-reflexao').value;
  s.insights=document.getElementById('f-insights').value;
  s.energia=parseInt(document.getElementById('r-energia').value);
  s.presenca=parseInt(document.getElementById('r-presenca').value);
  lsS('sl_d'+curDay,s);
  var fase=getFase(curDay),sem=getSem(curDay);
  if(fase===1&&sem>=2){setM(curDay,'pp',document.getElementById('p-pen').value);setM(curDay,'pe',document.getElementById('p-emo').value);setM(curDay,'ppersp',document.getElementById('p-persp').value);}
  if(fase===3){setM(curDay,'csinal',document.getElementById('c-sinal').value);setM(curDay,'csenti',document.getElementById('c-senti').value);}
  var btn=document.getElementById('btn-save');btn.textContent='✓ Salvo';setTimeout(function(){btn.textContent='Salvar dia';},1500);
  toast('Dia '+curDay+' salvo ✓');
}

// ═══════════════════════════════
// EXPORT/IMPORT
// ═══════════════════════════════
function exportData(){
  var data={v:3,curDay:curDay,exp:new Date().toISOString(),d:{},m:{},x:{}};
  for(var i=1;i<=90;i++){var s=lsG('sl_d'+i);if(s)data.d[i]=s;var m=lsG('sl_m'+i);if(m)data.m[i]=m;}
  data.x.ch=lsG('sl_ch');data.x.chcat=lsG('sl_chcat');data.x.dh=lsG('sl_dh');
  var blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  var url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download='seja_leve_'+new Date().toISOString().slice(0,10)+'.json';
  document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
  toast('Exportado ✓');
}
function importData(){document.getElementById('file-input').click();}
document.getElementById('file-input').addEventListener('change',function(){
  var file=this.files[0];if(!file)return;
  var reader=new FileReader();
  reader.onload=function(e){
    try{
      var data=JSON.parse(e.target.result);
      if(data.d)Object.keys(data.d).forEach(function(k){lsS('sl_d'+k,data.d[k]);});
      if(data.m)Object.keys(data.m).forEach(function(k){lsS('sl_m'+k,data.m[k]);});
      if(data.x){if(data.x.ch)lsS('sl_ch',data.x.ch);if(data.x.chcat)lsS('sl_chcat',data.x.chcat);if(data.x.dh)lsS('sl_dh',data.x.dh);}
      if(data.curDay)curDay=data.curDay;
      renderHome();renderTracker();toast('Importado ✓');
    }catch(err){toast('Arquivo inválido');}
  };
  reader.readAsText(file);this.value='';
});

// ═══════════════════════════════
// EVENT DELEGATION — NENHUM onclick inline
// ═══════════════════════════════
document.addEventListener('click',function(e){
  var t=e.target;

  // NAV
  var nb=t.closest('[data-screen]');
  if(nb&&nb.closest('#nav-tabs')){
    var sc=nb.getAttribute('data-screen');
    document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});
    document.querySelectorAll('.nav-tab').forEach(function(b){b.classList.remove('active');});
    document.getElementById('screen-'+sc).classList.add('active');
    nb.classList.add('active');
    if(sc==='tracker')renderTracker();
    if(sc==='revisao')renderReview();
    window.scrollTo(0,0);return;
  }

  // ÂNCORAS
  var ab=t.closest('[data-anc]');
  if(ab){ab.classList.toggle('done');setDK(curDay,'anc_'+ab.getAttribute('data-anc'),ab.classList.contains('done'));return;}

  // HÁBITOS
  var hr=t.closest('[data-hi]');
  if(hr){
    var i=parseInt(hr.getAttribute('data-hi')),s=getDS(curDay);
    s['h'+i]=!s['h'+i];lsS('sl_d'+curDay,s);
    hr.classList.toggle('checked',!!s['h'+i]);
    hr.querySelector('.habit-check').textContent=s['h'+i]?'✓':'';
    hr.querySelector('.habit-name').style.color=s['h'+i]?'var(--sage)':'';return;
  }

  // CUPS
  if(t.getAttribute('data-cup')){var v=parseInt(t.getAttribute('data-cup')),c=getM(curDay).ac||0;setM(curDay,'ac',c===v?v-1:v);renderMetrics();return;}

  // SCALE (genérico sk/sv)
  if(t.getAttribute('data-sk')){var sk=t.getAttribute('data-sk'),sv=parseInt(t.getAttribute('data-sv')),cc=getM(curDay)[sk]||0;setM(curDay,sk,cc===sv?0:sv);renderMetrics();return;}

  // RESPIRAÇÃO sessões
  if(t.getAttribute('data-rso')){var v2=t.getAttribute('data-rso'),c2=getM(curDay).rs||'';setM(curDay,'rs',c2===v2?'':v2);renderMetrics();return;}
  if(t.getAttribute('data-re')!==null&&t.getAttribute('data-re')!==undefined&&t.hasAttribute('data-re')){var v3=t.getAttribute('data-re')==='1';var c3=getM(curDay).re;setM(curDay,'re',c3===v3?null:v3);renderMetrics();return;}

  // FASE 2 buttons
  if(t.getAttribute('data-rv')){var v4=t.getAttribute('data-rv'),c4=getM(curDay).rv||'';setM(curDay,'rv',c4===v4?'':v4);renderMetrics();return;}
  if(t.hasAttribute('data-rs2')){var v5=t.getAttribute('data-rs2')==='1';var c5=getM(curDay).rs2;setM(curDay,'rs2',c5===v5?null:v5);renderMetrics();return;}
  if(t.hasAttribute('data-su')){var v6=t.getAttribute('data-su')==='1';var c6=getM(curDay).su;setM(curDay,'su',c6===v6?null:v6);renderMetrics();return;}
  if(t.getAttribute('data-hdn')!==null&&t.hasAttribute('data-hdn')){setM(curDay,'hn',parseInt(t.getAttribute('data-hdn')));renderMetrics();return;}

  // FASE 3 buttons
  if(t.getAttribute('data-mt')){var v7=t.getAttribute('data-mt'),m7=getM(curDay),arr=m7.mt||[],idx=arr.indexOf(v7);if(idx>-1)arr.splice(idx,1);else arr.push(v7);setM(curDay,'mt',arr);renderMetrics();return;}
  if(t.hasAttribute('data-msol')){var v8=t.getAttribute('data-msol')==='1';var c8=getM(curDay).msol;setM(curDay,'msol',c8===v8?null:v8);renderMetrics();return;}

  // PENSAMENTOS fato/interpretação
  if(t.getAttribute('data-pf')!==null&&t.hasAttribute('data-pf')){var vp=parseInt(t.getAttribute('data-pf')),cp=getM(curDay).pf;setM(curDay,'pf',cp===vp?null:vp);renderHome();return;}

  // SAVE
  if(t.id==='btn-save'){saveDay();return;}
  // DAY NAV
  if(t.id==='btn-prev'){if(curDay>1){curDay--;renderHome();window.scrollTo(0,54);}return;}
  if(t.id==='btn-next'){if(curDay<90){curDay++;renderHome();window.scrollTo(0,54);}return;}
  // EXPORT/IMPORT
  if(t.id==='btn-export'){exportData();return;}
  if(t.id==='btn-import'){importData();return;}

  // CUSTOM HABIT save
  if(t.id==='btn-save-ch'){var val=document.getElementById('ch-input').value.trim();if(val){lsS('sl_ch',val);renderHome();toast('✓ Hábito: '+val);}return;}
  // CUSTOM HABIT cat
  var cb=t.closest('.cat-btn');
  if(cb){lsS('sl_chcat',cb.getAttribute('data-cat'));document.querySelectorAll('.cat-btn').forEach(function(b){b.classList.toggle('sel',b.getAttribute('data-cat')===cb.getAttribute('data-cat'));});return;}

  // REVIEW TABS
  var rwb=t.closest('[data-rw]');
  if(rwb){
    curRev=rwb.getAttribute('data-rw');
    var wn2=parseInt(curRev);if(!isNaN(wn2))curRev=wn2;
    document.querySelectorAll('[data-rw]').forEach(function(b){b.classList.remove('sel');});
    rwb.classList.add('sel');renderReview();return;
  }

  // TOOL CARDS
  var th2=t.closest('[data-tool]');
  if(th2){var id=th2.getAttribute('data-tool'),card=document.getElementById('tc-'+id);if(card)card.classList.toggle('open');return;}

  // TRACKER DOTS
  var dd=t.closest('[data-day]');
  if(dd&&!dd.classList.contains('future')){
    curDay=parseInt(dd.getAttribute('data-day'));
    document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});
    document.querySelectorAll('.nav-tab').forEach(function(b){b.classList.remove('active');});
    document.getElementById('screen-home').classList.add('active');
    document.querySelector('[data-screen="home"]').classList.add('active');
    renderHome();window.scrollTo(0,54);return;
  }

  // FASE 2 tool shortcuts
  if(t.closest('#btn-ref')||t.closest('#btn-sos')){toast('Abra o app Ferramentas Seja Leve');return;}
});

// RANGES
document.getElementById('r-energia').addEventListener('input',function(){document.getElementById('v-energia').textContent=this.value;});
document.getElementById('r-presenca').addEventListener('input',function(){document.getElementById('v-presenca').textContent=this.value;});

// INIT
var sd2=lsG('sl_cur');if(sd2&&sd2>=1&&sd2<=90)curDay=sd2;
renderHome();
window.addEventListener('beforeunload',function(){lsS('sl_cur',curDay);});