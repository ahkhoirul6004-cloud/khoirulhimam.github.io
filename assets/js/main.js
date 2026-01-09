
document.addEventListener("scroll",()=>{
 const nav=document.querySelector(".navbar");
 nav.classList.toggle("shadow",window.scrollY>50);
});
