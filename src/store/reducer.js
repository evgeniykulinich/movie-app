const initialState = {
  movies: {},
  movieDetails: {},
  totalPages: 0,
  favorites: [],
};

export const reducer = (state = initialState, action) => {
  if (action.type === "SET_PAGE_MOVIES") {
    return {
      ...state,
      movies: { ...state.movies, [action.payload.page]: action.payload.result },
      totalPages: action.payload.totalPages,
    };
  }
  if (action.type === "SET_MOVIE_DETAILS") {
    return {
      ...state,
      movieDetails: {
        ...state.movieDetails,
        [action.payload.id]: action.payload.details,
      },
    };
  }
  if (action.type === "SET_FAVORITES") {
    const _favorites = [...state.favorites];
    const index = _favorites.indexOf(action.payload);
    if (index !== -1) {
      _favorites.splice(index, 1);
    } else {
      _favorites.push(action.payload);
    }
    localStorage.setItem("favorites", JSON.stringify(_favorites));
    return { ...state, favorites: _favorites };
  }
  return state;
};
