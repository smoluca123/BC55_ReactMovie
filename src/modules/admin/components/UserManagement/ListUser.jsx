import {
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Select,
  Option,
  Alert,
} from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import UserItem from './UserItem';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { deleteUserAPI, updateUserAPI } from '../../../../apis/userAPI';

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
export default function ListUser({ TABLE_HEAD, users, getUsers }) {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  const submitBtn = useRef();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
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

  const handleSelectedUser = (user) => {
    setSelectedUser(user);
    setTimeout(() => trigger(), 0); //buộc setState trước sau đó mới run trigger
    setError(null);
    handleOpen();
  };

  const handleDeleteUser = async (user) => {
    try {
      await deleteUserAPI(user.taiKhoan);
      getUsers();
      toast.success('Xóa thành công');
    } catch (error) {
      toast.error(error);
    }
  };

  const handleEditUser = async (values) => {
    try {
      await updateUserAPI({ ...values, maNhom: 'GP00' });
      getUsers();
      handleOpen();
      setError(null);
      toast.success('Cập nhật người dùng thành công');
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  const handleErrors = (errors) => {
    console.log(errors);
  };

  useEffect(() => {
    for (let key in selectedUser) {
      if (key === 'soDT') {
        setValue('soDt', selectedUser[key]);
      }
      setValue(key, selectedUser[key]);
    }
  }, [selectedUser]);
  return (
    <>
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            const isLast = index === users.length - 1;
            const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

            return (
              <UserItem
                user={user}
                classes={classes}
                onOpen={handleSelectedUser}
                onDeleteUser={handleDeleteUser}
                key={user.taiKhoan}
              />
            );
          })}
        </tbody>
      </table>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Edit User</DialogHeader>
        <DialogBody>
          <form
            onSubmit={handleSubmit(handleEditUser, handleErrors)}
            className="flex flex-col gap-4"
          >
            <div className="w-full">
              <Input
                label="Username"
                {...register('taiKhoan')}
                disabled={true}
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
              >
                <Option value="KhachHang">Khách Hàng</Option>
                <Option value="QuanTri">Quản Trị</Option>
              </Select>
              <select className="hidden" {...register('maLoaiNguoiDung')}>
                <option value="KhachHang">Khách Hàng</option>
                <option value="QuanTri">Quản Trị</option>
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
    </>
  );
}
