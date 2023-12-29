import React, { useEffect, useState } from 'react';
import { Select, Option, IconButton, Button } from '@material-tailwind/react';
import data from '../../../../data/movies.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getListMoviesAPI } from '../../../../apis/movieAPI';
import { getShowTimesMovieAPI } from '../../../../apis/cinemaAPI';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
export default function Filters() {
  const [listMovie, setListMovie] = useState([]);
  const [listShowTimes, setListShowTimes] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedShowTimes, setSelectedShowTimes] = useState(null);
  const [screenings, setScreenings] = useState([]);
  const [maLichChieu, setMaLichChieu] = useState(null);

  const handleSelectedMovie = (value) => {
    setSelectedMovie(value);
  };

  const handleSelectedShowTimes = (value) => {
    setSelectedShowTimes(value);
  };

  const handleSelectLichChieu = (value) => {
    setMaLichChieu(value);
  };

  useEffect(() => {
    const getListMovies = async () => {
      try {
        const content = await getListMoviesAPI();
        setListMovie(content);
      } catch (error) {
        console.log(error);
      }
    };
    getListMovies();
  }, []);
  useEffect(() => {
    const getShowTimesMovie = async () => {
      try {
        if (selectedMovie) {
          const content = await getShowTimesMovieAPI(selectedMovie);
          setListShowTimes(content.heThongRapChieu);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getShowTimesMovie();
  }, [selectedMovie]);

  useEffect(() => {
    if (selectedShowTimes) {
      const screenings = listShowTimes.filter(
        (showtime) => showtime.maHeThongRap == selectedShowTimes
      );

      console.log(screenings);
      setScreenings(screenings);
      // setScreenings(screenings.cumRapChieu);
    }
  }, [selectedShowTimes]);
  const stylesSelectCotainer =
    'relative w-full py-5 px-2 pr-2 after:absolute after:bottom-0 after:left-1/2 after:right-[50%] after:h-[2px] hover:after:left-0 hover:after:right-0 after:bg-mainBg-main after:transition-all after:duration-300';
  return (
    <div className="relative z-[11]">
      <div className="translate-y-[-50%] rounded-md bg-white hidden md:flex items-center justify-between shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
        <div className={stylesSelectCotainer}>
          <Select
            className="w-full"
            label="Phim"
            onChange={handleSelectedMovie}
          >
            {listMovie &&
              listMovie.map((item) => (
                <Option key={item.maPhim} value={item.maPhim.toString()}>
                  {item.tenPhim}
                </Option>
              ))}
          </Select>
        </div>
        <div className={stylesSelectCotainer}>
          <Select
            className="w-full "
            label="Rạp"
            onChange={handleSelectedShowTimes}
          >
            {listShowTimes &&
              listShowTimes.map((showtime) => {
                for (let item of showtime.cumRapChieu) {
                  return (
                    <Option
                      key={item.maCumRap}
                      value={showtime.maHeThongRap.toString()}
                      className="truncate"
                    >
                      {item.tenCumRap} -{' '}
                      {item.diaChi.length > 20
                        ? item.diaChi.slice(0, 20) + '...'
                        : item.diaChi}
                    </Option>
                  );
                }
              })}
          </Select>
        </div>
        <div className={stylesSelectCotainer}>
          <Select
            className="w-full"
            label="Ngày giờ chiếu"
            onChange={handleSelectLichChieu}
          >
            {screenings &&
              screenings.map((screening) => {
                for (let cumRapChieu of screening.cumRapChieu) {
                  for (let item of cumRapChieu.lichChieuPhim) {
                    return (
                      <Option
                        key={item.maLichChieu}
                        value={item.maLichChieu}
                        className="truncate"
                      >
                        {item.ngayChieuGioChieu}
                      </Option>
                    );
                  }
                }
              })}
          </Select>
        </div>
        <div className="px-2">
          <Link to={maLichChieu ? `/purchase/${maLichChieu}` : '/'}>
            <button
              disabled={!maLichChieu}
              className={classNames(
                'lg:min-w-[160px] md:w-auto bg-mainBg-main text-lightText-main py-2 px-4 rounded-md hover:text-title-main transition-colors duration-300',
                { 'cursor-not-allowed !bg-gray-500': !maLichChieu }
              )}
            >
              Mua Vé Ngay
            </button>
          </Link>
        </div>
      </div>
      <div className="relative translate-y-[-50%] flex items-center shadow-md md:hidden _sm:w-full">
        <input
          className="w-full h-full outline-none p-4"
          type="text"
          placeholder="Tìm kiếm phim"
        />
        <IconButton
          size="lg"
          className="text-red-500 !absolute right-0 bg-transparent shadow-none"
        >
          <FontAwesomeIcon
            className="text-lg"
            icon="fa-solid fa-magnifying-glass"
          />
        </IconButton>
      </div>
    </div>
  );
}
