import { useState, useEffect } from 'react';
import '../assets/styles/slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "../assets/styles/slider.css";

const slides = [
  {
    image: "../src/assets/images/economia1.png",
    title: "Economía Sostenible",
    description: "Facilitamos herramientas para una economía sostenible y responsable.",
  },
  {
    image: "../src/assets/images/economia2.png",
    title: "Innovación Empresarial",
    description: "Apoyamos el desarrollo de ideas innovadoras y proyectos empresariales.",
  },
  {
    image: "../src/assets/images/economia3.png",
    title: "Educación Financiera",
    description: "Impulsamos la educación financiera para mejorar la calidad de vida.",
  },
];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <div className="relative h-[500px] w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-10 left-10 bg-black bg-opacity-50 text-white p-5 rounded-md">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
