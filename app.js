const $ = (id) => document.getElementById(id);
$('start').addEventListener('click', () => {
  $('surprises').classList.remove('hidden');
  $('surprises').scrollIntoView({behavior:'smooth'});
  hearts(24);
});
document.querySelectorAll('.candle').forEach(c => c.addEventListener('click', () => {
  if (c.dataset.out) return;
  c.dataset.out = '1'; c.textContent = '✨';
  if (document.querySelectorAll('.candle:not([data-out])').length === 0) {
    $('wish').textContent = 'Wish made! May your birthday be as wonderful as your heart. 💗';
    hearts(32);
  }
}));
$('hearts').addEventListener('click', () => hearts(55));
$('last').addEventListener('click', () => {
  $('lastMessage').classList.remove('hidden');
  $('last').textContent = 'Surprise revealed 💗';
  hearts(45);
});
function hearts(n) {
  const symbols = ['💗','💕','💖','♡','🌸'];
  for (let i=0;i<n;i++) {
    const el = document.createElement('span');
    el.className = 'falling-heart';
    el.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left = Math.random()*100+'vw';
    el.style.fontSize = (16+Math.random()*20)+'px';
    el.style.animationDuration = (3+Math.random()*4)+'s';
    el.style.animationDelay = Math.random()*.7+'s';
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),8000);
  }
}
document.querySelectorAll('.photo input').forEach(input => input.addEventListener('change', e => {
  const file = e.target.files && e.target.files[0]; if(!file) return;
  const slot = input.closest('.photo'); let img = slot.querySelector('img');
  if(!img){img=document.createElement('img');slot.appendChild(img);}
  const reader = new FileReader();
  reader.onload = () => {img.src=reader.result;};
  reader.readAsDataURL(file);
}));
