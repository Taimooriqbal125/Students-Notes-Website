import React, { useState } from 'react';
import { auth } from '../../config/fire-base';
import {createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { google } from '../../config/fire-base';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth,google)
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputContainer}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.label} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
       <div>
       <Link to={"/shownotes"}>
       <button type="submit" style={styles.button}  >  Sign In</button>
       </Link>
       </div>
      </form>
      <div style={styles.googleContainer}>
        <button onClick={handleGoogleSignIn} style={styles.googleButton}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    fontSize: '14px',
    color: '#333',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4a90e2',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    position: 'absolute',      // Position the button absolutely
    top: '80%',                // Move it to the center vertically
    left: '50%',               // Move it to the center horizontally
    transform: 'translate(-50%, -50%)',
  },
  googleContainer: {
    marginTop: '15px',
  },
  googleButton: {
    padding: '10px',
    backgroundColor: '#db4437',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default LoginPage;
