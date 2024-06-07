import React from 'react';
import colors from './colors.json'; // Assuming colors.json is accessible

const BrutalCard = ({ children, color = colors[Math.floor(Math.random() * colors.length)] }) => {
  const cardStyle = {
    backgroundColor: color,
    borderRadius: '0.5rem',
    border: '3px solid black',
    filter: 'drop-shadow(7px 7px 0 rgb(0 0 0 / 1))',
    transition: 'all',
    padding: '1rem',
    transitionDuration: '0.5s',
    animation: 'ease-in-out',
  };

  const hoverStyle = {
    filter: 'drop-shadow(5px 5px 0 rgb(0 0 0 / 1))',
  };

  return (
    <div className="brutal-card" style={cardStyle} onMouseOver={() => {
      const updatedStyle = { ...cardStyle, ...hoverStyle };
      return updatedStyle;
    }}>
      {children}
    </div>
  );
};

export default BrutalCard;