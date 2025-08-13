import React from 'react'

const ItensComodos = (props) => {
  return (
    <div>
      <p>{props.nome}: {props.status}</p>
      <button className='rounded-2 px-5 py-1'>Ligar</button>
      <button className='rounded-2 px-5 py-1'>Desligar</button>
    </div>
  )
}

export default ItensComodos
