import React from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';

import { Typography, IconButton, Tooltip } from '@material-tailwind/react';

export default function ListMovie({ movies }) {
  return (
    <>
      {movies.map(
        (
          {
            tenPhim,
            biDanh,
            trailer,
            hinhAnh,
            hot,
            maNhom,
            maPhim,
            moTa,
            ngayKhoiChieu,
            sapChieu,
            danhGia,
          },
          index
        ) => {
          const isLast = index === movies.length - 1;
          const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
          return (
            <tr key={maPhim}>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-70"
                >
                  {tenPhim}
                </Typography>
              </td>
              <td className={classes + ' max-w-[200px]'}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-70 w-full"
                >
                  {moTa}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-70"
                >
                  {ngayKhoiChieu}
                </Typography>
              </td>
              <td className={classes}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-70"
                >
                  {danhGia}
                </Typography>
              </td>
              <td className={classes}>
                <img width={100} src={hinhAnh} />
              </td>
              <td>
                <Tooltip content="Edit Movie">
                  <IconButton variant="text">
                    <PencilIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          );
        }
      )}
    </>
  );
}
