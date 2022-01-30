import ReactPaginate from "react-paginate";
import { useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Api from "../../api";
import { MovieItem } from "../../components/movieitem";
import { MovieList } from "../../components/containers";
import { onSatePage } from "../../store/action";

export const Main = () => {
  const { page } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { movies, totalPages } = useSelector((state) => state);

  useEffect(() => {
    if (!movies[page]) {
      Api.getNowPlaying(page).then(({ results, total_pages }) => {
        dispatch(onSatePage(page, results, total_pages));
      });
    }
    // eslint-disable-next-line
  }, [page]);

  const renderItems = () =>
    movies[page].map((movie) => <MovieItem key={movie.id} movie={movie} />);

  const onPageChange = (event) => {
    history.push(`/movies/${event.selected + 1}`);
  };

  return (
    <Fragment>
      <ReactPaginate
        className="paginator"
        breakLabel="..."
        nextLabel=">"
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      <MovieList>{movies[page] ? renderItems() : null}</MovieList>;
    </Fragment>
  );
};
