import profile from '/src/assets/1.png';
import Image from './Image';
import Flex from './Flex';
import Iconone from '/src/assets/Icon/Iconone';
import Icontwo from '/src/assets/Icon/Icontwo';
import Iconthree from '/src/assets/Icon/Iconthree';
import Iconfour from '/src/assets/Icon/Iconfour';


const Heading = ({className,selectpart}) => {
  return (
    <div className={`bg-[#074E37] ${className}`}>
    <div className='max-w-[1440px] mx-auto'>
<Flex className='h-[90px] '>
    <div className="flex ">
     <Image imgSrc={profile}/>
       
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
    <Flex className="space-x-8 text-white text-[18px]">
        <Iconone/>
        <Icontwo/>
     <Iconthree/>
       <Iconfour/>
    </Flex>
</Flex>



    </div>
    </div>





  )
}

export default Heading