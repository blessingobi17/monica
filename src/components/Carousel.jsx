import clients from "../clients.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay, Pagination } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          1024: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, FreeMode]}
        className="mySwiper py-10 "
      >
        <div>
          {clients.map((client) => (
            <SwiperSlide
              key={client.id}
              className="text-xl text-Blackk pb-12 lg:text-start md:text-center flex flex-col
              lg:items-start md:items-center
            "
            >
              {client.testimonial}
              <div className="py-8 flex items-center gap-4 ">
                <img src={client.image} alt="" className="h-14 rounded-full" />
                <div className="">
                  <p className=" font-semibold text-lg">{client.name}</p>
                  <p className="text-sm">{client.company}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
