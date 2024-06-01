import React from "react";
import banner from "../../images/banner1.jpg"; 
import banner2 from "../../images/banner2c.jpg"; 
import banner3 from "../../images/banner3ano.jpg"; 
import "./Banner.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="image">
            <img src={banner2} class="w-full" />
            <div className="image-details p-2">
              <h2>ALL TYPE OF</h2>
              <h1 className="heading1 font-bold">BASIC TOOLS</h1>
              <button className="learnmore-button btn bg-secondary ring-2 ring-secondary ring-offset-2 text-white rounded-full mt-7">
                Learn more
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="image">
            <img src={banner} class="w-full" />
            <div className="image-details p-2">
              <h1 className="heading1 font-bold">BEST QUALITY</h1>
              <p className="mb-0 provide">WE PROVIDE QUALITY PRODUCT AND ENSURE SUSTAIN FOR LONG TIME.</p>
              <button className=" learnmore-button btn  btn-secondary rounded-full ring-2 ring-secondary ring-offset-2 text-white rounded-full mt-7">
                Learn more
              </button>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src={banner3} class="w-full" />
            <div className="image-details thirdOne p-2">
              <h1 className="text-6xl font-bold text-white">HANDY TOOLS</h1>
              <p className="mt-5 mb-0 provide text-white">WE KEEP YOUR TOOLS MORE HANDY FOR WORK EASILY DONE.</p>
              <button className="btn-sm   rounded-full ring-2 ring-primary ring-offset-2 text-white rounded-full mt-7">
                Learn more
              </button>
            </div>
          </div>
          </SwiperSlide>        
      </Swiper>
    </>
  );
};

export default Banner;



/**
 *  <div className="image">
            <img src={banner2} class="w-full" />
            <div className="image-details p-2">
              <p className="text-white p-2">
                Tool manufacturing encompasses the precise design, production,
                and quality control of tools using various techniques and
                materials to meet industry demands.
              </p>
              <button className="btn  btn-success btn-md text-white">
                Learn more
              </button>
            </div>
          </div>
 */