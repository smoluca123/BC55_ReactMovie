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
  const { width } = useWindowSize();
  useEffect(() => {
    if (width <= 480) {
      setPathImg(pathConfig.current.poster);
      return;
    }
    setPathImg(pathConfig.current.banner);
  }, [width]);
  return (
    <div className="w-full relative sm:h-auto h-[100vh]">
      <div className="poster">
        <img
          className="h-[100vh] _sm:h-auto object-cover"
          src={pathImg + item.backdrop_path}
          alt=""
        />
      </div>
      <div className="info flex flex-col justify-center absolute _sm:top-1/2 _sm:left-[180px] _sm:translate-y-[-50%] _sm:w-1/3 h-[240px] min-h-[240px] bg-[#020419a6] p-5 rounded-xl overflow-hidden top-1/3 mx-[40px] hover:bg-mainBg-main hover:h-auto transition-all duration-300">
        <h1 className="text-title-main mb-5 text-lg font-medium ">
          {item.title} <span className="text-lightText-main">- </span>
          {item.release_date}
        </h1>
        <p className="overview text-lightText-main truncate whitespace-pre-line overflow-hidden line-clamp-5 hover:text-clip hover:line-clamp-[10] transition-all duration-300">
          {item.overview}
        </p>
      </div>
    </div>
  );
}
