import React from 'react'
import Container from '/componants/page/Container'
import Image from '../page/Image'
import imgone from '/src/assets/download-removebg-preview.png'
import Flex from '/componants/page/Flex'

const Regestar = () => {
  return (
<>
   <div className="bg-[url(src/assets/5.png)] bg-no-repeat bg-cover bg-center  pt-[140px] pb-[120px]">
    <Container className="">

        <div className="flex justify-between">
                 <h1 className="text-primary3 text-[48px] font-bold uppercase leading-[60px] l">Account Register</h1>
            
        <div className="">
           <ul className="flex gap-x-1">
            <li><a href="" className="text-primary5 text-[18px] font-medium group hover:text-primary1 hover:duration-500 ">Home <i className="fa-solid fa-chevron-right group-hover:rotate-180 hover:transition-all 0.6s"></i></a></li>
            <li><a href="" className="text-primary3 text-[18px] font-semibold">Register</a></li>
           </ul>

        </div>
        </div>
    </Container>
</div>

<Container className="max-w-mContainer mx-auto">
    <Flex className="  justify-center">
<div className="w-[726px] h-[950px] bg-primary16 rounded-[7px] mt-[100px]">
<div className="w-[485px] ml-[120px]">
<h4 className="text-primary3 text-[24px] font-semibold text-center pt-[100px]">Login Into Your Account</h4>
<a href=""><div className="w-full h-[55px] bg-white border-2 border-primary13 flex items-center justify-center rounded-[7px] mt-[36px]">
    <picture>
        <Image imgSrc={imgone} className="h-[40px]"/>

    </picture>
    <h4 className="text-[18px] text-primary3 font-semibold">Login with Google</h4>
</div>
</a>
<div className="flex items-center justify-between mt-[36px]">
    <div className="w-full h-[2px] bg-primary6"></div>
    <div className="px-3 text-[18px] text-primary3 font-semibold">OR</div>
    <div className="w-full h-[2px] bg-primary6"></div>
</div>


<h4 className="text-[16px] text-primary3 font-medium pt-[28px]">Your Name*</h4>
<input type="text" className="w-full h-[55px] bg-white border-2 border-primary13 pl-[20px] font-medium focus:outline-none rounded-[7px] mt-[20px]"/>


<h4 className="text-[16px] text-primary3 font-medium pt-[28px]">Email Address*</h4>
<input type="text" className="w-full h-[55px] bg-white border-2 border-primary13 pl-[20px] font-medium focus:outline-none rounded-[7px] mt-[20px]"/>



<h4 className="text-[16px] text-primary3 font-medium pt-[28px]">Password*</h4>
<input type="password" className="w-full h-[55px] bg-white border-2 border-primary13 pl-[20px] font-medium focus:outline-none rounded-[7px] mt-[20px]"/>



<div className="flex mt-[20px]">
    <input type="checkbox" checked="checked " className="checkbox  bg-white border-2 border-primary13 text-primary17"/>
    <h4 className="text-[14px] text-primary17 font-medium pl-[10px]">Subscribe to stay updated with new products and offers!</h4>
</div>

<div className="flex mt-[5px]">
    <input type="checkbox" checked="checked " className="checkbox  bg-white border-2 border-primary13 text-primary17"/>
    <h4 className="text-[16px] text-primary17 font-medium pl-[10px]">I accept the <span className="text-primary3 underline"><a href=""> Terms / Privacy Policy</a></span></h4>
</div>
<button className="cursor-pointer w-full h-[55px] bg-primary1 group  flex items-center justify-center rounded-[7px] mt-[10px] hover:bg-white hover:border-2 border-primary1 hover:transition-all 0.3s">
 
    <h4 className="text-[18px] text-white font-semibold  group-hover:text-primary1 hover:transition-all 0.3s">Register Account<i className="fa-solid fa-right-to-bracket ml-[10px] group-hover:rotate-180 hover:transition-all 0.3s"></i></h4>
</button>

<a href="" className="text-[16px] text-primary3 font-medium pt-[20px] inline-block mt-[15px]">Already have an account?</a>
<a href="https://sumitdasss.github.io/work21-Login-section/" className="text-[16px] text-primary1 font-medium pt-[20px] inline-block mt-[15px] ml-[5px]">Log in</a>

</div>
</div>
    </Flex>
</Container>
</>
  )
}

export default Regestar