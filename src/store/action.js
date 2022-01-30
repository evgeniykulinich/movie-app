export const onSatePage = (page, result, totalPages) => ({
  type: "SET_PAGE_MOVIES",
  payload: { page, result, totalPages },
});

export const onSetDetails = (id, details) => ({
  type: "SET_MOVIE_DETAILS",
  payload: { id, details },
});

export const toggleFavorites = (id) => ({
  type: "SET_FAVORITES",
  payload: id,
});
