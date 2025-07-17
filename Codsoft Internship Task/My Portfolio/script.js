let nav=document.querySelector('nav');More actions

window.addEventListener('scroll',()=>{
    nav.classList.toggle('naWinScroll',window,scrollY>0)
})