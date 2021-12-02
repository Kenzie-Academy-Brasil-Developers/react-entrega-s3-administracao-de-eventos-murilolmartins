import Container from "./style";
import { Button } from "@material-ui/core";

export default function CardProduct({
  beer,
  setIsOpen,
  setActualBeer,
  remove,
  isHome = false,
}) {
  return (
    <Container>
      <div className="box_img">
        <img src={beer.image_url} alt={beer.tagline}></img>
      </div>
      <div className="description">
        <div>
          <h2>{beer.name}</h2>
        </div>
        <div>
          <p>{beer.description}</p>
          <p>Data de Fabricação: {beer.first_brewed}</p>
          <p>
            Volume: {beer.volume.value} {beer.volume.unit}
          </p>
        </div>
      </div>
      <div>
        {isHome ? (
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => {
              setIsOpen(true);
              setActualBeer(beer);
            }}
          >
            Adicionar a lista
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => {
              remove(beer);
            }}
          >
            Remover da lista
          </Button>
        )}
      </div>
    </Container>
  );
}
