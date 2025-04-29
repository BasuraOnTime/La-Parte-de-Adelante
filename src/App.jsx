import './App.css'
import Header from './Layouts/Header/Header'
import Register from './pages/Register/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'



export function App() {

  return (
     <>
  
      < Header/>
      <Routes>
        <Route path="/Register" element={<Register/>} />
      </Routes>
        <Home/>  
     </>
      
  )
}

export default App
