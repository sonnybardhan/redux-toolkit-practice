import CartContainer from '../components/CartContainer';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  calculateTotal,
  calculateTotalAmount,
} from './features/cart/cartSlice';
function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
    dispatch(calculateTotalAmount());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
