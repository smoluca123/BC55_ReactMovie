import { TrashIcon } from '@heroicons/react/24/outline';
import { PencilIcon } from '@heroicons/react/24/solid';
import {
  Avatar,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from '@material-tailwind/react';
import React from 'react';

export default function UserItem({ user, classes, onOpen, onDeleteUser }) {
  const { taiKhoan, email, hoTen, maLoaiNguoiDung, soDt, soDT } = user;
  return (
    <>
      <tr key={email}>
        <td className={classes}>
          <div className="flex items-center gap-3">
            <Avatar
              src={`https://ui-avatars.com/api/?name=${hoTen}`}
              alt={hoTen}
              size="sm"
            />
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {taiKhoan}
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-70"
              >
                {email}
              </Typography>
            </div>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {hoTen}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {soDT || soDt}
          </Typography>
        </td>
        <td className={classes}>
          <div className="w-max">
            <Chip
              variant="ghost"
              size="sm"
              value={maLoaiNguoiDung === 'QuanTri' ? 'Quản Trị' : 'Khách Hàng'}
              color={maLoaiNguoiDung === 'QuanTri' ? 'red' : 'green'}
            />
          </div>
        </td>

        <td className={classes}>
          <Tooltip content="Edit User">
            <IconButton variant="text" onClick={() => onOpen(user)}>
              <PencilIcon className="h-4 w-4" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Delete User">
            <IconButton
              variant="text"
              color="red"
              onClick={() => onDeleteUser(user)}
            >
              <TrashIcon className="h-4 w-4" />
            </IconButton>
          </Tooltip>
        </td>
      </tr>
    </>
  );
}
