import React from 'react';
import { Header } from '../../../Components/Header';
import { Loading } from '../../../Components/Loading';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function MainLayout() {
  const loading = useSelector((state) => state.loading);
  return (
    <>
      {/* Show loading */}
      {loading.isLoading && <Loading />}

      <Header />
      <Outlet />
    </>
  );
}
