import React ,{useEffect,useState} from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
  addDoc
} from "firebase/firestore";
import { db } from "../../firebase/config";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LatestUpdatesDiv() {
  const [updates,setUpdates] = useState([])

  useEffect(()=>{
    const LatestUpdatesRef = collection(db, "LatestUpdates");
    const q = query(LatestUpdatesRef,orderBy("createdAt","desc"))
    const getUpdates = async () => {
      const data = await getDocs(q)
      .then((snapshot) => {
        let docs = [];
        snapshot.docs.forEach((doc) => {
          docs.push({ ...doc.data().update, id: doc.id });
        });
        setUpdates(docs);
      })
      .catch((err) => {
        console.log(err.message);
      });
    };
    getUpdates()
    console.log("Use effect updates.... ",updates)
  },[])


  const handleDelete = async (id) => {
    const videoRef = doc(db, "LatestUpdates", id);
    await deleteDoc(videoRef)
   

    toast.error("Update is deleted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    window.location.reload(false);
 
  };

  return <div>
{updates.map((doc)=>{
  return <div className="updates-div">
   <h5>{doc.tel}</h5>
   <button className="logout-btn" onClick={()=>{handleDelete(doc.id)}}><i class="fas fa-trash"></i> delete</button>
   </div>
})}
  </div>;
}
