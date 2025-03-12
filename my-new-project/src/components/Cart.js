import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (propertyId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: propertyId });
  };

  const totalCost = cart.reduce((acc, item) => acc + item.property.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item) => (
        <div key={item.property.id} className="cart-item">
          <h3>{item.property.title}</h3>
          <p>{item.dates}</p>
          <p>${item.property.price}</p>
          <button onClick={() => handleRemove(item.property.id)}>Remove</button>
        </div>
      ))}
      <h3>Total Cost: ${totalCost}</h3>
    </div>
  );
};

export default Cart;
