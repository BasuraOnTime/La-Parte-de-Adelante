import React from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import logoBasuraOnTime from '../../assets/img/icons/logoBasuraOnTime.png'
import "./Admin.css"

const Admin = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const URL = 'http://localhost:10101/authAdmin'
  const navigator = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
      try {
          const response = await axios.post(URL, {
          email,
          password
        })
        const token = response.data.token
        if (token) {
          localStorage.setItem('token', token)
          navigator('/PanelAdmin')
        }else {
          console.error('No se recibió un token')
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error)
      }
  }
  return (
   <>
   <section className='sectFirst glass p-[50px] place-items-center'>
    <div className='flex flex-col justify-center items-center'>
         <img className='Img-logo' src={logoBasuraOnTime} alt="" />
        <p className='FontCursive text-6xl text-center text-white'>BASURA ON TIME</p>    
    </div>
    <div className='FontGeologica flex flex-col justify-center items-center gap-3.5 bg-[var(--Voscuro2)] w-120 h-100 rounded-4xl'>
        <p className='FontCursive text-5xl p-10 text-white'> Administrador</p>
        <input onChange={handleEmailChange} type="text" placeholder='Correo' className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' />
        <input onChange={handlePasswordChange} type="password" placeholder='Contraseña' className='rounded-md bg-[var(--Vclaro2)] w-100 h-10 text-center placeholder:text-center text-white' />
        <button onClick={handleSubmit} className='rounded-md w-100 h-10 bg-[var(--Vclaro)] text-white group cursor-pointer transition-all duration-300 ease-in-out
                                            hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 active:scale-95'> iniciar sesion </button>
    </div>
   </section>
   </>
  )
}

export default Admin
