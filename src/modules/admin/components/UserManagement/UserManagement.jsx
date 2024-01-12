import React, { useEffect, useRef, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { UserPlusIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
  Alert,
} from '@material-tailwind/react';
import {
  addUserAPI,
  getListUserPagesAPI,
  getTypeUserAPI,
  getUserByUserNameAPI,
} from '../../../../apis/userAPI';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

import ListUser from './ListUser';

const TABLE_HEAD = [
  'Tài khoản',
  'Họ Tên',
  'Số điện thoại',
  'Loại người dùng',
  'Action',
];
const validationSchema = object({
  taiKhoan: string().required('Tài khoản không được trống'),
  matKhau: string().required('Mật khẩu không được trống'),
  hoTen: string().required('Họ tên không được trống'),
  email: string()
    .email('Email không đúng định dạng')
    .required('Email không được trống'),
  soDt: string().required('Số điện thoại không được trống'),
  maLoaiNguoiDung: string().required('Loại không được trống'),
});
export default function UserManagement() {
  const [searchParams] = useSearchParams();
  const pages = searchParams.get('pages') >= 1 ? searchParams.get('pages') : 1;
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [typesUser, setTypesUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(pages || 1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const submitBtn = useRef();

  const debounceTimeout = useRef(null);
  const limitUserOnPage = 10;

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: '',
      hoTen: '',
      matKhau: '',
      email: '',
      soDt: '',
      maLoaiNguoiDung: '',
      maNhom: 'GP00',
    },
    mode: 'onTouched',
    resolver: yupResolver(validationSchema),
  });

  const handleOpen = () => {
    setOpen(!open);
  };

  const getListUserPages = async () => {
    try {
      setIsLoading(true);
      navigate('/admin?pages=' + currentPage);
      const content = await getListUserPagesAPI(currentPage, limitUserOnPage);
      setUsers(content.items);
      setTotalPages(content.totalPages);
      if (currentPage > content.totalPages) setCurrentPage(content.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(+currentPage + 1);
  };

  const handleSearch = async (query) => {
    try {
      // Gọi API tìm kiếm với query
      const content = await getUserByUserNameAPI(query);
      console.log(content);
      setUsers(content);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  const debouncedSearch = useRef(
    // Hàm debounce
    (query) => {
      clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => handleSearch(query), 500);
    }
  ).current;

  const handleAddUser = async (data) => {
    try {
      setError(null);
      await addUserAPI(data);
      toast.success('Thêm người dùng thành công');
      handleOpen();
      reset();
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    if (!searchTerm) {
      getListUserPages();
      return;
    }
    debouncedSearch(searchTerm);
    // Cleanup function để clear timeout khi component unmount
    return () => clearTimeout(debounceTimeout.current);
  }, [searchTerm, debouncedSearch]);

  useEffect(() => {
    const getTypesUser = async () => {
      try {
        const content = await getTypeUserAPI();
        setTypesUser(content);
      } catch (error) {
        console.log(error);
      }
    };
    getTypesUser();
  }, []);

  useEffect(() => {
    getListUserPages();
  }, [currentPage]);

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Members list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpen}
              >
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className=""></div>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <ListUser
            TABLE_HEAD={TABLE_HEAD}
            users={users}
            getUsers={getListUserPages}
          />
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {currentPage} of {totalPages}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              onClick={handlePrevPage}
              disabled={isLoading || currentPage == 1}
            >
              Previous
            </Button>
            <input
              type="number"
              className="w-16 border border-black rounded-md flex text-center justify-center items-center"
              value={currentPage || 1}
              onChange={(e) => {
                if (e.target.value < 1) {
                  e.target.value = 1;
                }
                e.target.value > totalPages
                  ? setCurrentPage(totalPages)
                  : setCurrentPage(+e.target.value);
              }}
            />
            <Button
              variant="outlined"
              size="sm"
              onClick={handleNextPage}
              disabled={isLoading || currentPage == totalPages}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Add User</DialogHeader>
        <DialogBody>
          <form
            onSubmit={handleSubmit(handleAddUser)}
            className="flex flex-col gap-4"
          >
            <div className="w-full">
              <Input
                label="Username"
                {...register('taiKhoan')}
                success={!errors.taiKhoan && watch('taiKhoan') !== ''}
                error={errors.taiKhoan}
              />
            </div>
            <div className="w-full">
              <Input
                label="Email"
                {...register('email')}
                success={!errors.email && watch('email') !== ''}
                error={errors.email}
              />
            </div>
            <div className="w-full">
              <Input
                label="Họ Tên"
                {...register('hoTen')}
                success={!errors.hoTen && watch('hoTen') !== ''}
                error={errors.hoTen}
              />
            </div>
            <div className="w-full">
              <Input
                label="Số điện thoại"
                {...register('soDt')}
                success={!errors.soDt && watch('soDt') !== ''}
                error={errors.soDt}
              />
            </div>
            <div className="w-full">
              <Input
                label="Password"
                {...register('matKhau')}
                success={!errors.matKhau && watch('matKhau') !== ''}
                error={errors.matKhau}
              />
            </div>
            <div className="w-full">
              <Select
                label="Loại Người Dùng"
                onChange={(value) => {
                  setValue('maLoaiNguoiDung', value);
                }}
                value={watch('maLoaiNguoiDung')}
                success={
                  !errors.maLoaiNguoiDung && watch('maLoaiNguoiDung') !== ''
                }
                error={errors.maLoaiNguoiDung}
              >
                {/* <Option value="KhachHang">Khách Hàng</Option>
                <Option value="QuanTri">Quản Trị</Option> */}
                {typesUser.map((typeUser) => {
                  return (
                    <Option
                      key={typeUser.maLoaiNguoiDung}
                      value={typeUser.maLoaiNguoiDung}
                    >
                      {typeUser.tenLoai}
                    </Option>
                  );
                })}
              </Select>
              <select className="hidden" {...register('maLoaiNguoiDung')}>
                {typesUser.map((typeUser) => {
                  return (
                    <option
                      key={typeUser.maLoaiNguoiDung}
                      value={typeUser.maLoaiNguoiDung}
                    >
                      {typeUser.tenLoai}
                    </option>
                  );
                })}
              </select>
            </div>
            <input ref={submitBtn} type="submit" hidden />
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
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'mt-[60px]',
        }}
      />
    </>
  );
}
