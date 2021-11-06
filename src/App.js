

import Header from "./components/Header/header.js";
import RegisterLogin from "./components/Login/Register-Login.js";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Temple from "./components/Temple/temple.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";


const App=()=> {
  return (

<BrowserRouter>
  <Header />
  <Switch>
    <Route exact path="/" component={Temple} /> 
    <Route exact path="/admin" component={RegisterLogin} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
  <Footer />
</BrowserRouter>

  )
  }

export default App;
