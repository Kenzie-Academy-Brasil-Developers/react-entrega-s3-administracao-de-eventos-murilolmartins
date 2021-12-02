import Modal from "../Modal";
import { Button } from "@mui/material";
import SmallContainer from "./style";
import { useContext } from "react";
import { FormaturaContext } from "../../providers/Formatura";
import { ConfraternizacaoContext } from "../../providers/Confraternizacao";
import { CasamentoContext } from "../../providers/Casamento";
import { FiX } from "react-icons/fi";
import { Header } from "./style";

export default function ModalSelect({ isOpen, setIsOpen, actualBeer }) {
  const { addForm } = useContext(FormaturaContext);
  const { addConfra } = useContext(ConfraternizacaoContext);
  const { addCasa } = useContext(CasamentoContext);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Header>
        <h2>Selecione a festa:</h2>
        <FiX onClick={() => setIsOpen(false)}></FiX>
      </Header>

      <SmallContainer>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={() => {
            addForm(actualBeer);
            setIsOpen(false);
          }}
        >
          Formatura
        </Button>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={() => {
            addConfra(actualBeer);
            setIsOpen(false);
          }}
        >
          Confraterização
        </Button>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={() => {
            addCasa(actualBeer);
            setIsOpen(false);
          }}
        >
          Casamento
        </Button>
      </SmallContainer>
    </Modal>
  );
}
