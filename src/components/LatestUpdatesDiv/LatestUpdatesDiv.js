import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { useAuth } from "../../firebase/config";
import { db } from "../../firebase/config";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./latestupdatesdiv.css"

export default function LatestUpdatesDiv(props) {
  const { language } = props;
  const [updates, setUpdates] = useState([]);
  const currentUser = useAuth();

  useEffect(() => {
    // const LatestUpdatesRef = collection(db, "LatestUpdates");
    // const q = query(LatestUpdatesRef,orderBy("createdAt","desc"))
    getUpdates();
    console.log("Use effect updates.... ", updates);
  }, []);

  const getUpdates = async () => {
    const LatestUpdatesRef = collection(db, "LatestUpdates");
    const q = query(LatestUpdatesRef, orderBy("createdAt", "desc"));
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

  const handleDelete = async (id) => {
    const videoRef = doc(db, "LatestUpdates", id);
    await deleteDoc(videoRef);

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

  return (
      
    <ul className="updates-heading">
      {updates.length>0?<h1 >Latest Updates</h1>:null}
      {updates.map((doc) => {
        return (
          
        <div className={currentUser?"updates-div-admin":"updates-div-user"}>
          <li className={currentUser?"updates-text-admin":"updates-text-user"}>
            {language === "English" ? <h4>{doc.eng}</h4> : <h4>{doc.tel}</h4>}
          </li>

          <div>
            {currentUser? <button
              className="delete-btn"
              onClick={() => {
              handleDelete(doc.id)
            }}>
              <i class="fas fa-trash"></i> delete
          </button>:null}
          </div>
        </div>
        )
      })}
    </ul>
    
  );
}
