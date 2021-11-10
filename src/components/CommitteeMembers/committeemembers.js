
import "./committeemembers.css";

const CommitteeMembers=(props)=>{
    const {personname}=props
    return(
        <div className="each-member-container">
                <img src="https://kanakadurgamma.org/wp-content/uploads/elementor/thumbs/default-image-kd-pdix0bfe87ecpf455kn6j9wp4v8yd6m8dvlm5w0ti0.jpg" 
                title="Default Image" alt="Default_Image"/>
                <h4>{personname}</h4>
        </div>
    )
}

export default CommitteeMembers;