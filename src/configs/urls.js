
const baseURL = 'https://api.themoviedb.org/3';

const discover= '/discover';
const movies= '/movie';
const genres= '/genre';
const poster ='https://image.tmdb.org/t/p/w500/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg';

const urls = {
    movies: {
        getMovies: `${discover}${movies}`,
        getGenres: `${genres}${movies}/list`,
        getImagesByiD: `${movies}`
    }
}

export {
    baseURL,
    urls
}