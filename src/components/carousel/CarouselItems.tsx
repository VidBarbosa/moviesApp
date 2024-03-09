import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { sliderImages } from "./SliderImage";

export const CarouselItems = () => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 2500,
        disableOnInteraction: false, }}
        modules={[Autoplay]}
      className="mySwiper"
    >
      {sliderImages.map((image) => (
        <SwiperSlide
          key={image.id}
          className="w-full h-full flex justify-center items-center"
        >
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform duration-700 ease-in-out hover:scale-105">
            <img
              src={image.url}
              alt={`Slide ${image.id}`}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 w-full h-full flex justify-center items-center p-4 rounded-2xl">
              <img src={image.textImage} alt={image.id} className="rounded-2xl"/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
