import React from 'react';
import './dashboardLayout.css';
import { Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div className="dashboardLayout">
      <div className="menu">MENU</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
