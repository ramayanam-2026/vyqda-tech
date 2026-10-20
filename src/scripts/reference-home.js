const toggle=document.querySelector('[data-menu-toggle]');
const nav=document.querySelector('[data-mobile-nav]');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=toggle.getAttribute('aria-expanded')==='true';
    toggle.setAttribute('aria-expanded',String(!open));
    toggle.setAttribute('aria-label',open?'Open navigation menu':'Close navigation menu');
    nav.hidden=open;
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation menu');
  }));
}
