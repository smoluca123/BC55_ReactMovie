import { useSelector } from 'react-redux';

import { Carousels } from '../components/Carousel/';
import { Loading } from '../../../Components/Loading';
import { Filters } from '../components/MovieFilters';
import MovieList from '../components/Movies/MovieList';
import ListStudioFirm from '../components/ShowTimes/ListStudioFirm';
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
          <div className="container wrapper bg-mainBg-main mt-4">
            <ListStudioFirm className="" />
          </div>
        </div>
      </div>
    </div>
  );
}
