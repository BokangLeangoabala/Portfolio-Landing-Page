import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project_person from "../assets/images/project_person2.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Design-Agency",
      webflow_link: "https://webflow.com/?gclid=CjwKCAiA_OetBhAtEiwAPTeQZ8jfzZYKi8-Ny-S9oomdpMqmHi0JBJE-dtEsVrCtDbpJGYDoCOXZMxoCLM0QAvD_BwE",
      live_link: "https://agency-site-d6b0bc.webflow.io/",
    },
    {
      img: project2,
      name: "Resturaunt",
      webflow_link: "https://webflow.com/?gclid=CjwKCAiA_OetBhAtEiwAPTeQZ8jfzZYKi8-Ny-S9oomdpMqmHi0JBJE-dtEsVrCtDbpJGYDoCOXZMxoCLM0QAvD_BwE",
      live_link: "https://bokangs-restaurant-cafe.webflow.io/",
    },
    {
      img: project3,
      name: "Real Estate",
      webflow_link: "https://webflow.com/?gclid=CjwKCAiA_OetBhAtEiwAPTeQZ8jfzZYKi8-Ny-S9oomdpMqmHi0JBJE-dtEsVrCtDbpJGYDoCOXZMxoCLM0QAvD_BwE",
      live_link: "https://real-estate-website-6e3cc7.webflow.io/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-gold">Projects</span>
        </h3>
        <p className="text-white mt-3 text-lg">My work</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-black rounded-2xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-gold bg-gray-100 px-2 py-1 inline-block"
                    >
                      Webflow
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-gold bg-gray-100 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
