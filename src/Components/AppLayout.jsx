import React from 'react';
import Slider from 'react-slick';
import { Header } from './Header';
import { Carousels } from './Carousel/';
import { useSelector } from 'react-redux';
import { Loading } from './Loading';
export default function AppLayout() {
  const loading = useSelector((state) => state.loading);
  return (
    <div className="wrapper bg-mainBg h-[100vh]">
      <div className="App">
        {loading.isLoading && <Loading />}
        <Header />
        <Carousels />
      </div>
    </div>
  );
}
