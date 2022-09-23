import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { calculateTotal, clearCart } from '../src/features/cart/cartSlice';
import { openModal } from '../src/features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  // console.log(amount);

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>Your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  const items = cartItems.map((item) => <CartItem item={item} key={item.id} />);

  return (
    <section className='cart'>
      <header>
        <h2>Your bag</h2>
      </header>
      <div>{items}</div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total: <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;

/**
 * 
 * id(pin):"rec1JZlfCIBOPdcT2"
title(pin):"Samsung Galaxy S8"
price(pin):"399.99"
img(pin):"https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png"
amount(pin):1
 */
