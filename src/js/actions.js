import axios from 'axios'

export function getMovieSearchResults(searchParam) {

  return {
    type: "GET_MOVIE_SEARCH_RESULTS",
    payload: axios.get('http://www.omdbapi.com/?apikey=8730e0e&s=' + searchParam)
    .then(function (response) {
      const { Search } = response.data;
      const results = [...Search];
      return results;
    })
  };
}

export function getMovieDetails(id){
  return {
    type: 'GET_MOVIE_DETAILS',
    payload: axios.get('http://www.omdbapi.com/?apikey=8730e0e&i=' + id)
    .then(response => response.data)
  };
}
