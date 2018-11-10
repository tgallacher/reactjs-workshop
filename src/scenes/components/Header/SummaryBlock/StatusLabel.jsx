import React from 'react';

const StatusLabel = ({ label }) => (
  <div className="text-xs p-0 m-0">
    {label.charAt(0).toUpperCase() + label.substr(1).toLocaleLowerCase()}
  </div>
);

export default StatusLabel;
