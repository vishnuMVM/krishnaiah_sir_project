import "./location.css"
import LanguageContext from "../languagecontext.js";
import MapView from "../MapView/MapView";

const locationmater={
    English:{
        air:"If any piligrim who is too far from temple location wants to come by flight, renigunta is the nearest airport to take on. Followed by a road journey from renigunta",
        rail:"Pudi Rail Way Station ,Taduku Rail Way Station are the very nearby railway stations to Vadamalpet Also you can consider railway Stations from Near By town Chittoor. Chittoor Rail Way Station , Siddampalli Rail Way Station are the railway Stations near to Chittoor.You can reach from Chittoor to Vadamalpet by road after.",
        road:"P.R.Palli APSRTC Bus Station , Tirupathi APSRTC Bus Station , Puttur APSRTC Bus Station are the nearby by Bus Stations to Vadamalpet.APSRTC runs Number of busses from major cities to here.",
        
    },

    Telugu:{
        air:"ఆలయ ప్రదేశానికి చాలా దూరంలో ఉన్న ఎవరైనా యాత్రికులు విమానంలో రావాలనుకుంటే, రేణిగుంట దగ్గర్లోని విమానాశ్రయం. ఆ తర్వాత రేణిగుంట నుంచి రోడ్డు ప్రయాణం చేయాలి",
        rail:"పూడి రైల్ వే స్టేషన్, తడుకు రైల్ వే స్టేషన్ వడమాల్‌పేట్‌కి చాలా సమీపంలోని రైల్వే స్టేషన్‌లు అలాగే మీరు చిత్తూరు పట్టణానికి సమీపంలో ఉన్న రైల్వే స్టేషన్‌లను పరిగణించవచ్చు. చిత్తూరు రైల్వే స్టేషన్, సిద్దంపల్లి రైల్వే స్టేషన్లు చిత్తూరుకు సమీపంలో ఉన్న రైల్వే స్టేషన్లు. మీరు చిత్తూరు నుండి వడమాలపేటకు రోడ్డు మార్గంలో చేరుకోవచ్చు.",
        road:"P.R.పల్లి APSRTC బస్ స్టేషన్, తిరుపతి APSRTC బస్ స్టేషన్, పుత్తూరు APSRTC బస్ స్టేషన్ వడమాలపేటకు సమీపంలో ఉన్నాయి. APSRTC ప్రధాన నగరాల నుండి ఇక్కడికి తగినంత బస్సులను నడుపుతుంది.",
    }

}


const Location=()=>{

    const gettingmater=(activelanguage)=>{
        switch (activelanguage){
            case "English":
                return locationmater.English
    
            case "Telugu":
                return locationmater.Telugu
            default:
                return null;
        }
    }


return(
    
    <LanguageContext.Consumer>
        {
            value=>{
               const {activelanguage}=value;
               const{air,rail,road}=gettingmater(activelanguage)

               return(
                <div>
                    <div className="contact-whole-container">
        
                        <div className="map-text-container">
        
                            <div className="contact-container">
                                <h1>{activelanguage==="English"?"Contact Us":"వివరాలను సంప్రదించడానికి"}</h1>
        
                                <table>
                                    <tr>
                                        <td><h2>{activelanguage==="English"?"Email:":"ఇమెయిల్ ఐడి:"}</h2></td>
                                        <td><p>darsikrishna10000@gmail.com</p></td>
                                    </tr>
        
                                    <tr>
                                        <td><h2>{activelanguage==="English"?"Phone:":"ఫోను నంబరు:"}</h2></td>
                                        <td><p>9866496375</p></td>
                                    </tr>
        
                                </table>
        
                            </div>
        
                            <div className="map-main-container">
                                
                                <MapView />

                            </div>
        
                        </div>
                    </div>
        
                    <div className="htr-main-container">
                        <h1>{activelanguage==="English"?"How To Reach":"ఆలయాన్ని చేరుకోవడానికి మార్గాలు"}  </h1>
                       
                        <div className="htr-row-container">
                            <div className="htr-each-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="41.366" height="41.366" viewBox="0 0 41.366 41.366"><g transform="translate(21.213 -4.243) rotate(45)"><path d="M15.27,13.5"></path><path d="M31.5,24V21l-12-7.5V5.25a2.25,2.25,0,0,0-4.5,0V13.5L3,21v3l12-3.75V28.5l-3,2.25V33l5.25-1.5L22.5,33V30.75l-3-2.25V20.25Z"></path></g></svg>
                                <p>{air}</p>
                            </div>
        
                            <div className="htr-each-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20.96" height="28.92" viewBox="0 0 20.96 28.92"><path d="M21.746,22.926l-.068-.13.034-.049.034-.049a8.058,8.058,0,0,0,1.726-.968,2.854,2.854,0,0,0,1.038-1.695l.13-.6V4.042a2.359,2.359,0,0,0-.33-1.149,4.41,4.41,0,0,0-.824-1.072,4.729,4.729,0,0,0-1.1-.791,2.574,2.574,0,0,0-1.17-.31H10.2a2.614,2.614,0,0,0-1.137.294,4.714,4.714,0,0,0-1.119.758A4.187,4.187,0,0,0,7.1,2.806a2.3,2.3,0,0,0-.33,1.14V19.572a2.016,2.016,0,0,0,.2.822,4.046,4.046,0,0,0,.493.8,5.086,5.086,0,0,0,.644.694,4.369,4.369,0,0,0,.674.509c.106.045.3.113.577.2s.4.151.376.194L5.226,29.64H7.857l3.292-4.771h9.083L23.52,29.64h2.665ZM13.09,2.035a.525.525,0,0,1,.165-.347.45.45,0,0,1,.329-.178H17.8a.684.684,0,0,1,.264.129c.13.088.2.176.2.263V3.513a.373.373,0,0,1-.163.3.5.5,0,0,1-.3.136H13.553l-.134-.1a1.2,1.2,0,0,1-.213-.182.329.329,0,0,1-.115-.242V2.035ZM8.845,6.542A1.519,1.519,0,0,1,8.994,5.9a2.527,2.527,0,0,1,.378-.576A1.9,1.9,0,0,1,9.914,4.9a1.363,1.363,0,0,1,.644-.165H20.792a1.518,1.518,0,0,1,.589.129,2.024,2.024,0,0,1,.544.363,2.065,2.065,0,0,1,.4.5,1.111,1.111,0,0,1,.146.557V9.767a1.113,1.113,0,0,1-.163.573,1.777,1.777,0,0,1-.428.5,2.461,2.461,0,0,1-.56.34,1.357,1.357,0,0,1-.591.133h-10.1l-.167-.03a1,1,0,0,1-.2-.068,1.669,1.669,0,0,1-.985-.592,1.617,1.617,0,0,1-.429-1.084v-3Zm3.046,13.59a1.7,1.7,0,0,1-1.267.525,1.6,1.6,0,0,1-1.237-.525,1.848,1.848,0,0,1-.476-1.286,1.661,1.661,0,0,1,.5-1.2,1.625,1.625,0,0,1,1.217-.513,1.809,1.809,0,0,1,1.267.476,1.658,1.658,0,0,1,.51,1.27A1.734,1.734,0,0,1,11.891,20.132Zm7.535,0a1.784,1.784,0,0,1-.512-1.286,1.571,1.571,0,0,1,.543-1.236,1.885,1.885,0,0,1,1.269-.476,1.613,1.613,0,0,1,1.233.513,1.7,1.7,0,0,1,.478,1.2,1.812,1.812,0,0,1-.495,1.286,1.645,1.645,0,0,1-1.252.525,1.689,1.689,0,0,1-1.265-.525Z" transform="translate(-5.226 -0.72)"></path></svg>
                                <p>{rail}</p>
                            </div>
        
                            <div className="htr-each-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28.5" height="19" viewBox="0 0 28.5 19"><path d="M28.361,21.257,21.444,5.424A1.506,1.506,0,0,0,20.072,4.5H15.244l.121,1.146a.4.4,0,0,1-.394.437H13.528a.4.4,0,0,1-.394-.437L13.256,4.5H8.427a1.506,1.506,0,0,0-1.372.924L.138,21.257A1.58,1.58,0,0,0,1.511,23.5H11.25l.51-4.833a.792.792,0,0,1,.787-.709h3.4a.792.792,0,0,1,.787.709l.51,4.833h9.739A1.58,1.58,0,0,0,28.361,21.257ZM12.884,8.021a.4.4,0,0,1,.394-.354h1.944a.4.4,0,0,1,.394.354l.228,2.156a.594.594,0,0,1-.59.656H13.247a.593.593,0,0,1-.59-.656l.227-2.156Zm2.733,8.354H12.882a.792.792,0,0,1-.787-.875l.251-2.375a.792.792,0,0,1,.787-.709h2.234a.792.792,0,0,1,.787.709L16.4,15.5a.792.792,0,0,1-.787.875Z" transform="translate(0 -4.5)"></path></svg>
                                <p>{road}</p>
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



export default Location;