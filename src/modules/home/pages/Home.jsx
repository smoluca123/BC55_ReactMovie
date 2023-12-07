import { useSelector } from 'react-redux';

import { Carousels } from '../components/Carousel/';
import { Loading } from '../../../Components/Loading';
import { Filters } from '../components/MovieFilters';
import MovieList from '../components/Movies/MovieList';
export default function Home() {
  const loading = useSelector((state) => state.loading);
  return (
    <div className="wrapper bg-mainBg h-[100vh]">
      <div className="App">
        {loading.isLoading && <Loading />}
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
