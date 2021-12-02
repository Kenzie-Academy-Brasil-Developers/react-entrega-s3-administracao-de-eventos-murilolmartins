import { Route, Switch } from "react-router-dom";
import Casamento from "../pages/Casamento";
import Confraterizacao from "../pages/Confraternização";
import Formatura from "../pages/Formatura";
import Home from "../pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/formatura" component={Formatura}></Route>
      <Route path="/casamento" component={Casamento}></Route>
      <Route path="/confraternizacao" component={Confraterizacao}></Route>
    </Switch>
  );
}
