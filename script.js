const API_URL = 'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=c1cbb29177c04a9920bd75352024cd0b';
const movieListWrap = document.getElementById('main');
const imgBaseURL = 'https://image.tmdb.org/t/p/w1280';
const searcBaseURL = 'https://api.themoviedb.org/3/search/movie/?api_key=c1cbb29177c04a9920bd75352024cd0b&query="' 
const serachForm =document.getElementById('form');
const searchField = document.getElementById('search');
serachForm.addEventListener('submit', () => {
    console.log(searchField.value);
})
//Get initial Movies
movieDB(API_URL);

async function movieDB(url){
    const apiRes = await fetch(url)
    const data = await apiRes.json();
    console.log(data.results);
}