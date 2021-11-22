import React from "react";
import { motion } from "framer-motion";
import "./Modal.css";
import { useAuth } from "../../firebase/config";

import {
  doc,
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ setSelectedImg, selectedImg }) => {
  const currentUser = useAuth();
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };
  // const id= selectedImg.id
  // const name= selectedImg.name

  const handleDelete = async (id, name) => {
    const db = getFirestore();
    const storage = getStorage();
    const imageRef = doc(db, "pics", id);
    const objectRef = ref(storage, `files/${name}`);

    await deleteDoc(imageRef);
    await deleteObject(objectRef);

    toast.error("Image is getting Deleted", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const refreshPage = setTimeout(() => {
      window.location.reload(false);
    }, 3000);
    return () => clearTimeout(refreshPage);
  };

  return (
    <>
      <div className="modal-div">
        <motion.div
          className="backdrop"
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src={selectedImg.URL}
            alt="enlarged pic"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
          />

          <div className="modal-delete ">
            {currentUser && (
              <button
                className="logout-btn delete-btn"
                onClick={() => {
                  handleDelete(selectedImg.id, selectedImg.name);
                }}
              >
                <i class="fas fa-trash"></i> Delete
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default Modal;
