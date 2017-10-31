const initialState = {
  movies: [],
  dataResolution: 0
};

export default function MovieSearchReducer(store = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MOVIE_SEARCH_RESULTS_PENDING' : {
      return {
        ...store,
        dataResolution: 0
      };
    }

    case 'GET_MOVIE_SEARCH_RESULTS_FULFILLED' : {
      return {
        ...store,
        movies: [...payload],
        dataResolution: 1
      };
    }

    case 'GET_MOVIE_SEARCH_RESULTS_REJECTED': {
      return {
        ...store,
        dataResolution: 2
      };
    }

    default: {
      return store;
    }
  }
}
