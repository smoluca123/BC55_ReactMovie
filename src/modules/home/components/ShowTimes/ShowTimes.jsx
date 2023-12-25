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
import useWindowSize from '../../../../hooks/useWindowSize';
export default function ShowTimes() {
  const [showTimesData, setShowTimesData] = useState([]);
  const [cinemas, setCinemas] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const dispatch = useDispatch();

  const { width, height } = useWindowSize();

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
      <Tabs
        value={activeTab || 'BHDStar'}
        orientation={width >= 960 ? 'vertical' : ''}
      >
        <TabsHeader
          className="lg:max-h-[700px] lg:min-h-[700px] lg:overflow-y-auto overflow-x-auto lg:flex lg:flex-col flex-row rounded-none lg:border-r lg:border-b-0 border-b border-white bg-transparent p-0"
          indicatorProps={{
            className:
              'bg-transparent lg:border-r-[3px] lg:border-b-0 border-b-[3px] border-title-main shadow-none rounded-none',
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
