import "./management.css";
import trustee from "./trustee.jpg";
import priest from "./priest.jpg";
import CommitteeMembers from "../CommitteeMembers/committeemembers";

const committeemembersarray=[
    "D.NEELAKANTAM","T.MANI","V.NAGARAJU","D.UGANDAR",
	"B.UGANDAR",
	"A.HEMANTH",
	"A.SUBRAMANYAM",
	"A.CHENGALRAYULU",
	"G.VENKATESH",
	"A.PRASAD",
	"A.HARI",	"P.DASARATHAIAH",
	"T.KUPPAIAH",
	"A.NITESH",
	"D.MITHUN",
	"A.GIRI",
	"A.RANGAIAH",
	"N.YEMMAIAH",
	"N.NAGARAJU",
	"G.UDAYKUMAR",
	"MUNASWAMY",
	"V.VENUGOPAL",
	"D.SRINIVASULU","T.VASU"

]

const Management=()=>{
    return(
        <>
            <div className="mng-header">
            <h1 >Management</h1>
            <img  width="134" height="30" src="https://kanakadurgamma.org/wp-content/uploads/2021/07/motif.svg" 
                alt="Motif_Sep"></img>
            </div>
            <div className="management-main-container">
                <div className="management-individual-container">
                    <div className="mng-image-container">
                    <img src={trustee} alt="trustee" className="management-image"/>
                    </div>

                    <div className="management-individual-text-container">
                        <h2>A.MuduKrishnaiah</h2>
                        <p>Trustee</p>
                        <h3>9849835844</h3>
                    </div>
                </div>


                <div className="management-individual-container">
                    <div className="mng-image-container">
                    <img src={trustee} alt="trustee" className="management-image"/>
                    </div>

                    <div className="management-individual-text-container">
                        <h2>D.krishnaiah</h2>
                        <p>Administrator</p>
                        <h3>9866496375</h3>
                    </div>
                </div>


                <div className="management-individual-container">
                    <div className="mng-image-container">
                    <img src={priest} alt="trustee" className="management-image"/>
                    </div>

                    <div className="management-individual-text-container">
                        <h2>A.Chengaiah</h2>
                        <p>Priest</p>
                        <h3>7207420472</h3>
                    </div>
                </div>
            </div>

            <div className="mng-header">
            <h1> Committee Members </h1>
            <img  width="134" height="30" src="https://kanakadurgamma.org/wp-content/uploads/2021/07/motif.svg" 
                alt="Motif_Sep"></img>
            </div>
            <div className="members-main-container">
                {committeemembersarray.map((eachmember) =>{
                    return <CommitteeMembers personname={eachmember} />
                })}
            </div>
       
               

        </>
    )
}



export default Management;