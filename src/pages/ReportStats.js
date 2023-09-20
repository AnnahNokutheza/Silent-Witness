import React from 'react';
import CrimeAnalytics from './CrimeAnalytics.js';
import '../Stats.css';

const crimeTypes = [
  'Kidnapping',
  'Rape',
  'Robbery',
  'Hijacking',
  'Genderbased-Violence',
  'Other'
];

const ReportStats = () => {
  return (
    <div className="crime-analytics-container">
      {crimeTypes.map(crimeType => (
        <CrimeAnalytics key={crimeType} crimeType={crimeType} />
      ))}
    </div>
  );
};

export default ReportStats;
