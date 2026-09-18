const menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>{document.body.classList.toggle('nav-open');menu.setAttribute('aria-expanded',document.body.classList.contains('nav-open'))});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('nav-open');menu?.setAttribute('aria-expanded','false')}));
