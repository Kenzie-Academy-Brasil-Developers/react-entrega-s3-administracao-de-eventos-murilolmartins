import { Link } from "react-router-dom";
import Container from "./style";

export default function Nav() {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/formatura">Formatura</Link>
      <Link to="/confraternizacao">Confraternização</Link>
      <Link to="/casamento">Casamento</Link>
    </Container>
  );
}
