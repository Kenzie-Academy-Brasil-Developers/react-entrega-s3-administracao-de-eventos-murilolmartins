import Header from "../../components/Header";
import { Container, SmallContainer } from "./style";
import CardProduct from "../../components/CardProduct";
import { useContext } from "react";
import { CasamentoContext } from "../../providers/Casamento";

export default function Casamento() {
  const { beersCasa, removeCasa } = useContext(CasamentoContext);

  return (
    <Container>
      <Header></Header>
      <SmallContainer>
        {beersCasa.map((beer, index) => (
          <CardProduct
            key={index}
            beer={beer}
            remove={removeCasa}
          ></CardProduct>
        ))}
      </SmallContainer>
    </Container>
  );
}
