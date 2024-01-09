import React, { useEffect, useRef, useState } from 'react';
import { getDetailMovieAPI } from '../../../../apis/movieAPI';
import dayjs from 'dayjs';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CarouselItem({ item }) {
  const [detail, setDetail] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleToggleModal = () => {
    setIsShowModal(!isShowModal);
  };
  useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const content = await getDetailMovieAPI(item.maPhim);
        setDetail(content);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailMovie();
  }, []);
  return (
    <div className="w-full relative sm:h-auto h-dvh">
      <div className="poster">
        <img
          className="h-[100vh] _sm:h-[800px] w-full object-cover"
          src={item.hinhAnh}
          alt={detail?.tenPhim + 'Banner'}
        />
      </div>
      <div className="info flex flex-col justify-center absolute _sm:top-1/2 _sm:left-[30%] _sm:translate-y-[-50%] _sm:w-1/3 h-auto min-h-[240px] bg-[#020419a6] p-5 rounded-xl overflow-hidden w-3/4 left-1/2 -translate-x-1/2 top-1/3 sm:mx-[40px] hover:bg-mainBg-main hover:h-auto transition-all duration-300">
        <h1 className="text-title-main mb-5 text-lg font-medium ">
          {detail?.tenPhim} <span className="text-lightText-main">- </span>
          {detail && dayjs(detail.ngayKhoiChieu).format('DD/MM/YYYY')}
        </h1>
        <p className="overview text-lightText-main truncate whitespace-pre-line overflow-hidden line-clamp-5 hover:text-clip hover:line-clamp-[10] transition-all duration-300">
          {detail?.moTa}
        </p>

        <button
          className="text-gray-900 font-medium py-2 px-4 mt-5 mr-auto bg-white rounded-full hover:bg-gray-900 hover:text-white transition duration-300"
          onClick={handleToggleModal}
        >
          Watch Trailer
        </button>
      </div>
      <Dialog open={isShowModal} handler={handleToggleModal}>
        <DialogHeader className="flex justify-between">
          <Typography variant="h5">{detail?.tenPhim} Trailer</Typography>
          <IconButton
            className="bg-transparent shadow-none text-red-600 p-4"
            onClick={handleToggleModal}
          >
            <FontAwesomeIcon
              className="text-xl"
              icon="fa-solid fa-circle-xmark"
            />
          </IconButton>
        </DialogHeader>
        <DialogBody>
          <ReactPlayer
            url={
              detail?.trailer.includes('http')
                ? detail?.trailer.replace('embed/', 'watch?v=')
                : 'https://www.youtube.com/watch?v=Ru4Jbmh7bcQ'
            }
            width="100%"
          />
        </DialogBody>
        <DialogFooter>
          <Button
            className="text-red-500 bg-transparent"
            onClick={handleToggleModal}
          >
            Cancel
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
