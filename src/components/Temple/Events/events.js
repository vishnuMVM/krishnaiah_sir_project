import "./events.css";


const Events=(props)=>{
    let {event}=props;
    let {img,eventname,eventdes}=event;
    return(

        <>
        <div className="each-event-container">
            <div className="event-image-container">
                <img className="event-image" src={img} alt="event_image"/>
            </div>
            <div>
                <h3>{eventname}</h3>
                <p>{eventdes}</p>
            </div>

        </div>
        </>
    )
}



export default Events;