import { useState } from 'react';
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from '@material-tailwind/react';
import {
  BackwardIcon,
  Bars3Icon,
  FilmIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { signOut } from '../../user/slices/authSlice';
import toast from 'react-hot-toast';

export default function Navigate() {
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(signOut());
    toast.success('Bạn đã đăng xuất thành công');
    navigate('/');
  };

  return (
    <>
      <div className="fixed z-[99] left-0 top-40">
        <IconButton
          onClick={openDrawer}
          className="rounded-ss-none rounded-es-none shadow-md shadow-title-main"
        >
          <Bars3Icon className="w-5 h-5" />
        </IconButton>
      </div>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Trang quản trị
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <Link to="/admin">
            <ListItem>
              <ListItemPrefix>
                <UserIcon className="h-5 w-5" />
              </ListItemPrefix>
              Quản lí người dùng
            </ListItem>
          </Link>

          <NavLink
            to="movie-management"
            className={({ isActive, isPending }) => {
              return classNames({
                'bg-mainBg-main text-title-main rounded-md':
                  isActive && !isPending,
              });
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <FilmIcon className="h-5 w-5" />
              </ListItemPrefix>
              Quản lí phim
            </ListItem>
          </NavLink>
          <Link to="/">
            <ListItem>
              <ListItemPrefix>
                <BackwardIcon className="w-5 h-5" />
              </ListItemPrefix>
              Về trang chủ
            </ListItem>
          </Link>
        </List>
        <Button className="mt-3 ml-5" size="sm" onClick={handleLogout}>
          Đăng xuất
        </Button>
      </Drawer>
    </>
  );
}
