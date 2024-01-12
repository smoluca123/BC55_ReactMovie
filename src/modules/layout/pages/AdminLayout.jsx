import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigate from '../../admin/components/Navigate';
import { Header } from '../../../Components/Header';
export default function AdminLayout() {
  return (
    <div>
      <Header />
      <div className="pt-[60px]">
        <Navigate />
        <Outlet />
      </div>
    </div>
  );
}
