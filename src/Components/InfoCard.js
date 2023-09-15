import React from 'react';

const InfoCard = ({ title, content }) => {
  return (
    <div className="info-card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default InfoCard;