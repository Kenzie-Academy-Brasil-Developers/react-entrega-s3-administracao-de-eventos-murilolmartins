import { useContext } from "react";
import Header from "../../components/Header";
import { FormaturaContext } from "../../providers/Formatura";
import { Container, SmallContainer } from "./style";
import CardProduct from "../../components/CardProduct";

export default function Formatura() {
  const { beersForm, removeForm } = useContext(FormaturaContext);

  return (
    <Container>
      <Header></Header>
      <SmallContainer>
        {beersForm.map((beer, index) => (
          <CardProduct
            beer={beer}
            remove={removeForm}
            key={index}
          ></CardProduct>
        ))}
      </SmallContainer>
    </Container>
  );
}
