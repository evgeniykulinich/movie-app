import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: calc(100vh - 70px);
  overflow: auto;
  padding: 0 30px 30px;
`;

const Flex = styled.div`
  display: flex;
`;

export const FlexCenter = styled(Flex)`
  justify-content: center;
  align-items: center;
`;

export const MovieList = styled(Flex)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const FavoritesMovieList = styled(MovieList)`
justify-content: flex-start;
div {
  margin-right: 25px;
}
`

export const WrapperMovieDetails = styled.div`
  display: flex;
  padding-top: 30px;
  overflow: contain;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: fit-content;
  height: 200px;
  border-radius: 15px;
  margin-right: 30px;
`;

export const OverWiew = styled.div`
  color: #c0c0c0;
  line-height: 30px;
`;

export const Button = styled.button`
  background: green;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 14px 32px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  line-height: 12px;
  border-radius: 3px;
  height: 44px;
  transition: all 0.3s linear;
`;
