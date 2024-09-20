var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grapCurso: true,
    centeredSlides:true,
    slidesPerView:"auto",
    coverflowEffect:{
        rotate:15,
        strech:0,
        depth:300,
        modifier:1,
        slidesShadows:true,
    },
    loop:true,
    autoplay: {
        delay: 3000, // Intervalo de tiempo en milisegundos entre las diapositivas
        disableOnInteraction: false, // Evita que se detenga el autoplay al interactuar con el Swiper
    },
});

// hamburguesa

const abrir = document.querySelector("#abrirVentana");
const cerrar = document.querySelector('#cerrarVentana');
const nav = document.querySelector("#nav")

// abrir.addEventListener('click',()=>{
//     nav.classList.add("visible");
// });

// cerrar.addEventListener('click',()=>{
//     nav.classList.remove("visible");
// });

// cerrar.onclick = (function(evento){
//     evento.classList.remove("visible");

// })