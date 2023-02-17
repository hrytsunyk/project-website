import css from './MoviesListCard.module.css'

const MoviesListCard = ({movie}) => {
    const {title} = movie;

    return (
        <div className={css.Card}>
            <h3>{title}</h3>
        </div>
    );
};

export {MoviesListCard};