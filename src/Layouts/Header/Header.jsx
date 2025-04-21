import logo from '../../assets/img/icons/logo.png';
import './Header.css';
import main from'../../assets/img/icons/casa.png'


export function Header() { 
 

  return (
    <>
      
      
            <div className=" bg-[rgb(10,196,122)] h-30 grid grid-cols-3 grid-rows-1     justify-center items-center border-b-3  border-l-3 border-r-3 border-t-2 " >
              <div id='logo' className="logo  shadow-md shadow-black border-2 bg-[rgb(255,255,255)] h-24 w-24 m-4 rounded-full justify-center flex ">
                  <img src={logo} alt="logo" className='  w-auto  ' />
              </div>
              <img src="https://media.tenor.com/JowhCmKT628AAAAj/oacmn.gif" 
                  alt="gif divertido" 
                  className='camion h-13  fixed top-6 left-9  '  />
              
              <div className="fixed top-22 left-1/2 transform -translate-x-1/2 grid grid-cols-4 gap-20">
                  <button id='botones'  className="boton1 shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18  "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO"> <div className="icon-c bg-white w-10 h-10 border-2 rounded-full justify-center items-center flex"><img className='main ' src={main} alt="" id="icon" /></div></a></button>
                  <button id='botones'  className="boton2 shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18   "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO"> <div className="icon-c bg-white w-10 h-10 border-2 rounded-full justify-center items-center flex"><img className='main ' src={main} alt="" id="icon" /></div></a></button>
                  <button id='botones'  className="boton3 shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18   "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO"> <div className="icon-c bg-white w-10 h-10 border-2 rounded-full justify-center items-center flex"><img className='main ' src={main} alt="" id="icon" /></div></a></button>
                  <button id='botones'  className="boton4 shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18   "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO"> <div className="icon-c bg-white w-10 h-10 border-2 rounded-full justify-center items-center flex"><img className='main ' src={main} alt="" id="icon" /></div></a></button>
                </div>

                <div className="fixed top-8 right-0 grid grid-cols-2 pr-4 gap-4">
                  <button id='login'  className=" shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-4  w-14 h-18  "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO"> login </a></button>
                  <button id='login-2'  className=" shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-4  w-14 h-18   "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO"> login up </a></button>
                </div>


                
               
            </div>

           
            

        
      
      
    </>
  )
}

export default Header