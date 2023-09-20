import React from "react";
import '../Styles.css';

const CrimeAnalytics = ({ crimeType }) => {
  // Mock data for crime analytics
  const analyticsData = {
    totalReports: 100, // Replace with actual data
    past6Months: 75, // Replace with actual data
  };

  const getCrimeContainerClass = () => {
    switch (crimeType) {
      case 'Kidnapping':
        return 'kidnapping';
      case 'Rape':
        return 'rape';
      case 'Robbery':
        return 'robbery';
      case 'Hijacking':
        return 'hijacking';
        case 'Genderbased-Violence':
          return 'genderbased-violence';
      default:
        return 'others';
    }
  };

  return (
    <div className={`crime-container ${getCrimeContainerClass()}`}>
      <h4>{`${crimeType} Analytics`}</h4>
      <div className="analytics-container">
        <div className="analytics-item">
          <h5>Total Reports</h5>
          <p>{analyticsData.totalReports}</p>
        </div>
        <div className="analytics-item">
          <h5>Reports in the Past 6 Months</h5>
          <p>{analyticsData.past6Months}</p>
        </div>
      </div>
    </div>
  );
};

export default CrimeAnalytics;
