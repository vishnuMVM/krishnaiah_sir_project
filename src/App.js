
import Header from "./components/Header/header.js";
import RegisterLogin from "./components/Login/Register-Login.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Temple from "./components/Temple/temple.js";
import Location from "./components/Location/location.js";
import Footer from "./components/Footer/footer.js";
import Management from "./components/Management/management.js";
import {Component} from "react";
import LanguageContext from "./components/languagecontext.js";


class App extends Component {
state={activelanguage:"English"}

changelanguage=(activelanguage)=>{
  this.setState({activelanguage,})
}

  render(){
    const {activelanguage}=this.state
  return (

<BrowserRouter>

<LanguageContext.Provider 
  value={
    {
      activelanguage,
      changelanguage:this.changelanguage,
    }
  }>

  <Header />
  <Routes>
    <Route exact path="/" component={Temple} /> 
    <Route exact path="/admin" component={RegisterLogin} />
    <Route exact path="/location" component={Location} />
    <Route exact path="/management" component={Management} />
  </Routes>
  <Footer />
  </LanguageContext.Provider>
</BrowserRouter>

  )
  }
}


export default App;
