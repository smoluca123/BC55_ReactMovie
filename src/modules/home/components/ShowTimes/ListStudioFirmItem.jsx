import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ListStudioFirmItem() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 4000,
  };

  return (
    <div className="mt-[45px]">
      <Slider {...settings}>
        <div className="m-8"></div>
        <div className="item ">
          <div className="flex flex-nowrap cursor-pointer	">
            <div className="left__item border-solid ">
              <div className="img__item my-[10px] mx-[20px] px-[20px] py-[15px] border-solid">
                <div className="img__item ">
                  <img
                    src={
                      'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'
                    }
                    alt="imgCard"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="right__item bg-white border-solid">
              <h4 className="text-[#32FFAB] uppercase font-bold">
                CGV - Pandora City
              </h4>
              <h6 className="w-[170px]">
                Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú
              </h6>
              <a href="#">[chi tiết]</a>
            </div>
          </div>
        </div>
        <div className="item ">
          <div className="flex flex-nowrap cursor-pointer	">
            <div className="left__item border-solid ">
              <div className="img__item my-[10px] mx-[20px] px-[20px] py-[15px] border-solid">
                <div className="img__item ">
                  <img
                    src={
                      'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'
                    }
                    alt="imgCard"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="right__item bg-white border-solid">
              <h4 className="text-[#32FFAB] uppercase font-bold">
                CGV - Pandora City
              </h4>
              <h6 className="w-[170px]">
                Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú
              </h6>
              <a href="#">[chi tiết]</a>
            </div>
          </div>
        </div>
        <div className="item ">
          <div className="flex flex-nowrap cursor-pointer	">
            <div className="left__item border-solid  ">
              <div className="img__item my-[10px] mx-[20px] px-[20px] py-[15px] border-solid">
                <div className="img__item ">
                  <img
                    src={
                      'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'
                    }
                    alt="imgCard"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="right__item bg-white border-solid">
              <h4 className="text-[#32FFAB] uppercase font-bold">
                CGV - Pandora City
              </h4>
              <h6 className="w-[170px]">
                Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú
              </h6>
              <a href="#">[chi tiết]</a>
            </div>
          </div>
        </div>
        <div className="item ">
          <div className="flex flex-nowrap">
            <div className="left__item border-solid ">
              <div className="img__item my-[10px] mx-[20px] px-[20px] py-[15px] border-solid">
                <div className="img__item ">
                  <img
                    src={
                      'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'
                    }
                    alt="imgCard"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="right__item bg-white border-solid">
              <h4 className="text-[#32FFAB] uppercase font-bold">
                CGV - Pandora City
              </h4>
              <h6 className="w-[170px]">
                Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú
              </h6>
              <a href="#">[chi tiết]</a>
            </div>
          </div>
        </div>
        <div className="item ">
          <div className="flex flex-nowrap">
            <div className="left__item border-solid ">
              <div className="img__item my-[10px] mx-[20px] px-[20px] py-[15px] border-solid">
                <div className="img__item ">
                  <img
                    src={
                      'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'
                    }
                    alt="imgCard"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="right__item bg-white border-solid">
              <h4 className="text-[#32FFAB] uppercase font-bold">
                CGV - Pandora City
              </h4>
              <h6 className="w-[170px]">
                Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú
              </h6>
              <a href="#">[chi tiết]</a>
            </div>
          </div>
        </div>
        <div className="item ">
          <div className="flex flex-nowrap">
            <div className="left__item border-solid ">
              <div className="img__item my-[10px] mx-[20px] px-[20px] py-[15px] border-solid">
                <div className="img__item ">
                  <img
                    src={
                      'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png'
                    }
                    alt="imgCard"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
            <div className="right__item bg-white border-solid">
              <h4 className="text-[#32FFAB] uppercase font-bold">
                CGV - Pandora City
              </h4>
              <h6 className="w-[170px]">
                Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú
              </h6>
              <a href="#">[chi tiết]</a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ListStudioFirmItem;

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// function ListStudioFirmItem() {
//   const settings = {
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: false,
//     autoplaySpeed: 4000,
//   };

//   const items = [
//     {
//       image: 'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png',
//       title: 'CGV - Pandora City',
//       address: 'Lầu 3, Pandora City, 1/1 Trường Chinh, Tân Phú',
//     },
//     // Add more items as needed
//   ];

//   const [tabValue, setTabValue] = useState(0);

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   return (
//     <div>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs
//           value={tabValue}
//           onChange={handleTabChange}
//           aria-label="basic tabs example"
//         >
//           {items.map((item, index) => (
//             <Tab label={`Tab ${index + 1}`} key={index} />
//           ))}
//         </Tabs>
//       </Box>

//       {items.map((item, index) => (
//         <div
//           key={index}
//           className={index === tabValue ? 'mt-[45px]' : 'hidden'}
//         >
//           <Slider {...settings}>
//             <div className="item">
//               <div className="flex flex-nowrap cursor-pointer	">
//                 <div className="left__item border-solid ">
//                   <div className="img__item my-[10px] mx-[20px] px-[20px] py-[15px] border-solid">
//                     <div className="img__item ">
//                       <img
//                         src={item.image}
//                         alt="imgCard"
//                         width={50}
//                         height={50}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="right__item bg-white border-solid">
//                   <h4 className="text-[#32FFAB] uppercase font-bold">
//                     {item.title}
//                   </h4>
//                   <h6 className="w-[170px]">{item.address}</h6>
//                   <a href="#">[chi tiết]</a>
//                 </div>
//               </div>
//             </div>
//           </Slider>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ListStudioFirmItem;
