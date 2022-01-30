import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { MovieItem } from "../../components/movieitem";
import { FavoritesMovieList} from "../../components/containers";

import Api from "../../api";

export const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);
  const [list, setList] = useState(null);

  useEffect(() => {
    Promise.all(favorites.map((id) => Api.getDatails(id))).then((res) =>
      setList(res)
    );
  });

  const renderItems = () =>
    list.map((movie) => <MovieItem key={movie.id} movie={movie} />);

  if (!list) return <div>...load</div>;
  return (
    <div style={{ paddingTop: 30, justifyContent: "start" }}>
      <FavoritesMovieList>{renderItems()}</FavoritesMovieList>
    </div>
  );
};
