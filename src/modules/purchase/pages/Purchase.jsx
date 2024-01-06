import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    const getListSeat = async () => {
      try {
        dispatch(setLoading(true));
        const content = await getListTicketAPI(maLichChieu);
        setDataSeat(content);
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setLoading(false));
        navigate('/');
        console.log(error);
      }
    };
    getListSeat();
    return () => {
      dispatch(resetSelectedTicket());
    };
  }, []);

  return (
    <div className="container pt-[60px]">
      <Typography variant="h1" className="text-center text-title-main">
        Đặt Vé
      </Typography>
      <div className="flex flex-col xl:flex-row items-center mt-10">
        <div className="w-auto xl:w-[70%] xl:max-w-[70%]">
          {dataSeat && <SeatList seats={dataSeat.danhSachGhe} />}
        </div>
        <div className="w-auto xl:w-[30%] pt-10 sm:ml-6 sm:mt-0">
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
