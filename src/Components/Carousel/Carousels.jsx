import React from 'react';
import { Carousel, IconButton } from '@material-tailwind/react';

import data from '../../data/movies.json';
import CarouselItem from './CarouselItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Carousels() {
  return (
    <div className="sm:pt-[60px]">
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
      >
        {data &&
          data
            .slice(0, 10)
            .map((item, index) => <CarouselItem key={index} item={item} />)}
      </Carousel>
    </div>
  );
}
