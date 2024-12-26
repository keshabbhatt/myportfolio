import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Portfolio = () => {
  const projects = [
    {
      name: "DIRGHAAYU",
      image:
        "https://res.cloudinary.com/dvyz4mpfn/image/upload/v1734534620/pro1_p17oac.png",
      link: "https://example.com/dirghaayu",
    },
    {
      name: "AI Lab Report Analyzer",
      image:
        "https://res.cloudinary.com/dvyz4mpfn/image/upload/v1734534730/pro3_okipgv.png",
      link: "https://example.com/lab-report-analyzer",
    },
    {
      name: "Royal Gym",
      image:
        "https://res.cloudinary.com/dvyz4mpfn/image/upload/v1734534793/pro2_ism3wu.png",
      link: "https://example.com/royal-gym",
    },
    {
      name: "Banking System",
      image:
        "https://res.cloudinary.com/dvyz4mpfn/image/upload/v1734534911/port3_x98ojl.jpg",
      link: "https://example.com/banking-system",
    },
  ];

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolioContainer">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1050: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="portBox">
                <div className="imgbox">
                  <img src={project.image} alt={project.name} />
                </div>
                <div className="portCont">
                  <span>{project.name}</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View Project</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
