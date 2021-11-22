import Topsection from "./Topsection/topsection";
import Templetimings from "./Templetimings/templetimings";
import Events from "./Events/events"
import "./temple.css"
import LanguageContext from "../languagecontext.js";
import LatestUpdatesDiv from "../LatestUpdatesDiv/LatestUpdatesDiv";


const eventobject_english=[{
    img:"https://tse4.mm.bing.net/th?id=OIP.hP8CG8FnOYYpsJONDPbH1QHaEd&pid=Api&P=0&w=254&h=154",
    eventname:"dance competition",
    eventdes:"held on dasara between nearby villages"
},
{
    img:"https://tse4.mm.bing.net/th?id=OIP.hP8CG8FnOYYpsJONDPbH1QHaEd&pid=Api&P=0&w=254&h=154",
    eventname:"dance competition",
    eventdes:"held on dasara between nearby villages"
},
{
    img:"https://tse4.mm.bing.net/th?id=OIP.hP8CG8FnOYYpsJONDPbH1QHaEd&pid=Api&P=0&w=254&h=154",
    eventname:"dance competition",
    eventdes:"held on dasara between nearby villages"
},
{
    img:"https://tse4.mm.bing.net/th?id=OIP.hP8CG8FnOYYpsJONDPbH1QHaEd&pid=Api&P=0&w=254&h=154",
    eventname:"dance competition",
    eventdes:"held on dasara between nearby villages"
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
img:"https://tse4.mm.bing.net/th?id=OIP.hP8CG8FnOYYpsJONDPbH1QHaEd&pid=Api&P=0&w=254&h=154",
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
                <Templetimings language={activelanguage}/>
                <LatestUpdatesDiv language={activelanguage}/>
               
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