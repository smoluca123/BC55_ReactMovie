import React from 'react';
import Slider from 'react-slick';
import { Header } from './Header';
import { Carousels } from './Carousel/';

export default function AppLayout() {
  return (
    <div className="wrapper bg-mainBg h-[100vh]">
      <div className="App">
        <Header />
        <Carousels />
      </div>
    </div>
  );
}
