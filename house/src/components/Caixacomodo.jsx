import React from "react";

const Caixacomodo = (props) => {
  return (
    <div className="bg-warning rounded-5 p-4 justify-content-center">
      <h4 className="">{props.comodo}</h4>

      <p>
        {props.nome}: {props.status}
      </p>
      <button 
      className='rounded-2 px-5 py-1' 
      >{props.botao1}
      </button>
      <button 
      className='rounded-2 px-5 py-1' 
      >{props.botao2}
      </button>
      <p>
        {props.nome2}: {props.status2}
      </p>
      <button 
      className='rounded-2 px-5 py-1' 
      >{props.botao3}
      </button>
      <button 
      className='rounded-2 px-5 py-1' 
      >{props.botao4}
      </button>
      <p>
        {props.nome3}: {props.status3}
      </p>
      <button 
      className='rounded-2 px-5 py-1' 
      >{props.botao5}
      </button>
      <button 
      className='rounded-2 px-5 py-1' 
      >{props.botao6}
      </button>
      
    </div>
  );
};

export default Caixacomodo;
