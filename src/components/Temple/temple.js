import Topsection from "./Topsection/topsection";
import Templetimings from "./Templetimings/templetimings";
import Events from "./Events/events"
import "./temple.css"
import LanguageContext from "../languagecontext.js";
import LatestUpdatesDiv from "../LatestUpdatesDiv/LatestUpdatesDiv";



const eventobject_english=[{
    img:"https://tse4.mm.bing.net/th?id=OIP.hP8CG8FnOYYpsJONDPbH1QHaEd&pid=Api&P=0&w=254&h=154",
    eventname:"Dance Competition",
    eventdes:"Held on dasara between nearby villages"
},
{
    img:"https://kanakadurgamma.org/wp-content/uploads/2021/07/Anna-Prasadam.jpg",
    eventname:"Anna Prasadam",
    eventdes:"Food is the basic need for all living beings"
},
{
    img:"https://bhukailas.org/images/agnigundam.JPG",
    eventname:"Agnigundam",
    eventdes:"One of the rituals followed for wishing their desires"
},
{
    img:"deeparadana.jpg",
    eventname:"Deeparadana",
    eventdes:"On the occassion of karthika pournami"
}
]



const eventobject_telugu=[{
    img:"https://tse4.mm.bing.net/th?id=OIP.hP8CG8FnOYYpsJONDPbH1QHaEd&pid=Api&P=0&w=254&h=154",
    eventname:"నృత్య పోటీలు",
    eventdes:"దసరా సందర్భంగా సమీప గ్రామాల మధ్య నిర్వహించారు"
},
{
img:"https://tse4.mm.bing.net/th?id=OIP.hP8CG8FnOYYpsJONDPbH1QHaEd&pid=Api&P=0&w=254&h=154",
eventname:"నృత్య పోటీలు",
eventdes:"దసరా సందర్భంగా సమీప గ్రామాల మధ్య నిర్వహించారు"
},
{
img:"https://tse4.mm.bing.net/th?id=OIP.hP8CG8FnOYYpsJONDPbH1QHaEd&pid=Api&P=0&w=254&h=154",
eventname:"నృత్య పోటీలు",
eventdes:"దసరా సందర్భంగా సమీప గ్రామాల మధ్య నిర్వహించారు"
},
{
img:"deeparadana.jpg",
eventname:"నృత్య పోటీలు",
eventdes:"దసరా సందర్భంగా సమీప గ్రామాల మధ్య నిర్వహించారు"
},
]


const Temple=()=>{

    return(
<LanguageContext.Consumer>
{
    value=>{
        const {activelanguage}=value

        let requiredarray=[];

        if (activelanguage==="English"){
            requiredarray=eventobject_english
        }
        else{
            requiredarray=eventobject_telugu
        }

        return(
            <div>
                <Topsection language={activelanguage}/>
                <LatestUpdatesDiv language={activelanguage}/>
                <Templetimings language={activelanguage}/>
                
               
{activelanguage==="English"? <h1 className="temple-header"> Events Held</h1>: <h1 className="temple-header"> నిర్వహించిన  కార్యక్రమాలు</h1>} 
                
                <div className="evetns-main-container">
                {
                    requiredarray.map(eachevent=>{
    
                        return <Events event={eachevent}/>
                    })
                }
                </div>
        
               
            </div>
        )


        }
    }

</LanguageContext.Consumer>
    )




}



export default Temple;