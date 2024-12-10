// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Slider = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/WHkYXT5/image-1.png",
      subtitle: "Luxury Living Redefined",
      description: "Experience premium apartments with world-class amenities"
    },
    {
      image: "https://i.ibb.co.com/Zc2qX1L/image-2.png",
      subtitle: "Modern Comfort",
      description: "Where sophistication meets contemporary design"
    },
    {
      image: "https://i.ibb.co.com/sv9CCfh/image-3.png",
      subtitle: "Urban Paradise",
      description: "Your sanctuary in the heart of the city"
    },
    {
      image: "https://i.ibb.co.com/4W2Bz18/image-4.png",
      subtitle: "Elite Residences",
      description: "Elevate your lifestyle with ManageNest"
    }
  ];

  return (
    <Swiper
      effect={'fade'}
      slidesPerView={1}
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} w-2 h-2 bg-white/50 hover:bg-white/80"></span>`;
        },
      }}
      className="h-[80vh] relative group"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          
          <img 
            src={slide.image}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            alt={`Slide ${index + 1}`}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h3 className="text-cyan-400 font-medium tracking-wider text-lg md:text-xl uppercase 
                           opacity-0 translate-y-4 transition-all duration-700 delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                {slide.subtitle}
              </h3>
              
              <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight
                           opacity-0 translate-y-4 transition-all duration-700 delay-500 group-hover:opacity-100 group-hover:translate-y-0">
                A cosmic embrace calls:
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {' '}ManageNest
                </span>
              </h2>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto
                          opacity-0 translate-y-4 transition-all duration-700 delay-700 group-hover:opacity-100 group-hover:translate-y-0">
                {slide.description}
              </p>

              <Link 
                to='/apartment'
                className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-600 
                         rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 
                         opacity-0 translate-y-4 delay-1000 group-hover:opacity-100 group-hover:translate-y-0"
              >
                <span>View All Apartments</span>
                <svg className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" 
                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      
      <div className="absolute inset-y-0 left-4 z-10 flex items-center">
        <button className="swiper-button-prev !w-12 !h-12 rounded-full bg-white/10 backdrop-blur-sm text-white 
                         hover:bg-white/20 transition-colors after:!text-lg" />
      </div>
      
      <div className="absolute inset-y-0 right-4 z-10 flex items-center">
        <button className="swiper-button-next !w-12 !h-12 rounded-full bg-white/10 backdrop-blur-sm text-white 
                         hover:bg-white/20 transition-colors after:!text-lg" />
      </div>
    </Swiper>
  );
};

export default Slider;