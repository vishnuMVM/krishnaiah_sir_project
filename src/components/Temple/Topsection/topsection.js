import "./topsection.css";
import top_section_image from "./top_section_image.jpg";


const mater={
    English:{
        h1:"Sri Ankalammatalli Devasthanam",
        h2:"Padiredu Road,Vadamalapeta,Chittoor district, Andhrapradesh",
        p:"   Ankalamma is counted as one of the Matrikas or Seven Mothers. She is also considered to be a form of goddess Ankali or Kali.Ankalamma is grama devata, she seems to have originated in a fierce guardian figure. Sacred areas of Ankalamma and traditional Hindu deities areworshipped symbolically to appease the inner destructive impulses in us.Fowl or lamb offerings are made in village annual ceremonies and these are later consumed as food. Ankalamma's shrines are usually located outside of the village in groves of trees. In some places shrines are located inside the villages and cities. Especially in Tamil Nadu ankalamma is worshipped by several people."
    },

    Telugu:{
        h1:"శ్రీ అంకాలమ్మతల్లి దేవస్థానం",
        h2:"పదిరేడు రోడ్, వడమాలపేట, చిత్తూరు జిల్లా, ఆంధ్ర ప్రదేశ్",
        p:"అంకాలమ్మ మాతృక లేదా ఏడుగురు తల్లులలో ఒకరిగా పరిగణించబడుతుంది. ఆమె అంకాలీ లేదా కాళీ దేవత రూపంగా కూడా పరిగణించబడుతుంది.అంకాలమ్మ గ్రామ దేవత, ఆమె ఒక భయంకరమైన సంరక్షక మూర్తిగా ఉద్భవించింది. మనలోని అంతర్గత విధ్వంసక ప్రేరణలను శాంతింపజేయడానికి అంకాలమ్మ మరియు సాంప్రదాయ హిందూ దేవతలకు సంబంధించిన పవిత్ర స్థలాలు ప్రతీకాత్మకంగా పూజించబడతాయి.గ్రామ వార్షిక వేడుకల్లో కోడి లేదా గొర్రె నైవేద్యాలను తయారు చేస్తారు మరియు తరువాత వీటిని ఆహారంగా తీసుకుంటారు. అంకాళమ్మ మందిరాలు సాధారణంగా ఊరి బయట చెట్ల పొదల్లో ఉంటాయి. కొన్ని ప్రదేశాలలో పుణ్యక్షేత్రాలు గ్రామాలు మరియు నగరాల లోపల ఉన్నాయి. ముఖ్యంగా తమిళనాడులో అంకాలమ్మను చాలా మంది పూజిస్తారు."
    }

}


const Topsection=(props)=>{   
    
    const gettingmater=(language)=>{
    switch (language){
        case "English":
            return mater.English

        case "Telugu":
            return mater.Telugu
        default:
            return null;
    }
}

    const {language}=props

    const{h1,h2,p}=gettingmater(language)
        return(
            <div className="top-section">
    
                <img src={top_section_image} alt="top_section_img" className="top-section-image"/>    
    
                <div className="top-section-text-container">
                    
                `       <h1>{h1}</h1>
                        <h2>{h2}</h2>
        
    
                    <div className="top-section-text">
                        <p>{p}</p>
                    </div>
                </div>
                
            </div>
        )
    
    }









export default Topsection;