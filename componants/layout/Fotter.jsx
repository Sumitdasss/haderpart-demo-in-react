import React from 'react'
import Image from '../page/Image'
import Container from '../page/Container'
import Flex from '../page/Flex'
import imgone from '/src/assets/box 1 (1).png'
import imgtwo from '/src/assets/delivery-van 1 (1).png'
import imgthree from '/src/assets/credit-card 1 (1).png'
import imgfour from '/src/assets/24-hours 1 (1).png'
import imgfive from '/src/assets/Screenshot_15 1.png'



const Fotter = () => {
  return (
    <div className="bg-primary16 border-t-2 border-b-2 border-primary15 h-[570px] mt-[100px]">
    <Container className="max-w-mContainer mx-auto">
        <div className="w-[1439px] h-[100px] bg-white border-2 border-primary15 rounded-[10px] mt-15">
            <div className="flex  mt-5 ml-[20px]">


                <div className="w-[360px] h-[60px] flex justify-center items-center border-r-2 border-primary15">
                    <picture>
                        <Image imgSrc={imgone}/>
                    </picture>
                    <h4 className="text-[18px] text-primary3 font-semibold leading-5  pl-2.5">Free shipping<br></br>
<span className="text-[16px] text-primary5 font-normal">Free shipping on orders over $65.</span></h4>
                </div>



                <div className="w-[330px] h-[60px] flex justify-center items-center border-r-2 border-primary15">
                    <picture>
                        <Image imgSrc={imgtwo}/>
                    </picture>
                       <h4 className="text-[18px] text-primary3 font-semibold leading-5  pl-2.5">Free Returns<br></br>
<span className="text-[16px] text-primary5 font-normal">30-days free return policy</span></h4>
                </div>



                <div className="w-[370px] h-[60px] w-[330px] h-[60px] flex justify-center items-center border-r-2 border-primary15">
                    <picture>
                        <Image imgSrc={imgthree}/>
                    </picture>
                        <h4 className="text-[18px] text-primary3 font-semibold leading-5  pl-2.5">Secured Payments<br></br>
<span className="text-[16px] text-primary5 font-normal">We accept all major credit cards</span></h4>
                </div>
               



                <div className="w-[350px] h-[60px] w-[330px] h-[60px] flex justify-center items-center ">
                    <picture>
                        <Image imgSrc={imgfour}/>
                    </picture>
                        <h4 className="text-[18px] text-primary3 font-semibold leading-5 pl-2.5">Customer Service<br></br>
<span className="text-[16px] text-primary5 font-normal">Top notch customer service</span></h4>
                </div>
                 </div>
                </div>

<div className="flex justify-between mt-12">
    <div className="">
<h4 className="text-[18px] text-primary3 font-semibold"> About Store</h4>
<div className="flex mt-7">
    <div className="w-[50px] h-[50px] bg-white rounded-full items-center flex justify-center border-2 border-primary15"><i className="fa-solid fa-phone text-[20px] text-primary1"></i></div>
    <h4 className="text-[16px] text-primary5 font-medium pl-[20px] leading-[25px]">Have Question? Call Us 24/7<br></br>
<span className ="text-[24px] text-primary1 font-semibold">+258 3692 2569</span></h4>
</div>
<h4 className="text-[16px] text-primary5 font-medium pt-[25px]">Monday - Friday:<span className="text-primary3"> 8:00am - 6:00pm</span></h4>
<h4 className="text-[16px] text-primary5 font-medium pt-[10px]">Saturday:<span className="text-primary3 font-medium"> 8:00am - 6:00pm</span></h4>
<h4 className="text-[16px] text-primary5 font-medium pt-[10px]">Sunday:<span> Service Close</span></h4>

    </div>
    <div className="">
        <h4 className="text-[18px] text-primary3 font-semibold">Our Stores</h4>
        <ul className="text-[16px] text-primary5 font-medium leading-[35px] pt-[20px]">
            <li>New York</li>
            <li>London SF</li>
            <li>Los Angeles</li>
            <li>Chicago</li>
            <li>Las Vegas</li>
        </ul>
    </div>
    <div className="">
         <h4 className="text-[18px] text-primary3 font-semibold">Shop Categories</h4>
        <ul className="text-[16px] text-primary5 font-medium leading-[35px] pt-[20px]">
            <li>New Arrivals</li>
            <li>Best Selling</li>
            <li>Vegetables</li>
            <li>Fresh Meat</li>
            <li>Fresh Seafoods</li>
        </ul>
    </div>
    <div className="">
        <h4 className="text-[18px] text-primary3 font-semibold">Useful Links</h4>
        <ul className="text-[16px] text-primary5 font-medium leading-[35px] pt-[20px] capitalize">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Latest News</li>
            <li>Our Sitemaps</li>
        </ul>
    </div>
    <div className="">
        <h4 className="text-[18px] text-primary3 font-semibold">Our Newsletter</h4>
        <h4 className="text-[16px] text-primary5 font-normal pt-[23px]">Subscribe to the mailing list to receive updates one the<br></br> new arrivals and other discounts</h4>
        <div className="relative mt-5">
        <input type="email" placeholder="Your email address" className="w-[435px] focus:outline-none h-15 border-2 border-primary15 bg-white rounded-[5px]  pl-[15px] "/>
        <button className="absolute top-[9px] right-[12px]  text-black px-7 py-3 bg-primary1 uppercase text-[12px] font-bold text-white rounded-[5px] cursor-pointer hover:bg-white hover:border-1 border-primary1 hover:duration-500 hover:text-primary1 group ">Subscribe</button>
</div>
<h4 className="  pt-[15px]">I would like to receive news and special offer</h4>
    </div>
</div>

<div className="w-full h-15  border-t-2 border-primary15 flex items-center justify-between mt-[50px]">
    <div className="flex mt-[20px]">
    <h4 className="text-[16px] text-primary3 font-medium pt-[12px]">Payment System:</h4>
    <Image imgSrc={imgfive}/>
    </div>
<div className="mt-[20px]">
    <h4 className="text-[16px] text-primary3 font-normal">Copyright 2024<span className="font-bold"> ©Roiser.</span> All rights reserved.</h4>
</div>
</div>

            </Container>
        </div>
  )
}

export default Fotter