const scrollBtn = document.querySelector(".scroll-btn");
const links = document.querySelectorAll(".container .nav ul li");






scrollBtn.addEventListener("click",()=>{
    window.scrollTo(0,{behavior:"smooth"})
}
);

links.forEach(link =>{
    link.addEventListener("click", (e)=>{
        e.preventDefault;
        const id = e.target.getAttribute("data-link");
        console.log(id);
        document.getElementById(id).scrollIntoView({behavior:"smooth"})

    })
})