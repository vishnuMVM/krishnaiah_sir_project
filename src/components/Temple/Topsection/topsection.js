import "./topsection.css";
import top_section_image from "./top_section_image.jpg"

const Topsection=()=>{
    return(
        <div className="top-section">

            <img src={top_section_image} alt="top_section_img" className="top-section-image"/>    

            <div className="top-section-text-container">
                
            `       <h1>Sri Ankalammatalli Devasthanam</h1>
                    <h2>Padiredu Road,Vadamalapeta,Chittoor district, Andhrapradesh</h2>
    

                <div className="top-section-text">
                    <p>
                    Ankalamma is counted as one of the Matrikas or "Seven Mothers".
                    She is also considered to be a form of goddess Ankali or Kali.<br/>
                    <br/>
                    Ankalamma is grama devata, she seems to have originated in a fierce guardian figure. 
                    Sacred areas of Ankalamma and traditional Hindu deities are
                    worshipped symbolically to appease the inner destructive impulses in us.<br/>
                    <br/>
                    Fowl or lamb offerings are made in village annual ceremonies and these are later consumed as food. 
                    Ankalamma's shrines are usually located outside of the village in groves of trees. 
                    In some places shrines are located inside the villages and cities. 
                    Especially in Tamil Nadu ankalamma is worshipped by several people.
                    </p>
                </div>
            </div>
            
        </div>
    )
}



export default Topsection;