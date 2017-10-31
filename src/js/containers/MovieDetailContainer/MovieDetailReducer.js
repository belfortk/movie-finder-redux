const initialState = {
  movieDetails: null
};

export default function MovieSearchReducer(store = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MOVIE_DETAILS_PENDING' : {
      return {
        ...store,
        dataResolution: 0
      };
    }

    case 'GET_MOVIE_DETAILS_FULFILLED' : {
      return {
        ...store,
        movieDetails: payload,
        dataResolution: 1
      };
    }

    case 'GET_MOVIE_DETAILS_REJECTED': {
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
