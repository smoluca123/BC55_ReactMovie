import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

export default function ScrollTop() {
  return (
    <div>
      <ScrollToTop
        className="!bg-title-main  flex justify-center items-center hover:!bg-white transition-colors duration-300"
        smooth
        color="rgb(2 4 25)"
        top={200}
        viewBox="0 0 24 30"
        svgPath="m4.5 18.75 7.5-7.5 7.5 7.5"
      />
    </div>
  );
}
