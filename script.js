const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", () => {
        card.style.boxShadow =
        "0 0 25px rgba(51,217,255,.3)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background =
        "rgba(0,0,0,.8)";
    }else{
        nav.style.background =
        "rgba(0,0,0,.3)";
    }

});
