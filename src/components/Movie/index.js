import React, { useEffect } from 'react'
import { connect, useDispatch } from "react-redux"
import { Link, useParams } from 'react-router-dom';
import { fetchSingleMovieActionCreator } from "../../store/redusers/movies";
import styles from './Movie.module.scss';

const Movie = ({movie ={}, fetchMove}) => {
    const dispatch = useDispatch();
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchMove(id))
    }, [id, fetchMove, dispatch])

    return (
        <div
            className={styles.movie}
            style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>
            <div
                className={styles.cover}
                style={{backgroundImage: `url(${movie.cover})`}} />
            <div className={styles.description}>
                <div className={styles.title}>{movie.title}</div>
                <div className={styles.year}>{movie.year}</div>
                <div className={styles.starring}>
                    {movie?.starring && movie.starring.map((actor = {}, index) => (
                        <div
                            key={index}
                            className={styles.actor}>
                            {actor.name}
                        </div>
                    ))}
                </div>
            </div>
            <Link
                className={styles.closeButton}
                to="/movies">
                ←
            </Link>
        </div>
    )
}

export default connect(
    (state) => {
        return {
            movie: state.movies.movie
        }
    }, {
        fetchMove: fetchSingleMovieActionCreator
    }
)(Movie)
