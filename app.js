// Site público (só leitura): busca jogadores em players.json e mostra personagem por classe + inventário + loja com códigos de compra/equipar.
const $=id=>document.getElementById(id);let LISTA=[],ATUAL=null,PD=null,T0=performance.now(),CS='guerreiro',LC='guerreiro';
const CL=c=>{const b=CLASSES[c]||{icone:'✨'};return{icone:b.icone,nome:t(CLASSES[c]?'c_'+c:'c_esp')}},ORD=['guerreiro','tank','mago','healer'],fmt=n=>Math.round(n).toLocaleString(t('loc'));
function icone(cv,it,Tm){cv.width=72;cv.height=72;const c=cv.getContext('2d');usar(c,()=>{c.clearRect(0,0,72,72);c.save();c.translate(36,36);c.scale(.9,.9);if(it)iconeItem(it,Tm);c.restore()})}
async function carregar(){
  try{let j;try{const r=await fetch('players.json?'+Date.now());j=await r.json()}catch(e){j=window.DADOS;if(!j)throw e}
    const antes=ATUAL&&ATUAL.nome;LISTA=(j.jogadores||[]).filter(d=>CLASSES[d.classe]).map(d=>Object.assign(d,{itens:(d.itens||[]).filter(i=>ITENS.some(x=>x.id===i))}));
    ROD={n:LISTA.length,t:j.atualizado}}catch(e){ROD=null;LISTA=[]}rodape()
  rota(true)}
let ROD=null;function rodape(){$('rod').textContent=ROD?ROD.n+' '+t('jog')+' · '+t('atual')+' '+new Date(ROD.t).toLocaleString(t('loc')):t('erro')}
function achar(n){n=String(n).toUpperCase();return LISTA.find(d=>d.nome.toUpperCase()===n)}
function lista(q){q=q.trim().toUpperCase();let f=q?LISTA.filter(d=>d.nome.toUpperCase().includes(q)):[...LISTA];const mx=d=>Math.max(d.lv,...Object.values(d.cl||{}).map(x=>x.lv||1));f.sort((a,b)=>mx(b)-mx(a)||a.nome.localeCompare(b.nome));
  $('lista').style.display=q?'block':'none';$('lt').textContent=t('res');
  $('res').innerHTML=f.length?'':'<span class="nada">'+t('nenhum')+(q?t('nenhumQ'):t('nenhumV'))+'</span>';
  f.slice(0,q?60:24).forEach(d=>{const b=document.createElement('button');b.className='chip';b.textContent=CL(d.classe).icone+' '+d.nome+' · Lv'+mx(d);b.onclick=()=>{location.hash=encodeURIComponent(d.nome)};$('res').appendChild(b)})}
function abas(el,sel,fn,d){el.innerHTML='';ORD.forEach(c=>{const b=document.createElement('button');b.className='tab'+(c===sel?' on':'');b.innerHTML=CL(c).icone+'<b>'+CL(c).nome+'</b>'+(d?'Lv'+lvDe(d,c):'');b.onclick=()=>fn(c);el.appendChild(b)})}
function mostrar(d,novo){const outro=!ATUAL||!d||ATUAL.nome!==d.nome;ATUAL=d||null;$('vista').style.display=d?'flex':'none';if(!d){PD=null;loja();return}
  if(outro){CS=d.classe;LC=CS}
  const v=visaoDe(d,CS);abas($('tabs'),CS,c=>{CS=c;LC=c;mostrar(ATUAL,false)},d);
  const e=equipDe(v),s=statsDe(v),h=[...d.nome].reduce((a,ch)=>a*31+ch.charCodeAt(0),7)>>>0;
  $('nome').textContent=d.nome+' — Lv'+v.lv+' '+CL(CS).nome;{const nx=v.lv>=100?0:need(v.lv),ex=Math.max(0,v.exp||0),pc=nx?Math.min(100,ex/nx*100):100;$('xpb').style.width=pc+'%';$('xpt').textContent=nx?t('xp')+' '+fmt(ex)+' / '+fmt(nx)+' ('+Math.floor(pc)+'%) '+t('proxnv')+' '+(v.lv+1):t('xpmax')}$('moedas').innerHTML='💰 <b>'+fmt(d.coins||0)+'</b> '+t('moedas');
  $('stats').innerHTML='<div>⚔️<b>'+num(s.atk)+'</b>'+t('atk')+'</div><div>🛡️<b>'+num(s.def)+'</b>'+t('def')+'</div><div>❤️<b>'+Math.round(s.hp)+'</b>'+t('vida')+'</div><div>⚡<b>'+fmt(PODER(s))+'</b>'+t('poder')+'</div>';
  const capa=e.capacete||{slot:'capacete',classe:CS,tema:e.armadura?e.armadura.tema:'madeira',tier:e.armadura?e.armadura.tier:1};
  for(const[sl,it,nm]of[['arma',e.arma,e.arma&&e.arma.nome],['armadura',e.armadura,e.armadura&&e.armadura.nome],['capacete',capa,capa.nome||nomeCobertura(CS,TEMAS[capa.tema]||TEMAS.madeira)]]){icone($('s-'+sl),it,0);$('n-'+sl).textContent=nm?NI(nm):'—'}
  PD={d:v,eq:e,h,sw:0,mv:0,cast:0};
  const inv=[...new Set([e.arma,e.armadura,e.capacete,...inventarioDe(v)].filter(Boolean))].filter(it=>!it.classe||it.classe===CS).sort((a,b)=>(a.slot>b.slot?1:-1)||(a.num||0)-(b.num||0)),g=$('grid');g.innerHTML='';
  inv.forEach(it=>g.appendChild(card(it,it===e.arma||it===e.armadura||it===e.capacete,'')));
  loja()}
const PODER=s=>(s.atk||0)+2*(s.def||0)+.2*(s.hp||0);   // poder de luta = ataque + 2×defesa + 0,2×vida
function atrib(it){return(it.atk?'⚔️'+fmt(it.atk)+' ':'')+(it.def?'🛡️'+fmt(it.def)+' ':'')+(it.hp?'❤️'+fmt(it.hp)+' ':'')+(PODER(it)?'⚡'+fmt(PODER(it)):'')}
function card(it,eq,extra){const b=document.createElement('div');b.className='it'+(eq?' eq':'');const k=document.createElement('canvas');b.appendChild(k);const n=document.createElement('div'),c=codigo(it);
  n.innerHTML='<b>'+NI(it.nome)+(eq?' ✔':'')+'</b><br><small>'+CL(it.classe).icone+' '+CL(it.classe).nome+' · '+atrib(it)+'<br>'+(c?'<code>!'+c+'</code>':(it.slot==='extra'?'':t('padrao')))+(extra||'')+'</small>';
  b.appendChild(n);icone(k,it,0);return b}
let LT='coins';
function lojaAbas(){const el=$('lojatabs');el.innerHTML='';[['coins','lt_coins'],['tiktok','lt_tiktok']].forEach(([k,tk])=>{const b=document.createElement('button');b.className='tab'+(k===LT?' on':'');b.textContent=t(tk);b.onclick=()=>{LT=k;loja()};el.appendChild(b)});
  $('loja-coins').style.display=LT==='coins'?'block':'none';$('loja-tiktok').style.display=LT==='tiktok'?'block':'none'}
function loja(){lojaAbas();abas($('ltabs'),LC,c=>{LC=c;loja()},null);const g=$('lg');g.innerHTML='';
  const tem=new Set(ATUAL?ATUAL.itens:[]);
  for(const[sl,tt,pre]of[['arma',t('armas'),'bw'],['armadura',t('armaduras'),'ba'],['capacete',t('capacetes'),'bh']]){const h=document.createElement('h3');h.textContent=tt;g.appendChild(h);const gr=document.createElement('div');gr.className='grid';gr.id='lg-'+sl;gr.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(125px,1fr));gap:8px';
    ITENS.filter(i=>i.loja&&i.classe===LC&&i.slot===sl).sort((a,b)=>a.preco-b.preco).forEach(it=>{const ja=tem.has(it.id),cd=document.createElement('div');cd.className='it'+(ja?' tem':'');const k=document.createElement('canvas');cd.appendChild(k);const n=document.createElement('div');
      n.innerHTML='<b>'+NI(it.nome)+'</b><br><small>'+atrib(it)+'<br><span class="preco">💰 '+fmt(it.preco)+'</span><br>'+(ja?t('tem'):'<code>!'+pre+it.num+'</code>')+'</small>';cd.appendChild(n);gr.appendChild(cd);icone(k,it,0)});g.appendChild(gr)}}
const PAGS=['personagens','loja','drops','como','ranking'],SECS=['geral','classes','comandos','equipar','shop'];let CSEC='geral';
const VEL=2;   // a dungeon roda em velocidade x2 (VEL_COMBATE no jogo): recargas e durações em segundos reais = valor do jogo ÷ 2
const dec=n=>n.toLocaleString(t('loc'),{maximumFractionDigits:1});
function como(sec){CSEC=SECS.includes(sec)?sec:'geral';const ab=$('ctabs');ab.innerHTML='';
  SECS.forEach(k=>{const b=document.createElement('button');b.className='tab'+(k===CSEC?' on':'');b.textContent=t('cs_'+k);b.onclick=()=>{history.replaceState(null,'',location.pathname+'#/como/'+k);como(k)};ab.appendChild(b);$('sec-'+k).classList.toggle('on',k===CSEC)});
  const c=$('cls');c.innerHTML='';ORD.forEach(k=>{const cd=CLASSES[k].cd*(k==='healer'?.9:1)/VEL,d=document.createElement('div');d.className='cls';
    d.innerHTML='<h3>'+CLASSES[k].icone+' '+t('c_'+k)+' <small>(<code>'+CLASSES[k].cod+'</code>)</small></h3><p>'+t('cl_papel_'+k)+'</p><p><span class="tag">'+t('cl_pas')+'</span>'+t('cl_pas_'+k)+'</p><p><span class="tag">'+t('cl_sk')+'</span>'+t('cl_sk_'+k)+'</p><p><span class="tag">'+t('cl_cd')+'</span>'+dec(cd)+' s</p>';c.appendChild(d)});
  const rows=[['<code>sw</code> <code>st</code> <code>sm</code> <code>sh</code>','cm_entrar'],['<code>1</code>','cm_skill'],['<code>!ew&lt;n&gt;</code> <code>!ea&lt;n&gt;</code> <code>!eh&lt;n&gt;</code>','cm_eq'],['<code>!ew0</code> <code>!ea0</code> <code>!eh0</code>','cm_auto'],['<code>!bw&lt;n&gt;</code> <code>!ba&lt;n&gt;</code> <code>!bh&lt;n&gt;</code>','cm_buy']];
  $('cmdt').innerHTML='<tr><td><b>'+t('cm_h1')+'</b></td><td><b>'+t('cm_h2')+'</b></td></tr>'+rows.map(r=>'<tr><td>'+r[0]+'</td><td>'+t(r[1])+'</td></tr>').join('')}
let RK='nivel';
const nivelMax=d=>Math.max(d.lv||1,...Object.values(d.cl||{}).map(x=>x.lv||1));
function poderMax(d){let b={p:0,c:d.classe};for(const c of ORD){const s=statsDe(visaoDe(d,c)),p=PODER(s);if(p>b.p)b={p,c}}return b}
function ranking(){const ab=$('rtabs');ab.innerHTML='';[['nivel','rk_nivel'],['moedas','rk_moedas'],['poder','rk_poder']].forEach(([k,tk])=>{const b=document.createElement('button');b.className='tab'+(k===RK?' on':'');b.textContent=t(tk);b.onclick=()=>{RK=k;ranking()};ab.appendChild(b)});
  const v=LISTA.map(d=>{const pm=poderMax(d);return{d,v:RK==='nivel'?nivelMax(d):RK==='moedas'?(d.coins||0):pm.p,c:RK==='poder'?pm.c:d.classe}}).sort((a,b)=>b.v-a.v||a.d.nome.localeCompare(b.d.nome)).slice(0,20);
  const ol=$('rk');ol.innerHTML='';if(!v.length){ol.innerHTML='<span class="nada">'+t('rk_vazio')+'</span>';return}
  v.forEach((r,i)=>{const li=document.createElement('li'),pos=document.createElement('span'),nm=document.createElement('span'),vl=document.createElement('span');pos.className='pos';pos.textContent=['🥇','🥈','🥉'][i]||(i+1);nm.className='nm';nm.textContent=CL(r.c).icone+' '+r.d.nome;vl.className='vl';vl.textContent=(RK==='moedas'?'💰 ':RK==='poder'?'⚡ ':'Lv ')+fmt(r.v);li.append(pos,nm,vl);li.onclick=()=>{location.hash=encodeURIComponent(r.d.nome)};ol.appendChild(li)})}
// Páginas: #/ = início, #/personagens, #/loja, #/drops, #/como. Qualquer outro texto (#NOME) abre o personagem.
function rota(manter){const h=decodeURIComponent(location.hash.slice(1));let pg='home',n='',sub='';
  if(h.startsWith('/')){const [k,s2]=h.slice(1).split('/');if(PAGS.includes(k)){pg=k;sub=s2||''}}else if(h){pg='personagens';n=h}
  document.querySelectorAll('.pg').forEach(e=>e.classList.toggle('on',e.id==='pg-'+pg));
  if(!manter)window.scrollTo(0,0);
  if(pg==='personagens'){const d=n&&achar(n);mostrar(d,!manter);if(d)$('busca').value='';lista($('busca').value)}else if(pg==='loja')loja();else if(pg==='ranking')ranking();else if(pg==='como')como(sub||CSEC)}
$('busca').oninput=()=>{if(location.hash!=='#/personagens')history.replaceState(null,'',location.pathname+'#/personagens');mostrar(null);lista($('busca').value)};
addEventListener('hashchange',()=>rota(false));
(function anim(){const c=$('doll').getContext('2d');usar(c,()=>{c.clearRect(0,0,240,250);if(PD&&ATUAL){c.save();const dr=PD.eq&&PD.eq.armadura&&PD.eq.armadura.exclusivo;c.translate(120,dr?212:225);const k=dr?1.45:1.9;c.scale(k,k);corpo(PD,(performance.now()-T0)/1000);c.restore()}});requestAnimationFrame(anim)})();
document.querySelectorAll('#idioma [data-l]').forEach(b=>b.onclick=()=>{IDI=b.dataset.l;try{localStorage.setItem('idioma',IDI)}catch(e){}traduzir();rodape();rota(true)});
traduzir();carregar();setInterval(carregar,60000);
