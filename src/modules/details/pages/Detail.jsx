import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailMovieAPI } from '../../../apis/movieAPI';
import { Button } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import ReactPlayer from 'react-player';
import DiaglogDetail from '../components/DiaglogDetail';
import { ShowtimesDetail } from '../components/ShowtimesDetail';
import { getMovieDetailsAPI } from '../../../apis/cinemaAPI';

export default function Detail() {
  const { movieId } = useParams();
  const [listCinemas, setListCinemas] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const handleToggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const content = await getDetailMovieAPI(movieId);
        setMovie(content);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailMovie();
  }, []);

  // get cinemas
  useEffect(() => {
    const getCinemasMovie = async () => {
      const content = await getMovieDetailsAPI(movieId);
      setListCinemas(content.heThongRapChieu);
    };
    getCinemasMovie();
  }, []);
  return (
    <div className="sm:pt-[60px]">
      {movie && (
        <>
          <div className="container pt-10">
            <div className="flex flex-col md:flex-row gap-8 items-center ">
              <div className="relative group min-w-[200px]">
                <img
                  className="w-full h-[320px] "
                  src={movie.hinhAnh}
                  alt={movie.tenPhim}
                />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Button onClick={handleToggleModal}>
                    <img src="/assets/img/video-button.png" alt="" />
                  </Button>
                </div>
              </div>
              <div className="md:text-left text-center px-2 md:px-0">
                <Typography variant="h4" className="text-lightText-main mb-2">
                  {movie.tenPhim}
                </Typography>
                <Typography variant="small" className="text-blue-gray-500 mb-4">
                  {'ENGLISH HINDI TELEGU TAMIL'.replaceAll(' ', ', ')}
                </Typography>

                <Button className="text-sm text-blue-gray-500 border-[1px] border-gray-800 py-2 px-4 rounded-3xl mb-4">
                  HORNOR
                </Button>
                <div className="text-blue-gray-500">
                  <span className="mr-6">
                    <FontAwesomeIcon
                      icon="fa-solid fa-calendar-days"
                      className="mr-2"
                    />
                    {Math.floor(Math.random() * 2) + 1} hrs{' '}
                    {Math.floor(Math.random() * 60)} mins
                  </span>
                  <span>
                    <FontAwesomeIcon
                      icon="fa-solid fa-calendar-days"
                      className="mr-2"
                    />
                    {dayjs(movie.ngayKhoiChieu).format('DD MMM, YYYY')}
                  </span>
                </div>
                <Typography
                  variant="paragraph"
                  className="text-secondaryText-main mt-2"
                >
                  {movie.moTa}
                </Typography>
              </div>
              <div className="md:ml-auto">
                <div className="w-24 h-24 border-[10px] border-lime-500 rounded-full bg-gray-900 text-white text-xl font-bold flex items-center justify-center">
                  {movie.danhGia}
                </div>
                <div className="text-red-400">
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                  <FontAwesomeIcon icon="fa-regular fa-star" />
                </div>
              </div>
            </div>

            {/* Showtimes */}
            <div className="mt-10">
              {listCinemas && <ShowtimesDetail data={listCinemas} />}
            </div>
          </div>
          <DiaglogDetail
            movie={movie}
            isShowModal={isShowModal}
            onToggle={handleToggleModal}
          />
        </>
      )}
    </div>
  );
}
