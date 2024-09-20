const Content = {
    Content_type: "application/json"
}
let BanderaSelectAnime = 0;
const URL_ANIME = "https://api.jikan.moe/v4/anime";
const URL_ANIME_TOP = "https://api.jikan.moe/v4/top/anime";
let URL_SEARCH = "";

export const cambiarAnime = (Search) =>{
     URL_SEARCH =  "https://api.jikan.moe/v4/anime?type="+Search;
     BanderaSelectAnime = Search
     if (BanderaSelectAnime !== 0) {
        console.log(BanderaSelectAnime);
        getAnimeFull()
     }
};


export const getAnimeFull = async () => {
    const URL = (BanderaSelectAnime === 0 ? URL_ANIME : URL_SEARCH);
    let AllAnime = [];
    try {
        const res = await fetch(URL, Content);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();

        // console.log(data);
        for (let index = 0; index < data.pagination.items.count; index++) {
            const anime = {
                nombre: data.data[index].title,
                img: data.data[index].images.webp.image_url,
                seguidores: data.data[index].score,
                favoritos: data.data[index].favorites,
                like: data.data[index].popularity
            }
            AllAnime.push(anime);
        }
    } catch (error) {
        console.error('Error fetching anime data:', error);
    }
    // console.log(AllAnime[0].favoritos);

    return AllAnime;
}


export const GetNoticias = async() => {
    const noticias = [];
    let numerosRandom = [];
    let noticiasRandom = 0;
    const res = await fetch("https://api.jikan.moe/v4/seasons/upcoming");
    const DataNoticias = await res.json();
    let indicador = 7
    for (let index = 0; index <=indicador; index++) {
        noticiasRandom =  Math.floor(Math.random() * 25);
        if (numerosRandom.includes(noticiasRandom)) {index--;continue;}
        numerosRandom.push(noticiasRandom);
            const Noticia = {
                img: DataNoticias.data[noticiasRandom].images.webp.large_image_url,
                url: DataNoticias.data[noticiasRandom].url,
                nombre: DataNoticias.data[noticiasRandom].title
            }
            console.log(numerosRandom.includes(9));
            noticias.push(Noticia);
    }
    return noticias;
}


export const GetAnimesTop = async () =>{
    let AllAnimeTop = [];
    try {
        const res = await fetch(URL_ANIME_TOP);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();

        console.log(data);
        for (let index = 0; index < 6; index++) {
            const anime = {
                nombre: data.data[index].title,
                img: data.data[index].images.webp.image_url,
                like: data.data[index].popularity
            }
            AllAnimeTop.push(anime);
        }
        
    } catch (error) {
        console.error('Error fetching anime data:', error);
    }

    return AllAnimeTop;
}







