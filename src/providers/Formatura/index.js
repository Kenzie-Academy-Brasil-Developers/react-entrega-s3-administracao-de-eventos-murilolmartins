import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FormaturaContext = createContext();

export function FormaturaProvider({ children }) {
  const [beersForm, setBeersForm] = useState(() => {
    const beers = JSON.parse(localStorage.getItem("@FormCart")) || [];
    return beers;
  });

  function addForm(beer) {
    const beers = JSON.parse(localStorage.getItem("@FormCart")) || [];
    const include = beers.find((b) => b.name === beer.name);
    if (include) {
      toast.error("Voce ja adicionou este item ao formatura");
    } else {
      setBeersForm([...beers, beer]);
      localStorage.setItem("@FormCart", JSON.stringify([...beers, beer]));
      toast.success("Cerveja adicionada a formatura");
    }
  }

  function removeForm(beer) {
    const beers = JSON.parse(localStorage.getItem("@FormCart")) || [];
    const newList = beers.filter((b) => b.name !== beer.name);
    localStorage.setItem("@FormCart", JSON.stringify(newList));
    toast.success("Cerveja removida da formatura");
    setBeersForm(newList);
  }
  return (
    <FormaturaContext.Provider
      value={{ beersForm, addForm, setBeersForm, removeForm }}
    >
      {children}
    </FormaturaContext.Provider>
  );
}
