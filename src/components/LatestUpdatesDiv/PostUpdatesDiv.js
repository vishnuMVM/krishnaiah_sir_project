import React, { useRef,useState } from "react";
import './PostUpdatesDiv.css'
import { collection, addDoc } from "firebase/firestore";
import { db,timestamp } from "../../firebase/config";

export default function PostUpdatesDiv() {
  const EnglishTextRef = useRef();
  const TeluguTextRef = useRef();

  const [updateEvent,setUpdateEvent] = useState({eng:"",tel:""})
  const [englishText,setEnglishText] = useState('')
  const [teluguText,setTeluguText] = useState('')
  const [disabled,setDisabled] = useState(true)
  const LatestUpdatesRef = collection(db, "LatestUpdates");


  const postUpdates = async () => {
    if (
      (englishText || englishText !== "") &&
      (teluguText || teluguText !== "")){
    await setUpdateEvent(updateEvent)
    const addedDoc = await addDoc(LatestUpdatesRef, {
      update:updateEvent,
      createdAt: timestamp,
    });
  }
  setDisabled(true)
  EnglishTextRef.current.value =""
  TeluguTextRef.current.value = ""
  }



  const handleEnglishTextChange =(e)=> {
  const value = e.target.value;
  setUpdateEvent({
    ...updateEvent,
    [e.target.name]: value
  });
  setEnglishText(value);
  }


  const handleTeluguTextChange =(e)=> {
    const value = e.target.value;
  setUpdateEvent({
    ...updateEvent,
    [e.target.name]: value
  });
  setTeluguText(value);
    setDisabled(false)
}

  return (
    <div className="updates">
      <div className="center">
        <textarea
          ref={EnglishTextRef}
          name="eng"
          value={updateEvent.eng}
          className="inputField"
          placeholder="Enter English Text here.."
          type="text"
          onChange={handleEnglishTextChange}
        />
      </div>

      <div className="center">
        <textarea
          ref={TeluguTextRef}
          name="tel"
          className="inputField"
          placeholder="Enter Telugu Text Here"
          type="text"
          onChange={handleTeluguTextChange}
        />
      </div>

      <div className="fields btn-div">
        <div>
          <button
            style={{opacity : disabled ? 0.5 : 1}}
            disabled={disabled ? true : false}
            className="btn"
            onClick={postUpdates}
          >
            Post Updates
          </button>
        </div>
      </div>
    </div>
  );
}
