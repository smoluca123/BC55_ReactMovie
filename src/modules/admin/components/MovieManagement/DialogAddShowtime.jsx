import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
  Select,
  Option,
  Alert,
} from '@material-tailwind/react';
import { DayPicker } from 'react-day-picker';
import dayjs from 'dayjs';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import {
  createShowtimeAPI,
  getCinemasAPI,
  getCumRapTheoHeThongRapAPI,
} from '../../../../apis/cinemaAPI';
import { object, string, number } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import toast from 'react-hot-toast';

const validationSchema = object({
  ngayKhoiChieu: string().required('Ngày khởi chiếu không được trống'),
  gioKhoiChieu: number().required('Giờ khởi chiếu không được trống').max(24),
  phutKhoiChieu: number().required('Phút khởi chiếu không được trống').max(60),
  giaVe: string().required('Giá vé không được trống'),
  maPhim: string().required('Mã phim không được trống'),
  rap: string().required('Rạp không được trống'),
  maRap: string().required('Rạp không được trống'),
});
export default function DialogAddShowtime({
  open,
  onOpen: handleOpen,
  selectedMovie,
}) {
  const [date, setDate] = useState();
  const [cinemas, setCinemas] = useState([]);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [cumRap, setCumRap] = useState([]);
  const [error, setError] = useState('');
  const submitBtn = useRef();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ngayKhoiChieu: '',
      gioKhoiChieu: '',
      phutKhoiChieu: '',
      maPhim: '',
      giaVe: '',
      rap: '',
      maRap: '',
    },
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const handleAddShowtime = async (data) => {
    try {
      const _ngayChieuGioChieu = `${dayjs(data.ngayKhoiChieu).format(
        'DD/MM/YYYY'
      )} ${data.gioKhoiChieu}:${data.phutKhoiChieu}:00`;
      const _data = {
        ...data,
        ngayChieuGioChieu: dayjs(_ngayChieuGioChieu).format(
          'DD-MM-YYYY HH:mm:ss'
        ),
      };
      await createShowtimeAPI(_data);
      handleOpen();
      reset();
      toast.success('Thêm lịch chiếu thành công');
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const getCinemas = async () => {
      try {
        const content = await getCinemasAPI();
        setCinemas(content);
      } catch (error) {
        console.log(error);
      }
    };
    getCinemas();
  }, []);

  useEffect(() => {
    if (!selectedMovie) return;
    setValue('maPhim', selectedMovie.maPhim);
  }, [selectedMovie]);

  useEffect(() => {
    if (!selectedCinema) return;
    const getCumRap = async () => {
      try {
        const content = await getCumRapTheoHeThongRapAPI(selectedCinema);
        console.log(content);
        setCumRap(content);
      } catch (error) {
        console.log(error);
      }
    };
    getCumRap();
  }, [selectedCinema]);

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Thêm lịch chiếu</DialogHeader>
        <DialogBody>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleAddShowtime)}
          >
            <div className="flex w-full flex-col items-end gap-6">
              <Input
                size="md"
                label="Tên phim"
                disabled={true}
                value={selectedMovie.tenPhim}
              />
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              {/* <Input size="md" label="Đánh giá" /> */}
              {/* <DatePicker /> */}

              <Popover placement="bottom">
                <PopoverHandler>
                  <Input
                    label="Select a Date"
                    onChange={() => null}
                    value={date ? dayjs(date).format('MMMM D, YYYY') : ''}
                    {...register('ngayKhoiChieu')}
                    success={
                      !errors.ngayKhoiChieu && watch('ngayKhoiChieu') !== ''
                    }
                    error={!!errors.ngayKhoiChieu}
                  />
                </PopoverHandler>
                <PopoverContent className="z-[99999]">
                  <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={(date) => {
                      setDate(date);
                      setValue(
                        'ngayKhoiChieu',
                        dayjs(date).format('DD/MM/YYYY')
                      );
                      trigger('ngayKhoiChieu');
                    }}
                    showOutsideDays
                    className="border-0"
                    classNames={{
                      caption:
                        'flex justify-center py-2 mb-4 relative items-center',
                      caption_label: 'text-sm font-medium text-gray-900',
                      nav: 'flex items-center',
                      nav_button:
                        'h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300',
                      nav_button_previous: 'absolute left-1.5',
                      nav_button_next: 'absolute right-1.5',
                      table: 'w-full border-collapse',
                      head_row: 'flex font-medium text-gray-900',
                      head_cell: 'm-0.5 w-9 font-normal text-sm',
                      row: 'flex w-full mt-2',
                      cell: 'text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                      day: 'h-9 w-9 p-0 font-normal',
                      day_range_end: 'day-range-end',
                      day_selected:
                        'rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white',
                      day_today: 'rounded-md bg-gray-200 text-gray-900',
                      day_outside:
                        'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10',
                      day_disabled: 'text-gray-500 opacity-50',
                      day_hidden: 'invisible',
                    }}
                    components={{
                      IconLeft: ({ ...props }) => (
                        <ChevronLeftIcon
                          {...props}
                          className="h-4 w-4 stroke-2"
                        />
                      ),
                      IconRight: ({ ...props }) => (
                        <ChevronRightIcon
                          {...props}
                          className="h-4 w-4 stroke-2"
                        />
                      ),
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex w-full flex-row items-end gap-6">
              <Input
                size="md"
                label="Giờ chiếu"
                {...register('gioKhoiChieu')}
                success={!errors.gioKhoiChieu && watch('gioKhoiChieu') !== ''}
                error={!!errors.gioKhoiChieu}
              />
              <Input
                size="md"
                label="Phút chiếu"
                {...register('phutKhoiChieu')}
                success={!errors.phutKhoiChieu && watch('phutKhoiChieu') !== ''}
                error={!!errors.phutKhoiChieu}
              />
            </div>

            <div className="flex w-full flex-col items-end gap-6">
              <Input
                size="md"
                label="Giá vé"
                {...register('giaVe')}
                success={!errors.giaVe && watch('giaVe') !== ''}
                error={!!errors.giaVe}
              />
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              <Select
                label="Chọn rạp"
                onChange={(value) => {
                  setValue('rap', value);
                  setSelectedCinema(value);
                  trigger('rap');
                }}
                className={classNames('', {
                  '!border-red-500': !!errors.rap,
                  '!border-green-500': !errors.rap && watch('rap') !== '',
                })}
              >
                {cinemas.map((cinema) => {
                  return (
                    <Option
                      key={cinema.maHeThongRap}
                      value={cinema.maHeThongRap}
                    >
                      {cinema.tenHeThongRap}
                    </Option>
                  );
                })}
              </Select>
              <select className="hidden" {...register('rap')}>
                {cinemas.map((cinema) => {
                  return (
                    <option
                      key={cinema.maHeThongRap}
                      value={cinema.maHeThongRap}
                    >
                      {cinema.tenHeThongRap}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              <Select
                label="Chọn rạp"
                onChange={(value) => {
                  setValue('maRap', value);
                  setSelectedCinema(value);
                  trigger('maRap');
                }}
                className={classNames('', {
                  '!border-red-500': !!errors.maRap,
                  '!border-green-500': !errors.maRap && watch('maRap') !== '',
                })}
              >
                {cumRap.map((cinema) => {
                  return (
                    <Option key={cinema.maCumRap} value={cinema.maCumRap}>
                      {cinema.tenCumRap}
                    </Option>
                  );
                })}
              </Select>
              <select className="hidden" {...register('maRap')}>
                {cumRap.map((cinema) => {
                  return (
                    <option key={cinema.maCumRap} value={cinema.maCumRap}>
                      {cinema.tenCumRap}
                    </option>
                  );
                })}
              </select>
            </div>
            <button ref={submitBtn} type="submit" className="hidden"></button>
          </form>
          {error && (
            <Alert color="red" className="mt-2">
              {error}
            </Alert>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              submitBtn.current.click();
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
