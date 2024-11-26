import React from 'react';
import Slider from 'react-slick';

const PartnerLogosSlider = () => {
  const settings = {
    infinite: true,   
    speed: 100,       
    slidesToShow: 3,  
    slidesToScroll: 1, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="mx-auto">
      <Slider {...settings}>
        <div className="flex-shrink-0">
          <img src="/src/assets/images/logocese.png" alt="Logo 1" className="w-32 h-auto mx-auto" />
        </div>
        <div className="flex-shrink-0">
          <img src="/src/assets/images/logocese.png" alt="Logo 2" className="w-32 h-auto mx-auto" />
        </div>
        <div className="flex-shrink-0">
          <img src="/src/assets/images/logocese.png" alt="Logo 3" className="w-32 h-auto mx-auto" />
        </div>
        <div className="flex-shrink-0">
          <img src="/src/assets/images/logocese.png" alt="Logo 4" className="w-32 h-auto mx-auto" />
        </div>
        <div className="flex-shrink-0">
          <img src="/src/assets/images/logocese.png" alt="Logo 5" className="w-32 h-auto mx-auto" />
        </div>
      </Slider>
    </div>
  );
}

export default PartnerLogosSlider;
