import Header from "../../components/Header";
import { ConfraternizacaoContext } from "../../providers/Confraternizacao";
import { Container, SmallContainer } from "./style";
import CardProduct from "../../components/CardProduct";
import { useContext } from "react";

export default function Confraterizacao() {
  const { beersConfra, removeConfra } = useContext(ConfraternizacaoContext);

  return (
    <Container>
      <Header></Header>
      <SmallContainer>
        {beersConfra.map((beer, index) => (
          <CardProduct
            key={index}
            beer={beer}
            remove={removeConfra}
          ></CardProduct>
        ))}
      </SmallContainer>
    </Container>
  );
}
