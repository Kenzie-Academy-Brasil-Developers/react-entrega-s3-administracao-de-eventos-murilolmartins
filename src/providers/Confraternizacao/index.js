import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ConfraternizacaoContext = createContext();

export function ConfraternizacaoProvider({ children }) {
  const [beersConfra, setBeersConfra] = useState(() => {
    const beers = JSON.parse(localStorage.getItem("@ConfraCart")) || [];
    return beers;
  });

  function addConfra(beer) {
    const beers = JSON.parse(localStorage.getItem("@ConfraCart")) || [];
    const include = beers.find((b) => b.name === beer.name);
    if (include) {
      toast.error("Voce ja adicionou este item ao confraterização");
    } else {
      setBeersConfra([...beers, beer]);
      localStorage.setItem("@ConfraCart", JSON.stringify([...beers, beer]));
      toast.success("Cerveja adicionada a confraterização");
    }
  }

  function removeConfra(beer) {
    const beers = JSON.parse(localStorage.getItem("@ConfraCart")) || [];
    const newList = beers.filter((b) => b.name !== beer.name);
    localStorage.setItem("@ConfraCart", JSON.stringify(newList));
    toast.success("Cerveja removida de confraterização");
    setBeersConfra(newList);
  }
  return (
    <ConfraternizacaoContext.Provider
      value={{ beersConfra, addConfra, setBeersConfra, removeConfra }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
}
