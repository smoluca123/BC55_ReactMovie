import React, { useState } from 'react';
import {
  CalendarDaysIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';

import {
  Typography,
  IconButton,
  Tooltip,
  Chip,
} from '@material-tailwind/react';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import { deleteMovieAPI } from '../../../../apis/movieAPI';
export default function MovieItem({
  movie,
  classes,
  fetchMovies,
  onSelect,
  onOpen: handleOpen,
  onOpenDialog: handleOpenDialog,
}) {
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

  const handleDeleteMovie = async (id) => {
    try {
      await deleteMovieAPI(id);
      await fetchMovies();
      toast.success('Xóa thành công');
    } catch (error) {
      console.log(error);
    }
  };
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
          <div className="">
            <Tooltip content="Edit Movie">
              <IconButton
                variant="text"
                onClick={() => {
                  onSelect(movie);
                  handleOpen();
                }}
              >
                <PencilIcon className="h-4 w-4" />
              </IconButton>
            </Tooltip>
            <Tooltip content="Add lịch chiếu">
              <IconButton
                variant="text"
                onClick={() => {
                  onSelect(movie);
                  handleOpenDialog();
                }}
              >
                <CalendarDaysIcon className="h-4 w-4" />
              </IconButton>
            </Tooltip>
          </div>
          <div className="">
            <Tooltip content="Edit Movie">
              <IconButton
                variant="text"
                color="red"
                onClick={() => handleDeleteMovie(maPhim)}
              >
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
          </div>
        </td>
      </tr>
    </>
  );
}
