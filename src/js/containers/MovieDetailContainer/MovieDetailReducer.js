const initialState = {
  dataResolution: 'UNFETCHED',
  loading: false,
  movieDetails: null,
  error: null,
};

export default function MovieSearchReducer(store = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MOVIE_DETAILS_PENDING' : {
      return {
        ...initialState,
        loading: true,
        dataResolution: 'PENDING'
      };
    }

    case 'GET_MOVIE_DETAILS_FULFILLED' : {
      return {
        ...store,
        movieDetails: payload,
        loading: false,
        dataResolution: 'FULFILLED'
      };
    }

    case 'GET_MOVIE_DETAILS_REJECTED': {
      return {
        ...store,
        error: payload.error,
        loading: false,
        dataResolution: 'REJECTED'
      };
    }

    default: {
      return store;
    }
  }
}
