import { Typography } from '@material-tailwind/react';
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { movieId } = useParams();
  return (
    <div>
      <Typography variant="h2">Detail {movieId}</Typography>
    </div>
  );
}
