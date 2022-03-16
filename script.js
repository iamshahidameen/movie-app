const API_URL = 'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=c1cbb29177c04a9920bd75352024cd0b';
const movieListWrap = document.getElementById('main');

movieDB();

async function movieDB(){
    const config = {
        headers: {
            'Accept': 'application/json'
    }
};
    const apiRes = await fetch(API_URL,config)
    
    const data = await apiRes.json();
    console.log(data.results.forEach(el => {
        console.log(el.title);
    }));
}