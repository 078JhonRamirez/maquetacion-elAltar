const url = "https://api.jikan.moe/v4/top/anime";


async function consultaGET() {
    const response = await fetch(url);
    const data = await response.json();
    const InformarionAnime = []; // Array para almacenar la información de varios animes

    for (let index = 0; index < Math.min(data.data.length, 100); index++) {
        const animeInfo = { // Objeto para cada anime
            name: data.data[index].title,
            img: data.data[index].images.webp.image_url,
            fecha: data.data[index].aired ? data.data[index].aired.string : "Sin fecha", // Manejar caso de fecha no disponible
            description: data.data[index].synopsis,
            popularidad: data.data[index].popularity,
            favorito: data.data[index].favorites,
            seguidores: data.data[index].score
        };

        InformarionAnime.push(animeInfo); // Agregar el objeto al array
    }
    
    return InformarionAnime; // Devolver el array de animes
}
 

// Using an IIFE (Immediately Invoked Function Expression) to call the async function
(async () => {
    const DatosANime = await consultaGET();
    // console.log(DatosANime);
    const img = document.getElementById("mangas");
    let allCardsHTML = ''; // Variable para almacenar todas las cartas
    
    for (let index = 0; index < DatosANime.length; index++) {
        // console.log(DatosANime[index]);
        allCardsHTML += `
        <article class="card">
            <div class="card__header">
                <a href="/paginas/detalle.html">
                    <img
                        class="card__header--img"
                        src="${DatosANime[index].img}"
                        alt=""
                    />
                </a>
            </div>
            <h1 class="card__title card__text--light">
                ${DatosANime[index].name}
            </h1>
            <div class="card__footer">
                <div class="card__footer__contenido">
                    <div class="card__stats">
                        <p class="card__number">${DatosANime[index].seguidores}</p>
                        <p class="card__text card__text--light">seguidores</p>
                    </div>
                    <div class="card__stats">
                        <p class="card__number">${DatosANime[index].popularidad}</p>
                        <p class="card__text card__text--light">Likes</p>
                    </div>
                    <div class="card__stats">
                        <p class="card__number">${DatosANime[index].favorito}</p>
                        <p class="card__text card__text--light">Favorito</p>
                    </div>
                </div>
            </div>
        </article>
        `;
    }

    img.innerHTML = allCardsHTML;
})();


