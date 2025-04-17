import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  './public/img/image.png',
  './public/img/image.png',
  './public/img/image.png',
  './public/img/image.png',
];

const ImgSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    
    <div className="relative p-6 rounded-3xl max-w-5xl mx-auto mt-10">
      {/* نقطه‌های سفارشی سمت چپ  */}
      <div className="absolute top-43 left-[-25px] z-20 flex flex-col gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:bg-primary cursor-pointer ${
              index === activeIndex ? 'bg-primary h-20' : 'bg-red-300'
            }`}
          />
        ))}
      </div>

      {/* اسلایدر */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="rounded-2xl overflow-hidden ml-15"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} className="rounded-2xl w-full h-auto" width={"700"} height={"400"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
  );
};

export default ImgSlider;