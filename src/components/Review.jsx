import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { review } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Review = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[4rem]" id='reviews'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My clients talks</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Reviews</h2>
      </motion.div>

      <motion.div variants={fadeIn} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 sm:flex hidden flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between gap-8">
          <div className="flex items-center gap-8">
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex justify-center items-center border border-solid border-jet w-12 h-12 transition-all duration-500 rounded-full hover:bg-jetLight hover:border-battleGray"
            >
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex justify-center items-center border border-solid border-jet w-12 h-12 transition-all duration-500 rounded-full hover:bg-jetLight hover:border-battleGray"
            >
            </button>
          </div>
        </div>
        <Swiper
          className="mySwiper"
          modules={[Navigation, Pagination]}
          slidesPerView={3}
          spaceBetween={28}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 28,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 32,
              centeredSlides: false,
            },
          }}
        >
          {
            review.map((reviews, index) => (
              <SwiperSlide
                key={index}
              >
                <div className="bg-jetLight p-8 rounded-2xl shadow-lg border border-jet hover:border-battleGray transition-all duration-300 h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-10 h-10 text-french mb-4" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-taupe text-[16px]">{reviews.content}</p>
                  <a className="inline-flex items-center">
                    <img alt="testimonial" src={reviews.img} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center border-2 border-french" />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-timberWolf font-beckman">{reviews.username}</span>
                      <span className="text-taupe text-sm">{reviews.role}</span>
                    </span>
                  </a>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Review, 'reviews');