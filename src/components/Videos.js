import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore,deleteDoc,doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { v4 as uuid } from "uuid";
import YoutubeEmbed from "./YoutubeEmbed";
import {  useAuth } from "../firebase/config";


export default function Videos() {
  const URLCollectionRef = collection(db, "AllVideoURLs");
  const [videoData, setVideoData] = useState([]);
  const currentUser = useAuth();


  useEffect(() => {
    const getURLs = async () => {
      const data = await getDocs(URLCollectionRef);
      setVideoData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getURLs();
  }, []);

 


const handleDeleteVideo=async(id) => {
  
  const videoRef = doc(db, "AllVideoURLs", id);
  await deleteDoc(videoRef)
  //  deleteDoc(doc(db, "All Video URLs", id)).then(
  //    
  //  )
  console.log(id)

  const refreshPage = setTimeout(() => {
    window.location.reload(false);
      console.log('This will run after 5 second!')
    }, 1000);
    return () => clearTimeout(refreshPage);

}


  return (
    <div className="img-grid">
      {videoData.map((videoDoc) => {
        return <div key={videoDoc.id}>
          <YoutubeEmbed embedId={videoDoc.url}/>
          <h4 > {videoDoc.videoName}</h4>;
          {currentUser && <button onClick = {()=>{handleDeleteVideo(videoDoc.id)}}>Delete this Video </button>}
        </div>
      })}
    </div>
  );
}
