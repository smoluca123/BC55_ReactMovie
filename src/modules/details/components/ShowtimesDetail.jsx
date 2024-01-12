import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export function ShowtimesDetail({ data }) {
  const [activeTab, setActiveTab] = useState(data[0]?.maHeThongRap);

  return (
    <>
      {data && (
        <Tabs value={activeTab} orientation="vertical">
          <TabsHeader
            className="rounded-none border-r border-blue-gray-50 bg-transparent p-0 block"
            indicatorProps={{
              className:
                'bg-transparent border-r-2 border-title-main shadow-none rounded-none',
            }}
          >
            {data.map(({ logo, maHeThongRap }) => (
              <Tab
                key={maHeThongRap}
                value={maHeThongRap}
                onClick={() => setActiveTab(maHeThongRap)}
                className={activeTab === maHeThongRap ? 'text-gray-900' : ''}
              >
                <img src={logo} width={80} alt="" />
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ maHeThongRap, cumRapChieu }) => (
              <TabPanel key={maHeThongRap} value={maHeThongRap}>
                <div className="flex gap-4">
                  {cumRapChieu.map((showtimes) => (
                    <div key={Math.random()}>
                      {showtimes.lichChieuPhim.map(
                        ({ ngayChieuGioChieu, maLichChieu }) => (
                          <Button
                            key={maLichChieu}
                            className="hover:shadow-md hover:shadow-light-blue-300 mb-2 p-0"
                          >
                            <Link
                              to={`/purchase/${maLichChieu}`}
                              className="block px-4 py-4"
                            >
                              <span className="text-title-main">
                                {dayjs(ngayChieuGioChieu).format('DD/MM/YYYY')}
                              </span>{' '}
                              -{' '}
                              <span className="text-red-400">
                                {dayjs(ngayChieuGioChieu).format('hh:mm')}
                              </span>
                            </Link>
                          </Button>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      )}
    </>
  );
}
