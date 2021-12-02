import Container from "./style";
import { Link } from "react-router-dom";
import { FiX } from "react-icons/fi";
export default function NavMobile({ setNavOpen }) {
  return (
    <Container>
      <div className="icon">
        <FiX onClick={() => setNavOpen(false)}></FiX>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/formatura">Formatura</Link>
        <Link to="/confraternizacao">Confraternização</Link>
        <Link to="/casamento">Casamento</Link>
      </div>
    </Container>
  );
}
