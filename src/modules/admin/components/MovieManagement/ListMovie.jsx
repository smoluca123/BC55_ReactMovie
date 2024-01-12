import React, { useState } from 'react';

import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import MovieItem from './MovieItem';
import DialogEditMovie from './DialogEditMovie';
import DialogAddShowtime from './DialogAddShowtime';

export default function ListMovie({ movies, fetchMovies }) {
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(!openDialog);

  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();
  return (
    <>
      {movies.map((movie, index) => {
        const isLast = index === movies.length - 1;
        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';
        return (
          <MovieItem
            fetchMovies={fetchMovies}
            classes={classes}
            key={movie.maPhim}
            movie={movie}
            onSelect={handleSelectedMovie}
            onOpen={handleOpen}
            onOpenDialog={handleOpenDialog}
          />
        );
      })}
      {selectedMovie && (
        <DialogEditMovie
          open={open}
          onOpen={handleOpen}
          fetchMovies={fetchMovies}
          selectedMovie={selectedMovie}
        />
      )}
      {selectedMovie && (
        <DialogAddShowtime
          open={openDialog}
          onOpen={handleOpenDialog}
          selectedMovie={selectedMovie}
        />
      )}
    </>
  );
}
