import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
  const cart = useSelector(state => state.cart);

  const totalCost = cart.reduce((acc, item) => acc + item.property.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-details">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <div key={item.property.id}>
            <h4>{item.property.title}</h4>
            <p>{item.dates}</p>
            <p>${item.property.price}</p>
          </div>
        ))}
        <h3>Total Cost: ${totalCost}</h3>
        {/* Implement payment details form here */}
      </div>
    </div>
  );
};

export default Checkout;
