import React from 'react'
import '..//components/Caixacomodo.jsx'
import Caixacomodo from '..//components/Caixacomodo.jsx'
import Painel from '../components/Painel.jsx'

const PaginaPrincipal = () => {
  return (
    <div className='p-5 mt-5'>
    <div className='text-center'>
      <h1 ><i class="bi bi-house-heart"></i> Smart House</h1>
      <h5 className='py-2'>"Eu e minha casa serviremos ao Senhor" <br/> Josué 24:15</h5>
    </div>

    <div className='row'>
      <div className='col-3'><Painel/></div>
    </div>

    <div className='row justify-content-center'>
    <div className='col-4'><Caixacomodo comodo='Garagem'/></div>
    <div className='col-4'><Caixacomodo comodo='Sala de Estar'/></div>
    <div className='col-4'><Caixacomodo comodo='Quarto'/></div>
    </div>
    
    </div>
  )
}

export default PaginaPrincipal
