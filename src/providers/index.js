import { BeersProvider } from "./beers";
import { CasamentoProvider } from "./Casamento";
import { ConfraternizacaoProvider } from "./Confraternizacao";
import { FormaturaProvider } from "./Formatura";

export default function Providers({ children }) {
  return (
    <BeersProvider>
      <FormaturaProvider>
        <CasamentoProvider>
          <ConfraternizacaoProvider>{children}</ConfraternizacaoProvider>
        </CasamentoProvider>
      </FormaturaProvider>
    </BeersProvider>
  );
}
