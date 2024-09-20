import { getAnimeFull, cambiarAnime, GetNoticias, GetAnimesTop } from "./jinkan-V2.js";

const componentManga = document.getElementById("mangas");
let SelectAnime = document.querySelector("#filtro");
let ComponenteNoticias = document.getElementById("noticias");
let AnimesTop = document.getElementById("top");
let BanderaSelectAnime = 0;


const cargarNoticias = async () => {
    const noticiasAnime = await GetNoticias();
    let component = "";
    // console.log(noticiasAnime);
    for (const key in noticiasAnime) {
        // console.log(key);
        component += `
         <div class="swiper-slide">
         <a href="${noticiasAnime[key].url}" target="_blank">
            <img src="${noticiasAnime[key].img}" alt="${noticiasAnime[key].nombre}"/>
            </a>
        </div>
        `;
    }
    ComponenteNoticias.innerHTML = component;
}

const CargarFavoritos = async () => {
    const animeTop = await GetAnimesTop();
    let component = "";
    // console.log(noticiasAnime);
    for (const key in animeTop) {
        // console.log(key);
        component += `
        <article class="cards">
          <div class="titulo__obra">
            <h2>El Mata demonios con la espada de hierro</h2>
          </div>
          <i class="fa-solid fa-star icon__calificacion">
            ${animeTop[key].like} <span>Mil</span></i
          >
          <div class="contenedor__imagen">
            <img
              class="resolucion__img-card"
              src="${animeTop[key].img}"
              alt="imagen"
            />
          </div>
          <div class="agregar__favorito">
            <i class="fa-solid fa-heart"> <span>agregar favorito</span></i>
          </div>
        </article>
        `;
    }
    AnimesTop.innerHTML = component;
}



SelectAnime.addEventListener("change", () => {
    BanderaSelectAnime = SelectAnime.options[SelectAnime.selectedIndex].value
    cambiarAnime(BanderaSelectAnime)
    cargarAnime();
});


const cargarAnime = async () => {
    const animeList = await getAnimeFull();
    let component = "";
    // console.log(animeList);
    for (let key in animeList) {
        // console.log(animeList[key].nombre);
        component += `
        <article class="card">
            <div class="card__header">
                <a href="/paginas/detalle.html">
                    <img
                        class="card__header--img"
                        src="${animeList[key].img}"
                        alt=""
                    />
                </a>
            </div>
            <h1 class="card__title card__text--light">
                ${animeList[key].nombre}
            </h1>
            <div class="card__footer">
                <div class="card__footer__contenido">
                    <div class="card__stats">
                        <p class="card__number">${animeList[key].seguidores}</p>
                        <p class="card__text card__text--light">seguidores</p>
                    </div>
                    <div class="card__stats">
                        <p class="card__number">${animeList[key].like}</p>
                        <p class="card__text card__text--light">Likes</p>
                    </div>
                    <div class="card__stats">
                        <p class="card__number">${animeList[key].favoritos}</p>
                        <p class="card__text card__text--light">Favorito</p>
                    </div>
                </div>
            </div>
        </article>
        `;
    }
    componentManga.innerHTML = component;
}

cargarAnime();
cargarNoticias();
CargarFavoritos();








