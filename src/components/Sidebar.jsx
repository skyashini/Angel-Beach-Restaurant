import React from 'react';
import '../pages/Style.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar p-2'>
      <div className='brand-section mb-5'>
        <i className='bi bi-bootstrap-fill me-3 fs-4 brand-icon'></i>
        <span className='brand-name fs-4'>Yousaf</span>
      </div>
      <hr className='divider' />
      <div className='list-group list-group-flush'>
        <Link to="/" className='list-group-item py-2'>
          <i className='bi bi-house fs-5 me-3'></i>
          <span>Home</span>
        </Link>
        <Link to="/products" className='list-group-item py-2'>
          <i className='bi bi-table fs-5 me-3'></i>
          <span>Products</span>
        </Link>
        <Link to="/AdminReservations" className='list-group-item py-2'>
          <i className='bi bi-clipboard-data fs-5 me-3'></i>
          <span>Reservation</span>
        </Link>
        <Link to="/AdminOrders" className='list-group-item py-2'>
          <i className='bi bi-people fs-5 me-3'></i>
          <span>Customers</span>
        </Link>
        <a className='list-group-item py-2'>
          <i className='bi bi-power fs-5 me-3'></i>
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
