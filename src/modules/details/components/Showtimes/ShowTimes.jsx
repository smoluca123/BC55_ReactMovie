import React, { useEffect, useRef, useState } from "react";
import styles from "./Showtime.module.css";

export default function YourComponent() {
  const [cinemaSystem, setCinemaSystem] = useState(null);
  const cgvRef = useRef(null);
  const lotteRef = useRef(null);

  useEffect(() => {
    const handleClicked = (evt) => {
      if (cinemaSystem) {
        const isCgv = cgvRef.current && !cgvRef.current.contains(evt.target);
        const isLotte =
          lotteRef.current && !lotteRef.current.contains(evt.target);

        if (isCgv && isLotte) {
          setCinemaSystem(null);
        }
      }
    };

    if (cinemaSystem) {
      document.addEventListener("click", handleClicked);
    }

    return () => {
      document.removeEventListener("click", handleClicked);
    };
  }, [cinemaSystem]);

  const handleClickCinema = (cinema) => {
    setCinemaSystem(cinema === cinemaSystem ? null : cinema);
  };

  return (
    <div className="container my-5">
      <div
        ref={cgvRef}
        className={`${styles.cinemaSystemContainer} ${
          cinemaSystem === "CGV" ? styles.active : ""
        }`}
        onClick={() => handleClickCinema("CGV")}
      >
        <img
          src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
          alt="cgv"
          width="50"
          height="50"
          className={styles.cinemaLogo}
        />
        {cinemaSystem === "CGV" && (
          <div className={styles.cinemaDetails}>
            <h3>CGV - Crescent Mall</h3>
            <button>10-05-2022 ~ 20:30</button>
          </div>
        )}
      </div>
      <div
        ref={lotteRef}
        className={`${styles.cinemaSystemContainer} ${
          cinemaSystem === "Lotte" ? styles.active : ""
        }`}
        onClick={() => handleClickCinema("Lotte")}
      >
        <img
          src="https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png"
          alt="Lotte"
          width="50"
          height="50"
          className={styles.cinemaLogo}
        />
        {cinemaSystem === "Lotte" && (
          <div className={styles.cinemaDetails}>
            <h3>Lotte - Nam Sài Gòn</h3>
            <button>02-05-2022 ~ 18:30</button>
          </div>
        )}
      </div>
    </div>
  );
}
