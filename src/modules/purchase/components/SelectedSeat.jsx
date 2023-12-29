import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectedSeatItem from './SelectedSeatItem';
import { buyTicketAPI } from '../../../apis/ticketAPI';
import Swal from 'sweetalert2';
import { resetSelectedTicket } from '../slices/ticketSlice';
import { useNavigate } from 'react-router-dom';

export default function SelectedSeat({ thongTinPhim, maLichChieu }) {
  const { selectedTickets: selectedSeats, totalPrice } = useSelector(
    (state) => state.ticket
  );
  const { tenCumRap, diaChi, tenRap, ngayChieu, gioChieu, tenPhim } =
    thongTinPhim;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlePurchase = async () => {
    try {
      const danhSachVe = selectedSeats.map((item) => ({
        maGhe: item.maGhe,
        giaVe: item.giaVe,
      }));
      await buyTicketAPI(+maLichChieu, danhSachVe);
      Swal.fire({
        icon: 'success',
        title: 'Đặt vé thành công',
        text: 'Đã đặt vé thành công',
        showConfirmButton: false,
        timer: 1000,
      });
      setTimeout(() => {
        navigate('/');
      }, 1000);
      dispatch(resetSelectedTicket());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center w-full">
      <Card className="ml-6 w-full text-center">
        <CardHeader shadow={false} floated={false}>
          <Typography
            variant="h1"
            className="text-gray-800 min-w-[30%] text-center"
          >
            Thông tin vé
          </Typography>
        </CardHeader>
        <CardBody className="text-left">
          <SelectedSeatItem label="Cụm rạp">{tenCumRap}</SelectedSeatItem>

          <SelectedSeatItem label="Địa chỉ">{diaChi}</SelectedSeatItem>

          <SelectedSeatItem label="Rạp">{tenRap}</SelectedSeatItem>

          <SelectedSeatItem label="Ngày giờ chiếu">
            {gioChieu} : {ngayChieu}
          </SelectedSeatItem>

          <SelectedSeatItem label="Tên phim">{tenPhim}</SelectedSeatItem>

          <SelectedSeatItem label="Ghế đang chọn">
            {selectedSeats.map((item) => `Ghế ${item.tenGhe}`).join(', ')}
          </SelectedSeatItem>

          <SelectedSeatItem label="Tổng tiền">
            {totalPrice} VNĐ
          </SelectedSeatItem>
        </CardBody>
        <CardFooter>
          <Button disabled={selectedSeats.length == 0} onClick={handlePurchase}>
            Đặt Vé
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
