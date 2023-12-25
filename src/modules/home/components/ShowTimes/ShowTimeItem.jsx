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
  const data = [
    {
      label: 'HTML',
      value: 'html',
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: 'React',
      value: 'react',
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: 'Vue',
      value: 'vue',
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: 'Angular',
      value: 'angular',
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: 'Svelte',
      value: 'svelte',
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <Tabs value={activeTab} orientation={width >= 960 ? 'vertical' : ''}>
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
                variant="medium"
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
