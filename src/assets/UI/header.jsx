import logo from '../img/logo.png';
import './Header.css';


export function Header() { 
 

  return (
    <>
      
      
            <div className=" bg-[rgb(10,196,122)] h-30 grid grid-cols-2 grid-rows-1     justify-center items-center border-b-3  border-l-3 border-r-3">
            <div className="logo bg-[rgb(255,255,255)] h-24 w-26 m-4 rounded-full justify-center flex ">
            <img src={logo} alt="logo" className=' w-auto  ' />
            </div>
              <div className="  grid grid-cols-4 fixed top-25 justify-self-end right-30 gap-20" >
                <button id='botones'  className="boton1 bg-white border-2 w-6 h-30  " ><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO">sdad</a></button>
                <button id='botones'  className="boton2 bg-white border-2 w-6 h-30   "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO">sdad</a></button>
                <button id='botones'  className="boton3 bg-white border-2 w-6 h-30   "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO">sdad</a></button>
                <button id='botones'  className="boton4 bg-white border-2 w-6 h-30   "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO">sdad</a></button>
              </div>
            </div>

            <div className="">
            
            
            </div>
            

        
      
      
    </>
  )
}

export default Header