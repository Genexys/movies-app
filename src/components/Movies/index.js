import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { fetchMoviesActionCreator, loadingActionCreator } from "../../store/redusers/movies";
import {Link, Route, useRouteMatch} from "react-router-dom";
import Movie from "../Movie";

import styles from './Movies.module.scss'

const Movies = ({loading, moviesArr, fetchMoviesActionCreator, loadingActionCreator}) => {
    let { path } = useRouteMatch();
    const [movies, setMovies] = useState([])
    const dispatch = useDispatch();

    const fetchMovies = async () => {
        const response = await fetch(`http://localhost:3000/movies`);
        const data = await response.json();

        return data;
    }

    useEffect(() => {
        dispatch(loadingActionCreator(true))
        fetchMovies().then(data => {
            dispatch(fetchMoviesActionCreator(data))
            dispatch(loadingActionCreator(false))
        }).catch(err => {
            console.error(err)
        });
    }, [dispatch, fetchMoviesActionCreator, loadingActionCreator])

    useEffect(() => {
        setMovies(moviesArr)
    }, [moviesArr])

    if (loading) {
        return <>
            <h1 className={styles.loading}>LOADING</h1>
        </>
    }

    return (
        <div className={styles.movies}>
            <div className={styles.list}>
                {movies.map((movie, index) => (
                    <Link
                        key={index}
                        to={`/movies/${index}`}>
                        <div
                            className={styles.movie}
                            style={{backgroundImage: `url(${movie.cover})`}} />
                    </Link>
                ))}
            </div>

            <Route path={`${path}/:id`} render={(props) => < Movie {...props} />} />

        </div>
    )
}

// const mapDispatchToProps = ((dispatch, ownProps) => {
//     const getMovies = dispatch(fetchMoviesActionCreator());
//
//     return {
//         getMovies
//     }
// })

export default connect(state => (
    {
        moviesArr: state.movies.movies,
        loading: state.movies.loading
    }
), {
    fetchMoviesActionCreator,
    loadingActionCreator
})(Movies)
