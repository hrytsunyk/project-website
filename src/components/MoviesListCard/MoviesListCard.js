import css from './MoviesListCard.module.css'
import {imageURL} from "../../configs";

const MoviesListCard = ({movie}) => {
    const {title,backdrop_path,poster_path} = movie;

    return (
        <div className={css.cardFather}>

            <div className={css.movieImageTitle}>
                <h4 className={css.title}>{title}</h4>
                <img src={`${imageURL}${poster_path}`} alt={title}/>
            </div>

        </div>
    );
};

export {MoviesListCard};