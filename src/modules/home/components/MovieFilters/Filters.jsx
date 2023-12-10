import React from 'react';
import { Select, Option, IconButton } from '@material-tailwind/react';
import data from '../../../../data/movies.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Filters() {
  const stylesSelectCotainer =
    'relative w-full py-5 px-2 pr-2 after:absolute after:bottom-0 after:left-1/2 after:right-[50%] after:h-[2px] hover:after:left-0 hover:after:right-0 after:bg-mainBg-main after:transition-all after:duration-300';
  return (
    <div className="relative z-[11]">
      <div className="translate-y-[-50%] rounded-md bg-white hidden md:flex items-center justify-between shadow-[rgba(0,0,0,0.24)_0px_3px_8px]">
        <div className={stylesSelectCotainer}>
          <Select className="w-full" label="Phim">
            {data &&
              data.map((item) => <Option key={item.id}>{item.title}</Option>)}
          </Select>
        </div>
        <div className={stylesSelectCotainer}>
          <Select className="w-full" label="Rạp">
            {data &&
              data.map((item) => <Option key={item.id}>{item.title}</Option>)}
          </Select>
        </div>
        <div className={stylesSelectCotainer}>
          <Select className="w-full" label="Ngày giờ chiếu">
            {data &&
              data.map((item) => <Option key={item.id}>{item.title}</Option>)}
          </Select>
        </div>
        <div className="px-2">
          <button className="lg:min-w-[160px] md:w-auto bg-mainBg-main text-lightText-main py-2 px-4 rounded-md hover:text-title-main transition-colors duration-300">
            Mua Vé Ngay
          </button>
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
