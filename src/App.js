
import Header from "./components/Header/header.js";
import RegisterLogin from "./components/Login/Register-Login.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Temple from "./components/Temple/temple.js";
import Location from "./components/Location/location.js";
import Footer from "./components/Footer/footer.js";
import Management from "./components/Management/management.js";
import {Component} from "react";
import LanguageContext from "./components/languagecontext.js";
import GalleryPage from './components/Gallery/GalleryPage';
import UpdateImagesAndVideos from './components/UpdateImagesAndVideos';
import Videos from './components/Videos';


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
    <Route  exact path="/" element={<Temple />} /> 
    <Route exact path="/admin" element={<RegisterLogin />} />
    <Route exact path="/location" element={<Location />} />
    <Route exact path="/gallery" element={<GalleryPage />} />
    <Route exact path="/management" element={<Management />} />
    <Route exact path="/update-gallery" element={<UpdateImagesAndVideos />} />
    <Route exact path="/videos" element={<Videos />} />
    
  </Routes>
  <Footer />
  </LanguageContext.Provider>
</BrowserRouter>

  )
  }
}


export default App;
