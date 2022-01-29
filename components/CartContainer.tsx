import React from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { clearCart } from '../redux/cartSlice';

const CartContainer = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.cartItems);

  const total = useSelector((state: RootState) => state.cart.total);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cart.length === 0) {
    return (
      <section className="d-flex flex-column container">
        <header>
          <h1 className="text-dark text-center my-3">Your Bag</h1>
          <h3 className="text-center">LIST IS EMPTY</h3>
        </header>
        <hr />
        <div className="text-primary d-flex justify-content-between">
          <h3>Totals:</h3>
          <h3>${total}</h3>
        </div>
      </section>
    );
  }

  return (
    <section className="d-flex flex-column container">
      <header>
        <h1 className="text-dark text-center my-3">Your Bag</h1>
      </header>
      <ul className="container-fluid">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>
      <hr />
      <div className="text-primary d-flex justify-content-between">
        <h3>Totals:</h3>
        <h3>${total}</h3>
      </div>
      <button onClick={handleClearCart} className="btn btn-danger w-100 my-5">
        CLEAR CART
      </button>
    </section>
  );
};

export default CartContainer;
