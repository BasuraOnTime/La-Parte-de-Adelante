import React from 'react'
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.jpg'
import "./Register.css"

const Register = () => {
  return (
    <>
    <section className='bg-[var(--back_ll)] h-screen grid grid-cols-2 place-items-center'>
      <div className=''> 
        <img className='h-160' src={logoBasuraOnTime} alt="" />
        <p className='text-6xl fixed top-180 right-300 text-amber-50 font-mono'>BASURA ON TIME</p>
      </div>
      <div className='flex flex-col justify-center items-center gap-1.5'>
        <input className='' type="text" placeholder='Nombres' />
        <input className='' type="text" placeholder='Apellidos' />
        <input className='' type="text" placeholder='Correo electronico o numero de telefono' />
        <input className='' type="password" placeholder='Contraseña' />
        <button className='' >Registrarse</button>
        <button className=''>Direccion</button>
      </div>
    </section>
    </>
  )
}

export default Register
