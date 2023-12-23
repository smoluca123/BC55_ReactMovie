import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function PrivateRoute({ children }) {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    const url = `/user/login?from=${location.pathname}`;
    return <Navigate to={url} />;
  }
  return children || <Outlet />;
}
