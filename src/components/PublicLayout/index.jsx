import React from 'react';
import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {

  return (
    <div>
      <p>Layout publico</p>
      <Outlet/>
    </div>
  )
}
