import "./management.css";
import trustee from "./trustee.jpg";
import priest from "./priest.jpg";
import executive from "./executive.jpg"
import CommitteeMembers from "../CommitteeMembers/committeemembers";
import LanguageContext from "../languagecontext";

const committeemembersarray_english=[
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

const committeemembersarray_telugu=[
"డి.నీలకంఠం","టి.మణి","వి.నాగరాజు","డి.యుగంధర్",
"బి.యుగంధర్",
"ఎ.హేమంత్",
"ఎ.సుబ్రహ్మణ్యం",
"ఎ.చెంగల్రాయులు",
"జి.వెంకటేష్",
"ఎ.ప్రసాద్",
"ఎ.హరి", "పి.దశరథయ్య",
"టి.కుప్పయ్య",
"ఎ.నితేష్",
"డి.మిథున్",
"ఎ.గిరి",
"ఎ.రంగయ్య",
"ఎన్.యెమ్మయ్య",
"ఎన్.నాగరాజు",
"జి.ఉదయకుమార్",
"మునస్వామి",
"వి.వేణుగోపాల్",
"డి.శ్రీనివాసులు","టి.వాసు"
]





const Management=()=>{

return(

    <LanguageContext.Consumer>
        {value=>{
            const {activelanguage}=value

            let requiredmembersarray=[]
            if (activelanguage==="English"){
                requiredmembersarray=committeemembersarray_english
            }
            else{
                requiredmembersarray=committeemembersarray_telugu
            }

            
    return(
        <>
            <div className="mng-header">
            <h1> {activelanguage==="English"?"Management":"నిర్వాహణ సభ్యులు"}</h1>
            <img  width="134" height="30" src="https://kanakadurgamma.org/wp-content/uploads/2021/07/motif.svg" 
                alt="Motif_Sep"></img>
            </div>
            <div className="management-main-container">
                <div className="management-individual-container">
                    <div className="mng-image-container">
                    <img src={trustee} alt="trustee" className="management-image"/>
                    </div>

                    <div className="management-individual-text-container">
                        <h2>{activelanguage==="English"?"A.MuduKrishnaiah":"ఎ.ముద్దుకృష్ణయ్య"}</h2>
                        <p>{activelanguage==="English"?"Trustee":"ఆలయ ధర్మకర్త"}</p>
                        <h3>9849835844</h3>
                    </div>
                </div>


                <div className="management-individual-container">
                    <div className="mng-image-container">
                    <img src={executive} alt="executive" className="management-image"/>
                    </div>

                    <div className="management-individual-text-container">
                        <h2>{activelanguage==="English"?"D.Krishnaiah":"డి.కృష్ణయ్య"}</h2>
                        <p>{activelanguage==="English"?"Executive":"కార్యనిర్వాహకుడు"}</p>
                        <h3>9866496375</h3>
                    </div>
                </div>


                <div className="management-individual-container">
                    <div className="mng-image-container">
                    <img src={priest} alt="trustee" className="management-image"/>
                    </div>

                    <div className="management-individual-text-container">
                        <h2>{activelanguage==="English"?"A.Chengaiah":"ఎ.చెంగయ్య"}</h2>
                        <p>{activelanguage==="English"?"Priest":"ఆలయ అర్చకులు"}</p>
                        <h3>7207420472</h3>
                    </div>
                </div>
            </div>

            <div className="mng-header">
            <h1> {activelanguage==="English"?"Committee Members":"కమిటీ సభ్యులు"} </h1>
            <img  width="134" height="30" src="https://kanakadurgamma.org/wp-content/uploads/2021/07/motif.svg" 
                alt="Motif_Sep"></img>
            </div>
            <div className="members-main-container">
                {requiredmembersarray.map((eachmember) =>{
                    return <CommitteeMembers personname={eachmember} />
                })}
            </div>
       
               

        </>
    )


        }

        }
    </LanguageContext.Consumer>
)

}



export default Management;