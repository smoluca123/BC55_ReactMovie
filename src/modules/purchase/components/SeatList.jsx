import React, { useState } from 'react';

import cn from 'classnames';

import { useSelector, useDispatch } from 'react-redux';

import { setSelectedTicket } from '../slices/ticketSlice';
export default function SeatList({ seats }) {
  const { selectedTickets: selectedSeats } = useSelector(
    (state) => state.ticket
  );

  const dispatch = useDispatch();
  const handleSelectSeat = (seat) => {
    dispatch(setSelectedTicket(seat));
  };
  return (
    <div className="grid grid-cols-[repeat(16,1fr)] gap-2">
      {seats.map((item, index) => {
        const { daDat } = item;
        const found = selectedSeats.find((s) => s.maGhe === item.maGhe);
        return (
          <button
            className={cn(
              'p-2 text-lightText-main bg-gray-900 hover:text-title-main',
              {
                '!text-black bg-red-400 cursor-not-allowed': daDat,
                '!text-mainBg-main bg-title-main': !!found,
              }
            )}
            disabled={daDat}
            key={index}
            onClick={() => handleSelectSeat(item)}
          >
            {item.tenGhe}
          </button>
        );
      })}
    </div>
  );
}
