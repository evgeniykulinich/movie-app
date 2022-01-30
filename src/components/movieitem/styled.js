import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  background: #4c4a4a;
  width: calc(20% - 15px);
  height: 580px;
  margin-bottom: 25px;
  border-radius: 15px;
`;

export const CardHeader = styled.div`
  background: radial-gradient(
    circle,
    rgba(119, 133, 147, 1) 49%,
    rgba(72, 94, 83, 1) 78%
  );
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  padding: 15px;
  letter-spacing: 1px;
  border-radius: 15px 15px 0 0;
  > h3 {
    margin: 0;
    color: #fff;
    font-size: 16px;
    text-align: center;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  margin-bottom: 5px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  > h3 {
    font-size: 16px;
    color: #fff;
    margin: 0 0 15px;
    letter-spacing: 2px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  > h3 {
    font-size: 16px;
    color: #fff;
    letter-spacing: 2px;
    margin: 0;
  }
  > svg {
    cursor: pointer;
    width: 26px;
    height: 26px;
    path {
      fill: ${(props) => (props.isFavorite ? "gold" : "#fff")};
    }
  }
`;

export const ButtonLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  background: #24272a;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;
  text-align: center;
  margin-left: 3%;
  text-transform: uppercase;
  height: 50px;
  width: 94%;
  transition: all 0.2s linear;
  &:hover {
    letter-spacing: 5px;
    background: green;
  }
`;
