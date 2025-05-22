import React from 'react'
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png'
import muestra from '../../assets/img/icons/muestra.pdf'

const Rutas = () => {
  return (
    <>
      <section className='sectFirst'>
        <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] fixed left-0'>
          <img className='ImgLogo' src={logoBasuraOnTime} alt="" />
          <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
        </div >
        <div>
          <button className='h-30 w-80 bg-blue-800'>
            Importar
          </button>
          <p className='text-5xl'>Documentos</p>
          <div>
            {/* PDF embebido */}
            <embed src={muestra} type="application/pdf" width="600" height="400" />
            <p>Horario de recoleccion en las areas publicas</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Rutas
