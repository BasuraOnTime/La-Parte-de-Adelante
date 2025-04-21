import React from 'react'

export const Button = () => {
    return (
        <div className="fixed top-22 left-1/2 transform -translate-x-1/2 grid grid-cols-4 gap-20">
            <button id='botones' className="boton1 shadow-2xl shadow-[#000000a9] border-t-2 bg-white border-b-3 border-l-3 border-r-3 w-14 h-18  "><a href="https://www.youtube.com/watch?v=Pke3A2XuBLg&list=RD0WyyLN8K6os&index=16&ab_channel=MolotovVEVO"> <div className="icon-c bg-white w-10 h-10 border-2 rounded-full justify-center items-center flex"><img className='main ' src={main} alt="" id="icon" /></div></a></button>
        </div>
    )
}
export default Button