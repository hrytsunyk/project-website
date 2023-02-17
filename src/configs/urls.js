
const baseURL = 'https://api.themoviedb.org/3';

const discover= '/discover';
const movies= '/movie';
const genres= '/genre';

const urls = {
    movies: {
        getMovies: `${discover}${movies}`,
        getGenres: `${genres}${movies}/list`
    }
}

export {
    baseURL,
    urls
}