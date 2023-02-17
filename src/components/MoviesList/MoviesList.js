import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux";
import css from "../../pages/MoviesPage/MoviesPage.module.css";
import {useSearchParams} from "react-router-dom";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies}=useSelector(state => state.movies );

    const {page}=useSelector(state => state.movies );
    const [query,setQuery]= useSearchParams({page:'1'});

    useEffect(()=>{
        dispatch(movieActions.getMovies({page: query.get(page)}))
    }, [dispatch,query])


    return (
        <div className={css.fatherMovies}>
            {/*<div className={css.buttons}>*/}
            {/*    <button onClick={() => setQuery(query => (*/}
            {/*        {page: +query.get('page') - 1}))}*/}
            {/*    >prev</button>*/}

            {/*    <button onClick={() => setQuery(query => ({*/}
            {/*        page: +query.get('page') + 1}))}*/}
            {/*    >next</button>*/}
            {/*</div>*/}
            {movies.map((movie,index) => <MoviesListCard key={index} movie={movie}/> )}
        </div>
    );
};

export {MoviesList};