import React, { useState, useEffect } from "react";
import {
  doc,
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { motion } from "framer-motion";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../firebase/config";
import { Link } from "react-router-dom";

export default function ImageGrid({ setSelectedImg }) {
  const [documents, setDocuments] = useState([]);
  const currentUser = useAuth();

  useEffect(() => {
    const unsub = getData();
    return unsub;
  }, []);

  const getData = async () => {
    const db = getFirestore();
    const colRef = collection(db, "pics");
    getDocs(colRef)
      .then((snapshot) => {
        let docs = [];
        snapshot.docs.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(docs);
      })
      .catch((err) => {
        console.log(err.message);
      });
    return { documents };
  };

  const handleDelete = async (id, name) => {
    const db = getFirestore();
    const storage = getStorage();
    const imageRef = doc(db, "pics", id);
    const objectRef = ref(storage, `files/${name}`);

    await deleteDoc(imageRef);
    await deleteObject(objectRef);

    toast.error("Image is getting Deleted", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const refreshPage = setTimeout(() => {
      window.location.reload(false);
      console.log("This will run after 5 second!");
    }, 1000);
    return () => clearTimeout(refreshPage);
  };

  return (
    <>
    <Link to= "/update-gallery">
       <button>Update Gallery </button>
    </Link>
   
      <div className="img-grid">
        {documents &&
          documents.map((doc) => (
            <>
              <motion.div
                className="img-wrap"
                key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
              >
                <motion.img
                  src={doc.URL}
                  alt="uploaded pic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  onClick={() => {
                    setSelectedImg(doc.URL);
                  }}
                />

                <div>
                  {currentUser && (
                    <button
                      style={{
                        position: "relative",
                        zIndex: 1,
                        marginTop: "100px",
                        width: "300px",
                        height: "50px",
                      }}
                      onClick={() => {
                        handleDelete(doc.id, doc.name);
                      }}
                    >
                      delete
                    </button>
                  )}
                </div>
              </motion.div>
            </>
          ))}
      </div>
      <ToastContainer />
    </>
  );
}