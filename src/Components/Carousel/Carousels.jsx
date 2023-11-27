import React from 'react';
import { Carousel } from '@material-tailwind/react';

import data from '../../data/movies.json';
import CarouselItem from './CarouselItem';

export default function Carousels() {
  return (
    <div className="pt-[60px]">
      <Carousel className="rounded-xl" loop={true}>
        {data &&
          data
            .slice(0, 10)
            .map((item, index) => <CarouselItem key={index} item={item} />)}
      </Carousel>
    </div>
  );
}
