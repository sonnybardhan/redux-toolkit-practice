import React from 'react';
import { openModal, closeModal } from '../src/features/modal/modalSlice';
import { clearCart } from '../src/features/cart/cartSlice';
import { useDispatch } from 'react-redux';
const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove all items from your shopping cart?</h4>
        <div className='btn-container'>
          <button
            type='submit'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type='submit'
            className='btn clear-btn'
            onClick={() => dispatch(closeModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
