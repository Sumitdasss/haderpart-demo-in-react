import React from 'react'
import Container from '../page/Container'
import Flex from '../page/Flex'

const Cart = () => {
  return (
     <div id="mainCart" className="pb-[100px]" >
<div className="bg-[url(/src/assets/5.png)] bg-no-repeat bg-cover bg-center  pt-[140px] pb-[120px]">
    <Container>

        <Flex className="flex justify-between">
                 <h1 className="text-primary3 text-[48px] font-bold uppercase leading-[60px] l">Cart Page</h1>
            
        <div className="">
           <ul className="flex gap-x-1">
            <li><a href="" className="text-primary5 text-[18px] font-medium group hover:text-primary1 hover:duration-500 ">Home <i className="fa-solid fa-chevron-right group-hover:rotate-180 hover:transition-all 0.6s"></i></a></li>
            <li><a href="" className="text-primary3 text-[18px] font-semibold">Cart Page</a></li>
           </ul>

        </div>
        </Flex>
    </Container>
</div>


<div  className="">
 <Container className="max-w-mContainer mx-auto">
    <Flex className=" mt-[100px]">
    <div className="">
<div className="w-[952px] pb-[30px] bg-[#F6F6F7]">
<div className="flex  h-[61px] items-center border-b-3 border-black/50">
    <p className="text-[18px] text-[#74787C] font-semibold pl-[200px]">Products</p>
    <p className="text-[18px] text-[#74787C] font-semibold  pl-[250px]">Price</p>
    <p className="text-[18px] text-[#74787C] font-semibold  pl-[110px]">Quantity</p>
    <p className="text-[18px] text-[#74787C] font-semibold  pl-[65px]">SubTotal</p>

</div>

<div id="addtoCartpart" className="mt-[20px]">

</div>

<div className="flex mt-[30px]">
<div className="ml-[30px]">
   <input type="text" placeholder="Cupon Code" className="w-[296px] h-[61px] rounded-lg bg-white border-3 border-black/50 focus:outline-none pl-[15px] placeholder:text-[#74787C]/50"/> 
   <button className="px-7.5 py-4 bg-white border-3 font-semibold rounded-lg border-black/50 text-[#222222] uppercase">Apply Coupon</button>
   <button id="updateCart" className="px-7.5 py-4 bg-red-500 font-semibold rounded-lg text-white uppercase ml-[205px]">Update Cart</button>

</div>
</div>







</div>









</div>




<div className="">


<div className="w-[450px] bg-[#F9F9F9] p-8 border border-gray-100 rounded-sm font-sans">
    <h2 className="text-[22px] font-bold text-[#222222] mb-6 pb-4 border-b border-gray-200">
        Cart Totals
    </h2>

    <div className="flex justify-between items-center py-6 border-b border-gray-200">
        <span className="text-[16px] text-[#74787C] font-medium">Subtotal</span>
        <span id="number" className="text-[18px] font-bold text-[#222222]">$0.00</span>
    </div>

    <div className="py-8 border-b border-gray-200">
        <div className="flex justify-between mb-4">
            <span className="text-[16px] text-[#74787C] font-medium">Shipping</span>
            <div className="text-right space-y-3">
                <label className="flex items-center justify-end gap-3 cursor-pointer">
                    <span className="text-[16px] text-[#444444]">Free Shipping</span>
                    <input type="radio" name="shipping" checked className="w-4 h-4 accent-black"/>
                </label>
                <label className="flex items-center justify-end gap-3 cursor-pointer">
                    <span className="text-[16px] text-[#444444]">Flat Rate</span>
                    <input type="radio" name="shipping" className="w-4 h-4 accent-black"/>
                </label>
                <label className="flex items-center justify-end gap-3 cursor-pointer">
                    <span className="text-[16px] text-[#444444]">Local Pickup</span>
                    <input type="radio" name="shipping" className="w-4 h-4 accent-black"/>
                </label>
            </div>
        </div>
        
        <p className="text-[14px] text-[#74787C] text-right mt-4 leading-relaxed">
            Shipping options will be updated <br></br> during checkout
        </p>
        
        <div className="text-right mt-2">
            <button className="text-[15px] font-bold text-[#222222] hover:underline transition-all">
                Calculate Shipping
            </button>
        </div>
    </div>

    <div className="flex justify-between items-center py-8">
        <span className="text-[16px] text-[#74787C] font-medium">Total</span>
        <span id="totalnumber" className="text-[22px] font-bold text-[#222222]">$0.00</span>
    </div>

    <button className="w-full bg-[#EF4444] text-white py-4 text-[16px] font-bold uppercase tracking-wider rounded-md hover:bg-[#D93636] transition-all duration-300">
        Proceed to Checkout
    </button>
</div>



</div>


</Flex>




 </Container>

</div>







</div>
  )
}

export default Cart