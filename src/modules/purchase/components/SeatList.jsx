import React, { useState } from 'react';

import cn from 'classnames';

import { useSelector, useDispatch } from 'react-redux';

import { setSelectedTicket } from '../slices/ticketSlice';
import SeatItem from './SeatItem';
const limitItem = 16;
export default function SeatList({ seats }) {
  console.log(
    Array.from({ length: Math.ceil(seats.length / limitItem) }, (_, index) => {
      const start = index * limitItem;
      const end = start + limitItem;
      return seats.slice(start, end);
    })
  );
  const newSeats = Array.from(
    { length: Math.ceil(seats.length / limitItem) },
    (_, index) => {
      const start = index * limitItem;
      const end = start + limitItem;
      return seats.slice(start, end);
    }
  );
  const { selectedTickets: selectedSeats } = useSelector(
    (state) => state.ticket
  );

  const dispatch = useDispatch();
  const handleSelectSeat = (seat) => {
    dispatch(setSelectedTicket(seat));
  };
  return (
    // <div className="grid sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-[repeat(16,1fr)] gap-2">
    //   {seats.map((item, index) => {
    //     const { daDat } = item;
    //     const found = selectedSeats.find((s) => s.maGhe === item.maGhe);
    //     return (
    //       <button
    //         className={cn(
    //           'p-2 text-lightText-main bg-gray-900 hover:text-title-main',
    //           {
    //             '!text-black bg-red-400 cursor-not-allowed': daDat,
    //             '!text-mainBg-main bg-title-main': !!found,
    //           }
    //         )}
    //         disabled={daDat}
    //         key={index}
    //         onClick={() => handleSelectSeat(item)}
    //       >
    //         {item.tenGhe}
    //       </button>
    //     );
    //   })}
    // </div>
    <div className="w-full">
      {newSeats.map(
        (list) => (
          <SeatItem
            data={list}
            selectedSeats={selectedSeats}
            onSelect={handleSelectSeat}
          />
        )
        // return (
        //   <div className="flex justify-center sm:justify-start flex-wrap gap-2 box-border">
        //     {list.map((item) => {
        //       const { daDat } = item;
        //       const found = selectedSeats.find((s) => s.maGhe === item.maGhe);
        //       return (
        //         <button
        //           className={cn(
        //             'w-12 h-12 mt-2 p-2 text-lightText-main bg-gray-900 hover:text-title-main',
        //             {
        //               '!text-black bg-red-400 cursor-not-allowed': daDat,
        //               '!text-mainBg-main bg-title-main': !!found,
        //             }
        //           )}
        //           disabled={daDat}
        //           key={item.maGhe}
        //           onClick={() => handleSelectSeat(item)}
        //         >
        //           {item.tenGhe}
        //         </button>
        //       );
        //     })}
        //     <div className="lg:block xl:hidden w-full border-b-[1px] border-gray-600"></div>
        //   </div>
        // );
      )}
    </div>
  );
}
