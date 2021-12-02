import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  button {
    margin: 10px;
  }
`;
