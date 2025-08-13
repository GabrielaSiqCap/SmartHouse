import React from 'react'
import '..//components/Caixacomodo.jsx'
import Caixacomodo from '..//components/Caixacomodo.jsx'
import Painel from '../components/Painel.jsx'

const PaginaPrincipal = () => {
  return (
    <div className='p-5 '>
      <h1 className='text-center' ><i class="bi bi-house-heart"></i> Smart House</h1>
      <div className='d-flex'>
      <div className='col-4'>
      <Painel/>
      </div>
      <div className='col-7 '>
        <Caixacomodo/>
        <Caixacomodo/>
        <Caixacomodo/>
      </div>
      </div>
    </div>
  )
}

export default PaginaPrincipal
