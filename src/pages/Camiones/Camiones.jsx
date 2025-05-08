import React from 'react'
import './Camiones.css'
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png'

const Camiones = () => {
    return (
        <section className='sectFirst'>
            <div className='min-h-max flex flex-col justify-center items-center w-180 h-screen bg-[var(--Voscuro2)] position fixed left-0'>
                <img className='ImgLogo' src={logoBasuraOnTime} alt="" />
                <p className='FontCursive text-5xl text-center text-white'>BASURA ON TIME</p>
            </div >
            <div className='DivPanelAdmin flex flex-col gap-10 FontGeologica'>
            <h1 className='text-5xl text-white'>Gestion de camiones</h1>
            <div className='flex flex-initial gap-30'>
                <button className=' rounded-md w-50 h-14 bg-[var(--Vclaro3)] text-white'>Agregar</button>
                <input type="text" className='text-white rounded-md border-1 border-[var(--Vclaro3)] text-center w-100 ' placeholder='Buscar camion...' />
            </div >
            <div className='text-white h-120 w-180'>
                <div className='grid grid-cols-4 gap-3 text-center rounded-t-md p-5 border-1 border-[var(--Vclaro3)] bg-[var(--Voscuro4)]'>
                    <p>Nombre</p>
                    <p>Placa</p>
                    <p>Estado</p>
                    <p>Accion</p>
                </div>
                <div className='grid grid-cols-4 gap-3 text-center  p-5 border-1 border-[var(--Vclaro3)] '>
                    <p>Camion 1</p>
                    <p>ABC-123</p>
                    <p>Activo</p>
                    <div className='flex flex-initial gap-2 justify-center align-center'>
                        <button className='rounded-md w-7 h-7 bg-[var(--Vclaro3)] text-white'></button>
                        <button className='rounded-md w-7 h-7 bg-[var(--Vclaro3)] text-white'></button>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-3 text-center p-5 border-1 border-[var(--Vclaro3)] '>
                    <p>Camion 2</p>
                    <p>DEF-456</p>
                    <p>Inactivo</p>
                    <div className='flex flex-initial gap-2 justify-center align-center'>
                        <button className='rounded-md w-7 h-7 bg-[var(--Vclaro3)] text-white'></button>
                        <button className='rounded-md w-7 h-7 bg-[var(--Vclaro3)] text-white'></button>
                    </div>
                </div>
            </div>
            </div>

        </section>
    )
}

export default Camiones
