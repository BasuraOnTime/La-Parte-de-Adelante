import logo from '../../assets/img/icons/logo.png';
import './Header.css';
import Button from '../../UI/Button/Button';
import camion from '../../assets/img/icons/ezgif-367675f0653ab4.gif';



export function Header() { 
 

  return (
    <>
      
          
            <div className=" sticky top-0 bg-[rgb(10,196,122)] h-30 grid grid-cols-3 grid-rows-1     justify-center items-center border-b-3  border-l-3 border-r-3 border-t-2 " >
                <div id='logo' className="logo  shadow-md shadow-black border-2 bg-[rgb(255,255,255)] h-24 w-24 m-4 rounded-full justify-center flex ">
                    <img src={logo} alt="logo" className='  w-auto  ' />
                </div>

                <img src={camion}
                    alt="gif divertido" 
                    className='camion h-30  fixed top-6 left-9  '  />
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className="fixed top-22 left-1/2 transform -translate-x-1/3  grid grid-cols-4 gap-20">
                    <Button />
                    <Button />
                    <Button />                
                </div>
                  {/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  */}

                  <div className="fixed top-8 right-0 grid grid-cols-2 pr-4 gap-4">
                    <button id='login'  className=" shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-4  w-14 h-18  "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO"> login </a></button>
                    <button id='login-2'  className=" shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-4  w-14 h-18   "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO"> login up </a></button>
                  </div>


                
               
            </div>

           
            

        
      
      
    </>
  )
}

export default Header