import React from 'react';
import cn from 'classnames';

export default function SeatItem({ data: list, selectedSeats, onSelect }) {
  return (
    <div className="flex justify-center sm:justify-start flex-wrap gap-2 box-border">
      {list.map((item) => {
        const { daDat } = item;
        const found = selectedSeats.find((s) => s.maGhe === item.maGhe);
        return (
          <button
            className={cn(
              'w-12 h-12 mt-2 p-2 text-lightText-main bg-gray-900 hover:text-title-main',
              {
                '!text-black bg-red-400 cursor-not-allowed': daDat,
                '!text-mainBg-main bg-title-main': !!found,
              }
            )}
            disabled={daDat}
            key={item.maGhe}
            onClick={() => onSelect(item)}
          >
            {item.tenGhe}
          </button>
        );
      })}
      <div className="lg:block xl:hidden w-full border-b-[1px] border-gray-600"></div>
    </div>
  );
}
