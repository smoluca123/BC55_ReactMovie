import { useEffect } from 'react';
import usePreloader from '../../../hooks/usePreloader';

import { Carousels } from '../components/Carousel/';
import { Filters } from '../components/MovieFilters';
import MovieList from '../components/Movies/MovieList';
export default function Home() {
  const { preLoader } = usePreloader();
  useEffect(() => {
    const timer = preLoader(1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="wrapper bg-mainBg h-[100vh]">
      <div className="App">
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
