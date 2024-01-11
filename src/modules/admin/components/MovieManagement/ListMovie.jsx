import React from 'react';

import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import MovieItem from './MovieItem';

export default function ListMovie({ movies }) {
  const navigate = useNavigate();
  return (
    <>
      {movies.map((movie, index) => {
        const isLast = index === movies.length - 1;
        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
        return <MovieItem classes={classes} key={movie.maPhim} movie={movie} />;
      })}
    </>
  );
}
