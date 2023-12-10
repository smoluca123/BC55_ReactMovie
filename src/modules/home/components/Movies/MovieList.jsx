import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Scrollbar, FreeMode } from 'swiper/modules';

import useWindowSize from '../../../../hooks/useWindowSize';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

import data from '../../../../data/movies.json';
import MovieItem from './MovieItem';
export default function MovieList() {
  const { width } = useWindowSize();
  const itemsCol = width > 1024 ? 5 : width > 644 ? 3 : 2;

  return (
    <>
      {/* <div className="grid lg:grid-cols-5 lg:gap-6 md:grid-cols-2 md:gap-2 grid-cols-1 text-center">
        {data && data.map((item) => <MovieItem key={item.id} movie={item} />)}
      </div> */}
      <Swiper
        slidesPerView={itemsCol}
        // grid={{
        //   rows: 2,
        // }}
        loop={true}
        freeMode={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Scrollbar, FreeMode]}
        className="mySwiper"
      >
        {data &&
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieItem movie={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
