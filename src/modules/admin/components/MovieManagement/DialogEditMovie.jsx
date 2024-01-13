import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Popover,
  PopoverHandler,
  PopoverContent,
  Alert,
  Typography,
} from '@material-tailwind/react';
import dayjs from 'dayjs';
import { DayPicker } from 'react-day-picker';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { addMovieAPI, updateMovieAPI } from '../../../../apis/movieAPI';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, date } from 'yup';
import toast from 'react-hot-toast';

const validationSchema = object({
  tenPhim: string().required('Tên phim không được trống'),
  biDanh: string().required('Bí danh không được trống'),
  moTa: string().required('Mô tả không được trống'),
  trailer: string().required('trailer không được trống'),
  ngayKhoiChieu: string().required('Ngày khởi chiếu không được trống'),
  danhGia: string().required('Đánh giá không được trống'),
});

export default function DialogEditMovie({
  open,
  onOpen: handleOpen,
  fetchMovies,
  selectedMovie,
}) {
  const [date, setDate] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const [newImage, setNewImage] = useState(null);
  const [error, setError] = useState(null);
  const inputImage = useRef();
  const submitBtn = useRef();
  //   const { tenPhim, hinhAnh, moTa, danhGia, ngayKhoiChieu } = selectedMovie;
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
      tenPhim: '',
      biDanh: '',
      moTa: '',
      hinhAnh: '',
      trailer: '',
      ngayKhoiChieu: '',
      danhGia: '',
    },
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const handleChangeImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      setValue('hinhAnh', e.target.files[0]);
      setImagePreview(event.target.result);
      trigger('hinhAnh');
    };
  };

  const handleEditMovie = async (data) => {
    try {
      console.log(data);
      setError(null);
      //   if (newImage) {
      //     data.hinhAnh = newImage;
      //   }
      await updateMovieAPI(data);
      handleOpen();
      fetchMovies();
      reset();
      toast.success('Cập nhật thành công');
      console.log(data);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    if (!selectedMovie) return;
    for (let key in selectedMovie) {
      setValue(key, selectedMovie[key]);
    }
    setImagePreview(selectedMovie.hinhAnh);
    setDate(selectedMovie.ngayKhoiChieu);
    trigger();
  }, [selectedMovie]);
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Edit Movie</DialogHeader>
        <DialogBody className="max-h-[70dvh] overflow-y-auto">
          <Typography variant="small" color="red" className="mb-4">
            Bug do API, Nếu cần upload ảnh mới thì vui lòng thay đổi kèm 1 field
            bất kỳ thì ảnh mới được cập nhật, nếu chỉ thay đổi ảnh thì ảnh mới
            sẽ không được api thay đổi!
          </Typography>

          <form
            className="flex flex-col items-center gap-4"
            onSubmit={handleSubmit(handleEditMovie)}
          >
            <div className="flex w-full flex-col items-end gap-6">
              <Input
                size="md"
                label="Tên phim"
                {...register('tenPhim')}
                success={!errors.tenPhim && watch('tenPhim') !== ''}
                error={!!errors.tenPhim}
              />
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              <Input
                size="md"
                label="Bí danh"
                {...register('biDanh')}
                success={!errors.biDanh && watch('biDanh') !== ''}
                error={!!errors.biDanh}
              />
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              <Input
                size="md"
                label="Trailer"
                {...register('trailer')}
                success={!errors.trailer && watch('trailer') !== ''}
                error={!!errors.trailer}
              />
            </div>
            <div className="flex w-full flex-col items-center gap-6">
              <input
                type="file"
                hidden
                ref={inputImage}
                onChange={handleChangeImage}
              />
              <Button
                variant="outlined"
                className="flex items-center gap-3 w-full"
                onClick={() => {
                  inputImage.current.click();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                Upload Files
              </Button>

              {imagePreview && <img src={imagePreview} width={200} />}
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              <Textarea
                size="md"
                label="Mô tả"
                resize={true}
                {...register('moTa')}
                success={!errors.moTa && watch('moTa') !== ''}
                error={!!errors.moTa}
              />
            </div>
            <div className="flex w-full flex-col items-end gap-6">
              <Input
                size="md"
                label="Đánh giá"
                {...register('danhGia')}
                success={!errors.danhGia && watch('danhGia') !== ''}
                error={!!errors.danhGia}
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
