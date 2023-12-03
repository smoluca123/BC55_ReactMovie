import React from 'react';
import { Header } from './Header';
import { Carousels } from './Carousel/';
import { useSelector } from 'react-redux';
import { Loading } from './Loading';
import { Filters } from './MovieFilters';
import MovieList from './Movies/MovieList';
export default function AppLayout() {
  const loading = useSelector((state) => state.loading);
  return (
    <div className="wrapper bg-mainBg h-[100vh]">
      <div className="App">
        {loading.isLoading && <Loading />}
        <Header />
        <Carousels />
        <div className="wrapper bg-mainBg-main">
          <div className="_sm:container">
            <Filters />
            <MovieList />
          </div>
        </div>
      </div>
    </div>
  );
}
