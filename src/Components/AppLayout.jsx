import React from 'react';
import { Header } from './Header';
import { Carousels } from './Carousel/';
import { useSelector } from 'react-redux';
import { Loading } from './Loading';
import { Filters } from './MovieFilters';
export default function AppLayout() {
  const loading = useSelector((state) => state.loading);
  return (
    <div className="wrapper bg-mainBg h-[100vh]">
      <div className="App">
        {loading.isLoading && <Loading />}
        <Header />
        <Carousels />
        <div className="container">
          <Filters />
        </div>
      </div>
    </div>
  );
}
