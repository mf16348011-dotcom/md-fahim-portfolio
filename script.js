const toggle=document.querySelector('.menu-toggle');const header=document.querySelector('.topbar');toggle.addEventListener('click',()=>header.classList.toggle('nav-open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('nav-open')));const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const art=document.querySelector('.hero-art');
if(art&&!reduce&&window.matchMedia('(pointer:fine)').matches){
  let frame=0;
  window.addEventListener('pointermove',e=>{
    const rect=art.getBoundingClientRect();
    const x=Math.max(-1,Math.min(1,(e.clientX-(rect.left+rect.width/2))/(rect.width*.7)));
    const y=Math.max(-1,Math.min(1,(e.clientY-(rect.top+rect.height/2))/(rect.height*.7)));
    cancelAnimationFrame(frame);
    frame=requestAnimationFrame(()=>{
      art.style.setProperty('--mx',x.toFixed(3));
      art.style.setProperty('--my',y.toFixed(3));
    });
  },{passive:true});
  window.addEventListener('pointerleave',()=>{
    art.style.setProperty('--mx','0');
    art.style.setProperty('--my','0');
  });
}const filters=[...document.querySelectorAll('.filter')],cards=[...document.querySelectorAll('.project-card')];filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.toggle('active',b===btn));const f=btn.dataset.filter;cards.forEach(card=>{const cat=card.dataset.category;const other=['Thumbnail','Photo Manipulation','Web UI','Book Cover','Apparel','Packaging','Background','Photo Editing'].includes(cat);card.hidden=!(f==='All'||(f==='Other'&&other)||cat===f);});}));