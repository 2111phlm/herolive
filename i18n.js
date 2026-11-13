// Idiomas do site. Para adicionar outro: copie um bloco, traduza e crie o botão em index.html (data-l="xx").
const I18={
pt:{loc:'pt-BR',titulo:'⚔️ Heróis da Live',sub:'Busque seu personagem, veja seus itens e descubra como equipá-los pelo chat da live.',busca:'🔎 Digite seu nome de jogador...',
 inv:'🎒 Inventário',lojaT:'🛒 Loja',lojaP:'Ganhe moedas derrotando monstros (1 por slime, 3 por goblin, 100 por chefe — para todos da partida, até os caídos). Compre pelo chat com o código do item e depois equipe.',
 ajT:'🎮 Como jogar e equipar',
 aj1:'No chat da live digite <code>sw</code> guerreiro, <code>st</code> tank, <code>sm</code> mago ou <code>sh</code> healer para entrar na partida. Digite <code>1</code> para usar sua habilidade.',
 aj2:'Cada item tem um <b>código</b> (ex.: <code>!ew45</code>). Mande esse código no chat para equipar: <code>!ew</code> = arma, <code>!ea</code> = armadura, <code>!eh</code> = capacete.',
 aj3:'<b>Loja:</b> com moedas, compre pelo chat: <code>!bw51</code> compra a arma 51, <code>!ba</code> armadura e <code>!bh</code> capacete. Depois use <code>!ew51</code> (ou <code>!ea</code>/<code>!eh</code>) para equipar.',
 aj4:'Cada classe tem o seu próprio nível: se você jogar de healer só o healer evolui. Escolha a classe pelo ícone no topo do personagem.',
 aj5:'<b>Passivas:</b> guerreiro e mago causam +20% de dano; o tank recebe 50% menos dano e os monstros atacam os tanks primeiro; o healer tem 10% menos de recarga na habilidade.',
 aj6:'Para voltar ao automático (o mais forte), use <code>!ew0</code>, <code>!ea0</code> ou <code>!eh0</code>.',
 aj7:'Só dá para equipar na <b>espera entre as partidas</b> ou quando seu personagem estiver <b>morto</b>.',
 aj8:'Item de outra classe não pode ser equipado — a classe de cada item aparece no card.',
 aj9:'Seu personagem é ligado ao seu perfil do TikTok: mesmo trocando o apelido, ele continua seu.',
 c_guerreiro:'Guerreiro',c_tank:'Tank',c_mago:'Mago',c_healer:'Healer',c_esp:'Especial',
 top:'🏆 Maiores níveis',res:'🔎 Resultados',nenhum:'Nenhum jogador encontrado',nenhumQ:' com esse nome.',nenhumV:' ainda.',
 atk:'Ataque',def:'Defesa',vida:'Vida',moedas:'moedas',padrao:'padrão',tem:'✔ você já tem',
 armas:'Armas',armaduras:'Armaduras',capacetes:'Capacetes',jog:'jogadores',atual:'atualizado',erro:'Não foi possível carregar os jogadores agora.'},
en:{loc:'en-US',titulo:'⚔️ Live Heroes',sub:'Look up your character, check your items and learn how to equip them from the live chat.',busca:'🔎 Type your player name...',
 inv:'🎒 Inventory',lojaT:'🛒 Shop',lojaP:'Earn coins by defeating monsters (1 per slime, 3 per goblin, 100 per boss — for everyone in the run, even fallen players). Buy with the item code in chat, then equip it.',
 ajT:'🎮 How to play and equip',
 aj1:'In the live chat type <code>sw</code> warrior, <code>st</code> tank, <code>sm</code> mage or <code>sh</code> healer to join the run. Type <code>1</code> to use your skill.',
 aj2:'Every item has a <b>code</b> (e.g. <code>!ew45</code>). Send that code in chat to equip it: <code>!ew</code> = weapon, <code>!ea</code> = armor, <code>!eh</code> = helmet.',
 aj3:'<b>Shop:</b> with coins, buy in chat: <code>!bw51</code> buys weapon 51, <code>!ba</code> armor and <code>!bh</code> helmet. Then use <code>!ew51</code> (or <code>!ea</code>/<code>!eh</code>) to equip it.',
 aj4:'Each class has its own level: if you only play healer, only the healer levels up. Pick the class with the icon above your character.',
 aj5:'<b>Passives:</b> warrior and mage deal +20% damage; the tank takes 50% less damage and monsters attack tanks first; the healer has 10% less skill cooldown.',
 aj6:'To go back to automatic (the strongest gear), use <code>!ew0</code>, <code>!ea0</code> or <code>!eh0</code>.',
 aj7:'You can only equip while <b>waiting between runs</b> or when your character is <b>dead</b>.',
 aj8:'Items from another class cannot be equipped — each item\'s class is shown on its card.',
 aj9:'Your character is tied to your TikTok profile: even if you change your nickname, it stays yours.',
 c_guerreiro:'Warrior',c_tank:'Tank',c_mago:'Mage',c_healer:'Healer',c_esp:'Special',
 top:'🏆 Top levels',res:'🔎 Results',nenhum:'No players found',nenhumQ:' with that name.',nenhumV:' yet.',
 atk:'Attack',def:'Defense',vida:'Health',moedas:'coins',padrao:'default',tem:'✔ you already own this',
 armas:'Weapons',armaduras:'Armors',capacetes:'Helmets',jog:'players',atual:'updated',erro:'Could not load the players right now.'}};
let IDI='pt';try{IDI=localStorage.getItem('idioma')||(/^en/i.test(navigator.language)?'en':'pt')}catch(e){IDI=/^en/i.test(navigator.language)?'en':'pt'}
if(!I18[IDI])IDI='pt';
const t=k=>(I18[IDI]&&I18[IDI][k])||I18.pt[k]||k;
function traduzir(){document.documentElement.lang=IDI==='en'?'en':'pt-BR';document.title=t('titulo').replace(/^\S+\s/,'');
 document.querySelectorAll('[data-i]').forEach(e=>e.textContent=t(e.dataset.i));document.querySelectorAll('[data-ih]').forEach(e=>e.innerHTML=t(e.dataset.ih));
 document.querySelectorAll('[data-ip]').forEach(e=>e.placeholder=t(e.dataset.ip));document.querySelectorAll('#idioma [data-l]').forEach(b=>b.classList.toggle('on',b.dataset.l===IDI))}
