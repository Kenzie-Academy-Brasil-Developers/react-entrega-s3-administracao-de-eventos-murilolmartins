import { Container } from "./style";
import Logo from "../Logo";
import Nav from "../Nav";
import { useState } from "react";
import NavMobile from "../NavMobile";
import { FiAlignJustify } from "react-icons/fi";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Container>
      <Logo></Logo>
      <Nav></Nav>
      <FiAlignJustify onClick={() => setNavOpen(true)}></FiAlignJustify>
      {navOpen && <NavMobile setNavOpen={setNavOpen}></NavMobile>}
    </Container>
  );
}
