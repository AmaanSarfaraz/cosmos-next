"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { galleryPhotos } from "@/data/data";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// Optional: Define type for gallery photo if not already typed
interface GalleryPhoto {
  id: number;
  img: string;
}

const PhotoGallery: React.FC = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        className="overflow-visible w-75"
        modules={[Scrollbar, Navigation, Autoplay]}
        scrollbar={{
          el: ".js-popular-destination-scrollbar",
          draggable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".js-destination-next",
          prevEl: ".js-destination-prev",
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1,
          },
        }}
      >
        {galleryPhotos.map((item: GalleryPhoto) => (
          <SwiperSlide key={item.id}>
            <div className="gallery-slide">
              <img
                src={item.img}
                alt="Gallery"
                className="js-lazy"
                style={{
                  width: "100%",
                  height: "600px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <button className="section-slider-nav -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-prev">
          <i className="icon icon-chevron-left text-12" />
        </button>
        <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-next">
          <i className="icon icon-chevron-right text-12" />
        </button>
        <div className="slider-scrollbar bg-light-2 mt-40 js-popular-destination-scrollbar" />
      </div>
    </>
  );
};

export default PhotoGallery;
