import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from '@material-tailwind/react';
import classNames from 'classnames';
import { useState } from 'react';
import MovieScreening from './MovieScreening';
import useWindowSize from '../../../../hooks/useWindowSize';

export default function ShowTimeItem({ dataCumRap }) {
  const [activeTab, setActiveTab] = useState(dataCumRap[0].maCumRap);
  const { width } = useWindowSize();

  return (
    <Tabs
      value={activeTab}
      orientation={width >= 960 ? 'vertical' : 'horizontal'}
    >
      <TabsHeader
        className="min-w-[250px] lg:w-[250px] w-full max-h-[200px] lg:max-h-[700px] lg:min-h-[700px] overflow-y-auto p-0 flex flex-col rounded-none border-r-2 border-blue-gray-50 bg-transparent"
        indicatorProps={{
          className:
            'bg-transparent border-r-2 border-title-main shadow-none rounded-none',
        }}
      >
        {dataCumRap.map(({ maCumRap, tenCumRap, diaChi }) => (
          <Tab
            key={maCumRap}
            value={maCumRap}
            onClick={() => setActiveTab(maCumRap)}
            className={classNames('text-white w-full block', {
              'text-title-main': activeTab === maCumRap,
            })}
          >
            <div
              className={classNames('w-full border-b border-b-blue-gray-200', {
                'border-b-title-main': activeTab === maCumRap,
              })}
            >
              <Typography
                className="text-left my-2 px-2 text-ellipsis !line-clamp-1 whitespace-pre-line"
                variant="small"
              >
                {tenCumRap}
              </Typography>
              <Typography
                className={classNames(
                  'text-gray-400 text-left my-2 px-2 text-ellipsis !line-clamp-1 whitespace-pre-line transition-colors duration-300',
                  {
                    'text-lightText-main': activeTab === maCumRap,
                  }
                )}
                variant="small"
              >
                {diaChi}
              </Typography>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="h-[700px] overflow-y-auto">
        {dataCumRap.map(({ maCumRap, danhSachPhim }) => (
          <TabPanel
            key={maCumRap}
            value={maCumRap}
            className={classNames('', {
              '!hidden': activeTab !== maCumRap,
            })}
          >
            <MovieScreening danhSachPhim={danhSachPhim} />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
