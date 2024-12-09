import React from 'react';
import './rootLayout.css'
import { Link, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className='rootLayout'>
      <header>
        <Link to="/">
            <img src="/logo.png" alt="" />
            <span>Yesu AI</span>
        </Link>
        <span>User</span>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
