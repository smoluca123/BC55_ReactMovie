import { useEffect } from 'react';
import usePreloader from '../../../hooks/usePreloader';

import { Carousels } from '../components/Carousel/';
import { Filters } from '../components/MovieFilters';
import MovieList from '../components/Movies/MovieList';
import { ShowTimes } from '../components/ShowTimes';
export default function Home() {
  const { preLoader } = usePreloader();
  useEffect(() => {
    const timer = preLoader(1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="wrapper bg-mainBg">
      <div className="App h-full">
        <Carousels />
        <div className="wrapper bg-mainBg-main">
          <div className="_sm:container">
            <Filters />
            <MovieList />
            <ShowTimes />
          </div>
        </div>
      </div>
    </div>
  );
}
