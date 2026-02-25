
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import profileone from '/src/assets/3.png';
import profile from '/src/assets/1.png';
import Image from '/Componants/page/Image';
import Flex from '/Componants/page/Flex';
import Container from '/Componants/page/Container';
import Button from '/Componants/page/Button';



const Iayoutone = () => {
 const settings = {
    dots: true,        
    infinite: true,    
    speed: 2000,        
    slidesToShow: 1,   
    slidesToScroll: 1, 
    autoplay: true,  
    prevArrow: <SampleArrow className={'prevArrow'}/>,
    nextArrow: <SampleArrow className={'nextArrow'} /> 
  };

function SampleArrow(props) {
  const { className, style, onClick } = props;
 
  return (
   <div
      className={className}
      style={{ 
        ...style, 
        display: "flex", 
        background: "#6BAD0D", 

        width: "50px", 
        height: "50px", 
        borderRadius: "50%", 
        alignItems: "center", 
        justifyContent: "center",
        zIndex: 1,
        fontSize: "20px", 
        color: "white"    
      }}
      onClick={onClick}
    >
      
     
    </div>
  );
}


  return (
    <div 
      className="bg-cover bg-center bg-no-repeat h-[560px] w-full overflow-hidden"
      style={{ backgroundImage: `url(${profileone})` }}
    >
      <Container className="relative ">
   
     
      
         <Slider {...settings} className="mt-[200px]">
         <div>
          <Flex className="">
            <div >
              <p className='text-[16px] text-[#6BAD0D] font-medium pl-[50px] relative after:absolute after:content-[""] after:w-11 after:h-[2px] after:bg-[#6BAD0D] after:top-[12px] after:left-0'>Shop our freshest</p>
              <h1 className="text-[50px] font-bold text-[#074E37] leading-tight">
                Fresh Hand-Picked Vegetables <br />
                <span className="text-[#86BC42]">Everyday</span>
              </h1>
              <Button className="mt-5" btn={"DISCOVER MORE"} />
            </div>
            <div className="mr-[100px]">
              <Image imgSrc={profile}  />
            </div>
          </Flex>
</div>
<div>
          <Flex className="  ">

            <div >
              <p className='text-[16px] text-[#6BAD0D] font-medium pl-[50px] relative after:absolute after:content-[""] after:w-11 after:h-[2px] after:bg-[#6BAD0D] after:top-[12px] after:left-0'>Shop our freshest</p>
              <h1 className="text-[50px] font-bold text-[#074E37] leading-tight">
                Fresh Hand-Picked Vegetables <br />
                <span className="text-[#86BC42]">Everyday</span>
              </h1>
              <Button className="mt-5" btn={"DISCOVER MORE"} />
            </div>
            <div className="mr-[100px]">
              <Image imgSrc={profile}  />
            </div>
          </Flex>
</div>
   </Slider>
         

       

       

      </Container>
    </div>
  );
};

export default Iayoutone;