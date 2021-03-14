import { handleActions } from "redux-actions";
import {FETCH_MOVIES, FETCH_SINGLE_MOVIE, LOADING} from "../actions/actions";


const initialState = {
    loading: false,
    movies: [],
    movie: {}
}

// export default function(state = initialState, action) {
//     switch (action.type) {
//         case FETCH_MOVIES:
//             return {
//                 ...state,
//                 movies: action.movies
//             }
//         case FETCH_SINGLE_MOVIE:
//             return {
//                 ...state,
//                 movie: state.movies.filter(movie => movie.id === action.id)
//             }
//
//         default:
//             return state;
//     }
// }

// export const {fetchMoviesActionCreator, fetchSingleMovieActionCreator} = createActions({
//     FETCH_MOVIES: (movies) => ({
//         type: FETCH_MOVIES,
//         movies
//     }),
//     FETCH_SINGLE_MOVIE: (index) => ({
//         type: FETCH_SINGLE_MOVIE,
//         index
//     })
// });

export const loadingActionCreator = (loading) => ({
    type: LOADING,
    loading
})

export const fetchMoviesActionCreator = (movies) => ({
        type: FETCH_MOVIES,
        movies
    })

export const fetchSingleMovieActionCreator = (index) => ({
    type: FETCH_SINGLE_MOVIE,
    index
})

const reducer = handleActions({
    [FETCH_MOVIES]: (state, action) => ({
        ...state,
        movies: action.movies
    }),
    [FETCH_SINGLE_MOVIE]: (state, action) => {
        return {
            ...state,
            movie: state.movies[action.index]
        }
    },
    [LOADING]: (state, action) => {
        return {
            ...state,
            loading: action.loading
        }
    },
}, initialState)

export default reducer;