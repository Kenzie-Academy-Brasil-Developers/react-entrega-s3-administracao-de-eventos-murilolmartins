import styled from "styled-components";

const Container = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: initial;
  }
  a {
    color: white;
    padding: 10px;
    text-decoration: none;
    :hover {
      font-weight: 900;
    }
  }
`;

export default Container;
