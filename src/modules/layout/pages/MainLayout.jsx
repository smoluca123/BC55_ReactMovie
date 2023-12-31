import React from 'react';
import { Header } from '../../../Components/Header';
import { Loading } from '../../../Components/Loading';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Subscribe } from '../../../Components/Subscribe';
import Services from '../../../Components/Subscribe/Services';
import ScrollTop from '../../../Components/ScrollToTop/';
export default function MainLayout() {
  const loading = useSelector((state) => state.loading);
  return (
    <div className="wrapper bg-mainBg-main min-h-screen">
      {/* Show loading */}
      {loading.isLoading && <Loading />}

      <Header />
      <Outlet />
      <footer>
        <Subscribe />
        <Services />
        <ScrollTop />
      </footer>
    </div>
  );
}
