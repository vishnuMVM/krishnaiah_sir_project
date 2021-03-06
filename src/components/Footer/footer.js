import "./footer.css";
import amma from "./ma-in-lotous.jpg";

const Footer=()=>{
    return(
        <div>
            <div className="footer-main-contianer">
            <div className="footer-row-container">
                <div className="footer-each-container">
                    <div className="footer-image-container">
                        <img src={amma} alt="ma_in_lotous" className="ma-img"/>
                        <div>
                            <h3>Sri Ankalammatalli Devasthanam</h3>
                            <h4>Padiredu Road,Vadamalapeta,Chittoor district, Andhrapradesh</h4>
                        </div>
                    </div>
                </div>

                <div className="footer-each-container">
                    <h3>Email</h3>
                    <h4>darsikrishna10000@gmail.com</h4>
                </div>

                <div className="footer-each-container">
                    <h3>Phone</h3>
                    <h4>9866496375</h4>
                </div>
            </div>
            </div>

            <div className="footer-main-dev-contianer">
            <div className="footer-dev-container">
                <div className="footer-each-container">
                    <h5>@ Sri Ankalammatalli Devasthanam</h5>    
                </div>

                <div className="footer-dev-details-container">
                    <h4>Contact Details</h4>
                    <div>
                        <h5>damalokeshskht@gmail.com</h5>
                        <h5>yvishnuvardhan325@gmail.com</h5>
                    </div>
                </div>

                <div className="footer-each-container">
                    <h5>Designed & Developed by LokmaStudio</h5>
                </div>
            </div>
            </div>


        </div>
    )
}



export default Footer;