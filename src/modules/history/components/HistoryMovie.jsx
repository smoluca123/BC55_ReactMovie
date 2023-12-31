import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import HistoryItem from './HistoryItem';

export default function HistoryMovie({ listTicket }) {
  const timeMovie = Math.floor(Math.random() * (210 - 100 + 1)) + 100;
  return (
    <Card className="w-full mb-2 bg-secondaryBg-main">
      <CardHeader
        className="bg-mainBg-main group hover:shadow-gray-600 transition duration-300"
        floated={false}
      >
        <Typography
          variant="h4"
          className="group-hover:text-lightText-main transition-colors duration-300 text-center text-white"
        >
          {listTicket?.tenPhim}
        </Typography>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[550px] overflow-y-auto">
          {listTicket?.danhSachGhe.map((ticketItem) => (
            <HistoryItem
              tenPhim={listTicket.tenPhim}
              ngayDat={listTicket.ngayDat}
              giaVe={listTicket.giaVe}
              thoiLuong={timeMovie}
              ticketItem={ticketItem}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
