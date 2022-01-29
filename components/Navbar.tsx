import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTotals } from '../redux/cartSlice';
import { RootState } from '../redux/store';

const Navbar = () => {
  const dispatch = useDispatch();

  const amount = useSelector((state: RootState) => state.cart.amount);

  const cart = useSelector((state: RootState) => state.cart.cartItems);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  return (
    <nav className="bg-primary text-white p-4 d-flex justify-content-between container-fluid">
      <div className="container d-flex justify-content-between">
        <h2>Shop Mobilephone</h2>
        <div>
          <i className="fas fa-shopping-cart fa-2x"></i>
          <span className="badge bg-danger">{amount}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
