import CartContainer from '../components/CartContainer';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  calculateTotal,
  calculateTotalAmount,
  getCartItems,
} from './features/cart/cartSlice';

import Modal from '../components/Modal';
function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotal());
    dispatch(calculateTotalAmount());
  }, [cartItems]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>loading ...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen ? <Modal /> : null}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
