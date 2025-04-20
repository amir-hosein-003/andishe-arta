import { Icon } from "@iconify/react"
import CheckBox from "../icons/CheckBox"
// import ImgSlider from "../components/ImgSlider"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const HeroSection = () => {

    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleDotClick = (index) => {
    if (swiperRef.current) {
        swiperRef.current.slideTo(index);
    }
    };

    const images = [
        './public/img/image.png',
        './public/img/image.png',
        './public/img/image.png',
        './public/img/image.png',
      ];

    const lists = [
        "لورم ایپسوم متن ساختگی با تولید نامفهوم",
        "لورم ایپسوم متن ساختگی با تولید نامفهوم",
        "لورم ایپسوم متن ساختگی با تولید نامفهوم",
        "لورم ایپسوم متن ساختگی با تولید نامفهوم",
    ]

  return (
    <section className="h-screen flex flex-col-reverse md:flex-row justify-between px-20 mt-16">
        <div className="h-120 flex flex-col justify-around">
            <div className="flex items-center gap-2">
                <img src="./public/img/Group-2.png" />
                <h1 className="text-4xl font-bold">نام آوران اندیشه آرتا</h1>
            </div>
            <ul className="flex flex-col gap-3 text-gray-500">
                {lists.map((list, index) => (
                    <li className="flex items-center gap-3" key={index}>
                        <CheckBox />
                        {list}
                    </li>
                ))}
            </ul>
            <div className="flex flex-col-reverse md:flex-row gap-3">
                <button className="btn btn-primary">
                    درباره ما
                    <Icon icon="iconamoon:arrow-left-2" width="24" height="24" />
                </button>
                <button className="btn btn-ghost">
                    محصولات ما
                    <Icon className="text-primary" icon="iconamoon:arrow-left-2" width="24" height="24" />
                </button>
            </div>
        </div>
        <div className="w-full md:w-1/2 relative">
            <img src="./public/img/Rectangle.png" className="w-50 md:w-100 absolute top-8 md:top-0 left-0" />
            <img src="./public/img/circle.png" className="w-9 md:w-15 absolute left-11 md:left-30 top-15 md:top-20" />
            
            <div>
                <div className="relative p-6 rounded-3xl max-w-5xl mx-auto mt-10 md:ml-20">
                    {/* pagination */}
                    <div className="absolute top-18 md:top-43 left-4 md:left-[-25px] z-20 flex flex-col gap-2">
                        {images.map((_, index) => (
                            <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all duration-300 hover:bg-primary cursor-pointer ${
                                index === activeIndex ? 'bg-primary h-14 md:h-20' : 'bg-red-300'
                            }`}
                            />
                        ))}
                    </div>
            
                    {/* slider */}
                    <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="rounded-2xl overflow-hidden absolute md:top-3 left-4 md:block"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} width={"700"} height={"400"} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection
