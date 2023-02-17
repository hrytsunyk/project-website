import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux";
import css from "../../pages/MoviesPage/MoviesPage.module.css";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {logDOM} from "@testing-library/react";
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {

    const dispatch = useDispatch();
    const {movies}=useSelector(state => state.movies );

    const [query,setQuery]= useSearchParams({page:'1'});

    useEffect(()=>{
        dispatch(movieActions.getMovies({page: query.get(page)}))
    }, [dispatch,query])


    return (
        <div className={css.fatherMovies}>
            {/*<div className={css.buttons}>*/}
            {/*    <button disabled={!prev} onClick={() => setQuery(query => (*/}
            {/*        {page: +query.get('page') - 1}))}*/}
            {/*    >prev</button>*/}

            {/*    <button disabled={!next}  onClick={() => setQuery(query => ({*/}
            {/*        page: +query.get('page') + 1}))}*/}
            {/*    >next</button>*/}

            {/*</div>*/}
            {/*{results.map((movie,index) => <MoviesListCard key={index} movie={movie}/> )}*/}
        </div>
    );
};

export {MoviesList};