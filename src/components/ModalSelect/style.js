import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  svg {
    font-size: 20px;
  }
`;
const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 5px 5px;
  }
`;
export default SmallContainer;
