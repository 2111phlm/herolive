window.ITENS=[];window.MAPAS=[];
// Item de inventário (só para visualizar na tela Personagens; não equipa). Dê esta linha para um jogador em d.itens.
ITENS.push({id:'espada-aurora',pasta:'armas',slot:'extra',nome:'Lâmina da Aurora',
  icone(x,T){const g=x.createLinearGradient(0,-42,0,0);g.addColorStop(0,'#fff7d6');g.addColorStop(.5,'#fcd34d');g.addColorStop(1,'#f472b6');
    x.fillStyle=g;x.strokeStyle='#1f1a14';x.lineWidth=1.3;x.beginPath();x.moveTo(0,-42);x.lineTo(4.5,-30);x.lineTo(4,-2);x.lineTo(-4,-2);x.lineTo(-4.5,-30);x.closePath();x.fill();x.stroke();
    x.fillStyle='rgba(255,255,255,.65)';x.fillRect(-.8,-36,1.6,30);x.fillStyle='#fcd34d';
    for(const s of[-1,1]){x.beginPath();x.moveTo(s*3,-2);x.quadraticCurveTo(s*18,-9,s*16,3);x.quadraticCurveTo(s*8,0,s*3,3);x.closePath();x.fill();x.stroke()}
    x.fillStyle='#7c2d12';x.fillRect(-2,3,4,12);x.strokeRect(-2,3,4,12);x.fillStyle='#fb923c';x.beginPath();x.arc(0,18,3.6,0,7);x.fill();x.stroke();
    x.fillStyle='#fff';for(let i=0;i<3;i++){x.beginPath();x.arc(Math.sin(T*2+i*2)*7,-34+((T*14+i*12)%32),1.3,0,7);x.fill()}}});

// Item de inventário (só para visualizar na tela Personagens; não equipa). Dê esta linha para um jogador em d.itens.
ITENS.push({id:'espada-vazio',pasta:'armas',slot:'extra',nome:'Garra do Vazio',
  icone(x,T){x.fillStyle='#1e1b4b';x.strokeStyle='#a78bfa';x.lineWidth=1.6;x.beginPath();x.moveTo(-3,0);x.quadraticCurveTo(-13,-22,6,-44);x.quadraticCurveTo(0,-24,4,-2);x.closePath();x.fill();x.stroke();
    x.strokeStyle='rgba(196,181,253,'+(.6+Math.sin(T*3)*.4)+')';x.lineWidth=1;x.beginPath();x.moveTo(-2,-4);x.quadraticCurveTo(-8,-22,4,-40);x.stroke();
    x.fillStyle='#312e81';x.strokeStyle='#1f1a14';x.lineWidth=1.2;x.fillRect(-7,0,14,3.5);x.strokeRect(-7,0,14,3.5);x.fillStyle='#0f0a1e';x.fillRect(-2,3.5,4,11);
    x.strokeStyle='#a78bfa';x.beginPath();x.ellipse(0,18+Math.sin(T*3)*1.5,5.5,3,0,0,7);x.stroke();x.fillStyle='#c4b5fd';x.beginPath();x.arc(0,18+Math.sin(T*3)*1.5,1.7,0,7);x.fill()}});

// Vestido da Rainha da Neve: item EXCLUSIVO do TESTEBETA (mago). Visual: tema 'neve' em js/temas.js
ITENS.push({id:'mago-neve-armadura',num:45,pasta:'armaduras',slot:'armadura',classe:'mago',tema:'neve',tier:12,nome:'Vestido da Rainha da Neve',de:9999,ate:9999,exclusivo:'TESTEBETA',hp:1010,def:1010});

// Elmo do Dragão Ancestral: capacete do kit dracônico EXCLUSIVO do TESTEBETA
ITENS.push({id:'draconico-guerreiro-capacete',num:46,pasta:'armaduras',slot:'capacete',classe:'guerreiro',tema:'draconico',tier:11,nome:'Elmo do Dragão Ancestral',de:9999,ate:9999,exclusivo:'TESTEBETA',hp:9990});

// Elmo Escama Infernal: capacete do kit dracônico EXCLUSIVO do TESTEBETA
ITENS.push({id:'draconico-tank-capacete',num:47,pasta:'armaduras',slot:'capacete',classe:'tank',tema:'draconico',tier:11,nome:'Elmo Escama Infernal',de:9999,ate:9999,exclusivo:'TESTEBETA',hp:9990});

// Chapéu Garra Ígnea: capacete do kit dracônico EXCLUSIVO do TESTEBETA
ITENS.push({id:'draconico-mago-capacete',num:48,pasta:'armaduras',slot:'capacete',classe:'mago',tema:'draconico',tier:11,nome:'Chapéu Garra Ígnea',de:9999,ate:9999,exclusivo:'TESTEBETA',hp:9990});

// Capuz Fênix-Dragão: capacete do kit dracônico EXCLUSIVO do TESTEBETA
ITENS.push({id:'draconico-healer-capacete',num:49,pasta:'armaduras',slot:'capacete',classe:'healer',tema:'draconico',tier:11,nome:'Capuz Fênix-Dragão',de:9999,ate:9999,exclusivo:'TESTEBETA',hp:9990});

// Coroa da Rainha da Neve: capacete EXCLUSIVO do TESTEBETA (mago)
ITENS.push({id:'mago-neve-capacete',num:50,pasta:'armaduras',slot:'capacete',classe:'mago',tema:'neve',tier:12,nome:'Coroa da Rainha da Neve',de:9999,ate:9999,exclusivo:'TESTEBETA',hp:10100});

// Cajado Floco Eterno: item EXCLUSIVO do TESTEBETA (mago). Visual: tema 'neve' em js/temas.js
ITENS.push({id:'mago-neve-arma',num:45,pasta:'armas',slot:'arma',classe:'mago',tema:'neve',tier:12,nome:'Cajado Floco Eterno',de:9999,ate:9999,exclusivo:'TESTEBETA',atk:1010});

// Couraça do Dragão Ancestral: kit dracônico EXCLUSIVO do TESTEBETA (não cai nem é equipado por ninguém mais). Visual: tema 'draconico' em js/temas.js
ITENS.push({id:'draconico-guerreiro-armadura',num:41,pasta:'armaduras',slot:'armadura',classe:'guerreiro',tema:'draconico',tier:11,nome:'Couraça do Dragão Ancestral',de:9999,ate:9999,exclusivo:'TESTEBETA',hp:999,def:999});

// Machado Presa de Dragão: kit dracônico EXCLUSIVO do TESTEBETA (não cai nem é equipado por ninguém mais). Visual: tema 'draconico' em js/temas.js
ITENS.push({id:'draconico-guerreiro-arma',num:41,pasta:'armas',slot:'arma',classe:'guerreiro',tema:'draconico',tier:11,nome:'Machado Presa de Dragão',de:9999,ate:9999,exclusivo:'TESTEBETA',atk:999});

// Armadurona Escama Infernal: kit dracônico EXCLUSIVO do TESTEBETA (não cai nem é equipado por ninguém mais). Visual: tema 'draconico' em js/temas.js
ITENS.push({id:'draconico-tank-armadura',num:42,pasta:'armaduras',slot:'armadura',classe:'tank',tema:'draconico',tier:11,nome:'Armadurona Escama Infernal',de:9999,ate:9999,exclusivo:'TESTEBETA',hp:999,def:999});

// Escudão Face do Dragão: kit dracônico EXCLUSIVO do TESTEBETA (não cai nem é equipado por ninguém mais). Visual: tema 'draconico' em js/temas.js
ITENS.push({id:'draconico-tank-arma',num:42,pasta:'armas',slot:'arma',classe:'tank',tema:'draconico',tier:11,nome:'Escudão Face do Dragão',de:9999,ate:9999,exclusivo:'TESTEBETA',atk:999});

// Túnica Chama-Dragão: kit dracônico EXCLUSIVO do TESTEBETA (não cai nem é equipado por ninguém mais). Visual: tema 'draconico' em js/temas.js
ITENS.push({id:'draconico-mago-armadura',num:43,pasta:'armaduras',slot:'armadura',classe:'mago',tema:'draconico',tier:11,nome:'Túnica Chama-Dragão',de:9999,ate:9999,exclusivo:'TESTEBETA',hp:999,def:999});

// Cajado Garra Ígnea: kit dracônico EXCLUSIVO do TESTEBETA (não cai nem é equipado por ninguém mais). Visual: tema 'draconico' em js/temas.js
ITENS.push({id:'draconico-mago-arma',num:43,pasta:'armas',slot:'arma',classe:'mago',tema:'draconico',tier:11,nome:'Cajado Garra Ígnea',de:9999,ate:9999,exclusivo:'TESTEBETA',atk:999});

// Manto Fênix-Dragão: kit dracônico EXCLUSIVO do TESTEBETA (não cai nem é equipado por ninguém mais). Visual: tema 'draconico' em js/temas.js
ITENS.push({id:'draconico-healer-armadura',num:44,pasta:'armaduras',slot:'armadura',classe:'healer',tema:'draconico',tier:11,nome:'Manto Fênix-Dragão',de:9999,ate:9999,exclusivo:'TESTEBETA',hp:999,def:999});

// Cetro Asa de Brasa: kit dracônico EXCLUSIVO do TESTEBETA (não cai nem é equipado por ninguém mais). Visual: tema 'draconico' em js/temas.js
ITENS.push({id:'draconico-healer-arma',num:44,pasta:'armas',slot:'arma',classe:'healer',tema:'draconico',tier:11,nome:'Cetro Asa de Brasa',de:9999,ate:9999,exclusivo:'TESTEBETA',atk:999});

// Temas visuais (cores e efeitos) compartilhados por todas as classes. Cada tema = 1 faixa de 10 níveis.
window.TEMAS={
madeira:{nome:'Madeira',cor:'#a16a3a',cor2:'#5b3a1e',
 fx(ctx,T,bob){ctx.strokeStyle='#6b4423';ctx.lineWidth=1;for(const i of[-6,0,6]){ctx.beginPath();ctx.moveTo(i,-35-bob);ctx.lineTo(i,-22-bob);ctx.stroke()}},
 capacete:{cor:'#a16a3a',cor2:'#5b3a1e',chifre:'#e7d5b3'},
 arma:{cor:'#a16a3a',cor2:'#6b4423',fx(ctx,T){ctx.strokeStyle='#6b4423';ctx.lineWidth=.8;ctx.beginPath();ctx.moveTo(0,-30);ctx.lineTo(0,-20);ctx.moveTo(0,-14);ctx.lineTo(0,-8);ctx.stroke()}},
 esc:{cor:'#a16a3a',cor2:'#6b4423',fx(ctx,T){ctx.strokeStyle='#6b4423';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(-9,0);ctx.lineTo(9,0);ctx.moveTo(0,-9);ctx.lineTo(0,9);ctx.stroke()}}},
pedra:{nome:'Pedra',cor:'#8a8f98',cor2:'#52565e',
 fx(ctx,T,bob){ctx.strokeStyle='rgba(0,0,0,.45)';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(-6,-35-bob);ctx.lineTo(-3,-29-bob);ctx.lineTo(-7,-24-bob);ctx.moveTo(5,-34-bob);ctx.lineTo(7,-28-bob);ctx.stroke();
    ctx.fillStyle='rgba(255,255,255,.18)';rr(-2,-33-bob,6,4,2)},
 capacete:{cor:'#8a8f98',cor2:'#52565e',chifre:'#cbd5e1'},
 arma:{cor:'#8a8f98',cor2:'#52565e',fx(ctx,T){ctx.fillStyle='rgba(0,0,0,.35)';rr(-3,-28,2,3,1);rr(1,-18,2,3,1)}},
 esc:{cor:'#8a8f98',cor2:'#52565e',fx(ctx,T){ctx.strokeStyle='rgba(0,0,0,.45)';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(-4,-8);ctx.lineTo(-1,-2);ctx.lineTo(-5,4);ctx.stroke()}}},
ferro:{nome:'Ferro',cor:'#b8c0cc',cor2:'#6b7280',
 fx(ctx,T,bob){ctx.fillStyle='rgba(0,0,0,.25)';rr(-1,-36-bob,2,15,1);for(const[a,b]of[[-8,-32],[8,-32],[-8,-24],[8,-24]])co(a,b-bob,1.4,'#4b5563')},
 capacete:{cor:'#b8c0cc',cor2:'#6b7280',chifre:'#e5e7eb'},
 arma:{cor:'#b8c0cc',cor2:'#6b7280',fx(ctx,T){ctx.fillStyle='rgba(0,0,0,.25)';rr(-.8,-32,1.6,24,1)}},
 esc:{cor:'#b8c0cc',cor2:'#6b7280',fx(ctx,T){for(const[a,b]of[[-5,-5],[5,-5],[-5,5],[5,5]])co(a,b,1.3,'#4b5563')}}},
aco:{nome:'Aço',cor:'#d5dde8',cor2:'#3b82f6',
 fx(ctx,T,bob){ctx.fillStyle='#3b82f6';rr(-2,-35-bob,4,13,2);ctx.fillStyle='rgba(255,255,255,.75)';rr(-10+(T*12)%18,-36-bob,2,12,1)},
 capacete:{cor:'#d5dde8',cor2:'#3b82f6',chifre:'#bfdbfe',fx(ctx,T,bob){rr(-1,-63-bob,2,8,1)}},
 arma:{cor:'#d5dde8',cor2:'#3b82f6',fx(ctx,T){ctx.fillStyle='#3b82f6';rr(-.8,-32,1.6,24,1);ctx.fillStyle='rgba(255,255,255,.8)';rr(-2,-34+(T*22)%30,4,2,1)}},
 esc:{cor:'#d5dde8',cor2:'#3b82f6',fx(ctx,T){ctx.fillStyle='#3b82f6';rr(-1.5,-7,3,14,1);rr(-7,-1.5,14,3,1)}}},
ouro:{nome:'Ouro',cor:'#fcd34d',cor2:'#b45309',
 fx(ctx,T,bob){ctx.strokeStyle='#92400e';ctx.lineWidth=1.2;ctx.strokeRect(-9,-34-bob,18,11);co(0,-28-bob,3,'#ef4444');ctx.fillStyle='#fff';
    if(Math.sin(T*8)>.4)ci(-7,-33-bob,1.8);if(Math.sin(T*6+2)>.5)ci(8,-26-bob,1.5)},
 capacete:{cor:'#fcd34d',cor2:'#b45309',chifre:'#fde68a',fx(ctx,T,bob){co(0,-53-bob,2.2,'#ef4444');ctx.fillStyle='#fff';if(Math.sin(T*7)>.4)ci(6,-62-bob,1.6)}},
 arma:{cor:'#fcd34d',cor2:'#b45309',fx(ctx,T){co(0,-1,2.2,'#ef4444');ctx.fillStyle='#fff';if(Math.sin(T*8)>.4)ci(0,-36,2)}},
 esc:{cor:'#fcd34d',cor2:'#b45309',fx(ctx,T){co(0,0,3.2,'#ef4444');ctx.fillStyle='#fff';if(Math.sin(T*6)>.5)ci(-5,-5,1.5)}}},
diamante:{nome:'Diamante',cor:'#67e8f9',cor2:'#0e7490',glow:'#22d3ee',
 fx(ctx,T,bob){ctx.fillStyle='rgba(255,255,255,.45)';ctx.beginPath();ctx.moveTo(-10,-35-bob);ctx.lineTo(0,-30-bob);ctx.lineTo(-4,-14-bob);ctx.fill();
    ctx.beginPath();ctx.moveTo(10,-35-bob);ctx.lineTo(2,-26-bob);ctx.lineTo(7,-14-bob);ctx.fill();ctx.fillStyle='#fff';
    for(let i=0;i<3;i++)ci(Math.sin(T*2+i*2)*9,-34-bob+(T*14+i*9)%20,1.5)},
 capacete:{cor:'#67e8f9',cor2:'#0e7490',chifre:'#a5f3fc',fx(ctx,T,bob){ctx.fillStyle='#fff';ci(Math.sin(T*2)*8,-60-bob,1.5)}},
 arma:{cor:'#67e8f9',cor2:'#0e7490',fx(ctx,T){ctx.fillStyle='rgba(255,255,255,.5)';ctx.beginPath();ctx.moveTo(0,-36);ctx.lineTo(3,-20);ctx.lineTo(0,-6);ctx.lineTo(-3,-20);ctx.fill();ctx.fillStyle='#fff';ci(0,-36+(T*20)%34,1.5)}},
 esc:{cor:'#67e8f9',cor2:'#0e7490',fx(ctx,T){ctx.fillStyle='rgba(255,255,255,.45)';ctx.beginPath();ctx.moveTo(0,-9);ctx.lineTo(6,0);ctx.lineTo(0,9);ctx.lineTo(-6,0);ctx.fill()}}},
obsidiana:{nome:'Obsidiana',cor:'#2e1065',cor2:'#0f0a1e',glow:'#7c3aed',
 fx(ctx,T,bob){ctx.strokeStyle='rgba(196,181,253,'+(.55+Math.sin(T*3)*.35)+')';ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(0,-34-bob);ctx.lineTo(-5,-26-bob);ctx.lineTo(5,-26-bob);ctx.closePath();
    ctx.moveTo(0,-26-bob);ctx.lineTo(0,-16-bob);ctx.moveTo(-8,-31-bob);ctx.lineTo(-8,-21-bob);ctx.moveTo(8,-31-bob);ctx.lineTo(8,-21-bob);ctx.stroke();
    ctx.fillStyle='#a78bfa';for(let i=0;i<3;i++)ci(Math.sin(T*2+i*2)*13,-14-bob-(T*25+i*14)%36,1.4)},
 capacete:{cor:'#2e1065',cor2:'#0f0a1e',chifre:'#a78bfa',fx(ctx,T,bob){ctx.fillStyle='rgba(216,180,254,'+(.6+Math.sin(T*4)*.4)+')';ci(-3,-48.5-bob,2.6);ci(5,-48.5-bob,2.6)}},
 arma:{cor:'#4c1d95',cor2:'#1e1b4b',fx(ctx,T){ctx.strokeStyle='rgba(196,181,253,'+(.55+Math.sin(T*3)*.35)+')';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(0,-32);ctx.lineTo(0,-8);ctx.moveTo(-2,-26);ctx.lineTo(2,-22);ctx.moveTo(2,-18);ctx.lineTo(-2,-14);ctx.stroke();ctx.fillStyle='#a78bfa';ci(Math.sin(T*3)*4,-38-(T*14)%10,1.2)}},
 esc:{cor:'#4c1d95',cor2:'#1e1b4b',fx(ctx,T){ctx.strokeStyle='rgba(196,181,253,'+(.55+Math.sin(T*3)*.35)+')';ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(0,-6);ctx.lineTo(-5,3);ctx.lineTo(5,3);ctx.closePath();ctx.stroke()}}},
magma:{nome:'Magma',cor:'#3f1d1d',cor2:'#7f1d1d',glow:'#f97316',
 fx(ctx,T,bob){ctx.strokeStyle='rgba(251,146,60,'+(.7+Math.sin(T*5)*.3)+')';ctx.lineWidth=1.6;ctx.beginPath();ctx.moveTo(-8,-35-bob);ctx.lineTo(-3,-28-bob);ctx.lineTo(-7,-20-bob);
    ctx.moveTo(2,-36-bob);ctx.lineTo(6,-29-bob);ctx.lineTo(1,-22-bob);ctx.lineTo(7,-14-bob);ctx.stroke();ctx.fillStyle='#fde047';
    for(let i=0;i<4;i++)ci(Math.sin(T*3+i)*10,-14-bob-(T*30+i*13)%40,1.6)},
 capacete:{cor:'#3f1d1d',cor2:'#7f1d1d',chifre:'#fb923c',fx(ctx,T,bob){ctx.fillStyle='rgba(251,146,60,.85)';ctx.beginPath();ctx.moveTo(-5,-64-bob);ctx.quadraticCurveTo(-7,-76-bob+Math.sin(T*12)*3,0,-82-bob+Math.sin(T*10)*3);ctx.quadraticCurveTo(7,-76-bob,5,-64-bob);ctx.fill()}},
 arma:{cor:'#451a1a',cor2:'#7f1d1d',fx(ctx,T){ctx.strokeStyle='rgba(251,146,60,'+(.7+Math.sin(T*5)*.3)+')';ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(0,-34);ctx.lineTo(-1.5,-24);ctx.lineTo(1.5,-16);ctx.lineTo(0,-6);ctx.stroke();ctx.fillStyle='rgba(251,146,60,.7)';ctx.beginPath();ctx.moveTo(-4,-30);ctx.quadraticCurveTo(-8,-42+Math.sin(T*18)*3,0,-50+Math.sin(T*14)*3);ctx.quadraticCurveTo(8,-42,4,-30);ctx.fill()}},
 esc:{cor:'#451a1a',cor2:'#7f1d1d',fx(ctx,T){ctx.strokeStyle='rgba(251,146,60,'+(.7+Math.sin(T*5)*.3)+')';ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(-6,-4);ctx.lineTo(-1,0);ctx.lineTo(-3,6);ctx.moveTo(2,-7);ctx.lineTo(5,-1);ctx.stroke();ctx.fillStyle='#fde047';ci(Math.sin(T*3)*5,-6-(T*18)%12,1.2)}}},
celestial:{nome:'Celestial',cor:'#fef9c3',cor2:'#f59e0b',glow:'#fde68a',
 fx(ctx,T,bob){ctx.strokeStyle='#fde047';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(0,-68-bob,10,3.5,0,0,7);ctx.stroke();
    ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(-16,-39-bob,4,10,-.5,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(16,-39-bob,4,10,.5,0,7);ctx.fill();
    ctx.fillStyle='#f59e0b';rr(-1.5,-35-bob,3,14,1.5);ctx.fillStyle='#fff';for(let i=0;i<4;i++)ci(Math.sin(T*2+i*1.7)*15,-20-bob-(T*18+i*11)%48,1.4)},
 capacete:{cor:'#fef9c3',cor2:'#f59e0b',chifre:'#ffffff',fx(ctx,T,bob){ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(-16,-66-bob,3.5,8,-.7,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(16,-66-bob,3.5,8,.7,0,7);ctx.fill()}},
 arma:{cor:'#fef9c3',cor2:'#f59e0b',fx(ctx,T){ctx.fillStyle='rgba(253,224,71,.35)';rr(-6,-40,12,42,6);ctx.fillStyle='#fff';ci(Math.sin(T*2)*4,-38+(T*16)%34,1.4)}},
 esc:{cor:'#fef9c3',cor2:'#f59e0b',fx(ctx,T){ctx.strokeStyle='#fde047';ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(0,0,6.5,0,7);ctx.stroke();ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(-2.5,0,2,4,-.5,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(2.5,0,2,4,.5,0,7);ctx.fill()}}},
cosmica:{nome:'Cósmica',cor:'#312e81',cor2:'#c084fc',glow:'#a78bfa',
 fx(ctx,T,bob){const g=ctx.createLinearGradient(-12,-37-bob,12,-10-bob);g.addColorStop(0,'#1e1b4b');g.addColorStop(.5,'#7c3aed');g.addColorStop(1,'#38bdf8');ctx.fillStyle=g;rr(-12,-37-bob,24,27,9);
    ctx.save();ctx.fillStyle='#fff';for(let i=0;i<8;i++){ctx.globalAlpha=.4+.6*Math.abs(Math.sin(T*3+i));ci(-9+(i*7)%19,-34-bob+(i*5)%22,1.1)}ctx.restore();
    ctx.fillStyle='#fff';for(let i=0;i<5;i++){const a=T*2+i*1.26;ci(Math.cos(a)*22,-26-bob+Math.sin(a)*28,1.8)}},
 capacete:{cor:'#312e81',cor2:'#c084fc',chifre:'#c084fc',fx(ctx,T,bob){ctx.save();ctx.fillStyle='#fff';for(let i=0;i<4;i++){ctx.globalAlpha=.4+.6*Math.abs(Math.sin(T*3+i));ci(-8+i*5,-62-bob+(i%2)*3,1.2)}ctx.restore()}},
 arma:{cor:'#7c3aed',cor2:'#c084fc',fx(ctx,T){const g=ctx.createLinearGradient(0,-36,0,-2);g.addColorStop(0,'#38bdf8');g.addColorStop(.5,'#7c3aed');g.addColorStop(1,'#1e1b4b');ctx.fillStyle=g;rr(-3,-36,6,34,2);ctx.fillStyle='#fff';for(let i=0;i<4;i++)ci(Math.sin(T*3+i*2)*1.5,-8-i*8,1)}},
 esc:{cor:'#7c3aed',cor2:'#c084fc',fx(ctx,T){const g=ctx.createRadialGradient(0,0,1,0,0,9);g.addColorStop(0,'#38bdf8');g.addColorStop(.6,'#7c3aed');g.addColorStop(1,'#1e1b4b');ctx.fillStyle=g;ci(0,0,8.5);ctx.fillStyle='#fff';for(let i=0;i<3;i++){const a=T*2+i*2.1;ci(Math.cos(a)*11,Math.sin(a)*11,1.4)}}}},
draconico:{nome:'Dracônico',draco:1,cor:'#991b1b',cor2:'#fbbf24',glow:'#ff5a00',
 fx(ctx,T,bob){const g=ctx.createLinearGradient(-14,-42-bob,14,-4);g.addColorStop(0,'#dc2626');g.addColorStop(.55,'#7f1d1d');g.addColorStop(1,'#2a0606');ctx.fillStyle=g;ctx.fillRect(-22,-44-bob,44,44);
    ctx.strokeStyle='rgba(0,0,0,.4)';ctx.lineWidth=1;for(let r=0;r<9;r++)for(let c=-4;c<=4;c++){ctx.beginPath();ctx.arc(c*6+(r%2)*3,-40-bob+r*5,3.4,.1,Math.PI-.1);ctx.stroke()}
    ctx.save();ctx.globalCompositeOperation='lighter';const p=.65+Math.sin(T*4)*.35;ctx.strokeStyle='rgba(255,150,30,'+p+')';ctx.lineWidth=1.6;ctx.beginPath();
    ctx.moveTo(-8,-38-bob);ctx.lineTo(-4,-30-bob);ctx.lineTo(-9,-22-bob);ctx.moveTo(7,-39-bob);ctx.lineTo(3,-31-bob);ctx.lineTo(9,-23-bob);ctx.moveTo(0,-24-bob);ctx.lineTo(-2,-14-bob);ctx.lineTo(3,-8);ctx.stroke();
    const q=ctx.createRadialGradient(0,-29-bob,1,0,-29-bob,9);q.addColorStop(0,'rgba(255,240,150,.95)');q.addColorStop(1,'rgba(255,90,0,0)');ctx.fillStyle=q;ctx.beginPath();ctx.arc(0,-29-bob,9,0,7);ctx.fill();ctx.restore();
    ctx.strokeStyle='#fbbf24';ctx.lineWidth=1.3;ctx.beginPath();ctx.arc(0,-29-bob,3.6,0,7);ctx.stroke()},
 capacete:{cor:'#7f1d1d',cor2:'#fbbf24',chifre:'#fde68a'},
 arma:{cor:'#b91c1c',cor2:'#fbbf24',fx(ctx,T){}},
 esc:{cor:'#991b1b',cor2:'#fbbf24',fx(ctx,T){}}},
neve:{nome:'Rainha da Neve',neve:1,cor:'#a5d8f3',cor2:'#f8fcff',glow:'#9fdcff',
 fx(ctx,T,bob){},
 capacete:{cor:'#e0f2fe',cor2:'#7dd3fc',chifre:'#bae6fd'},
 arma:{cor:'#7dd3fc',cor2:'#e0f2fe',fx(ctx,T){}},
 esc:{cor:'#7dd3fc',cor2:'#e0f2fe',fx(ctx,T){}}},
};
// Visual básico de novato (kit inicial de todas as classes): couro/madeira simples, sem brilho
TEMAS.novato=Object.assign({},TEMAS.madeira,{nome:'Novato',cor:'#b9966a',cor2:'#6e5a43',capacete:{cor:'#b9966a',cor2:'#6e5a43',chifre:'#e7d5b3'},arma:Object.assign({},TEMAS.madeira.arma,{cor:'#b9966a',cor2:'#6e5a43'}),esc:Object.assign({},TEMAS.madeira.esc,{cor:'#b9966a',cor2:'#6e5a43'})});

// Base compartilhada pelo jogo (index.html) e pela tela de personagens (players.html):
// helpers de desenho, classes, fórmulas de status e equipamento por nível.
let ctx=null;                                                   // contexto de desenho atual
function usar(c,fn){const o=ctx;ctx=c;try{fn()}finally{ctx=o}}   // desenha em outro canvas temporariamente
const rr=(x,y,w,h,r)=>{ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill()},ci=(x,y,r)=>{ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill()};
function ro(x,y,w,h,r,c){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=c;ctx.fill();ctx.lineWidth=1.3;ctx.strokeStyle='#1f1a14';ctx.stroke()}
function co(x,y,r,c){ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fillStyle=c;ctx.fill();ctx.lineWidth=1.3;ctx.strokeStyle='#1f1a14';ctx.stroke()}
function tx(s,x,y,z,c,a){ctx.font='bold '+z+'px system-ui';ctx.textAlign=a||'center';ctx.lineWidth=3;ctx.strokeStyle='#000';ctx.fillStyle=c||'#fff';ctx.strokeText(s,x,y);ctx.fillText(s,x,y)}

// ---- classes ----  cd = recarga da skill (s) | alcance = distância do ataque básico (px)
const CLASSES={
 guerreiro:{nome:'Guerreiro',cod:'sw',icone:'⚔️',alcance:34,cd:45,passiva:'+20% de dano',skill:'Fúria: 2,5x vel. de ataque e 2,5x de dano por 10s'},
 tank:{nome:'Tank',cod:'st',icone:'🛡️',alcance:34,cd:15,passiva:'-50% de dano recebido; os monstros atacam os tanks primeiro',skill:'Urro: atrai todos os mobs, +100% defesa por 8s e cura 10% da vida'},
 mago:{nome:'Mago',cod:'sm',icone:'🔮',alcance:130,cd:30,passiva:'+20% de dano',skill:'Bola de Fogo: dano em área de 5x o ataque'},
 healer:{nome:'Healer',cod:'sh',icone:'✨',alcance:120,cd:30,passiva:'-10% de recarga da habilidade',skill:'Cura em Área: cura todos os aliados por perto'}};
const COD={sw:'guerreiro',st:'tank',sm:'mago',sh:'healer'};

// ---- status ----  nível 1: 50 de ataque, 250 de vida, 25 de defesa. Por nível: +1 ataque, +3 vida, +0,5 defesa.
const need=l=>10*Math.pow(1.1,l-1);                      // EXP para subir de nível: 10, 11, 12.1...
const item=id=>ITENS.find(i=>i.id===id);
// Inventário: itens guardados (d.itens) + itens exclusivos do dono + o item do nível atual. Cada item tem um NÚMERO FIXO (num) e um código de equipar:
// !ew<num> = arma, !ea<num> = armadura (ex.: !ew45). !ew0 / !ea0 voltam ao automático. Equipado = o escolhido pelo jogador (d.equip) ou, se não escolheu, o mais forte.
const pot=i=>(i.atk||0)+2*(i.def||0)+.2*(i.hp||0);   // poder de luta (CP) do item: o equipamento automático escolhe sempre o de maior CP
const SL=['arma','armadura','capacete'],codigo=i=>i&&i.num!=null&&SL.includes(i.slot)?({arma:'ew',armadura:'ea',capacete:'eh'})[i.slot]+i.num:'';
const noDoNivel=(d,s)=>ITENS.find(i=>i.slot===s&&i.classe===d.classe&&!i.exclusivo&&d.lv>=i.de&&d.lv<=i.ate);
function inventarioDe(d){const ids=new Set(d.itens||[]);const r=ITENS.filter(i=>ids.has(i.id)||(d.nome&&!d.uid&&i.exclusivo===d.nome));for(const s of SL){const x=noDoNivel(d,s);if(x&&!r.includes(x))r.push(x)}return r}
// Nível por classe: d.lv/d.exp = classe ativa (d.classe); as outras ficam guardadas em d.cl[classe]={lv,exp}.
const lvDe=(d,c)=>c===d.classe?d.lv:((d.cl&&d.cl[c]&&d.cl[c].lv)||1);
const visaoDe=(d,c)=>c===d.classe?d:Object.assign({},d,{classe:c,lv:lvDe(d,c),exp:(d.cl&&d.cl[c]&&d.cl[c].exp)||0});
function trocarClasse(d,c){d.cl=d.cl||{};if(d.classe&&d.classe!==c)d.cl[d.classe]={lv:d.lv,exp:d.exp};const x=d.cl[c]||{lv:1,exp:0};d.classe=c;d.lv=x.lv;d.exp=x.exp;d.cl[c]={lv:d.lv,exp:d.exp}}
function equipDe(d){const inv=inventarioDe(d),q=(d.equip&&d.equip[d.classe])||{};
 const melhor=s=>{const e=q[s],esc=e&&inv.find(i=>i.id===e&&i.slot===s&&i.classe===d.classe);if(esc)return esc;return inv.filter(i=>i.slot===s&&i.classe===d.classe).reduce((x,y)=>!x||pot(y)>pot(x)?y:x,undefined)};
 return{arma:melhor('arma'),armadura:melhor('armadura'),capacete:melhor('capacete')}}
const ESC=10;   // escala de todos os status (jogador, itens, monstros): números maiores dão margem para o equilíbrio por faixas de poder (CP)
function statsDe(d){const e=equipDe(d),L=d.lv-1;return{atk:ESC*(50+L)+(e.arma?e.arma.atk||0:0),def:ESC*(25+.5*L)+(e.arma?e.arma.def||0:0)+(e.armadura?e.armadura.def||0:0)+(e.capacete?e.capacete.def||0:0),hp:ESC*(250+3*L)+(e.armadura?e.armadura.hp||0:0)+(e.capacete?e.capacete.hp||0:0),dl:2}}
const num=v=>Math.round(v*10)/10;
// Kit básico de novato (visual padrão e simples, sempre disponível, igual para todas as classes; sem número/código). O resto do equipamento é exclusivo/especial.
(()=>{const A={guerreiro:'Machado Simples',tank:'Maça Simples',mago:'Cajado Simples',healer:'Cetro Simples'},H={guerreiro:'Capacete de Novato',tank:'Capacete de Novato',mago:'Chapéu de Novato',healer:'Capuz de Novato'};
 for(const c of Object.keys(A)){const o={classe:c,tema:'novato',tier:1,de:1,ate:9999};
  ITENS.push(Object.assign({id:'basico-'+c+'-arma',pasta:'armas',slot:'arma',nome:A[c]},o,c==='tank'?{atk:3,def:10}:{atk:10}),Object.assign({id:'basico-'+c+'-armadura',pasta:'armaduras',slot:'armadura',nome:'Roupa de Novato',def:5},o),Object.assign({id:'basico-'+c+'-capacete',pasta:'armaduras',slot:'capacete',nome:H[c],hp:100},o))}})();

// Desenho dos personagens por classe (usado no jogo e na tela Personagens).
// O visual de cada faixa de 10 níveis vem de TEMAS (js/temas.js): cores, brilhos e efeitos.
const PELE=['#fcd9b6','#f1c27d','#c68642','#8d5524'],CAB=['#4a2c12','#1f1a14','#d97706','#facc15','#7c3aed','#ef4444','#38bdf8','#f5f5f4'];
const OL='#1f1a14',OURO='#fbbf24';
function faiscas(T,x,y,n,r,cor){ctx.fillStyle=cor;for(let i=0;i<n;i++){const a=T*2+i*6.283/n;ci(x+Math.cos(a)*r,y+Math.sin(a)*r*.8,1.5)}}
function glow(x,y,r,cor,a){const g=ctx.createRadialGradient(x,y,1,x,y,r);g.addColorStop(0,cor+a);g.addColorStop(1,cor+'00');ctx.fillStyle=g;ci(x,y,r)}

// ---- ajudantes de pintura: sombreado, contorno, braços ----
const hx=c=>/^#[0-9a-f]{6}$/i.test(c)?[1,3,5].map(i=>parseInt(c.substr(i,2),16)):[128,128,128];
function luz(c,k){const a=hx(c),t=k>0?255:0,f=Math.abs(k);return'rgb('+a.map(v=>Math.round(v+(t-v)*f)).join(',')+')'}
function grad(x0,y0,x1,y1,c,k1,k2){const g=ctx.createLinearGradient(x0,y0,x1,y1);g.addColorStop(0,luz(c,k1==null?.3:k1));g.addColorStop(1,luz(c,k2==null?-.3:k2));return g}
function forma(fn,fill,lw){ctx.beginPath();fn();ctx.closePath();ctx.fillStyle=fill;ctx.fill();ctx.lineWidth=lw||1.4;ctx.strokeStyle=OL;ctx.lineJoin='round';ctx.stroke()}
function braco(x0,y0,x1,y1,c,w){ctx.lineCap='round';ctx.strokeStyle=OL;ctx.lineWidth=w+2.6;ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(x1,y1);ctx.stroke();ctx.strokeStyle=c;ctx.lineWidth=w;ctx.stroke();ctx.lineCap='butt'}
const mao=(px,py,a,x,y)=>[px+x*Math.cos(a)-y*Math.sin(a),py+x*Math.sin(a)+y*Math.cos(a)];
function joia(x,y,r,c){co(x,y,r,c);ctx.fillStyle='rgba(255,255,255,.7)';ci(x-r*.3,y-r*.3,r*.35)}
function estrela(x,y,r,c){ctx.fillStyle=c;ctx.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4-Math.PI/2,q=i%2?r*.4:r;i?ctx.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q):ctx.moveTo(x+Math.cos(a)*q,y+Math.sin(a)*q)}ctx.closePath();ctx.fill()}
function capa(tm,tier,T,bob){if(tier<4)return;const sw=Math.sin(T*2.2)*2.5,L=tier>=7?22:19;
 forma(()=>{ctx.moveTo(-12,-39-bob);ctx.lineTo(12,-39-bob);ctx.quadraticCurveTo(L+4+sw,-20,L+sw*1.6,-1);ctx.lineTo(-L+sw*.6,-1);ctx.quadraticCurveTo(-L-4+sw*.5,-20,-12,-39-bob)},grad(0,-40,0,0,tm.cor2,.1,-.35));
 ctx.strokeStyle=tm.cor;ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(-L+sw*.6,-1.5);ctx.lineTo(L+sw*1.6,-1.5);ctx.stroke()}

// ---- KIT DRACÔNICO (exclusivo do TESTEBETA): aura de fogo, asas e cauda de dragão, chifres, olhos em brasa ----
function chama(x,y,h,w,T,sd,c1,c2){const sway=Math.sin(T*9+sd)*w*.6,hh=h*(.75+.25*Math.sin(T*11+sd*1.7));
 ctx.fillStyle=c1;ctx.beginPath();ctx.moveTo(x-w,y);ctx.quadraticCurveTo(x-w*.9,y-hh*.55,x+sway,y-hh);ctx.quadraticCurveTo(x+w*.9,y-hh*.5,x+w,y);ctx.closePath();ctx.fill();
 ctx.fillStyle=c2;ctx.beginPath();ctx.moveTo(x-w*.5,y);ctx.quadraticCurveTo(x-w*.4,y-hh*.35,x+sway*.6,y-hh*.62);ctx.quadraticCurveTo(x+w*.4,y-hh*.3,x+w*.5,y);ctx.closePath();ctx.fill()}
const FOGO1='rgba(255,80,0,.85)',FOGO2='rgba(255,215,90,.95)';
function aura(T,frente){ctx.save();ctx.globalCompositeOperation='lighter';
 if(!frente){glow(0,-32,78+Math.sin(T*3)*5,'#ff4d00','66');glow(0,-30,42,'#ffb300','55');
  const g=ctx.createLinearGradient(0,0,0,-110);g.addColorStop(0,'rgba(255,120,20,.28)');g.addColorStop(1,'rgba(255,120,20,0)');ctx.fillStyle=g;ctx.fillRect(-30,-110,60,110);
  ctx.strokeStyle='rgba(255,140,30,.75)';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(0,0,38,12,0,0,7);ctx.stroke();
  ctx.setLineDash([6,5]);ctx.lineDashOffset=-T*24;ctx.strokeStyle='rgba(255,220,120,.9)';ctx.beginPath();ctx.ellipse(0,0,29,9,0,0,7);ctx.stroke();ctx.setLineDash([]);
  for(let i=0;i<14;i++){const a=i*Math.PI*2/14+T*.4,s=Math.sin(a);if(s<=0)chama(Math.cos(a)*36,s*11,20+10*Math.sin(T*5+i),5,T,i,FOGO1,FOGO2)}}
 else{for(let i=0;i<14;i++){const a=i*Math.PI*2/14+T*.4,s=Math.sin(a);if(s>0)chama(Math.cos(a)*36,s*11,18+9*Math.sin(T*5+i),4.6,T,i,FOGO1,FOGO2)}
  for(let i=0;i<18;i++){const t=(T*.45+i/18)%1,x=Math.sin(T*1.4+i*2.3)*(20+t*14),y=-t*105;ctx.globalAlpha=(1-t)*.95;ctx.fillStyle=i%3?'#ffb347':'#fff3b0';ctx.beginPath();ctx.arc(x,y-4,2.3*(1-t)+.6,0,7);ctx.fill()}}
 ctx.restore()}
function asas(T,bob){const flap=Math.sin(T*2.6)*.17;
 for(const s of[-1,1]){ctx.save();ctx.translate(s*5,-34-bob);ctx.rotate(s*(flap-.06));
  const W=[s*26,-36],F=[[s*66,-44],[s*72,-14],[s*56,12],[s*32,24]],B=[s*4,16],mid=(a,b)=>[(a[0]+b[0])/2*.74,(a[1]+b[1])/2*.74+4];
  const c01=mid(F[0],F[1]),c12=mid(F[1],F[2]),c23=mid(F[2],F[3]);
  const mb=()=>{ctx.moveTo(0,0);ctx.lineTo(W[0],W[1]);ctx.lineTo(F[0][0],F[0][1]);ctx.quadraticCurveTo(c01[0],c01[1],F[1][0],F[1][1]);ctx.quadraticCurveTo(c12[0],c12[1],F[2][0],F[2][1]);ctx.quadraticCurveTo(c23[0],c23[1],F[3][0],F[3][1]);ctx.lineTo(B[0],B[1])};
  const g=ctx.createLinearGradient(0,0,s*70,-10);g.addColorStop(0,'#3b0707');g.addColorStop(.5,'#b91c1c');g.addColorStop(1,'#f97316');
  forma(mb,g,1.6);
  ctx.save();ctx.beginPath();mb();ctx.clip();ctx.globalCompositeOperation='lighter';glow(s*40,-8,42,'#ff6a00',Math.round(70+Math.sin(T*3)*30).toString(16).padStart(2,'0'));ctx.restore();
  ctx.strokeStyle='rgba(255,200,120,.35)';ctx.lineWidth=1;for(const f of F){ctx.beginPath();ctx.moveTo(W[0]*.6,W[1]*.6+10);ctx.lineTo(f[0]*.92,f[1]*.92+3);ctx.stroke()}
  ctx.lineCap='round';for(const[w,c]of[[5.2,OL],[3,'#fbbf24']]){ctx.strokeStyle=c;ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(W[0],W[1]);ctx.lineTo(F[0][0],F[0][1]);for(const f of F.slice(1)){ctx.moveTo(W[0],W[1]);ctx.lineTo(f[0],f[1])}ctx.stroke()}ctx.lineCap='butt';
  forma(()=>{ctx.moveTo(W[0]-s*3,W[1]);ctx.lineTo(W[0]+s*2,W[1]-12);ctx.lineTo(W[0]+s*5,W[1]+1)},'#fde68a',1.2);
  for(const f of F)forma(()=>{ctx.moveTo(f[0]-s*2,f[1]);ctx.lineTo(f[0]+s*5,f[1]+(f[1]<-20?-6:4));ctx.lineTo(f[0],f[1]+4)},'#fde68a',1);
  ctx.restore()}}
function cauda(T,bob){const k=Math.sin(T*2.2),P=[[-6,-10],[-28,-4+k*3],[-46,-24+k*8],[-58,-8+k*10]],bz=t=>{const u=1-t;return[0,1].map(i=>u*u*u*P[0][i]+3*u*u*t*P[1][i]+3*u*t*t*P[2][i]+t*t*t*P[3][i])};
 ctx.lineCap='round';for(const[w,c]of[[9,OL],[6.4,'#991b1b']]){ctx.strokeStyle=c;ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(P[0][0],P[0][1]);ctx.bezierCurveTo(P[1][0],P[1][1],P[2][0],P[2][1],P[3][0],P[3][1]);ctx.stroke()}ctx.lineCap='butt';
 for(const t of[.28,.5,.72]){const p=bz(t);forma(()=>{ctx.moveTo(p[0]-3,p[1]-2);ctx.lineTo(p[0]-1,p[1]-10);ctx.lineTo(p[0]+3,p[1]-2)},'#fbbf24',1)}
 const e=bz(1);forma(()=>{ctx.moveTo(e[0]+2,e[1]-6);ctx.lineTo(e[0]-10,e[1]);ctx.lineTo(e[0]+2,e[1]+6);ctx.lineTo(e[0]-1,e[1])},'#fbbf24',1.2);
 ctx.save();ctx.globalCompositeOperation='lighter';chama(e[0]-8,e[1]+1,12,3.4,T,9,FOGO1,FOGO2);ctx.restore()}
function cornosDraco(T,bob){for(const s of[-1,1]){forma(()=>{ctx.moveTo(s*7,-58-bob);ctx.quadraticCurveTo(s*25,-60-bob,s*24,-84-bob);ctx.quadraticCurveTo(s*17,-69-bob,s*5,-62-bob)},grad(0,-84,0,-58,'#fde68a',.2,-.15),1.4);
  ctx.strokeStyle='rgba(120,53,15,.5)';ctx.lineWidth=1;for(const t of[.35,.6]){ctx.beginPath();ctx.moveTo(s*(7+t*9),-61-bob-t*8);ctx.lineTo(s*(5+t*12),-63-bob-t*12);ctx.stroke()}}
 ctx.save();ctx.globalCompositeOperation='lighter';for(const[x,h]of[[-6,13],[0,18],[6,13]])chama(x,-62-bob,h,3.4,T,x,FOGO1,FOGO2);ctx.restore()}
function dracoArma(cl,tm,T,cast){ctx.save();
 if(cl==='guerreiro'){ctx.globalCompositeOperation='lighter';for(const s of[1,-1])for(let i=0;i<7;i++){const t=.3+i*.1,u=1-t,x=s*(u*u*2.4+2*u*t*30+t*t*25),y=u*u*-49+2*u*t*-60+t*t*-22;chama(x+s*2,y,10+4*Math.sin(T*8+i),3,T,i+s*3,FOGO1,FOGO2)}
  ctx.globalCompositeOperation='source-over';ctx.fillStyle='rgba(255,200,80,.6)';for(const s of[1,-1])for(let i=0;i<3;i++)ci(s*(10+i*5),-44+i*6,1.2)}
 else if(cl==='tank'){forma(()=>{ctx.moveTo(0,-19);ctx.lineTo(-10,-11);ctx.lineTo(-7,3);ctx.lineTo(0,10);ctx.lineTo(7,3);ctx.lineTo(10,-11)},'#fbbf24',1.3);
  for(const s of[-1,1]){forma(()=>{ctx.moveTo(s*8,-14);ctx.quadraticCurveTo(s*17,-19,s*15,-30);ctx.quadraticCurveTo(s*11,-21,s*5,-17)},'#fde68a',1.1);forma(()=>{ctx.moveTo(s*2,-8);ctx.lineTo(s*8,-6);ctx.lineTo(s*3,-3)},'#7f1d1d',1)}
  ctx.globalCompositeOperation='lighter';glow(-4,-6,5,'#ff5a00','ff');glow(4,-6,5,'#ff5a00','ff');for(let i=0;i<5;i++)chama(-12+i*6,-29,12+4*Math.sin(T*7+i),3,T,i,FOGO1,FOGO2)}
 else if(cl==='mago'){for(const s of[-1,1])forma(()=>{ctx.moveTo(s*9,-55);ctx.quadraticCurveTo(s*17,-66,s*7,-74);ctx.quadraticCurveTo(s*12,-65,s*6,-56)},'#fbbf24',1.2);
  ctx.globalCompositeOperation='lighter';glow(0,-62,20+cast*14,'#ff4d00','aa');for(let i=0;i<4;i++){const a=T*3+i*1.57;chama(Math.cos(a)*5,-58+Math.sin(a)*2,10,2.6,T,i,FOGO1,FOGO2)}ctx.globalCompositeOperation='source-over';co(0,-62,5.4+cast*3,'#ff7a1a');ctx.fillStyle='rgba(255,240,170,.9)';ci(-1.5,-63.5,2)}
 else{ctx.globalCompositeOperation='lighter';glow(0,-56,22+cast*14,'#ff4d00','aa');for(let i=0;i<6;i++){const a=i*Math.PI/3+T;chama(Math.cos(a)*9,-56+Math.sin(a)*9+3,7,2,T,i,FOGO1,FOGO2)}}
 ctx.restore()}

// ---- ARMADURA DA RAINHA DA NEVE (exclusiva do TESTEBETA, mago): vestido de gelo, pele branca, tiara de cristal, véu, cabelos longos e neve caindo ----
function copo(x,y,r,c,lw){ctx.save();ctx.translate(x,y);ctx.strokeStyle=c;ctx.lineWidth=lw||1.1;ctx.lineCap='round';ctx.beginPath();for(let i=0;i<6;i++){const a=i*Math.PI/3;ctx.moveTo(0,0);ctx.lineTo(Math.cos(a)*r,Math.sin(a)*r);const bx=Math.cos(a)*r*.58,by=Math.sin(a)*r*.58;for(const s of[-1,1]){ctx.moveTo(bx,by);ctx.lineTo(bx+Math.cos(a+s*.9)*r*.34,by+Math.sin(a+s*.9)*r*.34)}}ctx.stroke();ctx.restore()}
function pelo(x,y,r,n,c){ctx.fillStyle=c;for(let i=0;i<n;i++){const a=i*6.283/n;ci(x+Math.cos(a)*r,y+Math.sin(a)*r*.8,r*.62)}ci(x,y,r*.8)}
function brilho(x,y,r,T,sd){const k=.5+.5*Math.sin(T*4+sd);ctx.save();ctx.globalAlpha=k;ctx.fillStyle='#fff';ctx.beginPath();for(let i=0;i<8;i++){const a=i*Math.PI/4,q=i%2?r*.28:r;ctx.lineTo(x+Math.cos(a)*q,y+Math.sin(a)*q)}ctx.closePath();ctx.fill();ctx.restore()}
function auraNeve(T,frente){ctx.save();
 if(!frente){ctx.globalCompositeOperation='lighter';glow(0,-34,66+Math.sin(T*2)*4,'#bfe6ff','55');glow(0,-30,34,'#ffffff','33');ctx.globalCompositeOperation='source-over';
  ctx.fillStyle='rgba(205,240,255,.2)';ctx.strokeStyle='rgba(200,240,255,.85)';ctx.lineWidth=1.8;ctx.beginPath();ctx.ellipse(0,0,36,11,0,0,7);ctx.fill();ctx.stroke();
  ctx.setLineDash([3,6]);ctx.lineDashOffset=T*14;ctx.strokeStyle='rgba(255,255,255,.9)';ctx.beginPath();ctx.ellipse(0,0,27,8.2,0,0,7);ctx.stroke();ctx.setLineDash([]);
  for(let i=0;i<10;i++){const a=i*Math.PI/5,s=Math.sin(a);if(s<=.05){const x=Math.cos(a)*36,y=s*11;ctx.fillStyle='rgba(225,245,255,.95)';ctx.strokeStyle='rgba(120,190,235,.9)';ctx.lineWidth=.9;ctx.beginPath();ctx.moveTo(x-2.4,y);ctx.lineTo(x,y-6-(i%3)*2);ctx.lineTo(x+2.4,y);ctx.closePath();ctx.fill();ctx.stroke()}}}
 else{for(let i=0;i<10;i++){const a=i*Math.PI/5,s=Math.sin(a);if(s>.05){const x=Math.cos(a)*36,y=s*11;ctx.fillStyle='rgba(235,248,255,.95)';ctx.strokeStyle='rgba(120,190,235,.9)';ctx.lineWidth=.9;ctx.beginPath();ctx.moveTo(x-2.2,y);ctx.lineTo(x,y-5-(i%3)*2);ctx.lineTo(x+2.2,y);ctx.closePath();ctx.fill();ctx.stroke()}}
  for(let i=0;i<26;i++){const t=(T*.22+i/26)%1,x=Math.sin(i*3.7+T*.7)*(14+(i%5)*6),y=-100+t*104;ctx.globalAlpha=Math.min(1,t*6)*(1-t*.5);if(i%3===0)copo(x,y,3+(i%2)*1.6,'#ffffff',.9);else{ctx.fillStyle='#fff';ci(x,y,1+(i%3)*.5)}}
  ctx.globalAlpha=1;for(let i=0;i<7;i++)brilho(Math.sin(i*2.9)*30,-20-i*11,3+(i%3),T,i*1.7)}
 ctx.restore()}
function capaNeve(T,bob){const sw=Math.sin(T*2)*2.5;ctx.save();
 const g=ctx.createLinearGradient(0,-38,0,0);g.addColorStop(0,'rgba(255,255,255,.75)');g.addColorStop(.6,'rgba(190,230,252,.5)');g.addColorStop(1,'rgba(150,210,245,.28)');
 ctx.beginPath();ctx.moveTo(-8,-38-bob);ctx.lineTo(8,-38-bob);ctx.quadraticCurveTo(20+sw,-18,19+sw*1.6,1);for(let x=19;x>-19;x-=7.6)ctx.quadraticCurveTo(x-3.8+sw*.7,5,x-7.6+sw*.7,1);ctx.quadraticCurveTo(-20+sw*.5,-18,-8,-38-bob);ctx.closePath();
 ctx.fillStyle=g;ctx.fill();ctx.strokeStyle='rgba(255,255,255,.9)';ctx.lineWidth=1.3;ctx.stroke();
 ctx.save();ctx.clip();for(const[x,y,r]of[[-13,-16,4],[12,-22,3.6],[-9,-30,3],[14,-8,4],[-15,-4,3],[6,-12,2.6]])copo(x+sw*.5,y,r,'rgba(255,255,255,.85)',.9);ctx.restore();ctx.restore()}
function cabeloLongo(c,T,bob,yb){const sw=Math.sin(T*2.2)*1.4,g=ctx.createLinearGradient(0,-56,0,yb);g.addColorStop(0,luz(c,.3));g.addColorStop(.55,c);g.addColorStop(1,luz(c,-.32));
 forma(()=>{ctx.moveTo(-13,-54-bob);ctx.bezierCurveTo(-24,-46,-21+sw,(yb-54)/2-12,-15+sw,yb);ctx.quadraticCurveTo(-7+sw,yb+4,0,yb+1);ctx.quadraticCurveTo(7+sw,yb+4,15+sw,yb);ctx.bezierCurveTo(21+sw,(yb-54)/2-12,24,-46,13,-54-bob)},g,1.2);
 ctx.strokeStyle=luz(c,.5);ctx.globalAlpha=.5;ctx.lineWidth=1;ctx.lineCap='round';ctx.beginPath();for(const k of[-1,1]){ctx.moveTo(k*15,-44);ctx.quadraticCurveTo(k*18+sw*.5*k,-30,k*13+sw,yb+3)}ctx.stroke();ctx.globalAlpha=1;ctx.lineCap='butt'}
function cabeloFrenteC(c,T,bob){const sw=Math.sin(T*2.2+1)*1.1,g=ctx.createLinearGradient(0,-46,0,-24);g.addColorStop(0,luz(c,.25));g.addColorStop(1,luz(c,-.2));
 for(const k of[-1,1])forma(()=>{ctx.moveTo(k*10,-47-bob);ctx.quadraticCurveTo(k*14.5,-37,k*10+sw*k,-26);ctx.quadraticCurveTo(k*7,-35,k*6.5,-45-bob)},g,1)}
function cabeloNeve(T,bob){const sw=Math.sin(T*2.2)*1.6,g=ctx.createLinearGradient(0,-56,0,-8);g.addColorStop(0,'#2a2a3d');g.addColorStop(1,'#07070f');
 forma(()=>{ctx.moveTo(-13,-54-bob);ctx.bezierCurveTo(-23,-44,-19+sw,-24,-13+sw,-10);ctx.quadraticCurveTo(-6+sw,-6,0,-9);ctx.quadraticCurveTo(6+sw,-6,13+sw,-10);ctx.bezierCurveTo(19+sw,-24,23,-44,13,-54-bob)},g,1.1);
 ctx.strokeStyle='rgba(120,170,240,.55)';ctx.lineWidth=1.3;ctx.lineCap='round';for(const s of[-1,1]){ctx.beginPath();ctx.moveTo(s*15,-44-bob);ctx.quadraticCurveTo(s*17.5,-30,s*13+sw*s,-16);ctx.stroke()}ctx.lineCap='butt'}
function cabeloFrente(T,bob){const sw=Math.sin(T*2.2+1)*1.2,g=ctx.createLinearGradient(0,-46,0,-22);g.addColorStop(0,'#2a2a3d');g.addColorStop(1,'#0a0a14');
 for(const s of[-1,1])forma(()=>{ctx.moveTo(s*10,-47-bob);ctx.quadraticCurveTo(s*15,-36,s*10+sw*s,-22);ctx.quadraticCurveTo(s*7,-33,s*6.5,-45-bob)},g,1)}
function tiaraNeve(T,bob){const b=bob,base=-54-b;
 forma(()=>{ctx.moveTo(-11,base);ctx.lineTo(-11.6,base-14);ctx.lineTo(-5.8,base-7.5);ctx.lineTo(0,base-17);ctx.lineTo(5.8,base-7.5);ctx.lineTo(11.6,base-14);ctx.lineTo(11,base)},grad(0,base-17,0,base,'#e6f8ff',0,-.1),1.4);
 ctx.fillStyle='rgba(90,175,235,.4)';ctx.beginPath();ctx.moveTo(0,base-17);ctx.lineTo(5.8,base-7.5);ctx.lineTo(11.6,base-14);ctx.lineTo(11,base);ctx.lineTo(0,base);ctx.closePath();ctx.fill();
 ro(-11.8,base-1.5,23.6,5.6,2.4,grad(0,base-2,0,base+4,'#bfe9ff',.2,-.35));
 for(const[x,y]of[[-11.6,base-14],[0,base-17],[11.6,base-14]]){co(x,y-1.4,2.1,'#f2fbff');ctx.fillStyle='rgba(120,200,245,.7)';ci(x+.5,y-.9,1)}
 joia(0,base+1.3,2.1,'#2f8be8');for(const x of[-7,7])joia(x,base+1.6,1.4,'#a5f3fc');for(const x of[-3.6,3.6])co(x,base+1.6,.9,'#fff');
 brilho(0,base-23,5,T,0);brilho(-11.6,base-19,3,T,2);brilho(11.6,base-19,3,T,4)}
function asasNeve(T,bob){const fl=Math.sin(T*2.2)*.06;
 for(const[sz,ox,oy,rot,tipo]of[[1,0,0,0,0],[.72,0,8,.22,1]])for(const s of[-1,1]){ctx.save();ctx.translate(s*3,-33-bob+oy);ctx.rotate(s*(fl+rot*(tipo?1:0)));ctx.scale(sz,sz);
  const W=()=>{if(!tipo){ctx.moveTo(0,0);ctx.bezierCurveTo(s*10,-36,s*38,-60,s*58,-50);ctx.bezierCurveTo(s*64,-26,s*38,-6,0,4)}else{ctx.moveTo(0,0);ctx.bezierCurveTo(s*22,-6,s*50,8,s*44,34);ctx.bezierCurveTo(s*24,36,s*6,16,0,4)}};
  const g=ctx.createLinearGradient(0,0,s*60,-40);g.addColorStop(0,'rgba(255,255,255,.5)');g.addColorStop(.45,'rgba(200,238,255,.24)');g.addColorStop(1,'rgba(130,210,255,.14)');
  ctx.beginPath();W();ctx.closePath();ctx.fillStyle=g;ctx.fill();
  ctx.save();ctx.beginPath();W();ctx.closePath();ctx.clip();
  ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineWidth=1.1;ctx.beginPath();for(const[x,y]of tipo?[[s*50,10],[s*46,28],[s*30,34],[s*18,30]]:[[s*58,-50],[s*62,-34],[s*54,-16],[s*40,-8],[s*26,-34],[s*44,-52]]){ctx.moveTo(0,2);ctx.lineTo(x,y)}ctx.stroke();
  ctx.strokeStyle='rgba(110,180,230,.55)';ctx.beginPath();for(const r of tipo?[.45,.75]:[.35,.6,.85]){ctx.moveTo(s*tipo*0+(tipo?s*44:s*58)*r,tipo?20*r:-50*r*.8);ctx.lineTo(s*(tipo?36:50)*r*1.1,tipo?36*r:-8*r)}ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,.2)';ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(s*34,tipo?14:-34);ctx.lineTo(s*20,tipo?26:-8);ctx.closePath();ctx.fill();ctx.fillStyle='rgba(120,190,255,.14)';ctx.beginPath();ctx.moveTo(s*34,tipo?14:-34);ctx.lineTo(s*58,tipo?30:-48);ctx.lineTo(s*40,tipo?30:-10);ctx.closePath();ctx.fill();ctx.fillStyle='rgba(255,200,255,.1)';ctx.beginPath();ctx.moveTo(s*20,tipo?26:-8);ctx.lineTo(s*40,tipo?30:-10);ctx.lineTo(s*30,tipo?34:4);ctx.closePath();ctx.fill();
  if(!tipo){copo(s*38,-30,7,'rgba(255,255,255,.9)',1);copo(s*24,-14,3.6,'rgba(255,255,255,.8)',.9)}
  ctx.globalCompositeOperation='lighter';glow(s*34,tipo?18:-26,30,'#bdeaff',Math.round(40+Math.sin(T*3+s)*22).toString(16).padStart(2,'0'));ctx.restore();
  ctx.strokeStyle='rgba(255,255,255,.95)';ctx.lineWidth=2;ctx.beginPath();W();ctx.closePath();ctx.stroke();ctx.strokeStyle='rgba(80,160,225,.85)';ctx.lineWidth=.8;ctx.stroke();
  brilho(s*(tipo?44:58),tipo?30:-48,3.6,T,s+tipo);ctx.restore()}}
function torsoNeve(T,bob,w){const sw=Math.sin(T*2.4)*.7;
 ro(-8+w*2,-5,8,6,3,'#bfe3f7');ro(1-w*2,-5,8,6,3,'#bfe3f7');
 forma(()=>{ctx.moveTo(-7.5,-30);ctx.quadraticCurveTo(-15,-14,-19,-1);ctx.lineTo(19,-1);ctx.quadraticCurveTo(15,-14,7.5,-30)},'rgba(176,222,250,.8)',1);
 const sk=()=>{ctx.moveTo(-6.8,-30);ctx.quadraticCurveTo(-10.5,-17,-14.5,-2);for(let x=-14.5;x<14.4;x+=4.83)ctx.quadraticCurveTo(x+2.4,2.4,x+4.83,-2);ctx.quadraticCurveTo(10.5,-17,6.8,-30)};
 const g=ctx.createLinearGradient(-16,-30,16,0);g.addColorStop(0,'#ffffff');g.addColorStop(.55,'#d7effc');g.addColorStop(1,'#8fcdf0');forma(sk,g,1.3);
 ctx.save();ctx.beginPath();sk();ctx.clip();ctx.strokeStyle='rgba(110,180,225,.32)';ctx.lineWidth=1.2;for(const[a,b]of[[-3,-11],[0,0],[3,11],[-1.5,-6],[1.5,6]]){ctx.beginPath();ctx.moveTo(a,-26);ctx.quadraticCurveTo(a*1.6,-14,b,-1);ctx.stroke()}
  for(const[x,y,r]of[[-8,-8,3],[7,-10,2.8],[0,-6,2.8],[-11,-3,2.2],[11,-4,2.2],[-3,-17,2],[4,-19,2]])copo(x,y,r,'rgba(90,160,215,.8)',.9);
  for(let i=0;i<6;i++)brilho(-10+i*4,-4-((i*7)%20),2,T,i*1.3);ctx.restore();
 for(let x=-13;x<=13;x+=3.7)pelo(x,-3.2,2.3,6,'#ffffff');
 ctx.strokeStyle='rgba(120,190,235,.9)';ctx.lineWidth=.9;for(let x=-11;x<=11;x+=5.5){ctx.fillStyle='rgba(235,248,255,.95)';ctx.beginPath();ctx.moveTo(x-1.8,2.4);ctx.lineTo(x,6);ctx.lineTo(x+1.8,2.4);ctx.closePath();ctx.fill();ctx.stroke()}
 const bd=()=>{ctx.moveTo(-7.4,-38-bob);ctx.lineTo(7.4,-38-bob);ctx.quadraticCurveTo(6.4,-29,5.4,-21);ctx.lineTo(-5.4,-21);ctx.quadraticCurveTo(-6.4,-29,-7.4,-38-bob)};
 forma(bd,grad(-7,-38,7,-21,'#bfe6fb',.45,-.12),1.3);
 ctx.strokeStyle='#94a3b8';ctx.lineWidth=.9;ctx.beginPath();for(let y=-33;y<-22;y+=3.4){ctx.moveTo(-2,y);ctx.lineTo(2,y+3.4);ctx.moveTo(2,y);ctx.lineTo(-2,y+3.4)}ctx.stroke();
 copo(0,-31-bob*.5,3.8,'#3b82f6',1.1);
 ro(-6.2,-24,12.4,3.6,1.8,'#e2e8f0');joia(0,-22.2,2.4,'#38bdf8');
 forma(()=>{ctx.moveTo(4,-21);ctx.lineTo(7.5,-10+sw);ctx.lineTo(5.5,-12+sw);ctx.lineTo(3.8,-8+sw);ctx.lineTo(1.5,-21)},'#8fd3f5',1);
 ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(0,-37.5-bob,7.6,2.8,0,0,7);ctx.fill();pelo(-6.4,-37.5-bob,2.4,6,'#fff');pelo(6.4,-37.5-bob,2.4,6,'#fff');pelo(-3,-36.6-bob,2.3,6,'#fff');pelo(3,-36.6-bob,2.3,6,'#fff');
 for(const s of[-1,1]){pelo(s*9.4,-36.6-bob,3.4,7,'#ffffff');ctx.fillStyle='rgba(150,205,240,.4)';ci(s*10,-35-bob,1.6)}}
function cajadoNeve(T,cast){ro(-2.2,-50,4.4,66,2,grad(-2.2,0,2.2,0,'#ffffff',0,-.18));
 ctx.strokeStyle='#7dd3fc';ctx.lineWidth=1.6;ctx.beginPath();for(let y=-46;y<12;y+=7){ctx.moveTo(-2.2,y);ctx.lineTo(2.2,y+4)}ctx.stroke();
 ro(-3.6,-8,7.2,3.4,1.7,'#cbd5e1');ro(-3.6,-30,7.2,3.4,1.7,'#cbd5e1');
 for(const s of[-1,1])forma(()=>{ctx.moveTo(s*2,-48);ctx.quadraticCurveTo(s*13,-52,s*9,-64);ctx.quadraticCurveTo(s*8,-56,s*2,-54)},grad(0,-64,0,-48,'#ffffff',0,-.1),1.1);
 ctx.save();ctx.globalCompositeOperation='lighter';glow(0,-62,24+cast*14,'#7dd3fc','99');glow(0,-62,11,'#ffffff','bb');ctx.restore();
 ctx.strokeStyle=OL;ctx.lineWidth=5.2;copo(0,-62,12,OL,5.2);copo(0,-62,12,'#e0f6ff',3.2);copo(0,-62,12,'#ffffff',1.2);
 forma(()=>{ctx.moveTo(0,-69);ctx.lineTo(5,-62);ctx.lineTo(0,-55);ctx.lineTo(-5,-62)},grad(0,-69,0,-55,'#e6f7ff',0,-.25),1.2);ctx.fillStyle='rgba(255,255,255,.85)';ci(-1.2,-63,1.4);
 for(let i=0;i<3;i++){const a=T*1.7+i*2.094;copo(Math.cos(a)*18,-62+Math.sin(a)*7,3,'#e0f6ff',1)}
 brilho(10,-72,4.5,T,1);brilho(-11,-54,3.4,T,3)}

// ---- cabeça: capacete berserker (guerreiro/tank), chapéu (mago), capuz com auréola (healer) ----
function capacete(C,T,bob){ctx.fillStyle=C.chifre;ctx.strokeStyle=OL;ctx.lineWidth=1.3;
 for(const s of[-1,1]){ctx.beginPath();ctx.moveTo(s*10,-57-bob);ctx.quadraticCurveTo(s*25,-57-bob,s*20,-73-bob);ctx.quadraticCurveTo(s*17,-63-bob,s*8,-61-bob);ctx.closePath();ctx.fill();ctx.stroke()}
 ctx.beginPath();ctx.arc(0,-52-bob,13.5,Math.PI,0);ctx.closePath();ctx.fillStyle=C.cor;ctx.fill();ctx.stroke();
 ro(-14,-55-bob,28,4.5,2,C.cor2);ro(-1.6,-55-bob,3.2,10,1.5,C.cor2);ctx.fillStyle='rgba(255,255,255,.3)';rr(-8,-63-bob,7,3,1.5);if(C.fx)C.fx(ctx,T,bob)}
function cobertura(cl,tm,T,bob){if(tm.neve){tiaraNeve(T,bob);return}cobertura0(cl,tm,T,bob);if(tm.draco){if(cl==='guerreiro'||cl==='tank'){ctx.save();ctx.globalCompositeOperation='lighter';for(const[x,h]of[[-5,12],[0,17],[5,12]])chama(x,-65-bob,h,3.2,T,x,FOGO1,FOGO2);ctx.restore()}else cornosDraco(T,bob)}}
function cobertura0(cl,tm,T,bob){const C=tm.capacete;
 if(cl==='mago'){ctx.fillStyle=C.cor;ctx.strokeStyle=OL;ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(-12,-57-bob);ctx.quadraticCurveTo(-6,-73-bob,11,-86-bob);ctx.quadraticCurveTo(8,-70-bob,12,-57-bob);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=C.cor2;rr(-12,-62-bob,24,4,1);ctx.beginPath();ctx.ellipse(0,-56-bob,17,4.6,0,0,7);ctx.fill();ctx.stroke();
  ctx.fillStyle=C.chifre;ci(0,-60-bob,2.2);ci(10,-83-bob,2.4+Math.sin(T*6)*.6)}
 else if(cl==='healer'){ctx.lineCap='round';ctx.strokeStyle='#f8fafc';ctx.lineWidth=5;ctx.beginPath();ctx.arc(0,-48-bob,14.5,Math.PI*.8,Math.PI*2.2);ctx.stroke();
  ctx.strokeStyle=tm.cor;ctx.lineWidth=1.6;ctx.beginPath();ctx.arc(0,-48-bob,16.8,Math.PI*.85,Math.PI*2.15);ctx.stroke();ctx.lineCap='butt';
  ctx.strokeStyle='rgba(251,191,36,.35)';ctx.lineWidth=5;ctx.beginPath();ctx.ellipse(0,-68-bob,10,3.5,0,0,7);ctx.stroke();ctx.strokeStyle=OURO;ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(0,-68-bob,10,3.5,0,0,7);ctx.stroke();
  ctx.fillStyle=C.chifre;ci(0,-60-bob,2)}
 else capacete(C,T,bob)}
function nomeCobertura(cl,tm){if(tm.neve)return'Coroa de Gelo da Rainha';if(tm.draco)return'Coroa de Chifres Dracônicos';return(cl==='mago'?'Chapéu de Mago':cl==='healer'?'Capuz de Clérigo':'Capacete Berserker')+' de '+tm.nome}
function rosto(pele,cab,cl,bob){co(0,-48-bob,12,pele);co(-12,-47-bob,3.5,pele);co(12,-47-bob,3.5,pele);
 ctx.fillStyle='rgba(255,255,255,.22)';ctx.beginPath();ctx.ellipse(-4,-55-bob,5,2.6,-.3,0,7);ctx.fill();
 if(cl==='mago'||cl==='healer'){ctx.fillStyle=cab;ctx.beginPath();ctx.arc(0,-50-bob,13,Math.PI,0);ctx.fill();ctx.lineWidth=1.3;ctx.strokeStyle=OL;ctx.stroke();
  ctx.fillStyle=cab;ctx.beginPath();ctx.moveTo(-12,-52-bob);ctx.quadraticCurveTo(-4,-45-bob,8,-53-bob);ctx.lineTo(8,-58-bob);ctx.lineTo(-12,-58-bob);ctx.fill();
  forma(()=>{ctx.moveTo(-14,-52-bob);ctx.lineTo(-9,-52-bob);ctx.lineTo(-9.5,-36-bob);ctx.quadraticCurveTo(-12,-33-bob,-14.5,-37-bob)},cab,1.3);
  forma(()=>{ctx.moveTo(14,-52-bob);ctx.lineTo(9,-52-bob);ctx.lineTo(9.5,-38-bob);ctx.quadraticCurveTo(12,-35-bob,14.5,-39-bob)},cab,1.3)}
 const cas=cl==='mago'||cl==='healer';
 if(!cas){ctx.fillStyle='#fff';ci(-3,-48.5-bob,3.4);ci(5,-48.5-bob,3.4);ctx.fillStyle=OL;ci(-2,-48.2-bob,2);ci(6,-48.2-bob,2);ctx.fillStyle='#fff';ci(-1.4,-49-bob,.8);ci(6.6,-49-bob,.8)}
 else{const ir=['#2563eb','#7c3aed','#059669','#b45309','#0891b2','#be185d'][(String(cab).charCodeAt(2)||0)%6];
  for(const x of[-3,5.6]){ctx.fillStyle='#fff';ctx.beginPath();ctx.ellipse(x,-48.4-bob,3.5,4,0,0,7);ctx.fill();ctx.fillStyle=ir;ctx.beginPath();ctx.ellipse(x+.4,-48-bob,2.7,3.2,0,0,7);ctx.fill();ctx.fillStyle=luz(ir,-.45);ctx.beginPath();ctx.ellipse(x+.4,-47.8-bob,1.5,1.9,0,0,7);ctx.fill();ctx.fillStyle='#fff';ci(x-.6,-49.6-bob,1.1);ci(x+1.5,-46.6-bob,.55);
   ctx.strokeStyle=OL;ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(x,-48.6-bob,3.7,Math.PI*1.08,Math.PI*1.92);ctx.stroke()}
  ctx.strokeStyle=OL;ctx.lineWidth=1.1;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-6.4,-50.4-bob);ctx.lineTo(-8,-52.2-bob);ctx.moveTo(9.2,-50.4-bob);ctx.lineTo(10.8,-52.2-bob);ctx.stroke();ctx.lineCap='butt'}
 ctx.strokeStyle=OL;ctx.lineWidth=1.3;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(-6,-53.5-bob);ctx.lineTo(-1,-52.8-bob);ctx.moveTo(3,-52.8-bob);ctx.lineTo(8.5,-53.5-bob);ctx.stroke();ctx.lineCap='butt';
 ctx.fillStyle='rgba(244,114,182,.5)';ci(-8,-43.5-bob,2.6);ci(10,-43.5-bob,2.6);ctx.strokeStyle=cas?'#be3a55':'#7c2d12';ctx.lineWidth=cas?1.5:1.2;ctx.beginPath();ctx.arc(1,-44.5-bob,2.4,.2,Math.PI-.2);ctx.stroke()}

// ---- armas (origem = mão): machado de duas mãos, escudão, cajado, cetro ----
function armaDesenho(cl,tm,tier,T,pele,cast,semMao){if(tm.neve){cajadoNeve(T,cast);return}armaBase(cl,tm,tier,T,pele,cast,semMao);if(tm.draco)dracoArma(cl,tm,T,cast)}
function armaBase(cl,tm,tier,T,pele,cast,semMao){const g=tm.arma,E=tm.esc;
 if(cl==='guerreiro'){ctx.lineWidth=1.3;ro(-2.4,-50,4.8,66,2,grad(-2.4,0,2.4,0,'#7a4a24',.25,-.3));ctx.strokeStyle='rgba(0,0,0,.35)';ctx.lineWidth=1.4;for(let y=-14;y<10;y+=4){ctx.beginPath();ctx.moveTo(-2.4,y);ctx.lineTo(2.4,y+2);ctx.stroke()}
  forma(()=>{ctx.moveTo(-2.4,-50);ctx.lineTo(0,-62);ctx.lineTo(2.4,-50)},g.cor);
  for(const s of[1,-1]){forma(()=>{ctx.moveTo(s*2.4,-49);ctx.quadraticCurveTo(s*30,-60,s*25,-22);ctx.quadraticCurveTo(s*13,-29,s*2.4,-27)},grad(0,-60,s*26,-24,g.cor,.45,-.3),1.5);
   ctx.strokeStyle=luz(g.cor,.75);ctx.lineWidth=1.7;ctx.beginPath();ctx.moveTo(s*26,-54);ctx.quadraticCurveTo(s*29.5,-40,s*24,-24);ctx.stroke();
   ctx.strokeStyle=g.cor2;ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(s*5,-46);ctx.quadraticCurveTo(s*14,-44,s*18,-33);ctx.stroke()}
  ro(-4,-36,8,10,3,g.cor2);joia(0,-31,2.6,tier>=3?(tm.glow||'#f87171'):g.cor);ro(-3.4,-6,6.8,3,1.5,g.cor2);ro(-3.4,6,6.8,3,1.5,g.cor2);
  forma(()=>{ctx.moveTo(-2.6,16);ctx.lineTo(0,23);ctx.lineTo(2.6,16)},g.cor2);
  if(!semMao){co(0,-8,3.8,pele);co(0,4,3.8,pele)}
  if(tier>=5)faiscas(T,0,-42,Math.min(7,tier-2),26,tm.glow||'#fff')}
 else if(cl==='tank'){const esc=()=>{ctx.moveTo(-17,-29);ctx.lineTo(17,-29);ctx.lineTo(17,5);ctx.quadraticCurveTo(17,25,0,33);ctx.quadraticCurveTo(-17,25,-17,5)};
  forma(esc,grad(-17,-29,17,29,E.cor,.35,-.3),2);
  ctx.save();ctx.scale(.82,.84);ctx.translate(0,1);ctx.beginPath();esc();ctx.closePath();ctx.restore();
  ctx.save();ctx.translate(0,1);ctx.scale(.84,.85);ctx.beginPath();esc();ctx.closePath();ctx.strokeStyle=E.cor2;ctx.lineWidth=3.2;ctx.stroke();ctx.restore();
  ctx.fillStyle='rgba(255,255,255,.28)';rr(-14.5,-26,4,32,2);
  ctx.fillStyle=E.cor2;rr(-2,-25,4,52,2);rr(-13,-6,26,4,2);
  for(const[a,b]of[[-13,-24],[13,-24],[-14,3],[14,3],[-8,19],[8,19]])co(a,b,1.8,luz(E.cor2,.35));
  ctx.save();ctx.scale(1.35,1.35);ctx.translate(0,-1);if(E.fx)E.fx(ctx,T);ctx.restore();
  joia(0,-4,5.2,tm.glow||'#fbbf24');
  if(tier>=6){forma(()=>{ctx.moveTo(-6,-29);ctx.lineTo(0,-41);ctx.lineTo(6,-29)},E.cor2,1.3)}}
 else if(cl==='mago'){ro(-2.2,-52,4.4,68,2,grad(-2.2,0,2.2,0,'#8a5a30',.3,-.3));ctx.fillStyle='rgba(255,255,255,.22)';rr(-1,-50,1.2,62,.6);
  ctx.strokeStyle='rgba(0,0,0,.3)';ctx.lineWidth=1.2;for(const y of[-30,-8]){ctx.beginPath();ctx.moveTo(-2.2,y);ctx.lineTo(2.2,y+2);ctx.stroke()}
  ctx.strokeStyle=OL;ctx.lineWidth=5.2;ctx.beginPath();ctx.arc(0,-58,8.6,Math.PI*.02,Math.PI*.98);ctx.stroke();ctx.strokeStyle=g.cor2;ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,-58,8.6,Math.PI*.02,Math.PI*.98);ctx.stroke();
  for(const s of[-1,1])joia(s*8.6,-58,2,luz(g.cor2,.3));
  glow(0,-62,14+cast*14,tm.glow||g.cor,'99');co(0,-62,5.6+cast*3,g.cor);ctx.fillStyle='rgba(255,255,255,.85)';ci(-1.8,-64,1.7);ctx.fillStyle='rgba(0,0,0,.18)';ctx.beginPath();ctx.arc(0,-62,5,.2,1.5);ctx.lineTo(0,-62);ctx.fill();
  if(tier>=3){ctx.strokeStyle=(tm.glow||g.cor)+'bb';ctx.lineWidth=1.3;ctx.beginPath();ctx.ellipse(0,-62,12,4,T*1.5,0,7);ctx.stroke()}
  if(tier>=5)for(let i=0;i<2;i++){const a=T*2+i*Math.PI;estrela(Math.cos(a)*14,-62+Math.sin(a)*5,2.6,tm.glow||'#fff')}
  if(!semMao)co(0,-4,3.8,pele);if(tier>=4)faiscas(T,0,-62,Math.min(7,tier-1),15,tm.glow||'#fff')}
 else{ro(-2,-44,4,60,2,grad(-2,0,2,0,'#fde68a',.3,-.3));ctx.strokeStyle='rgba(180,83,9,.5)';ctx.lineWidth=1.2;for(const y of[-24,-4,10]){ctx.beginPath();ctx.moveTo(-2,y);ctx.lineTo(2,y+1.6);ctx.stroke()}
  if(tier>=3){ctx.save();ctx.translate(0,-46);ctx.scale(.7,.7);ctx.translate(0,46);for(const s of[-1,1])forma(()=>{ctx.moveTo(s*3,-48);ctx.quadraticCurveTo(s*15,-64,s*27,-52);ctx.quadraticCurveTo(s*20,-51,s*23,-45);ctx.quadraticCurveTo(s*15,-46,s*17,-40);ctx.quadraticCurveTo(s*9,-43,s*3,-42)},(tm.draco?'#b91c1c':'#f8fafc'),1.2);ctx.restore()}
  glow(0,-56,15+cast*14,tm.glow||g.cor,'88');ctx.strokeStyle=OL;ctx.lineWidth=5;ctx.beginPath();ctx.arc(0,-56,8,0,7);ctx.stroke();ctx.strokeStyle=OURO;ctx.lineWidth=3;ctx.beginPath();ctx.arc(0,-56,8,0,7);ctx.stroke();
  ctx.strokeStyle=OURO;ctx.lineWidth=2;for(let i=0;i<8;i++){const a=i*Math.PI/4+T*.8;ctx.beginPath();ctx.moveTo(Math.cos(a)*11,-56+Math.sin(a)*11);ctx.lineTo(Math.cos(a)*15,-56+Math.sin(a)*15);ctx.stroke()}
  co(0,-56,4.6+cast*2,g.cor);ctx.fillStyle='rgba(255,255,255,.85)';ci(-1.5,-57.5,1.4);if(!semMao)co(0,-4,3.8,pele);if(tier>=4)faiscas(T,0,-56,Math.min(7,tier-1),19,'#fff')}}

// ---- corpo (pernas + tronco) por classe ----
function torso(cl,tm,tier,T,bob,w){if(tm.neve){torsoNeve(T,bob,w);return}const ac=tm.cor,ac2=tm.cor2,ouro='#fcd34d';
 if(cl==='mago'||cl==='healer'){const cu=cl==='healer',rc=cu?'#eef2f7':ac,tr=cu?ac:ac2;
  ro(-9+w*2,-5,9,6,3,'#3b2a1a');ro(1-w*2,-5,9,6,3,'#3b2a1a');
  const rb=()=>{ctx.moveTo(-11,-38-bob);ctx.lineTo(11,-38-bob);ctx.quadraticCurveTo(12.5,-26,10,-19);ctx.quadraticCurveTo(15,-10,19,-2);ctx.lineTo(-19,-2);ctx.quadraticCurveTo(-15,-10,-10,-19);ctx.quadraticCurveTo(-12.5,-26,-11,-38-bob)};
  forma(rb,grad(-16,-38,17,-4,rc,.3,-.25));
  ctx.strokeStyle='rgba(0,0,0,.16)';ctx.lineWidth=1.3;for(const[a,b]of[[-6,-9],[0,0],[6,9]]){ctx.beginPath();ctx.moveTo(a*.7,-18);ctx.lineTo(b,-3);ctx.stroke()}
  ctx.save();ctx.beginPath();rb();ctx.clip();if(tm.fx)tm.fx(ctx,T,bob);ctx.restore();
  forma(()=>{ctx.moveTo(-16,-7);ctx.lineTo(16,-7);ctx.lineTo(19,-2);ctx.lineTo(-19,-2)},tr,1.3);
  if(tier>=2)for(const x of[-11,-4,4,11])co(x,-4.5,1.2,OURO);
  if(cu){forma(()=>{ctx.moveTo(-3.6,-38-bob);ctx.lineTo(3.6,-38-bob);ctx.lineTo(4.4,-3);ctx.lineTo(-4.4,-3)},tr,1.2);ctx.fillStyle='#fff';rr(-1,-35-bob,2,10,1);rr(-4.5,-32-bob,9,2,1)}
  else{if(tier>=3)estrela(0,-30-bob*.5,3.4,OURO)}
  ro(-12,-23,24,4.6,2,tr);joia(0,-20.7,2.5,ouro);
  ctx.fillStyle=tr;ctx.beginPath();ctx.ellipse(0,-37-bob,9,3.2,0,0,7);ctx.fill();ctx.lineWidth=1.3;ctx.strokeStyle=OL;ctx.stroke();
  co(-12,-35-bob,4.6,rc);co(12,-35-bob,4.6,rc);ctx.fillStyle='rgba(255,255,255,.35)';ci(-12.8,-36.5-bob,2.2);ci(11.2,-36.5-bob,2.2)}
 else if(cl==='tank'){
  forma(()=>{ctx.roundRect(-14+w*3,-16,11,17,3)},grad(0,-16,0,0,ac2,.15,-.25));forma(()=>{ctx.roundRect(3-w*3,-16,11,17,3)},grad(0,-16,0,0,ac2,.15,-.25));
  ro(-15+w*3,-6,13,7,3,'#3b2a1a');ro(2-w*3,-6,13,7,3,'#3b2a1a');
  for(const x of[-17,-6,5])forma(()=>{ctx.roundRect(x,-17,12,13,3)},grad(0,-17,0,-4,ac2,.2,-.2),1.3);
  const pl=()=>{ctx.roundRect(-17,-41-bob,34,28+bob,10)};
  forma(pl,grad(-17,-41,17,-13,ac,.38,-.3),1.6);
  ctx.save();ctx.beginPath();pl();ctx.clip();if(tm.fx)tm.fx(ctx,T,bob);
  ctx.strokeStyle='rgba(0,0,0,.22)';ctx.lineWidth=1.4;for(const y of[-31,-24]){ctx.beginPath();ctx.moveTo(-17,y);ctx.quadraticCurveTo(0,y+4,17,y);ctx.stroke()}
  ctx.fillStyle='rgba(255,255,255,.28)';rr(-14,-39-bob,9,5,2.5);ctx.fillStyle='rgba(0,0,0,.18)';rr(8,-39-bob,9,27,4);ctx.restore();
  ro(-17,-21,34,6,2,ac2);joia(0,-18,3.6,ouro);
  ctx.fillStyle=ac2;ctx.beginPath();ctx.ellipse(0,-40-bob,10,3.6,0,0,7);ctx.fill();ctx.lineWidth=1.3;ctx.strokeStyle=OL;ctx.stroke();
  for(const s of[-1,1]){co(s*18,-38-bob,9.4,ac);ctx.strokeStyle=ac2;ctx.lineWidth=2.4;ctx.beginPath();ctx.arc(s*18,-38-bob,7,Math.PI*1.1,Math.PI*1.9);ctx.stroke();ctx.fillStyle='rgba(255,255,255,.3)';ci(s*18-2,-41-bob,4);
   if(tier>=3){forma(()=>{ctx.moveTo(s*15,-45-bob);ctx.lineTo(s*18,-56-bob);ctx.lineTo(s*21,-45-bob)},ac2,1.2)}
   if(tier>=6){co(s*18,-30-bob,5.5,ac2)}}}
 else{
  forma(()=>{ctx.roundRect(-10+w*3,-16,9,17,3)},grad(0,-16,0,0,ac2,.15,-.25));forma(()=>{ctx.roundRect(1-w*3,-16,9,17,3)},grad(0,-16,0,0,ac2,.15,-.25));
  ro(-11+w*3,-6,11,7,3,'#3b2a1a');ro(0-w*3,-6,11,7,3,'#3b2a1a');
  const pl=()=>{ctx.roundRect(-12.5,-38-bob,25,27+bob,9)};
  forma(pl,grad(-12,-38,12,-11,ac,.35,-.28),1.5);
  ctx.save();ctx.beginPath();pl();ctx.clip();if(tm.fx)tm.fx(ctx,T,bob);ctx.fillStyle='rgba(255,255,255,.26)';rr(-9,-35-bob,9,5,2.5);ctx.fillStyle='rgba(0,0,0,.18)';rr(6,-36-bob,7,24,4);
  ctx.strokeStyle=ac2;ctx.lineWidth=3.2;ctx.beginPath();ctx.moveTo(-11,-37-bob);ctx.lineTo(11,-13-bob*.5);ctx.moveTo(11,-37-bob);ctx.lineTo(-11,-13-bob*.5);ctx.stroke();ctx.restore();
  ro(-12.5,-20,25,5.4,2,ac2);joia(0,-17.3,3,ouro);
  for(const x of[-11,-3.5,4])forma(()=>{ctx.roundRect(x,-15,7.5,8,2)},ac2,1.1);
  ctx.fillStyle=ac2;ctx.beginPath();ctx.ellipse(0,-37-bob,8.5,3,0,0,7);ctx.fill();ctx.lineWidth=1.3;ctx.strokeStyle=OL;ctx.stroke();
  co(-13,-36-bob,7,ac);ctx.fillStyle='rgba(255,255,255,.3)';ci(-14,-38-bob,3);if(tier>=5)forma(()=>{ctx.moveTo(-16,-41-bob);ctx.lineTo(-14,-50-bob);ctx.lineTo(-11,-42-bob)},ac2,1.1);
  co(12,-35.5-bob,5,ac);ctx.fillStyle='rgba(255,255,255,.3)';ci(11,-37-bob,2.4)}}

// ---- personagem completo (origem = pés, virado para a direita). p = {d:{classe,lv},eq:{arma,armadura},h,sw,mv,cast,buff} ----
function corpo(p,T){const cl=(p.d&&p.d.classe)||'guerreiro',e=p.eq||{},AR=e.armadura,tm=TEMAS[AR?AR.tema:'madeira']||TEMAS.madeira,tier=AR?AR.tier:1;
 // arma e capacete têm o visual do PRÓPRIO tema (não do tema da armadura): trocar só a arma/capacete muda o desenho
 const tmW=e.arma&&TEMAS[e.arma.tema]||tm,tierW=e.arma&&TEMAS[e.arma.tema]?e.arma.tier:tier,tmH=e.capacete&&TEMAS[e.capacete.tema]||tm;
 const h=p.h||0,pele=PELE[h%4],cab=CAB[(h>>>2)%8],mv=p.mv>0,w=mv?Math.sin(T*14):0,bob=mv?Math.abs(Math.sin(T*14))*2.2:Math.sin(T*3)*.8,sw=p.sw||0,cast=p.cast||0;
 if(tm.glow)glow(0,-26,44,tm.glow,'66');
 const b=p.buff&&p.buff.t>0?p.buff.tipo:'';
 if(b==='fur'){glow(0,-26,50,'#ef4444','88');ctx.fillStyle='rgba(251,146,60,.85)';for(let i=0;i<6;i++){const x=-22+i*9,hh=14+Math.sin(T*14+i*1.7)*6;ctx.beginPath();ctx.moveTo(x-4,-2);ctx.quadraticCurveTo(x,-2-hh,x+1,-2-hh*1.6);ctx.quadraticCurveTo(x+3,-2-hh*.6,x+4,-2);ctx.fill()}}
 if(tm.draco){aura(T,0);cauda(T,bob);asas(T,bob)}else if(tm.neve){auraNeve(T,0);asasNeve(T,bob);capaNeve(T,bob);cabeloNeve(T,bob)}else capa(tm,tier,T,bob);
 if((cl==='mago'||cl==='healer')&&!tm.neve)cabeloLongo(cab,T,bob,-19);

 torso(cl,tm,tier,T,bob,w);
 ctx.save();ctx.translate(0,-38-bob);ctx.scale(.82,.82);ctx.translate(0,38+bob);rosto(pele,tm.neve?'#15151f':cab,cl,bob);if(tm.neve){ctx.strokeStyle=OL;ctx.lineWidth=1.2;ctx.lineCap='round';ctx.beginPath();for(const[x,y,dx,dy]of[[-5.8,-50.2,-1.8,-1.9],[-5.4,-49,-2.4,-.6],[8.4,-50.2,1.8,-1.9],[8.2,-49,2.4,-.6]]){ctx.moveTo(x,y-bob);ctx.lineTo(x+dx,y+dy-bob)}ctx.stroke();ctx.lineCap='butt';ctx.fillStyle='rgba(244,114,182,.35)';ci(-8,-43.5-bob,3.4);ci(10,-43.5-bob,3.4)}if(tm.draco){ctx.save();ctx.globalCompositeOperation='lighter';glow(-2,-48.2-bob,7,'#ff5a00','ee');glow(6,-48.2-bob,7,'#ff5a00','ee');ctx.restore()}cobertura(cl,tmH,T,bob);ctx.restore();
 const shx=tm.neve?8.8:12,aw=tm.neve?5:7,conj=cl==='mago'||cl==='healer',mc=cl==='healer'?'#eef2f7':tm.cor,tr=cl==='healer'?tm.cor:tm.cor2;
 if(cl==='guerreiro'){const px=10,py=-24-bob,an=sw>0?-1.3+(1-sw)*2.8:.4;
  ctx.save();ctx.translate(px,py);ctx.rotate(an);armaDesenho(cl,tmW,tierW,T,pele,cast,1);ctx.restore();
  for(const[sx,l]of[[12,-8],[-12,4]]){const[hx_,hy_]=mao(px,py,an,0,l);braco(sx,-34-bob,hx_,hy_,pele,5.2);braco(sx+(hx_-sx)*.55,-34-bob+(hy_+34+bob)*.55,hx_,hy_,tm.cor2,6);co(hx_,hy_,3.8,pele)}}
 else if(cl==='tank'){const sx=-20+sw*16,sy=-22-bob;
  braco(-14,-34-bob,sx,sy-1,tm.cor2,6.4);
  ctx.save();ctx.translate(sx,sy);ctx.scale(.84,.84);armaDesenho(cl,tmW,tierW,T,pele,cast,1);ctx.restore();
  const fy=-20-bob+sw*-3;braco(14,-34-bob,15,fy,tm.cor2,6.4);co(15,fy,4.8,pele);co(sx+5,-21-bob,4,pele)}
 else{const px=13,py=-24-bob,an=sw>0?-.8+(1-sw)*2:.18-cast*.5;
  ctx.save();ctx.translate(px,py);ctx.rotate(an);armaDesenho(cl,tmW,tierW,T,pele,cast,1);ctx.restore();
  const[fx_,fy_]=mao(px,py,an,0,-4);braco(shx,-34-bob,fx_,fy_,mc,aw);braco(shx+(fx_-shx)*.62,-34-bob+(fy_+34+bob)*.62,fx_,fy_,tr,aw*1.2);co(fx_,fy_,3.8,pele);
  braco(-shx,-34-bob,-shx-3.5,-21-bob*.4,mc,aw);braco(-shx-3,-24-bob*.4,-shx-3.5,-21-bob*.4,tr,aw*1.2);co(-shx-3.5,-19.5-bob*.4,3.6,pele)}
 if(tm.draco)aura(T,1);
 if((cl==='mago'||cl==='healer')&&!tm.neve){ctx.save();ctx.translate(0,-38-bob);ctx.scale(.82,.82);ctx.translate(0,38+bob);cabeloFrenteC(cab,T,bob);ctx.restore()}
 if(tm.neve){ctx.save();ctx.translate(0,-38-bob);ctx.scale(.82,.82);ctx.translate(0,38+bob);cabeloFrente(T,bob);ctx.restore();auraNeve(T,1)}
 if(b==='def'){ctx.strokeStyle='rgba(125,211,252,.9)';ctx.lineWidth=2;ctx.fillStyle='rgba(56,189,248,.18)';ctx.beginPath();for(let k=0;k<6;k++){const a=k*Math.PI/3+T*.8,x=Math.cos(a)*42,y=-28+Math.sin(a)*46;k?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.closePath();ctx.fill();ctx.stroke()}}

// ---- ícones (inventário / slots): centrados em (0,0), cabem em ~64 px ----
function iconeItem(it,T){if(it.icone){ctx.save();ctx.translate(0,8);ctx.scale(.8,.8);it.icone(ctx,T);ctx.restore();return}
 const tm=TEMAS[it.tema]||TEMAS.madeira,cl=it.classe,pele=PELE[0];ctx.save();
 if(it.slot==='arma'){const f={guerreiro:[.92,20],mago:[1,27],healer:[1.05,25],tank:[1,-2]}[cl];if(cl!=='tank')ctx.rotate(.7);ctx.scale(f[0],f[0]);ctx.translate(0,f[1]);armaDesenho(cl,tm,it.tier,T,pele,0,1)}
 else if(it.slot==='capacete'){ctx.scale(1.2,1.2);ctx.translate(0,60);co(0,-48,12,pele);cobertura(cl,tm,T,0)}
 else{ctx.scale(1.15,1.15);ctx.translate(0,22);torso(cl,tm,it.tier,T,0,0)}
 ctx.restore()}

// LOJA: itens comprados com moedas (1 moeda por slime, 3 por goblin, 100 por chefe). 5 níveis x 4 classes x (arma, armadura, capacete).
// Comprar no chat: !bw<n> arma, !ba<n> armadura, !bh<n> capacete. Depois equipar com !ew/!ea/!eh. Números fixos: 51..110 (novos itens = números novos).
// Armaduras: só defesa. Capacetes: só vida.
// Tank: o "escudo" tem 25% ataque + 75% defesa, com defesa = 75% do valor do nível (o poder de luta conta defesa em dobro, então o tank fica no mesmo patamar de CP das outras classes).
(()=>{const CL=['guerreiro','tank','mago','healer'],TM=['ferro','ouro','diamante','celestial','cosmica'],TI=[2,4,6,8,10],
 PRECO=[1e4,1e5,1e6,1e7,1e8],ARMA=[25,50,100,200,400],DEF=[13,25,50,100,200],HP=[125,250,500,1000,2000],
 NA={guerreiro:'Machado',tank:'Escudo',mago:'Cajado',healer:'Cetro'},NR={guerreiro:'Couraça',tank:'Armadurona',mago:'Manto',healer:'Vestes'};
 CL.forEach((c,ci)=>TM.forEach((tm,t)=>{const T=TEMAS[tm],o={classe:c,tema:tm,tier:TI[t],de:9999,ate:9999,preco:PRECO[t],loja:1},P=ARMA[t];
  ITENS.push(Object.assign({id:`loja-${c}-arma-${t+1}`,num:51+ci*15+t,pasta:'armas',slot:'arma',nome:NA[c]+' de '+T.nome},o,c==='tank'?{atk:Math.round(P*.25),def:Math.round(P*.75)}:{atk:P}),
   Object.assign({id:`loja-${c}-armadura-${t+1}`,num:51+ci*15+5+t,pasta:'armaduras',slot:'armadura',nome:NR[c]+' de '+T.nome,def:DEF[t]},o),
   Object.assign({id:`loja-${c}-capacete-${t+1}`,num:51+ci*15+10+t,pasta:'armaduras',slot:'capacete',nome:nomeCobertura(c,T),hp:HP[t]},o))}))})();
// Escala os status de TODOS os itens (básicos, loja e exclusivos) uma única vez, depois que tudo foi carregado
ITENS.forEach(i=>{if(i._esc)return;i._esc=1;for(const k of['atk','def','hp'])if(i[k])i[k]=Math.round(i[k]*ESC)});
