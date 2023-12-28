import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import OverView from '../components/OverView/OverView';
import ShowTimes from '../components/Showtimes/ShowTimes';
import { getMovieDetailsAPI } from '../../../apis/cinemaAPI';

export default function Detail() {
  // const params = useParams();
  // const [movie, setMovie] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const getMovieDetails = async () => {
  //     try {
  //       const movie = await getMovieDetailsAPI(params.movieId);
  //       setMovie(movie);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   getMovieDetails();
  // }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <div className='text-white container'>
      <OverView />
      <ShowTimes />
    </div>
  );
}
