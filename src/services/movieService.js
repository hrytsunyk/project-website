import {axiosService} from "./axiosService";
import {urls} from "../configs";



const movieService = {
    getMovies: (page=1)=>axiosService.get(urls.movies.getMovies, {params:page}),
}


export {
    movieService
}