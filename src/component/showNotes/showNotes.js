import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import Category from "../category/category";
import Modal from "react-modal";
import Note from "../note/note";
import "./showNotes.css";
import notNotes from "../../Img/notNotes.svg";
import searchImage from "../../Img/search-image.svg";
import { v4 as uuidv4 } from "uuid";
import { handleShowModal, resetForm } from "../feature/slice";
import FormNote from "../FormNote/FormNote";
import { auth } from "../../config/fire-base";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ShowNotes = React.memo(() => {
  console.log("show notes");

  const state = useSelector((state) => state.noteReducer);
  const dispatch = useDispatch();
  const [bgStyle, setbgStyle] = useState();

  useEffect(() => {
    EditProgressBar();
  }, [state.notes.length, state.filteredNotes.length]);

  const handleCancelNote = () => {
    dispatch(handleShowModal());
  };

  const handleShowAddNote = () => {
    dispatch(resetForm());
    dispatch(handleShowModal());
  };

  const EditProgressBar = () => {
    var w = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--width-ProgressBar"
      )
    );
    if (w > 0 && state.notes.length !== 0) {
      let i = 100 / state.notes.length;
      w = i * state.countRead;
      document.documentElement.style.setProperty(
        "--width-ProgressBar",
        `${w}%`
      );
    }
  };

  const navigate = useNavigate();
  const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#333",
      padding: "10px 20px",
      color: "white",
    },
    profileContainer: {
      display: "flex",
      alignItems: "center",
    },
    profileImage: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      marginRight: "10px",
    },
    username: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    logoutButton: {
      padding: "8px 16px",
      backgroundColor: "#ff4d4d",
      border: "none",
      borderRadius: "5px",
      color: "white",
      fontSize: "14px",
      cursor: "pointer",
    },
    img :{
      borderRadius : "10px",
      marginRight : "-12px",
      width :"100vw"
    }
  };

  const logouthandle = async () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div>
      {" "}
      <div style={styles.navbar}>
        <div style={styles.profileContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaB0KTQq64micjh_obvFWVF6Hjzzc-E7Zyqg&s" // replace with the actual profile image URL
            alt="Profile"
            style={styles.profileImage}
          />
          <span style={styles.username}>taimooriqbal</span>
        </div>

        <button style={styles.logoutButton} onClick={logouthandle}>
          Logout
        </button>
      </div>
      <div className="show-notes-container">
        <header className="header-category">
          <div className="category">
            {state.cat.map((item, index) => (
              <Category
                key={uuidv4()}
                index={index}
                name={item.value}
                id={uuidv4()}
                setbgStyle={setbgStyle}
                bgStyle={bgStyle}
              />
            ))}
          </div>
          <div className="addNote-container">
            <button onClick={handleShowAddNote} className="add-note">
              <AiOutlinePlus className="icon-plus" /> Add Note
            </button>
          </div>

          {state.showModal && (
            <Modal
              className="modal"
              overlayClassName="overlay"
              isOpen={true}
              onRequestClose={handleCancelNote}
              ariaHideApp={false}
            >
              <FormNote />
            </Modal>
          )}
        </header>
        {state.notes.length > 0 && (
          <div className="progress-note">
            <p>
              You have <span className="start">{state.countRead}</span>/
              <span className="end">{state.notes.length}</span> notes completed
            </p>
            <div className="progress-bar">
              <div className="fill-bg"></div>
            </div>
          </div>
        )}
        <main className="show-notes">
          {state.filteredNotes.length > 0 ? (
            <div className="notes">
              {state.filteredNotes.map((note) => (
                <Note key={note.id} note={note} />
              ))}
            </div>
          ) : (
            <div className="not-notes">
              {state.notes.length === 0 ? (
                <>
                  <p className="title-not-notes">You don't have any notes to add just click on ⇑</p>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:625/1*4r4x8mggXOEYz1vU7tCdAw.jpeg"
                    alt="No notes"
                    style={styles.img}
                  />
                </>
              ) : (
                <>
                  <p className="title-not-notes">Couldn't find any notes.</p>
                  <img src={searchImage} alt="Search" className="img-note" />
                </>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
});

export default ShowNotes;
