import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CarouselItems = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: false,
      }}
      modules={[Pagination]}
      className="mySwiper"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide className="text-white">Slide 1</SwiperSlide>
      <SwiperSlide className="text-white">Slide 2</SwiperSlide>
      <SwiperSlide className="text-white">Slide 3</SwiperSlide>
      <SwiperSlide className="text-white">Slide 4</SwiperSlide>
      <SwiperSlide className="text-white">Slide 4</SwiperSlide>
      <SwiperSlide className="text-white">Slide 4</SwiperSlide>
    </Swiper>
  );
};
