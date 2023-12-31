import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import HistoryItem from '../components/HistoryItem';
import { getInfoUserAPI } from '../../../apis/userAPI';
import HistoryMovie from '../components/HistoryMovie';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../redux/slices/loadingSlice';

export default function HistoryBooking() {
  const [userInfo, setUserInfo] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        dispatch(setLoading(true));
        const content = await getInfoUserAPI();
        setUserInfo(content);
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  return (
    <div className="container">
      <Card className="w-3/4 mx-auto">
        <CardHeader
          className="bg-mainBg-main shadow-title-main group hover:shadow-gray-600 transition duration-300"
          floated={false}
        >
          <Typography
            variant="h1"
            className="group-hover:text-lightText-main transition-colors duration-300 text-center text-title-main"
          >
            Lịch sử đặt vé
          </Typography>
        </CardHeader>
        <CardBody>
          {userInfo &&
            userInfo.thongTinDatVe.map((historyItem) => {
              return <HistoryMovie listTicket={historyItem} />;
            })}
        </CardBody>
      </Card>
    </div>
  );
}
