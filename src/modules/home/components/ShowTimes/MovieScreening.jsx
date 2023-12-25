import { Button, Typography } from '@material-tailwind/react';
import classNames from 'classnames';
import dayjs from 'dayjs';

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
        }) => (
          <div className="flex border-b border-b-gray-900 pb-2 mb-2">
            <div className="w-[100px] h-[150px] flex items-center">
              <img
                className="w-full object-cover"
                src={hinhAnh}
                alt={tenPhim}
              />
            </div>
            <div className="px-4">
              <Typography className="text-white font-medium">
                {hot ? (
                  <span className="px-2 py-1 mr-2 rounded-lg bg-red-700 ">
                    HOT
                  </span>
                ) : (
                  <span className="px-2 py-1 mr-2 rounded-lg bg-deep-purple-300 ">
                    -{Math.floor(Math.random() * 20)}%
                  </span>
                )}

                {tenPhim}
                <span
                  className={classNames('px-2 py-1 ml-2 rounded-lg', {
                    'bg-rose-500': sapChieu,
                    '!bg-success': dangChieu,
                  })}
                >
                  {dangChieu ? 'Đang chiếu' : 'Sắp Chiếu'}
                </span>
              </Typography>
              <div className="grid grid-cols-4 gap-4 max-h-[120px] w-full overflow-y-auto my-2 pr-2">
                {lstLichChieuTheoPhim.map(
                  ({ maLichChieu, ngayChieuGioChieu }) => (
                    <Button
                      key={maLichChieu}
                      className="hover:shadow-md hover:shadow-light-blue-300 mb-2"
                    >
                      <span className="text-title-main">
                        {dayjs(ngayChieuGioChieu).format('DD/MM/YYYY')}
                      </span>{' '}
                      -{' '}
                      <span className="text-red-400">
                        {dayjs(ngayChieuGioChieu).format('hh-mm-ss')}
                      </span>
                    </Button>
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
