import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigate from '../../admin/components/Navigate';
import { Header } from '../../../Components/Header';
import { useSelector } from 'react-redux';
import { Loading } from '../../../Components/Loading';
export default function AdminLayout() {
  const { isLoading } = useSelector((state) => state.loading);
  return (
    <div>
      {/* Show loading */}
      {isLoading && <Loading />}
      <Header />
      <div className="pt-[60px]">
        <Navigate />
        <Outlet />
      </div>
    </div>
  );
}
