import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 450px;
  background-color: white;
  margin: 30px 10px 10px 10px;
  color: black;
  border-radius: 7px;
  padding-bottom: 10px;
  .box_img {
    padding-top: 10px;
    img {
      width: 100px;
      height: 150px;
    }
  }
  .description {
    flex-grow: 1;
  }
  div {
    padding: 2px;
    p {
      padding: 2px;
      font-size: 12px;
    }
  }
`;

export default Container;
