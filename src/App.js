

import Header from "./components/Header/header.js";
import RegisterLogin from "./components/Login/Register-Login.js";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Temple from "./components/Temple/temple.js";

const App=()=> {
  return (

<BrowserRouter>
  <Header />
  <Switch>
    <Route exact path="/" component={Temple} /> 
    <Route exact path="/admin" component={RegisterLogin} />
  </Switch>
</BrowserRouter>

  );
  }

export default App;
