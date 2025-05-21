import React from 'react'
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png'
import { FcOk } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";

const Solicitudes = () => {
  return (
    <section className='sectFirst'>
      <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] position fixed left-0'>
        <img className='ImgLogo' src={logoBasuraOnTime} alt="" />
        <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
      </div >
      <div className='DivCamion gap-10 FontGeologica bg-[var(--Voscuro2)]'>
        <h1 className='text-6xl text-white text-left'>Gestion de Solicitudes</h1>
        <div className='flex justify-start w-180'>
          <input
            type="text"
            className='ml-0 text-white rounded-md border-1 border-[var(--Vclaro3)] text-center h-15 w-100 text-xl'
            placeholder='Buscar solicitud...'
          />
        </div >
        <div className='text-white h-120 w-180'>
          <div className='flex justify-center items-center text-center rounded-t-md h-25 gap-20 text-xl border-1 border-[var(--Vclaro3)] bg-[var(--Voscuro4)]'>
            <p>Id</p>
            <p>Tipo</p>
            <p>Solicitante</p>
            <p>Fecha</p>
            <p>Acciones</p>
          </div>
          <div className='flex justify-center items-center text-center h-25 gap-15 border-1 border-[var(--Vclaro3)] text-xl'>
            <p>01</p>
            <p>Residuo <br /> especial</p>
            <p>Brayan aguirre</p>
            <p>17/07/25</p>
            <div className='flex flex-initial gap-2 justify-center align-center'>
              <button className='flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Vclaro3)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                                hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                <FcOk className='transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' /></button>
              <button className='flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Rojo)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                                hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                <MdOutlineCancel className='transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' /></button>
            </div>
          </div>
          <div className='flex justify-center items-center text-center h-25 gap-15 border-1 border-[var(--Vclaro3)] text-xl '>
            <p>02</p>
            <p>Residuo <br /> especial</p>
            <p>david muñoz</p>
            <p>15/09/25</p>
            <div className='flex flex-initial gap-2 justify-center align-center'>
              <button className='group cursor-pointer flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Vclaro3)] text-white transition-all duration-300 ease-in-out
                                                hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                <FcOk className='transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105' /></button>
              <button className='flex justify-center items-center rounded-md w-10 h-10 bg-[var(--Rojo)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                                hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>
                <MdOutlineCancel className='transition-transform duration-300 group-hover:rotate-2group-hover:scale-105' /></button>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Solicitudes
