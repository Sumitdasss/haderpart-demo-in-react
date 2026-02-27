import React from 'react'
import Button from './Button'
import Flex from './Flex'
import Container from './Container';

const Navbar = ({className}) => {
  return (
    <div className={`bg-[#86BC42] ${className}`}>
    <Container>
<Flex className=' h-[50px] items-center '>
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
   
            
       
    </Flex>
</Container>



    </div>
    


  )
}

export default Navbar