import { combineReducers } from 'redux';

import MovieSearchReducer from './containers/MovieSearchContainer/MovieSearchReducer.js'
import MovieDetailReducer from './containers/MovieDetailContainer/MovieDetailReducer.js'

const rootReducer = combineReducers({
  searchInfo: MovieSearchReducer,
  detailsInfo: MovieDetailReducer
});

export default rootReducer;
