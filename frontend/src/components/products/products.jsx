import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import wellness from "../../assets/general-wellness.jpg";
import men from "../../assets/means-health.jpg";
import medicine from "../../assets/medicines.jpg";
import women from "../../assets/womens-health.jpg";

const Products = () => {
  const data = [
    {
      img: men,
      name: "Men's Health",
      description:
        "Comprehensive medical care for men's physical, mental, and emotional health",
    },
    {
      img: women,
      name: "Women's Health",
      description:
        "Comprehensive medical care for women's physical, mental, and emotional health.",
    },
    {
      img: medicine,
      name: "Medicines and Treatment",
      description:
        "Expert medical care and effective treatment solutions for optimal health",
    },
    {
      img: wellness,
      name: "General Wellness",
      description:
        "Holistic medical care for physical, mental, and emotional wellbeing.",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Products
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Explore our wide range of products
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-teal-600 text-backgroundColor px-4 py-2 rounded-lg active:bg-teal-200"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft color="white" size={25} />
          </button>
          <button
            className="bg-teal-600 text-backgroundColor px-4 py-2 rounded-lg active:bg-teal-200"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight color="white" size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings} className="custom-slider">
          {data.map((e, index) => (
            <div key={index}>
              <div className="slider-item">
                <img
                  src={e.img}
                  alt="img"
                  className="h-56 rounded-t-xl w-full"
                />
                <div className="flex flex-col justify-center items-center">
                  <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                  <h3 className="pt-2 pb-4 text-center">{e.description}</h3>
                </div>
                <div class="flex justify-end px-4 pb-4 mt-4">
                  <button class="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-200">
                    View Products
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
