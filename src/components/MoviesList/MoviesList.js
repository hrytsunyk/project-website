import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux";
import css from "./MoviesList.module.css";
import {useSearchParams} from "react-router-dom";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight, faArrows} from "@fortawesome/free-solid-svg-icons";
import {movieService} from "../../services/movieService";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {Logo} from "../Logo/Logo";


const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);

    const {page, totalPages} = useSelector(state => state.movies);

    // console.log(page)
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getMovies({page: query.get('page')}))
    }, [dispatch, query])



    return (
        <div className={css.fatherMoviesList}>
            <Logo/>
            <GenreBadge/>
            <div className={css.moviesList}>
                {movies.map((movie, index) => <MoviesListCard key={index} movie={movie}/>)}
            </div>
            <div className={css.buttons}>
                <div className={css.button}>
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        disabled={page <= 1}
                        onClick={() => setQuery(query => ({
                            page: +query.get('page') - 1
                        }))}
                    />
                </div>

                <div className={css.button}>
                    <FontAwesomeIcon
                    icon={faArrowRight}
                    disabled={page <= 0}
                    onClick={() => setQuery(query => ({
                        page: +query.get('page') + 1
                    }))}
                />
                </div>
            </div>
        </div>
    );
};

export {MoviesList};