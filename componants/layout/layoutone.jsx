




import profiletwo from '/src/assets/4.jpg';
import Image from '/componants/page/Image';
import Flex from '/componants/page/Flex';
import Container from '/componants/page/Container';
import Button from '/componants/page/Button';



const Iayoutone = () => {
 


  



  return (
    <div 
      className="bg-[url(src/assets/SLIDER.png)] bg-cover bg-center bg-cover h-[560px] w-full overflow-hidden"
   
    >
      <Container className="relative ">
   
     
      
   
         <div className=''>
          <Flex className=" ">
            <div className='mt-[180px]' >
              <p className='text-[16px] text-[#6BAD0D] font-medium pl-[50px] relative after:absolute after:content-[""] after:w-11 after:h-[2px] after:bg-[#6BAD0D] after:top-[12px] after:left-0'>Shop our freshest</p>
              <h1 className="text-[50px] font-bold text-[#074E37] leading-tight">
                Fresh Hand-Picked Vegetables <br />
                <span className="text-[#86BC42]">Everyday</span>
              </h1>
              <Button btn={"DISCOVER MORE"} className=" mt-5 font-semibold  text-[#222222]  transition duration-300 relative before:absolute before:content-[''] before:w-[0px] before:h-[2px] before:bg-[#222222] before:bottom-0 before:left-0 before:z-10 before:duration-500 hover:before:w-[100px]" />
            </div>
            <div className="mr-[100px] mt-[115px]">
              <Image imgSrc={profiletwo} className="w-[518px] h-[330px]" />
            </div>
          </Flex>
</div>


         

       

       

      </Container>
    </div>
  );
};

export default Iayoutone;