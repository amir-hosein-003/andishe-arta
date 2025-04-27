import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Teams = () => {
  const teamList = [
    { id: 1, name: "محمد اقبال" },
    { id: 2, name: "محمد اقبال" },
    { id: 3, name: "محمد اقبال" },
    { id: 4, name: "محمد اقبال" },
    { id: 5, name: "محمد اقبال" },
    { id: 6, name: "محمد اقبال" },
    { id: 7, name: "محمد اقبال" },
  ];

  const pageNum = [1, 2, 3, 4];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="relative font-yekan py-32">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className=""
      >
        {teamList.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="w-84 h-90 flex flex-col items-center justify-around bg-base-100 rounded-2xl mx-auto p-7">
              <img src="./public/img/profile.png" alt="profile" />
              <h3 className="text-2xl font-bold"> {user.name} </h3>
              <p>مدیریت راه آهن میعاد</p>
              <p className="text-gray-400">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است لورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" z-20 flex justify-center gap-2 my-10">
        {pageNum.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:bg-primary cursor-pointer ${
              index === activeIndex ? "bg-primary w-20" : "bg-red-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Teams;
