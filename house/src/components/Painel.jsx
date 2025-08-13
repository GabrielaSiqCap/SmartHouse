import React from 'react'
import ItensPainel from './ItensPainel.jsx'

const Painel = () => {
  return (
    <div className='bg-warning rounded-5 p-5'>
      <h4 className=''>Dados em tempo real:</h4>
      <ItensPainel item='Temperatura' status='22°C'/>
      <ItensPainel item='Temperatura' status='22°C'/>
      <ItensPainel item='Temperatura' status='22°C'/>
      <ItensPainel item='Temperatura' status='22°C'/>
    </div>
  )
}

export default Painel
