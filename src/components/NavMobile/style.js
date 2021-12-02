import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 0%;
  right: 0;
  background-color: orange;
  height: 220px;
  width: 200px;
  border-radius: 10px;
  border: 2px solid white;
  animation-name: Box_move;
  animation-duration: 0.5s;
  @keyframes Box_move {
    from {
      margin-right: -100px;
    }
    to {
      margin-right: 0;
    }
  }
  @media (min-width: 700px) {
    display: none;
  }
  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    a {
      color: white;
      padding: 10px;
      text-decoration: none;
      :hover {
        font-weight: 900;
      }
    }
  }
  .icon {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    svg {
      padding: 5px;
      font-size: 20px;
    }
  }
`;

export default Container;
