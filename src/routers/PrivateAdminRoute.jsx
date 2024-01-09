import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import NotFound from '../Components/NotFound/NotFound';
export default function PrivateAdminRoute({ children }) {
  const location = useLocation();

  const { currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    const url = `/user/login?from=${location.pathname}`;
    return <Navigate to={url} />;
  }
  if (currentUser && currentUser.maLoaiNguoiDung !== 'QuanTri') {
    return <NotFound />;
  }
  return <>{children || <Outlet />}</>;
}
