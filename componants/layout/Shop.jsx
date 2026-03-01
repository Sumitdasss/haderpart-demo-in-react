import React from 'react'
import Container from '../page/Container'
import Flex from '../page/Flex'
import Image from '../page/Image'
import profile from '/src/assets/135.jpg'

const Shop = () => {
  return (
    <div id="shopPart" className="">


<div className="bg-[url(/src/assets/5.png)] bg-no-repeat bg-cover bg-center  pt-[140px] pb-[120px]">
    <Container className="">

        <Flex className="">
                 <h1 className="text-primary3 text-[48px] font-bold uppercase leading-[60px] l">Shop Grid</h1>
            
        <div className="">
           <ul className="flex gap-x-1">
            <li><a href="" className="text-primary5 text-[18px] font-medium group hover:text-primary1 hover:duration-500 ">Home <i className="fa-solid fa-chevron-right group-hover:rotate-180 hover:transition-all 0.6s"></i></a></li>
            <li><a href="" className="text-primary3 text-[18px] font-semibold">Shop</a></li>
           </ul>

        </div>
        </Flex>
    </Container>
</div>

<div className="">
    <Container className="max-w-mContainer mx-auto h-[2280px]">
        <Flex className=" mt-25">
            <div className="">
<div className="flex justify-between bg-white items-center w-[1073px] ">

    <div className=" flex justify-around items-center">
        <div className="border-4 w-[80px] border-black/15">
        <button id="gridBtn" className=" text-[25px] text-black/25 focus:text-[#222222]"><i className="fas fa-th"></i></button>
        <button id="listBtn" className="  text-[25px] text-black/25 focus:text-[#222222]"><i className="fas fa-list-ul"></i></button>
</div>

<p className="text-[16px] text-[#74787C] font-medium pl-6">Showing 1–12 of 88 results </p>
    </div>
    
    
    <div className="ml-6">
      <div className="dropdown ">
  <div tabindex="0" role="button" className="bg-white border-2 py-2 px-1 border-[#E8E8E8] group font-medium">Default Sorting <i className="fa-solid fa-angle-down  transition-transform duration-300 group-focus:rotate-180 text-[20px] text-black"></i></div>
  <ul tabindex="-1" className="dropdown-content menu bg-base-100 rounded-box z-25 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>

    </div>
</div>

<div id="gridType" className="">


 <div id="fristPage" className="">
<Flex className="">
    <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full " onclick="changeDetails('Onima Black Flower Sandal','$150.00','$300.00', ['imges/17.jpg','imges/17.jpg','imges/17.jpg','imges/17.jpg'])"><picture>
           <Image imgSrc="imges/119.webp"  class="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Onima Black Flower Sandal</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$150.00</h4>



 </div>

<div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full " onclick="changeDetails('Branded Design T-Shirt','$200.00','$300.00', ['imges/120.jpg','imges/120.jpg','imges/120.jpg','imges/120.jpg'])"><picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Branded Design T-Shirt</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$150.00</h4>



 </div>


<div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full"  onclick="changeDetails('Italian Silk Zipper Jacket','$600.00','$700.00', ['imges/121.jpg','imges/121.jpg','imges/121.jpg','imges/121.jpg'])"><picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Italian Silk Zipper Jacket</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$600.00</h4>



 </div>


    
</Flex>


<div className="flex justify-between ">

    <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full"  onclick="changeDetails('Signature Jumbo Designer Jacket','$750.00','$820.00', ['imges/122.jpg','imges/122.jpg','imges/122.jpg','imges/122.jpg'])"><picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Signature Jumbo Designer Jacket</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$750.00</h4>



 </div>

<div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full " onclick="changeDetails('The Modern Monogram Bomber Jacket','$800.00','$900.00', ['imges/124.jpg','imges/124.jpg','imges/124.jpg','imges/124.jpg'])"><picture>
           <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">The Modern Monogram Bomber Jacket</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$800.00</h4>



 </div>


<div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full " onclick="changeDetails('Elite Black Masterpiece Jacket','$800.00','$900.00', ['imges/125.jpg','imges/125.jpg','imges/125.jpg','imges/125.jpg'])"><picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Elite Black Masterpiece Jacket</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$800.00</h4>



 </div>

</div>

<div className="flex justify-between ">
    <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full"  onclick="changeDetails('Elite Coffee Masterpiece Jacket','$800.00','$900.00', ['imges/126.jpg','imges/126.jpg','imges/126.jpg','imges/126.jpg'])"><picture>
            <Image imgSrc="imges/119.webp"  class="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className ="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Elite Coffee Masterpiece Jacket</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$800.00</h4>



 </div>

<div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full" onClick="changeDetails('Hoodie','$50.00','$60.00', ['imges/127.jpg','imges/127.jpg','imges/127.jpg','imges/127.jpg'])"><picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Hoodie</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$50.00</h4>



 </div>


<div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full" onClick="changeDetails('Classic Men’s Oxford Shirt with Edge Collar','$11.00','$15.00', ['imges/128.jpg','imges/128.jpg','imges/128.jpg','imges/128.jpg'])"><picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Classic Men’s Oxford Shirt with Edge Collar</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$11.00</h4>



 </div>

</div>
<Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
<div className="flex justify-between ">
    <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full"  onclick="changeDetails('Premium Blazer','$150.00','$160.00', ['imges/129.jpg','imges/129.jpg','imges/129.jpg','imges/129.jpg'])"><picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Premium Blazer</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$150.00</h4>



 </div>

<div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full" onClick="changeDetails('The Gentleman’s Exclusive Blazer Collection','$50.00','$60.00', ['imges/130.jpg','imges/130.jpg','imges/130.jpg','imges/130.jpg'])"><picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">The Gentleman’s Exclusive Blazer Collection</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$50.00</h4>



 </div>


<div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative  group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full" onClick="changeDetails('Men’s Exclusive Blazer','$50.00','$60.00', ['imges/131.jpg','imges/131.jpg','imges/131.jpg','imges/131.jpg'])"><picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Men’s Exclusive Blazer</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$50.00</h4>



 </div>
</div>
</div>
<Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>

<div id="secondPage" className="hidden">
    <div className="flex justify-between">
        <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full" onClick="changeDetails('Men’s Exclusive Blazer','$50.00','$60.00', ['imges/132.jpg','imges/132.jpg','imges/132.jpg','imges/132.jpg'])">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Men’s Exclusive Blazer</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$50.00</h4>



 </div>




   <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full" onClick="changeDetails('Distinguished Menswear Blazer Line','$50.00','$60.00', ['imges/133.jpg','imges/133.jpg','imges/133.jpg','imges/133.jpg'])">
          <picture>
           <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Distinguished Menswear Blazer Line</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$50.00</h4>



 </div>




    <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full" onClick="changeDetails('Regal Heritage Blazer Edition','$50.00','$60.00', ['imges/134.jpg','imges/134.jpg','imges/134.jpg','imges/134.jpg'])">
          <picture>
           <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Regal Heritage Blazer Edition</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$50.00</h4>



 </div>










    </div>





    <div className="flex justify-between">
        <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button className="ditels w-full" onClick="changeDetails('Distinguished Menswear Blazer Line','$50.00','$60.00', ['imges/135.jpg','imges/135.jpg','imges/135.jpg','imges/135.jpg'])">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Distinguished Menswear Blazer Line</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$50.00</h4>



 </div>




   <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button onClick="changeDetails('Quick Dry Artificial Fabricated Blazer','$50.00','$60.00', ['imges/136.jpg','imges/136.jpg','imges/136.jpg','imges/136.jpg'])">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Quick Dry Artificial Fabricated Blazer</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$50.00</h4>



 </div>




    <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button onClick={() => changeDetails('Quick Dry Artificial Fabricated Blazer','$50.00','$60.00', ['imges/137.jpg','imges/137.jpg','imges/137.jpg','imges/137.jpg'])}>
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Quick Dry Artificial Fabricated Blazer</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$50.00</h4>



 </div>










    </div>



    <div className="flex justify-between">
        <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <button  onClick={() => changeDetails('Quick Dry Artificial Fabricated Blazer','$50.00','$60.00', ['imges/138.jpg','imges/138.jpg','imges/138.jpg','imges/138.jpg'])}>
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </button>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Quick Dry Artificial Fabricated Blazer</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$50.00</h4>



 </div>




   <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Monica Diara Party Dress</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>




    <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
           <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Monica Diara Party Dress</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>


</div>



    <div className="flex justify-between">
        <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Monica Diara Party Dress</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>




   <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
           <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Monica Diara Party Dress</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>




    <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative 
    group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
          <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
    relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">Monica Diara Party Dress</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>










    </div>


    

</div>

 
<div id="thardePage" className="hidden">
    <div className="flex justify-between">
       <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>


 <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
           <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>





 <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
           <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>






    </div>





    <div className="flex justify-between">
              <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          
           <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>


 <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
           <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>





 <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>





    </div>



    <div className="flex justify-between">
             <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
           <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>


 <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>





 <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>

</div>



    <div className="flex justify-between">
              <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>


 <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
          <picture>
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </picture>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>





 <div className="w-[342px] h-[507px] bg-white border-2 border-primary2 mt-8 pb-[30px] mr-[10px]">
    <div className="w-full h-[350px] bg-primary9 relative
      group 
     before:absolute hover:before:duration-1000 before:opacity-0  hover:before:opacity-100  
        hover:before:w-[70px] before:h-[33px] before:flex  before:bg-primary1  before:items-center
         before:justify-center   before:mt-[20px] hover:before:ml-[40px]   z-20  
          hover:before:content-['New']  before:text-center  before:text-white 
           before:text-[16px]  before:font-bold  before:rounded-[50px] hover:before:opacity-100">
        <a href="">
        
            <Image imgSrc="imges/119.webp"  className="w-full h-[350px]"/>
        </a>



            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
            <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-solid fa-bag-shopping rotate-270"></i>
            </div></button>
            <button className="cursor-pointer "><div className="w-10 h-10 bg-white text-black/90 rounded-full flex  items-center justify-center  hover:bg-primary1 hover:text-white hover:duration-500
                 relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
<i className="fa-regular fa-heart rotate-270"></i>
            </div></button>
        
<button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center mt-2.5 justify-center  hover:bg-primary1 hover:text-white hover:duration-500
     relative
                   before:absolute hover:before:duration-1000 before:opacity-0 
                    hover:before:opacity-100     hover:before:w-[80px] before:h-[33px] before:flex 
                     before:bg-black  before:items-center before:justify-center
                      before:-rotate-90 before:[clip-path:polygon(0%_0%,_100%_0%,_100%_75%,_75%_75%,_75%_100%,_50%_75%,_0%_75%)]  
                       before:mt-[130px] before:ml-[px]   z-20   hover:before:content-['Quickview']  before:text-center 
                        before:text-white  before:text-[12px]  before:font-medium   hover:before:opacity-100">
    <i className="fa-regular fa-eye rotate-270"></i>
</div></button>
      </div>
     </div>
<p className="text-[14px] text-primary5 font-medium  uppercase pt-4 pl-7.5">Levi’s Cotton</p>
<h4 className="text-[20px] text-primary3 font-semibold pt-2  pl-7.5">D’valo Office Cotton Suite</h4>
<div className=" text-[16px] text-primary1 flex mt-2 ml-7.5">


<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
</div>
<h4 className="text-[16px] text-primary3 font-semibold pt-2  pl-7.5">$893.00</h4>



 </div>









    </div>


    

</div>






</div>



<div id="listType"  className="hidden">

<div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile} className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>


<div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile} className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>



    <div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile } className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>





    <div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile  } className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>



    <div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile  } className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>



</div>


<div id="listTypetwo" className="hidden">


<div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile  } className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>


<div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile} className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>



    <div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile} className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>





    <div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile  } className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>



    <div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile} className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>


</div>


<div id="listTypethree" className="hidden">

    <div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
      <Image imgSrc={profile} className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>


<div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile} className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>



    <div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile} className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>





    <div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
               <Image imgSrc={profile} className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>



    <div className="flex flex-col gap-6">

    <div className="w-full flex bg-white border-2 border-primary2 mt-8 p-4">
        <div className="w-[300px] h-[300px] bg-primary9 relative group shrink-0">
            <a href=""><picture>
                <Image imgSrc={profile} className="w-full h-full object-cover"/>
            </picture></a>
            <div className="rotate-90 absolute top-[60px] right-[-60px] opacity-0 group-hover:right-[-20px] group-hover:opacity-100 duration-700">
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-solid fa-bag-shopping rotate-270"></i></div></button>
                 <button className="cursor-pointer"><div className="w-10 h-10 bg-white text-black/90 rounded-full flex items-center justify-center hover:bg-primary1 hover:text-white"><i className="fa-regular fa-heart rotate-270"></i></div></button>
            </div>
        </div>

        <div className="pl-8 flex flex-col justify-center">
            <p className="text-[14px] text-primary5 font-medium uppercase">Levi’s Cotton</p>
            <h4 className="text-[24px] text-primary3 font-semibold pt-2">Onima Black Flower Sandal</h4>
            <div className="text-[16px] text-primary1 flex mt-2">
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                <h4 className="text-[14px] text-primary5 font-normal pl-[10px]">(15 Reviews)</h4>
            </div>
            <h4 className="text-[20px] text-primary3 font-semibold pt-4">$893.00</h4>
            
        </div>
    </div>

    </div>


</div>
















</div>
            <div className="">
          
<div className="w-[342px] h-[400px] ml-4.5  bg-white border-3 border-black/10 p-7.5">
<p className="text-[27px] text-[#1A1A1A] font-semibold">Categories</p>
<div className="w-full h-[2px] bg-[#1A1A1A]/25 mt-[10px]"></div>
<div className="flex mt-2">
<input type="radio" name="category" className="radio radio-primary" /><p className="text-[18px] font-medium text-black pl-4">Accessories (4)</p>
</div>
<div className="flex mt-2">
<input type="radio" name="category" className="radio radio-primary" /><p className="text-[18px] font-medium text-black pl-4">Badge Categories (4)</p>
</div>
<div className="flex mt-2">
<input type="radio" name="category" className="radio radio-primary" /><p className="text-[18px] font-medium text-black pl-4">Bag & Backpacks (1)</p>
</div>
<div className="flex mt-2">
<input type="radio" name="category" className="radio radio-primary"/><p className="text-[18px] font-medium text-black pl-4">Category Grid (12)</p>
</div>
<div className="flex mt-2">
<input type="radio" name="category" className="radio radio-primary" /><p className="text-[18px] font-medium text-black pl-4">Clothing & Apparel (2)</p>
</div>
<div className="flex mt-2">
<input type="radio" name="category" className="radio radio-primary" /><p className="text-[18px] font-medium text-black pl-4">Consumer Electric (3)</p>
</div>
<div className="flex mt-2">
<input type="radio" name="category" className="radio radio-primary" /><p className="text-[18px] font-medium text-black pl-4">Top Electronics (3)</p>
</div>
<div className="flex mt-2">
<input type="radio" name="category" className="radio radio-primary" /><p className="text-[18px] font-medium text-black pl-4">Women's Collection (5)</p>
</div>
</div>


<div className="p-7.5 w-[342px] ml-4.5  bg-white border border-[#1A1A1A]/20 rounded-xl shadow-sm mt-[50px]">
  <h3 className="text-xl font-bold text-black mb-4">Filter by price</h3>
  
  <div className="h-[1px] bg-gray-200 w-full mb-8"></div>

  <div className="relative w-full mb-6">
    <input type="range" min="0" max="100" value="40" className="range range-xs range-error" />
    </div>

  <div className="flex justify-between items-center">
    <p className="text-gray-700 font-medium">
      Price: <span className="text-black">$10 — $90</span>
    </p>
    
    <button className="flex items-center gap-2 font-bold text-black hover:text-red-500 transition-colors">
      Filter <i className="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</div>


<div className="p-7.5 border rounded-lg ml-4.5 bg-white w-[342px] mt-6">
  <h3 className="text-xl font-bold mb-4">Item Size</h3>
  <div className="h-[1px] bg-gray-100 mb-2"></div>

  <div className="divide-y divide-gray-100">
    <label className="flex justify-between items-center py-3 cursor-pointer group">
      <div className="flex items-center gap-3">
        <input type="radio" name="size" className="radio radio-primary" />
        <span className="text-gray-700 group-hover:text-black">XS</span>
      </div>
      <span className="text-gray-500">(15)</span>
    </label>

    <label className="flex justify-between items-center py-3 cursor-pointer group">
      <div className="flex items-center gap-3">
        <input type="radio" name="size" className="radio radio-primary" />
        <span className="text-gray-700 group-hover:text-black">S</span>
      </div>
      <span className="text-gray-500">(12)</span>
    </label>
    <label className="flex justify-between items-center py-3 cursor-pointer group">
      <div className="flex items-center gap-3">
        <input type="radio" name="size" className="radio radio-primary" />
        <span className="text-gray-700 group-hover:text-black">Small</span>
      </div>
      <span className="text-gray-500">(185)</span>
    </label>
    <label className="flex justify-between items-center py-3 cursor-pointer group">
      <div className="flex items-center gap-3">
        <input type="radio" name="size" className="radio radio-primary" />
        <span className="text-gray-700 group-hover:text-black">L</span>
      </div>
      <span className="text-gray-500">(72)</span>
    </label>
    <label className="flex justify-between items-center py-3 cursor-pointer group">
      <div className="flex items-center gap-3">
        <input type="radio" name="size" className="radio radio-primary" />
        <span className="text-gray-700 group-hover:text-black">XL</span>
      </div>
      <span className="text-gray-500">(85)</span>
    </label>
    <label className="flex justify-between items-center py-3 cursor-pointer group">
      <div className="flex items-center gap-3">
        <input type="radio" name="size" className="radio radio-primary" />
        <span className="text-gray-700 group-hover:text-black">Extra Large</span>
      </div>
      <span className="text-gray-500">(16)</span>
    </label>
    
    </div>
</div>




<div className="p-7.5 border rounded-lg ml-4.5 bg-white w-[342px] mt-6">
  <h3 className="text-xl font-bold mb-4">Brands</h3>
  <div className="h-[1px] bg-gray-100 mb-2"></div>

  <div className="space-y-3 mt-4">
    <label className="flex justify-between items-center cursor-pointer group">
      <div className="flex items-center gap-3">
        <input type="radio" name="catagory" className=" radio radio-primary" />
        <span className="text-gray-700 group-hover:text-black">Juliate</span>
      </div>
      <span className="text-gray-500">(09)</span>
    </label>

    <label className="flex justify-between items-center cursor-pointer group">
      <div className="flex items-center gap-3">
        <input type="radio" name="catagory"  className="radio radio-primary" />
        <span className="text-gray-700 group-hover:text-black">H&M</span>
      </div>
      <span className="text-gray-500">(50)</span>
    </label>
  </div>
</div>



<div className="max-w-md mx-auto bg-white p-6 ml-4.5 mt-[50px] rounded-xl border border-gray-100 shadow-sm">
  <h2 className="text-xl font-bold text-gray-800 mb-4 px-2">Latest products</h2>
  

  <div className="space-y-6">
    
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="h-24 w-24 flex-none bg-gray-200 rounded-md overflow-hidden transition-colors group-hover:bg-gray-300"></div>
      
      <div className="flex flex-col justify-center">
        <div className="flex text-red-500 text-xs mb-1">
          <span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span>
        </div>
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">Fancy Black Sunglass</h3>
        <p className="font-bold text-gray-900">$158.00</p>
      </div>
    </div>

    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="h-24 w-24 flex-none bg-gray-200 rounded-md group-hover:bg-gray-300"></div>
      <div className="flex flex-col justify-center">
        <div className="flex text-red-500 text-xs mb-1">
          <span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span>
        </div>
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">Fancy Black Sunglass</h3>
        <p className="font-bold text-gray-900">$158.00</p>
      </div>
    </div>

    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="h-24 w-24 flex-none bg-gray-200 rounded-md group-hover:bg-gray-300"></div>
      <div className="flex flex-col justify-center">
        <div className="flex text-red-500 text-xs mb-1">
          <span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span><span><i className="fa-regular fa-star"></i></span>
        </div>
        <h3 className="font-bold text-gray-900 text-lg leading-tight mb-1">Fancy Black Sunglass</h3>
        <p className="font-bold text-gray-900">$158.00</p>
      </div>
    </div>

  </div>
</div>



            </div>
        </Flex>
    
<div id="pageNumber" className="flex gap-2 mt-10 justify-center">
  
  <button id="btn1"  
    className="w-12 h-12 flex items-center justify-center rounded-md font-bold transition-colors
    bg-gray-100 focus:bg-red-600 focus:text-white text-gray-800"> 01
  </button>

  <button id="btn2"  
    className="w-12 h-12 flex items-center justify-center rounded-md font-bold transition-colors
    bg-gray-100 focus:bg-red-600 focus:text-white text-gray-800 hover:bg-red-200">
    02
  </button>

  <button id="btn3" 
    className="w-12 h-12 flex items-center justify-center rounded-md font-bold transition-colors
    bg-gray-100 focus:bg-red-600 focus:text-white text-gray-800 hover:bg-red-200">
    03
  </button>

  <button className="w-12 h-12 flex items-center justify-center focus:bg-red-600 focus:text-white rounded-md bg-gray-100 text-gray-800 font-bold">
    &raquo;
  </button>
</div>


{/* <div id="pageNumbertwo" class="flex gap-2 mt-10 justify-center">
  
  <button id="btn4"  
    class="w-12 h-12 flex items-center justify-center rounded-md font-bold transition-colors
    bg-gray-100 focus:bg-red-600 focus:text-white text-gray-800"> 01
  </button>

  <button id="btn5"  
    class="w-12 h-12 flex items-center justify-center rounded-md font-bold transition-colors
    bg-gray-100 focus:bg-red-600 focus:text-white text-gray-800 hover:bg-red-200">
    02
  </button>

  <button id="btn6" 
    class="w-12 h-12 flex items-center justify-center rounded-md font-bold transition-colors
    bg-gray-100 focus:bg-red-600 focus:text-white text-gray-800 hover:bg-red-200">
    03
  </button>

  <button class="w-12 h-12 flex items-center justify-center focus:bg-red-600 focus:text-white rounded-md bg-gray-100 text-gray-800 font-bold">
    &raquo;
  </button>
</div>
  */}

    </Container>
    
</div>







</div>
  )
}

export default Shop