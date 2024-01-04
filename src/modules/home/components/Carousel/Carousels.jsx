import { Carousel, IconButton } from '@material-tailwind/react/';

import data from '../../../../data/movies.json';
import CarouselItem from './CarouselItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { getBannerMoviesAPI } from '../../../../apis/movieAPI';

export default function Carousels() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    const getBanners = async () => {
      try {
        const content = await getBannerMoviesAPI();
        console.log(content);
        setBanners(content);
      } catch (error) {
        console.log(error);
      }
    };
    getBanners();
  }, []);
  return (
    <div className="sm:pt-[60px] z-50">
      <Carousel
        // className="rounded-xl _sm:rounded-none"
        loop={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            // color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-2 sm:left-4 -translate-y-2/4 text-title-main text-[25px] hover:bg-mainBg-100"
          >
            <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-2 sm:!right-4 -translate-y-2/4 text-title-main text-[25px] hover:bg-mainBg-100"
          >
            <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" />
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-16 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'w-8 bg-white' : 'w-3 bg-white/50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {banners &&
          banners.map((item, index) => (
            <CarouselItem key={index} item={item} />
          ))}
      </Carousel>
    </div>
  );
}
