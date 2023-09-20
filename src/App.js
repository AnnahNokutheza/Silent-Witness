import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Report from './pages/Report.js';
import Resources from './pages/Resources.js';
import CrimeAnalytics from './pages/CrimeAnalytics.js';
import ReportStats from './pages/ReportStats.js';
import Registration from './components/Registration.js';
import Login from './components/Login.js';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/report" element={<Report />} />
          <Route path="/resource" element={<Resources />} />
          <Route path="/crimeanalytics" element={<CrimeAnalytics />} />
          <Route path="/reportstats" element={<ReportStats />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
