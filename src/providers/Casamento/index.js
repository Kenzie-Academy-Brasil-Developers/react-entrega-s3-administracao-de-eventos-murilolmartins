import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CasamentoContext = createContext();

export function CasamentoProvider({ children }) {
  const [beersCasa, setBeersCasa] = useState(() => {
    const beers = JSON.parse(localStorage.getItem("@CasaCart")) || [];
    return beers;
  });

  function addCasa(beer) {
    const beers = JSON.parse(localStorage.getItem("@CasaCart")) || [];
    const include = beers.find((b) => b.name === beer.name);
    if (include) {
      toast.error("Voce ja adicionou este item ao casamento");
    } else {
      setBeersCasa([...beers, beer]);
      localStorage.setItem("@CasaCart", JSON.stringify([...beers, beer]));
      toast.success("Cerveja adicionada a casamento");
    }
  }

  function removeCasa(beer) {
    const beers = JSON.parse(localStorage.getItem("@CasaCart")) || [];
    const newList = beers.filter((b) => b.name !== beer.name);
    localStorage.setItem("@CasaCart", JSON.stringify(newList));
    toast.success("Cerveja removida de casamento");
    setBeersCasa(newList);
  }
  return (
    <CasamentoContext.Provider
      value={{ beersCasa, addCasa, setBeersCasa, removeCasa }}
    >
      {children}
    </CasamentoContext.Provider>
  );
}
