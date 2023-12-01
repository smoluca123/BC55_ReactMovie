import React, { useEffect } from 'react';
import { Carousel, IconButton } from '@material-tailwind/react/';
import { useSelector, useDispatch } from 'react-redux';

import data from '../../data/movies.json';
import CarouselItem from './CarouselItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Carousels() {
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({
        type: 'loading/SET_LOADING',
        payload: false,
      });
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <div className="sm:pt-[60px] z-50">
      <Carousel
        className="rounded-xl"
        loop={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            // color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 text-title-main text-[25px] hover:bg-mainBg-100"
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
            className="!absolute top-2/4 !right-4 -translate-y-2/4 text-title-main text-[25px] hover:bg-mainBg-100"
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
        {data &&
          data
            .slice(0, 10)
            .map((item, index) => <CarouselItem key={index} item={item} />)}
      </Carousel>
    </div>
  );
}
