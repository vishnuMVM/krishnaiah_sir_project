import "./templetimings.css";
import bgimg from "./temple-timings-bg-img.jpg";

const Templetimings=()=>{
    return(
        <div className="timings-main-container">
            <div className="temple-timing-bg-container">
                
                <img src={bgimg} alt="bg_img" className="timings-img"/>
                
    
                <div className="temple-timing-card">
                    <h2>Temple Timings</h2>
                    <div>
                        <h3>Abhishekam</h3>
                        <p>5:00 AM to 11:30 AM</p>
                    </div>

                    <div>
                        <h3>Free Darshan</h3>
                        <p>6:00 AM to 9:00 PM</p>
                    </div>
                </div>

            </div>
        </div>
      
    )
}


export default Templetimings;