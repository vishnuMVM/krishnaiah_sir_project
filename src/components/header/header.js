
import "./header.css";
const Header=()=>{
return(
    <div className="header-container">
        <div className="header-image-container">
            <div className="image-contaier">
            <img src="./header_image.jpg" alt="header_image" className="image"/>
            </div>

            <div>
            <h4> SRI ANKALAMMA TALLI<br/>DEVASTHANAM</h4>
            </div>
        </div>

        <div className="header-button-container">
        <div className="select">
            <select>
                <option>Telugu</option>
                <option selected>English</option>
            </select>
        </div>
    
        <div>
            <button className="header-button">Temple</button>
            <button className="header-button">Management</button>
            <button className="header-button">Contact</button>
        </div>
</div>

</div>
)
}

export default Header;