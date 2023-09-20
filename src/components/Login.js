import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import { auth } from './Main.js';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccessMessage('Successfully logged in!'); // Display success message
        setErrorMessage(''); // Clear any previous error messages

        // Redirect to the login page after successful registration
        navigate('/report');
      })
      .catch((error) => {
        setSuccessMessage(''); // Clear success message
        setErrorMessage(error.message); // Display error message
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <p id="have-account">Don't have an account? <a href="/registration">Register</a></p>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Log In</button>
      <p className="success-message">{successMessage}</p>
      <p className="error-message">{errorMessage}</p>
    </div>
  );
}

export default Login;
