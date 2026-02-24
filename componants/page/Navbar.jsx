import React from 'react'
import Button from './Button'

const Navbar = ({className}) => {
  return (
    <div className={`bg-[#86BC42] ${className}`}>
    <div className='max-w-[1440px] mx-auto'>
<div className='flex justify-between items-center h-[50px] '>
    <div className="">
        <ul className='flex text-[16px] text-white font-medium space-x-5'>
            <li><a href="">HOME</a></li>
            <li><a href="">SHOP</a></li>
            <li><a href="">COLLECTION</a></li>
            <li><a href="">JOURNAL</a></li>
            <li><a href="">LOOKBOOK</a></li>
            <li><a href="">PAGES</a></li>
                                                           
        </ul>
    </div>
    <div className="flex space-x-8">
<Button className={"bg-transparent text-white text-[16px] font-medium"} btn={"SPECIAL OFFER"}/>
<Button className={"bg-transparent text-white text-[16px] font-medium"} btn={"PURCHASE THEME"}/>
    </div>
   
            
       
    </div>
</div>



    </div>
    


  )
}

export default Navbar
