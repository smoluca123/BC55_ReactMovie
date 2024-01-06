import React, { useEffect } from 'react';
import { getShowTimesMovieAPI } from '../../../apis/cinemaAPI';
import { Button } from '@material-tailwind/react';

export default function ShowtimesDetailItem({ lichChieu }) {
  const { giaVe } = lichChieu;

  return (
    <div className="">
      <Button>{giaVe}</Button>
    </div>
  );
}
