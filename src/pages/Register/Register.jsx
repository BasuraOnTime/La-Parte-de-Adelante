import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png'
import "./Register.css"

const Register = () => {
  const [nombres, setName] = useState('')
  const [apellidos, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const URL = 'http://localhost:10101/register'

  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const sendData = async () => {
    try{
        const response = await axios.post(URL, {
          email,
          password,
          nombres,
          apellidos
        })
        console.log('Datos enviados:', response.data)
      } catch (error) {
        console.error('Error al enviar los datos:', error)
      }
    }

  return (
    <>
    <section className='sectFirst glass p-[50px] place-items-center '>
      <div className='flex flex-col justify-center items-center '> 
        <img className='img_logo' src={logoBasuraOnTime} alt="" />
        <p id='FontCursive' className='text-6xl text-center text-white'>BASURA ON TIME</p>
      </div>
      <div className='FontGeologica flex flex-col justify-center items-center gap-3.5 bg-[var(--Voscuro2)] w-120 h-130 rounded-4xl '>
        <p id='FontCursive' className='text-5xl p-10 text-white' >Registro</p>
        <input onChange={handleNameChange} className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white  ' type="text" placeholder='Nombres' />
        <input onChange={handleLastNameChange} className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white ' type="text" placeholder='Apellidos' />
        <input onChange={handleEmailChange} className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white ' type="text" placeholder='Correo electronico o numero de telefono' />
        <input onChange={handlePasswordChange} className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white ' type="password" placeholder='Contraseña' />
        <button onClick={sendData} className='rounded-md w-100 h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95' >Registrarse</button>
        <button className='rounded-md w-100 h-10 bg-[var(--Voscuro3)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'>Direccion</button>
      </div>
    </section>
    </>
  )
}

export default Register
