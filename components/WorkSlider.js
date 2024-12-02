
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { BsArrowRight } from "react-icons/bs"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import Image from "next/image"

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/ugglebo.png',
          link: 'https://ugglebogrill.com/en/',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link: 'https://demo.bootstrapdash.com/purple-admin-free/',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: 'https://livekleenly.com/',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          link: 'https://ugglebogrill.com/en/',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          link: 'https://xn--stenstrapizza-ffb.com/',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          link: 'https://demo.bootstrapdash.com/majestic-free/template/index.html',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link: 'https://demo.bootstrapdash.com/corona-free/jquery/template/index.html',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: 'https://xn--stenstrapizza-ffb.com/',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (<div>
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[480px] sm:h[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (<div key={index}
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                >
                  <div>
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                    </a>
                  </div>
                </div>)
              })}
            </div>
          </SwiperSlide>
        )
      })}

    </Swiper>
  </div>);
};

export default WorkSlider;
