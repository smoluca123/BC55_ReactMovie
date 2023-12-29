import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SeatList from '../components/SeatList';
import { getListTicketAPI } from '../../../apis/ticketAPI';
import SelectedSeat from '../components/SelectedSeat';
import { useDispatch } from 'react-redux';
import { resetSelectedTicket } from '../slices/ticketSlice';
import { setLoading } from '../../../redux/slices/loadingSlice';

export default function Purchase() {
  const [dataSeat, setDataSeat] = useState(null);
  const dispatch = useDispatch();
  const { maLichChieu } = useParams();

  useEffect(() => {
    const getListSeat = async () => {
      try {
        dispatch(setLoading(true));
        const content = await getListTicketAPI(maLichChieu);
        setDataSeat(content);
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
      }
    };
    getListSeat();
    return () => {
      dispatch(resetSelectedTicket());
    };
  }, []);

  return (
    <div className=" container pt-[60px]">
      <Typography variant="h1" className="text-center text-title-main">
        Đặt Vé
      </Typography>
      <div className="flex items-center mt-10">
        <div className="max-w-[70%]">
          {dataSeat && <SeatList seats={dataSeat.danhSachGhe} />}
        </div>
        <div className="w-full">
          {dataSeat && (
            <SelectedSeat
              maLichChieu={maLichChieu}
              thongTinPhim={dataSeat.thongTinPhim}
            />
          )}
        </div>
      </div>
    </div>
  );
}
