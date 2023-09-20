import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const CrimeReport = () => {
  const [selectedType, setSelectedType] = useState('');
  const [reportDetails, setReportDetails] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const reportData = {
      crimeType: selectedType,
      reportDetails,
    };

    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reportData),
    })
      .then(() => {
        setSuccessMessage('Report submitted successfully!'); // Display success message
        setErrorMessage('');
        navigate('/success');
      })
      .catch(error => {
        setSuccessMessage('');
        setErrorMessage(error.message);
      });
  };

  return (
    <div style={CrimeStyles.container}>
      <h2 style={CrimeStyles.heading}>Select the type of Crime</h2>
      <select
        style={CrimeStyles.select}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option>Kidnapping</option>
        <option>Gender-based violence</option>
        <option>Robbery</option>
        <option>Hijacking</option>
        <option>Rape</option>
        <option>Other</option>
      </select>

      <h2 style={CrimeStyles.heading}>Report Details</h2>
      <textarea
        style={CrimeStyles.textarea}
        placeholder="Enter details of the crime..."
        value={reportDetails}
        onChange={(e) => setReportDetails(e.target.value)}
      ></textarea>

      <input type="file" style={CrimeStyles.uploadButton} />
      <button style={CrimeStyles.geolocationButton}>Get Geolocation</button>

      <button style={CrimeStyles.submitButton} onClick={handleSubmit}>
        <p className="success-message">{successMessage}</p>
        <p className="error-message">{errorMessage}</p>
        Submit
      </button>
    </div>
  );
};


// CSS styles for the Crime Report Form
const CrimeStyles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#535353',
    color: '#fff',
  },
  heading: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  select: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  },
  uploadButton: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    backgroundColor: '#e04b05',
    color: 'white',
    cursor: 'pointer',
  },
  geolocationButton: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '3px',
    border: '1px solid #ccc',
    backgroundColor: '#211a49',
    color: 'white',
    cursor: 'pointer',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    borderRadius: '3px',
    border: 'none',
    backgroundColor: '#05d9e0',
    color: 'white',
    cursor: 'pointer',
  }
};

export default CrimeReport;

