import React from 'react';
import data from '../../data/movies.json';
import MovieItem from './MovieItem';
export default function MovieList() {
  return (
    <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2 grid-cols-1 text-center">
      {data && data.map((item) => <MovieItem key={item.id} movie={item} />)}
    </div>
  );
}
