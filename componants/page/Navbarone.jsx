
import Button from './Button'
import Flex from './Flex'
import Container from './Container';
import { Link } from 'react-router-dom';

const Navbar = ({className}) => {
  return (
    <div className={`bg-[#86BC42] ${className}`}>
    <Container>
<Flex className=' h-[50px] items-center '>
    <div className="">
        <ul className='flex text-[16px] text-white font-medium space-x-5'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/collection">COLLECTION</Link></li>
            <li><Link to="/journal">JOURNAL</Link></li>
            <li><Link to="/lookbook">LOOKBOOK</Link></li>
            <li><Link to="/pages">PAGES</Link></li>
                                                           
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