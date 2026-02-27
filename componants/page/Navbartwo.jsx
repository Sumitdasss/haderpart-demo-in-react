
import Container from './Container.jsx'
import Flex from './Flex.jsx'

const Navbartwo = () => {
  return (
     <div className="bg-red-500 ">
    <Container className="">
        <Flex className="flex justify-between items-center h-10">
            <div className="">
                <ul className="flex text-[14px] font-medium text-white">
                    <li className="px-4"><a href="" target="_blank">About</a></li>
                    <li className="px-4"><a href="" target="_blank">My Account</a></li>
                    <li className="px-4"><a href="" target="_blank">Wishlist</a></li>
                    <li className="px-4"><a href="" target="_blank">Checkout</a></li>
                </ul>
            
            </div>
            <h4 className="flex text-[14px] font-medium text-white">Free shipping for all orders of 150$</h4>
            <div className="">
                <ul className="flex text-[14px] font-medium text-white">
                    <li className="px-4 border-r-2 border-white"><a href="">Store Location</a></li>
                    <div className="dropdown">
  <div tabIndex="0" className="px-4 border-r-2 border-white">  <a href="">Language<i className="fa-solid fa-angle-down ml-[5px]"></i></a></div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-auto p-2 shadow-sm text-black ml-[10px]">
    <li className="hover:bg-primary1 hover:text-white rounded-[5px]"><a href="">Bengali</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px]"><a href="">English</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px]"><a href="">Urdu</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px]"><a href="">French</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px]"><a href="">Arabic</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px]"><a href="">Spanish</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px]"><a href="">Hindi</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px]"><a href="">Russian</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px]"><a href="">German</a></li>
    </ul>
</div>
      
                    <div className="dropdown">
  <div tabIndex="0" className="px-4 ">  <a href="" className="cursor-pointer">Currency<i className="fa-solid fa-angle-down ml-[5px]"></i></a></div>
  <ul tabIndex="-1" className="dropdown-content menu  rounded-box z-1 w-50 p-2 shadow-sm text-black ml-[10px] mt-[20px]">
    <li className="hover:bg-primary1 hover:text-white rounded-[5px] "><a href="">US Dollar-0.00$</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px] "><a href="">Euro-0.00€</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px] "><a href="">British Pound-0.00£</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px] "><a href="">Japanese Yen-0.00¥</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px] "><a href="">Australian Dollar-0.00A$</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px] "><a href="">Canadian Dollar-0.00C$</a></li>
        <li className="hover:bg-primary1 hover:text-white rounded-[5px] "><a href="">Swiss Franc-0.00CHF</a></li>
    </ul>
</div>
      


                </ul>
         
            </div>
        </Flex>
    </Container>
   </div>

  )
}

export default Navbartwo