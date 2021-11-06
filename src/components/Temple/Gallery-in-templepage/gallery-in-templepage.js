
import "./gallery-in-templepage.css";
import {Redirect} from "react-router-dom"


const Viewmore=()=>{
    <Redirect to="/gallery" />

}

const GalleryInTemplepage=()=>{    
    return(
        <div>
            <h1>Gallery</h1>
            <div>
                
            </div>
            <button onClick={Viewmore}>View More</button>

        </div>
    )
}


export default GalleryInTemplepage;
