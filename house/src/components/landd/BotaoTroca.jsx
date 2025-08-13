import React from 'react';
import './BotaoTroca.css';

const BotaoTroca = ({ troca, isLight }) => {
  return (
    <div className={isLight ? "light" : ""}>
      <div onClick={troca} id="switch">
        <button></button>
        <span></span>
      </div>
    </div>
  );
};

export default BotaoTroca;
