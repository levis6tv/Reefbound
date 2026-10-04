const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")})
},{threshold:.12});
document.querySelectorAll(".card,.phase,h2").forEach(el=>{el.style.transition="opacity .7s ease,transform .7s ease";el.style.opacity="0";el.style.transform="translateY(20px)";observer.observe(el)});
document.addEventListener("scroll",()=>{
  document.querySelectorAll(".show").forEach(el=>{el.style.opacity="1";el.style.transform="translateY(0)"})
},{passive:true});
