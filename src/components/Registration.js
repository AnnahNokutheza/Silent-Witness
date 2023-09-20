import React, { useState } from 'react';
import { auth } from './Main.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import '../css/Registration.css';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSuccessMessage('Successfully registered!'); // Display success message
        setErrorMessage(''); // Clear any previous error messages

                // Redirect to the login page after successful registration
                navigate('/login');
      })
      .catch((error) => {
        setSuccessMessage(''); // Clear success message
        setErrorMessage(error.message); // Display error message
      });
  };

  return (
    <div className="registration-container">
      <h2>Registration</h2>
      <p id="have-account">Already have an account? <a href="/login">Login</a></p>
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
<button onClick={handleRegistration}>Register</button>
<p className="success-message">{successMessage}</p>
      <p className="error-message">{errorMessage}</p>
    </div>
  );
}

export default Registration;
