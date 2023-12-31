import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import dayjs from 'dayjs';
import React from 'react';

export default function HistoryItem({
  tenPhim,
  ngayDat,
  thoiLuong,
  giaVe,
  ticketItem,
}) {
  return (
    <Card className="">
      <CardHeader floated={false} className="bg-mainBg-main">
        <Typography variant="h5" className="text-title-main text-center">
          {tenPhim}
        </Typography>
      </CardHeader>
      <CardBody className="text-pretty">
        <div className="flex">
          <Typography
            variant="paragraph"
            className="font-bold text-mainBg-main pr-1"
          >
            Ngày đặt:
          </Typography>
          <Typography variant="paragraph" className="text-title-main font-bold">
            {dayjs(ngayDat).format('DD/MM/YYYY')}
          </Typography>
        </div>
        <div className="flex">
          <Typography
            variant="paragraph"
            className="font-bold text-mainBg-main pr-1"
          >
            Thời lượng:
          </Typography>
          <Typography variant="paragraph" className="font-bold text-title-main">
            {thoiLuong} phút
          </Typography>
        </div>
        <div className="flex">
          <Typography
            variant="paragraph"
            className="font-bold text-mainBg-main pr-1"
          >
            Giá Vé:
          </Typography>
          <Typography variant="paragraph" className="font-bold text-title-main">
            {giaVe}
          </Typography>
        </div>
        <div className="flex">
          <Typography variant="paragraph" className="text-red-400 font-bold">
            {ticketItem.tenHeThongRap}
          </Typography>
        </div>

        <div className="flex">
          <Typography
            variant="paragraph"
            className="font-bold text-mainBg-main pr-1"
          >
            Rạp {ticketItem.tenRap},
          </Typography>

          <Typography
            variant="paragraph"
            className="font-bold text-mainBg-main pr-1"
          >
            Ghế số {ticketItem.tenGhe}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}
