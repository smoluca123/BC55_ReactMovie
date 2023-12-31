import { Button, Input, Typography } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import usePreloader from '../../../hooks/usePreloader';

export default function Profile() {
  const { currentUser } = useSelector((state) => state.auth);
  const { taiKhoan, avatar, hoTen, email, soDT, maNhom, maLoaiNguoiDung } =
    currentUser;
  const { register } = useForm({
    defaultValues: { ...currentUser },
    mode: 'onTouched',
  });
  const { preLoader } = usePreloader();
  useEffect(() => {
    preLoader(500);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="container">
        <div className="card w-[600px] mx-auto bg-white shadow-[0_0px_25px_-5px_rgb(0_0_0/0.1)] shadow-lightBlue-500 text-black p-2 pb-10">
          <div className="">
            <img
              className="rounded-xl"
              src="https://cdn3.f-cdn.com/contestentries/1683544/29258875/5de652e07bf20_thumb900.jpg"
              alt=""
            />
          </div>
          <div className="text-center">
            <img
              className="rounded-[50%] mx-auto max-h-16 -translate-y-1/2"
              src={avatar}
              alt=""
            />
            <form className="flex w-72 flex-col gap-6 mx-auto">
              <Input
                className="border-teal-500 cursor-not-allowed text-gray-900"
                color="teal"
                // value={taiKhoan}
                label="Tài khoản"
                readOnly
                {...register('taiKhoan')}
              />
              <Input
                className="border-pink-500 text-gray-900"
                color="pink"
                // value={hoTen}
                label="Họ Tên"
                readOnly
                {...register('hoTen')}
              />
              <Input
                className="border-purple-500 text-gray-900"
                color="purple"
                // value={email}
                label="Email"
                readOnly
                {...register('email')}
              />
              <Input
                className="border-green-400 text-gray-900"
                color="green"
                // value={soDT}
                readOnly
                label="Số điện thoại"
                {...register('soDT')}
              />

              {/* <Button type="submit" variant="gradient">
                Cập nhật
              </Button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
