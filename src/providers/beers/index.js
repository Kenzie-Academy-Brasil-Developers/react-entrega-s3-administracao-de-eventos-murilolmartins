import { createContext, useState } from "react";
import { api } from "../../services/api";

export const BeersContext = createContext();

export function BeersProvider({ children }) {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  function nextPage() {
    if (page < 4) {
      setPage(page + 1);
      window.scrollTo(0, 0);
    }
  }
  function returnPage() {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  }

  function loadBeers() {
    api
      .get(`?page=${page}&per_page=20`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => console.log(error));
  }
  return (
    <BeersContext.Provider
      value={{ beers, setBeers, loadBeers, returnPage, nextPage, page }}
    >
      {children}
    </BeersContext.Provider>
  );
}
