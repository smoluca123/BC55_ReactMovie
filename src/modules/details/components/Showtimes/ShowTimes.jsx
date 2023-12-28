import React, { useEffect, useRef, useState } from 'react';
import styles from './Showtime.module.css';
import Grid from '@mui/material/Grid';

export default function YourComponent() {
  const [activeCinemas, setActiveCinemas] = useState([]);
  const cgvRef = useRef(null);
  const lotteRef = useRef(null);

  useEffect(() => {
    const handleClicked = (evt) => {
      if (activeCinemas.length > 0) {
        const isOutsideCgv =
          cgvRef.current && !cgvRef.current.contains(evt.target);
        const isOutsideLotte =
          lotteRef.current && !lotteRef.current.contains(evt.target);

        if (isOutsideCgv && isOutsideLotte) {
          setActiveCinemas([]);
        }
      }
    };

    if (activeCinemas.length > 0) {
      document.addEventListener('click', handleClicked);
    }

    return () => {
      document.removeEventListener('click', handleClicked);
    };
  }, [activeCinemas]);

  const handleClickCinema = (cinema) => {
    setActiveCinemas((prevActiveCinemas) => {
      if (prevActiveCinemas.includes(cinema)) {
        // If cinema is already active, remove it
        return prevActiveCinemas.filter((c) => c !== cinema);
      } else {
        // If cinema is not active, add it
        return [...prevActiveCinemas, cinema];
      }
    });
  };

  return (
    <div className='container my-5'>
      <Grid container spacing={2}>
        <Grid item xs={12} className='py-5'>
          <div
            ref={cgvRef}
            className={`${styles.cinemaSystemContainer} ${
              activeCinemas.includes('CGV') ? styles.active : ''
            }`}
            onClick={() => handleClickCinema('CGV')}
          >
            <img
              src='https://movienew.cybersoft.edu.vn/hinhanh/cgv.png'
              alt='cgv'
              width='50'
              height='50'
              className={styles.cinemaLogo}
            />
            {activeCinemas.includes('CGV') && (
              <div className={styles.cinemaDetails}>
                <h3>CGV - Crescent Mall</h3>
                <button>10-05-2022 ~ 20:30</button>
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} className='py-5'>
          <div
            ref={lotteRef}
            className={`${styles.cinemaSystemContainer} ${
              activeCinemas.includes('Lotte') ? styles.active : ''
            }`}
            onClick={() => handleClickCinema('Lotte')}
          >
            <img
              src='https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png'
              alt='Lotte'
              width='50'
              height='50'
              className={styles.cinemaLogo}
            />
            {activeCinemas.includes('Lotte') && (
              <div className={styles.cinemaDetails}>
                <h3>Lotte - Nam Sài Gòn</h3>
                <button>02-05-2022 ~ 18:30</button>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
