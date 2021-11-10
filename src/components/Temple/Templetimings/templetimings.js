import "./templetimings.css";
import bgimg from "./temple-timings-bg-img.jpg";

const Templetimings=(props)=>{
     
    const {language}=props


    return(
        <div className="timings-main-container">
            <div className="temple-timing-bg-container">
                
                <img src={bgimg} alt="bg_img" className="timings-img"/>
                
    
                <div className="temple-timing-card">
                    <h2>{language==="English"?"Temple Timings":"ఆలయ సమయాలు"}</h2>
                    <div>
                        <h3>{language==="English"?"Abhishekam":"అభిషెకం"}</h3>
                        <p>5:00 AM to 11:30 AM</p>
                    </div>

                    <div>
                        <h3>{language==="English"?"Free Darshan":"ఉచిత దర్శనం"}</h3>
                        <p>6:00 AM to 9:00 PM</p>
                    </div>
                </div>

            </div>
        </div>
      
    )
}


export default Templetimings;