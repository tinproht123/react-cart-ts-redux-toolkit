import React from 'react';
import { CartType } from '../redux/cartSlice';
import {
  removeItem,
  incrementAmount,
  decrementAmount,
} from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

type Props = {
  item: CartType[];
};

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id }));
  };

  const handleIncrement = () => {
    dispatch(incrementAmount({ id: item.id }));
  };

  const handleDecrement = () => {
    dispatch(decrementAmount({ id: item.id }));
  };

  return (
    <article className="d-flex align-items-center justify-content-between">
      <div className="d-flex">
        <img src={item.image} alt={item.title} />
        <div>
          <h5>{item.title}</h5>
          <h6>${item.price}</h6>
          <button onClick={handleRemove} className="text-primary">
            remove
          </button>
        </div>
      </div>
      <div className="text-center">
        <button onClick={handleIncrement}>
          <i className="fas fa-angle-up fa-2x text-primary"></i>
        </button>
        <p className="text-primary h3">{item.amount}</p>
        <button onClick={handleDecrement}>
          <i className="fas fa-angle-down fa-2x text-primary"></i>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
