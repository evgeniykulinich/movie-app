import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  background: #0b1216
    linear-gradient(0deg, #2b3943 0%, rgba(90, 88, 88, 0.973) 92.86%);
  box-shadow: 0 0 30px rgb(0 0 0 / 45%);
  height: 70px;
  padding: 15px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled(Flex)`
  width: 200px;
`;

export const NavLink = styled(Link)`
  color: ${(props) => (props.is_active ? "#fff" : "#939da7")};
  text-decoration: none;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
