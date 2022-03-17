const API_URL = 'https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=c1cbb29177c04a9920bd75352024cd0b';
const movieListWrap = document.getElementById('main');
const imgBaseURL = 'https://image.tmdb.org/t/p/w1280';
const searcBaseURL = 'https://api.themoviedb.org/3/search/movie/?api_key=c1cbb29177c04a9920bd75352024cd0b&query="' 
const serachForm =document.getElementById('form');
const searchField = document.getElementById('search');
serachForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchField.value;

    if(searchTerm && searchTerm !== ''){
        movieDB(`${searcBaseURL}${searchTerm}"`); 
        searchField.value = '';
    } else {
        window.location.reload;
    }
    console.log(searchTerm);
    
})
//Get initial Movies
movieDB(API_URL);  

async function movieDB(url){
    const apiRes = await fetch(url)
    const data = await apiRes.json();
    showMovies(data.results);
}

function showMovies(movies){
    movieListWrap.innerHTML = '';
    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview } = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        console.log(imgBaseURL+poster_path)
        movieElement.innerHTML = `
        <img src="${imgBaseURL + poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
    `;
movieListWrap.appendChild(movieElement);

    });

    
} 