import React, { useEffect, useRef, useState } from 'react';
import useWindowSize from '../../CustomHook/useWindowSize';

export default function CarouselItem({ item }) {
  const pathConfig = useRef({
    banner: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/',
    original: 'https://image.tmdb.org/t/p/original/',
    poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/',
  });
  //   const [windowSize, setWindowSize] = useState({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });
  const [pathImg, setPathImg] = useState('');
  const { width, height } = useWindowSize();
  useEffect(() => {
    if (width <= 600) {
      setPathImg(pathConfig.current.poster);
      return;
    }
    setPathImg(pathConfig.current.banner);
  }, [width]);
  return (
    <div className="w-full relative">
      <div className="poster">
        <img src={pathImg + item.backdrop_path} alt="" />
      </div>
      <div className="info flex flex-col justify-center absolute top-1/3 mx-[40px] sm:top-1/2 sm:left-[180px] sm:translate-y-[-50%] sm:w-1/3 h-[240px] bg-[#020419a6] p-5 rounded-xl overflow-hidden ">
        <h1 className="text-title mb-5 text-lg font-medium ">
          {item.title} <span className="text-lightText">- </span>
          {item.release_date}
        </h1>
        <p className="overview text-lightText truncate whitespace-pre-line hover:text-clip overflow-hidden line-clamp-5">
          {item.overview}
        </p>
      </div>
    </div>
  );
}
