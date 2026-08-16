import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';

function MainLayout() {
  const location = useLocation();
  
  // Show header only if not on login page
  const showHeader = location.pathname !== '/login';

  return (
    <div className='surface-base min-h-screen flex flex-col'>
      {showHeader && <Header />}
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;