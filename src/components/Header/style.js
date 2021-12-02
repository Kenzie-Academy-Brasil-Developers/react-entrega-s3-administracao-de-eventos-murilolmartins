import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px white solid;
  box-shadow: 0px 5px 16px -1px;
  width: 100%;
  svg {
    font-size: 40px;
    padding-right: 10px;
    @media (min-width: 700px) {
      display: none;
    }
  }
`;
