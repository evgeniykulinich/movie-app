import moment from "moment";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent } from "../../assets/bx-star.svg";
import { Card, CardHeader, Poster, ButtonLink, Column, Row } from "./styled";
import Api from "../../api";
import { toggleFavorites } from "../../store/action";

export const MovieItem = ({
  movie: { title, poster_path, id, release_date, vote_average },
}) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const onChangeFavorites = () => {
    dispatch(toggleFavorites(id));
  };

  return (
    <Card>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <Poster src={Api.poster_url + poster_path} alt="title" />
      <ButtonLink to={`/details/${id}`}>Details</ButtonLink>
      <Column>
        <h3>Release Date: {moment(release_date).format("DD MMM YYYY")}</h3>
        <Row isFavorite={favorites.includes(id)}>
          <h3>Rating: {vote_average}</h3>
          <ReactComponent onClick={onChangeFavorites} />
        </Row>
      </Column>
    </Card>
  );
};
