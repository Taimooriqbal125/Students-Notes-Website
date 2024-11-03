import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    const buttonStyle = {
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.3s',
    };

   
  const styles = {
    body: {
      fontFamily: "Arial, sans-serif",
      margin: 0,
      padding: 0,
      backgroundColor: "#f4f4f4",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
    },
    container: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      color: "#333",
      marginBottom: "20px",
    },
    paragraph: {
      color: "#555",
    },
    link: {
      display: "inline-block",
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px",
    },
    linkHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.heading}>
          Welcome to Student Collective Notes! Here, students come together to
          share, collaborate, and access comprehensive notes that enhance
          learning and academic success.
        </h1>
        <p style={styles.paragraph}>
          We are glad to have you here. Explore our notes and enjoy your stay.
        </p>
       
         <Link to="/login" style={buttonStyle}>Login </Link>
      </div>
    </div>
  );
};

export default Welcome;
