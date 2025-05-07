import React from 'react'
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png'
import { TfiMapAlt } from "react-icons/tfi";
import { IoDocumentText } from "react-icons/io5";
import { RiTruckFill } from "react-icons/ri";
import "./PanelAdmin.css"

const PanelAdmin = () => {
  return (
    <>
    <section className='sectFirst'>
        <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] position fixed left-0'>
            <img className='ImgLogo' src={logoBasuraOnTime} alt="" />
            <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
        </div >
        <div className='DivPanelAdmin FontGeologica'>
            <p className='text-6xl text-white mb-20'>Panel de Administracion</p>
            <div className='flex flex-initial gap-8'>
                <button className='flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)] rounded-2xl w-60 h-60 text-3xl gap-3'>
                    <RiTruckFill className='w-35 h-35'/>
                    Camiones
                </button>
                <button className='flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)] rounded-2xl w-60 h-60 text-3xl gap-3'>
                    <TfiMapAlt className='w-35 h-35' />
                    Rutas
                </button >
                <button className='flex flex-col justify-center items-center text-white bg-[var(--Voscuro2)] rounded-2xl w-60 h-60 text-3xl gap-3'>
                    <IoDocumentText className='w-35 h-35'/>
                    Solicitudes
                </button>
            </div>
        </div>
    </section>
    </>
  )
}

export default PanelAdmin
