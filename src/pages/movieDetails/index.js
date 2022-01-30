import { useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  WrapperMovieDetails,
  Image,
  OverWiew,
  Button,
} from "../../components/containers";


import Api from "../../api";
import { onSetDetails } from "../../store/action";

export const Details = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.movieDetails[id]);

  useEffect(() => {
    if (!details) {
      Api.getDatails(id).then((res) => dispatch(onSetDetails(id, res)));
    }
    // eslint-disable-next-line
  }, [id]);

  if (!details) {
    return <div>... details load</div>;
  }

  return (
    <Fragment>
      <WrapperMovieDetails>
        <Image src={Api.poster_url + details.backdrop_path} alt="img" />
        <OverWiew>{details.overview}</OverWiew>
      </WrapperMovieDetails>
      <Button onClick={() => history.goBack()}>Back</Button>
    </Fragment>
  );
};
