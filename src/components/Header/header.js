import {Link} from "react-router-dom";
import "./header.css";
import { Component } from "react";
import headerimage from "./header_image.jpg";


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
   <div>
    <div className="header-container header-desktop">
        <div className="header-image-container">
            <div className="image-container">
                <img src={headerimage} alt="header_image" className="header-image"/>
            </div>

            <div>
            <h4> SRI ANKALAMMA TALLI<br/>DEVASTHANAM</h4>
            </div>
        </div>

        <div className="header-list-selection-container">
            <div className="select">
                <select>
                    <option>Telugu</option>
                    <option selected>English</option>
                </select>
            </div>
    
            <div>
                <ul className="header-list-items-container">
                    <li><Link className="header-list-item" to="/">Temple</Link></li>
                    <li><Link className="header-list-item" to="/gallery">Gallery</Link></li>
                    <li><Link className="header-list-item" to="/management">Management</Link></li>
                    <li><Link className="header-list-item" to="/contact">Contact</Link></li>
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
                   <p> <Link className="header-list-item" to="/">Temple</Link></p>
                   <p> <Link className="header-list-item" to="/gallery">Gallery</Link></p>
                   <p><Link className="header-list-item" to="/management">Management</Link></p>
                   <p> <Link className="header-list-item" to="/contact">Contact</Link></p>
            </div>
        </div>

    <div className="header-container">
        <div className="header-image-container">
            <div className="image-container">
                <img src={headerimage} alt="header_image" className="header-image"/>
            </div>

            <div>
            <h5> SRI ANKALAMMA TALLI<br/>DEVASTHANAM</h5>
            </div>
        </div>

        <div className="header-list-selection-container">
            <div className="select">
                <select>
                    <option>Telugu</option>
                    <option selected>English</option>
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

export default Header;