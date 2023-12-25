import { useEffect, useState } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from '@material-tailwind/react';
import cn from 'classnames';
import ShowTimeItem from './ShowTimeItem';
import { getCinemasAPI, getShowTimesAPI } from '../../../../apis/cinemaAPI';

import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../redux/slices/loadingSlice';
export default function ShowTimes() {
  const [showTimesData, setShowTimesData] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const getCinemas = async () => {
      try {
        // dispatch(setLoading(true));
        const content = await getCinemasAPI();
        setCinemas(content);
        setActiveTab(content[0].maHeThongRap);
      } catch (error) {
        console.log(error);
      } finally {
        // dispatch(setLoading(false));
      }
    };
    getCinemas();
  }, []);

  useEffect(() => {
    const getShowTimes = async () => {
      try {
        const content = await getShowTimesAPI();
        setShowTimesData(content);
      } catch (error) {
        console.log(error);
      }
    };
    getShowTimes();
  }, []);
  return (
    <div id="showtimes" className="my-10">
      <Typography variant="h1" className="text-center text-title-main mb-4">
        Các suất chiếu
      </Typography>
      <Tabs value={activeTab || 'BHDStar'} orientation="vertical">
        <TabsHeader
          className="max-h-[700px] min-h-[700px] overflow-y-auto flex flex-col rounded-none border-r border-white bg-transparent p-0"
          indicatorProps={{
            className:
              'bg-transparent border-r-[3px] border-title-main shadow-none rounded-none',
          }}
        >
          {cinemas.map(({ logo, maHeThongRap }) => (
            <Tab
              key={maHeThongRap}
              value={maHeThongRap}
              onClick={() => setActiveTab(maHeThongRap)}
              className={cn(
                ' text-lightText-main hover:opacity-50 transition-opacity duration-300',
                {
                  'text-title-main': activeTab === maHeThongRap,
                }
              )}
            >
              <img width={60} src={logo} alt={maHeThongRap} />
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="">
          {showTimesData.map(({ maHeThongRap, lstCumRap }) => (
            // <TabPanel key={maHeThongRap} value={maHeThongRap}>
            //   {tenHeThongRap}
            // </TabPanel>
            <TabPanel className="p-0" key={maHeThongRap} value={maHeThongRap}>
              <ShowTimeItem dataCumRap={lstCumRap} />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
