import React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import styles from "./OverView.module.css";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f44336",
    },
  },
});

const CustomButton = styled(Button)`
  width: 100%;
  padding: 8px 25px;
  font-weight: 700;
`;

export default function OverView() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container_y}>
        <Grid container className="container">
          {/* First Grid Item */}
          <Grid
            item
            xs={7}
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="container py-5 group mt-8 flex ju overflow-hidden cursor-pointer"
          >
            {/* Image container */}
            <div className="relative mt-0 mx-0 rounded-br-none rounded-bl-none h-auto max-h-[400px]">
              {/* Replace the empty string with the actual image URL */}
              <img
                className=""
                width={240}
                height={314}
                src={
                  "https://image.tmdb.org/t/p/w600_and_h900_bestv2//zigNOyCkhmuBl16Fnd2s7SWZOmJ.jpg"
                }
                alt="card-image"
              />
            </div>
            {/* Text content */}
            <div className="flex flex-col items-center mx-2">
              <div className="mb-2 flex items-center justify-center truncate whitespace-pre-line overflow-hidden !line-clamp-1">
                Quỷ Lùn Tinh Nghịch 3: Đồng Tâm Hiệp Nhạc
              </div>
              <div className="truncate whitespace-pre-line overflow-hidden !line-clamp-4 max-w-[300px]">
                120phút
              </div>
              {/* Buttons */}
              <div className="pt-0 my-3 transition duration-300 group-hover:text-title-main hover:!text-rose-500">
                <CustomButton variant="contained">Mua Vé</CustomButton>
              </div>
            </div>
          </Grid>

          {/* Second Grid Item */}
          <Grid
            item
            xs={5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <div className="flex flex-col items-center">
              <div className="my-2">
                <span>Đánh Giá</span>
              </div>
              <div className="icon_star">
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  className={`mx-2 ${styles.redStar}`}
                />
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  className={`mx-2 ${styles.redStar}`}
                />
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  className={`mx-2 ${styles.redStar}`}
                />
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  className={`mx-2 ${styles.redStar}`}
                />
                <FontAwesomeIcon
                  icon="fa-solid fa-star"
                  className={`mx-2 ${styles.redStar}`}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
