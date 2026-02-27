import React from 'react'
import Image from './Image'
import Container from './Container'
import Flex from './Flex'
import profile from '/src/assets/logo.png'

const Navbarthree = () => {
  return (
   <div>
    <Container className=" relative">
        <Flex className=" h-[136px] items-center overflow-hidden">
           <div className="">
            <picture>
                <Image imgSrc={profile}/>
            </picture>
           </div> 
           <div className="relative border-2 border-primary2 rounded-[5px]">
<div className="">
    <div className="absolute ml-31 mt-5 pointer-events-none">
    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  </div>
    <select  className="appearance-none text-[14px] font-medium focus:outline-none cursor-pointer border-r-2 border-primary2 px-6">
        <i className="fa-solid fa-angle-down"></i>
              <option value="" className="cursor-pointer">All Categories</option>
                <option value="" className="cursor-pointer">Category 1</option>
                <option value="" className="cursor-pointer">Category 2</option>
                <option value="" className="cursor-pointer">Category 3</option>
                <option value="" className="cursor-pointer">Category 4</option>
                <option value="" className="cursor-pointer">Category 5</option>
                <option value="" className="cursor-pointer">Category 6</option>
                <option value="" className="cursor-pointer">Category 7</option>
                <option value="" className="cursor-pointer">Category 8</option>
                <option value="" className="cursor-pointer">Category 9</option>
                <option value="" className="cursor-pointer">Category 10</option>
    </select>

    
            <input type="text" placeholder="Search Keywords..." className="w-[600px] h-[50px] border-none  pl-[10px] focus:outline-none font-medium " />
            <button className="absolute top-[4px] right-[4px] text-black px-7 py-3 bg-primary1 uppercase text-[12px] font-bold text-white rounded-[5px] cursor-pointer hover:bg-white hover:border-1 border-primary1 hover:duration-500 hover:text-primary1 group ">Search Here<i className="fa-solid fa-magnifying-glass -rotate-50 hover:transition-all 0.10s group-hover:rotate-22  ml-[10px] text-[16px]"></i></button>
</div>
           </div> 
           <div className="w-auto h-[50px] flex items-center ">
            
            <div className="">

            <h4 className="text-[14px] text-primary5 font-normal pl-[48px]">Call Us Now:</h4>
            <h4 className="text-[16px] text-primary3 font-semibold">+(258) 2159-2159</h4>
            </div>
            <div className="border-r-2 border-primary2  pr-4">
            <div className="w-[45px] h-[45px] bg-primary4 text-white flex justify-center items-center ml-4 rounded-full border  ">
               <a href=""> <i className="fa-solid fa-phone text-primary3"></i></a>
            </div>
           </div>
           <div className="border-r-2 border-primary2  pr-4">
            <div className="w-[45px] h-[45px] bg-primary4 text-white flex justify-center items-center ml-4 rounded-full  ">
          <a href=""> <i className="fa-regular fa-heart text-primary3"></i></a>
            </div>
           </div> 
            <div className="w-auto h-[50px] flex items-center ">
            
            <div className="w-[45px] h-[45px] bg-primary4 text-white flex justify-center items-center ml-4 rounded-full ">
         <a href=""> <i className="fa-solid fa-cart-shopping text-primary3"></i></a>
            </div>
            <div className="">
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">Your cart,</h4>
<h4 className="text-[16px] text-primary3 font-semibold pl-[10px]">$1280.00</h4>
           
            </div>
           </div> 
           </div>    
        </Flex>
        
 <div className="flex justify-between items-center w-[1440px]  bg-primary1 h-[55px] rounded-[5px] absolute -mt-[27px] before:absolute before:w-[1100px] before:h-[55px] before:content-[''] before:bg-[#222222] before:[clip-path:polygon(0_0,_98%_0,_100%_30%,_100%_100%,_0_100%)] before:rounded-tl-[5px] before:rounded-bl-[5px]">
          
                <div className="">
                <ul className="flex text-white font-medium text-[14px] uppercase top-[50px]">
                    <li className="px-5 hover:text-primary1 font-semibold hover:duration-500 before:absolute before:transition-all 0.3s before:origin-left  before:w-[100px] before:h-[0px] before:flex  before:items-center before:justify-center  hover:before:h-[50px] before:mt-12 before:-ml-5  z-20   hover:before:content-['Home'] before:bg-white before:text-center  before:text-[#222222]"><a href="">Home</a></li>
                    <li className="px-5 hover:text-primary1 font-semibold hover:duration-500 before:absolute before:transition-all 0.3s before:origin-left  before:w-[100px] before:h-[0px] before:flex  before:items-center before:justify-center  hover:before:h-[50px] before:mt-12 before:-ml-5  z-20   hover:before:content-['Shop'] before:bg-white before:text-center  before:text-[#222222]"><a href="">Shop</a></li>
                    <li className="px-5 hover:text-primary1 font-semibold hover:duration-500 before:absolute before:transition-all 0.3s before:origin-left  before:w-[100px] before:h-[0px] before:flex  before:items-center before:justify-center  hover:before:h-[50px] before:mt-12 before:-ml-5  z-20   hover:before:content-['Women'] before:bg-white before:text-center  before:text-[#222222]"><a href="">Women</a></li>
                    <li className="px-5 hover:text-primary1 font-semibold hover:duration-500 before:absolute before:transition-all 0.3s before:origin-left  before:w-[100px] before:h-[0px] before:flex  before:items-center before:justify-center  hover:before:h-[50px] before:mt-12 before:-ml-5  z-20   hover:before:content-['Man'] before:bg-white before:text-center  before:text-[#222222]"><a href="">Man</a></li>
                    <li className="px-5 hover:text-primary1 font-semibold hover:duration-500 before:absolute before:transition-all 0.3s before:origin-left  before:w-[100px] before:h-[0px] before:flex  before:items-center before:justify-center  hover:before:h-[50px] before:mt-12 before:-ml-5  z-20   hover:before:content-['Pages'] before:bg-white before:text-center   before:text-[#222222] "><a href="">Pages</a></li>
                    <li className="px-5 hover:text-primary1 font-semibold hover:duration-500 before:absolute before:transition-all 0.3s before:origin-left  before:w-[100px] before:h-[0px] before:flex  before:items-center before:justify-center  hover:before:h-[50px] before:mt-12 before:-ml-5  z-20   hover:before:content-['Blog'] before:bg-white before:text-center   before:text-[#222222] "><a href="">Blog</a></li>
                    <li className="px-5 hover:text-primary1 font-semibold hover:duration-500 before:absolute before:transition-all 0.3s before:origin-left  before:w-[100px] before:h-[0px] before:flex  before:items-center before:justify-center  hover:before:h-[50px] before:mt-12 before:-ml-5  z-20   hover:before:content-['Contact'] before:bg-white before:text-center  before:text-[#222222]"><a href="">Contact</a></li>
                </ul>
                </div>
              
            
            <div className="  ">
               <div className="flex w-[319px]">
                <h4 className="text-[16px] font-semibold text-white pl-[10px]">Get 30% Discount Now</h4>
                <a href="" className="uppercase text-[12px] font-bold text-primary1 rounded-[50px] py-1 px-4 bg-white inline-block ml-[20px]">Sale</a>
               </div>
            </div>
           
    </div>
       
    </Container>
</div>
  )
}

export default Navbarthree