import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { BeersContext } from "../../providers/beers";
import { Buttons, Container, SmallContainer } from "./style";
import CardProduct from "../../components/CardProduct";
import ModalSelect from "../../components/ModalSelect";
import { useState } from "react";
import { Button } from "@material-ui/core";

export default function Home() {
  const { beers, loadBeers, nextPage, returnPage, page } =
    useContext(BeersContext);
  const [isOpen, setIsOpen] = useState(false);
  const [actualBeer, setActualBeer] = useState({});
  useEffect(() => {
    loadBeers();
  }, [page]);
  return (
    <Container>
      <ModalSelect
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        actualBeer={actualBeer}
      ></ModalSelect>
      <Header></Header>
      <SmallContainer>
        {beers.map((beer, index) => (
          <CardProduct
            key={index}
            beer={beer}
            setIsOpen={setIsOpen}
            setActualBeer={setActualBeer}
            isHome={true}
          ></CardProduct>
        ))}
      </SmallContainer>
      <Buttons>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={returnPage}
        >
          Voltar
        </Button>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={nextPage}
        >
          Proxima
        </Button>
      </Buttons>
    </Container>
  );
}
