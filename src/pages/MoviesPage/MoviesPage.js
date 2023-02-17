import {MoviesList} from "../../components";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
    return (
        <div className={css.fatherMovies}>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};