import {Link} from "react-router-dom";
import "./header.css";
import { Component } from "react";
import headerimage from "./header_image.jpg";
import LanguageContext from "../languagecontext.js"







class Header extends Component{
    state={sidebar:false}

    Sidebartoggle=()=>{
        this.setState((prevState)=>{  
            let sidebar=!prevState.sidebar;
            return{sidebar,};
})
    }


    
    render(){
    const {sidebar} =this.state;
return(
<LanguageContext.Consumer>
{
    value=>{
        const {activelanguage,changelanguage}=value

        const onchangelanguage=(event)=>{
            changelanguage(event.target.value)

        }

        return(
            <div>
             <div className="header-container header-desktop">
                 <div className="header-image-container">
                     <div className="image-container">
                        <Link to="/"> <img src={headerimage} alt="header_image" className="header-image"/> </Link>
                     </div>
         
                     <div>
                     {activelanguage==="English"?<h4> SRI ANKALAMMA TALLI <br/> DEVASTHANAM </h4>:<h4>శ్రీ అంకాలమ్మతల్లి<br/>దేవస్థానం</h4>}
                     </div>
                 </div>
         
                 <div className="header-list-selection-container">
                     <div className="select">
                         <select value={activelanguage} onChange={onchangelanguage}>
                             <option>English</option>
                             <option>Telugu</option>
                         </select>
                     </div>
             
                     <div>
                         <ul className="header-list-items-container">
                             <li><Link className="header-list-item" to="/">{activelanguage==="English"?"Temple":"మందిరము"}</Link></li>
                             <li><Link className="header-list-item" to="/gallery">{activelanguage==="English"?"Gallery":"గ్యాలరీ"}</Link></li>
                             <li><Link className="header-list-item" to="/management">{activelanguage==="English"?"Management":"నిర్వహణ"}</Link></li>
                             <li><Link className="header-list-item" to="/location">{activelanguage==="English"?"Location":"స్థానం"}</Link></li>
                         </ul>
                     </div>
                 </div>
             </div>
         
         
             <div className="header-mobile">
                 <div className={sidebar?"sidebar_display":"sidebar_hide"}>
                     <div className="sidebar_button_container">
                     <button onClick={this.Sidebartoggle} className="sidebar_button">X</button>
                     </div>
                     <div className="sidebar-container">
                            <p> <Link className="header-list-item" to="/">{activelanguage==="English"?"Temple":"మందిరము"}</Link></p>
                            <p> <Link className="header-list-item" to="/gallery">{activelanguage==="English"?"gallery":"గ్యాలరీ"}</Link></p>
                            <p><Link className="header-list-item" to="/management">{activelanguage==="English"?"Management":"నిర్వహణ"}</Link></p>
                            <p> <Link className="header-list-item" to="/location">{activelanguage==="English"?"Location":"స్థానం"}</Link></p>
                     </div>
                 </div>
         
             <div className="header-container">
                 <div className="header-image-container">
                     <div className="image-container">
                     <Link to="/">  <img src={headerimage} alt="header_image" className="header-image"/> </Link>
                     </div>
         
                     <div>
                     {activelanguage==="English"?<h5> SRI ANKALAMMA TALLI <br/> DEVASTHANAM </h5>:<h5>శ్రీ అంకాలమ్మతల్లి<br/>దేవస్థానం</h5>}

                     </div>
                 </div>
         
                 <div className="header-list-selection-container">
                     <div className="select">
                         <select value={activelanguage} onChange={onchangelanguage}>
                             <option>English</option>
                             <option>Telugu</option>
                         </select>
                     </div>
             
                     <div>
                         <button onClick={this.Sidebartoggle} className="header-button" > <i class="fas fa-bars"></i></button>
                     </div>
                 </div>
             </div>
         
         
             </div>
         
         </div>
         
         
         )
         

    }
}
</LanguageContext.Consumer>
)

}
}

export default Header;