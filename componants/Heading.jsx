import React from 'react'

const Heading = ({className,selectpart}) => {
  return (
    <div className={`bg-[#074E37] ${className}`}>
    <div className='max-w-[1440px] mx-auto'>
<div className='flex justify-between items-center h-[90px] '>
    <div className="flex ">
        <img src="src/assets/1.png" alt="src/assets/logo.png" />
       
    </div>
     <div className=' flex w-[544px] bg-white  h-[50px] relative '>
        <input type="text" placeholder='Search products... ' className={`h-[50px] outline-none w-[360px] pl-[15px]  placeholder:text-[18px] placeholder:text-[#767676]`}/>
        <select name="" id="selectPart" className={`outline-none text-[18px] ${selectpart} appearance-none `}>
            
            <option value="">All Category</option>
            <option value="">1</option>
            <option value="">2</option>
        </select>
<div id="iconPart" class="pointer-events-none text-[18px] absolute inset-y-0 right-13 flex items-center px-2 transition-transform duration-300 text-gray-700 ">
    <i class="fa-solid fa-chevron-down text-sm " ></i>
  </div>
<div class="pointer-events-none text-[18px] absolute inset-y-0 right-5 flex items-center px-2 transition-transform duration-300 text-gray-700 ">
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
        </div>
    <div className="space-x-8 text-white text-[18px]">
        <i class="fa-regular fa-user"></i>
        <i class="fa-regular fa-heart"></i>
      <i class="fa-brands fa-opencart"></i>
        <i class="fa-solid fa-bars-staggered"></i>
    </div>
</div>



    </div>
    </div>





  )
}

export default Heading