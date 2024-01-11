import React from 'react';
import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

import {
  Typography,
  IconButton,
  Tooltip,
  Chip,
} from '@material-tailwind/react';
import dayjs from 'dayjs';
export default function MovieItem({ movie, classes }) {
  const {
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
  } = movie;
  return (
    <>
      <tr>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal opacity-70 inline-block mr-2"
          >
            {tenPhim}
          </Typography>
          {hot && <Chip className="inline-block" color="red" value="HOT" />}
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
            {dayjs(ngayKhoiChieu).format('DD/MM/YYYY')}
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
          <Tooltip content="Edit Movie">
            <IconButton variant="text" color="red">
              <TrashIcon className="h-4 w-4 " />
            </IconButton>
          </Tooltip>
          <Tooltip content="View Detail Movie">
            <IconButton variant="text" color="green" className="p-0">
              <a
                href={`/details/${biDanh}/${maPhim}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4"
              >
                <EyeIcon className="h-4 w-4" />
              </a>
            </IconButton>
          </Tooltip>
        </td>
      </tr>
    </>
  );
}
