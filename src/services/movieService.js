import {axiosService} from "./axiosService";
import {urls} from "../configs";

const movieService = {
    getMovies: ()=>axiosService.get(urls.movies.getMovies)
}


export {
    movieService
}