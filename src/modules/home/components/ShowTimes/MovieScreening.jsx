import { Button, Typography } from '@material-tailwind/react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export default function MovieScreening({ danhSachPhim }) {
  return (
    <>
      {danhSachPhim.map(
        ({
          tenPhim,
          hinhAnh,
          hot,
          dangChieu,
          sapChieu,
          lstLichChieuTheoPhim,
          maPhim,
        }) => (
          <div
            key={maPhim}
            className="flex border-b border-b-gray-900 pb-2 mb-2"
          >
            <div className="w-[100px] h-[150px] flex items-center">
              <img
                className="w-full object-cover"
                src={hinhAnh}
                alt={tenPhim}
              />
            </div>
            <div className="px-4 text-white w-full">
              <div className="flex lg:flex-row lg:justify-start md:justify-center items-center text-center flex-col">
                <span
                  className={classNames('px-2 py-1 lg:mr-2 rounded-lg', {
                    'bg-red-700': hot,
                    'bg-deep-purple-300': !hot,
                  })}
                >
                  {hot ? 'HOT' : `-${Math.floor(Math.random() * 20)}%`}
                </span>
                <Typography className="text-white font-bold">
                  {tenPhim}
                </Typography>
                <span
                  className={classNames(
                    'px-2 py-1 lg:ml-2 rounded-lg bg-red-400',
                    {
                      '!bg-rose-500': sapChieu,
                      '!bg-green-500': dangChieu,
                    }
                  )}
                >
                  {dangChieu ? 'Đang chiếu' : sapChieu ? 'Sắp Chiếu' : 'HOT'}
                </span>
              </div>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 max-h-[120px] w-full overflow-y-auto my-2 pr-2">
                {lstLichChieuTheoPhim.map(
                  ({ maLichChieu, ngayChieuGioChieu }) => (
                    <Link key={maLichChieu} to={`/purchase/${maLichChieu}`}>
                      <Button className="hover:shadow-md hover:shadow-light-blue-300 mb-2">
                        <span className="text-title-main">
                          {dayjs(ngayChieuGioChieu).format('DD/MM/YYYY')}
                        </span>{' '}
                        -{' '}
                        <span className="text-red-400">
                          {dayjs(ngayChieuGioChieu).format('hh:mm')}
                        </span>
                      </Button>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
