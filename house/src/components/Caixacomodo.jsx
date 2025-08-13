import React from 'react'
import ItensComodos from './ItensComodos'

const Caixacomodo = (props) => {
  return (
    <div className='bg-warning rounded-5 p-4 justify-content-center'>
      <h4 className=''>{props.comodo}</h4>
      <ItensComodos nome='Porta Social' status='Ligada'/>
      <ItensComodos nome='Porta Basculante' status='Ligada'/>
      <ItensComodos nome='Luz da Garagem' status='Ligada'/>
    </div>
  )
}

export default Caixacomodo
