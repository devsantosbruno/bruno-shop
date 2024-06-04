import { toast } from 'react-toastify';

export const addCartToast = () =>
  toast.success('Product added to cart', {
    autoClose: 1500,
    pauseOnHover: false,
    closeOnClick: true,
    theme: 'dark',
  });

export const removeCartToast = () =>
  toast.success('Product removed from cart', {
    autoClose: 1500,
    pauseOnHover: false,
    closeOnClick: true,
    theme: 'dark',
  });

export const tryAgainToast = () =>
  toast.error('An error occurred, please try again', {
    autoClose: 1500,
    pauseOnHover: false,
    closeOnClick: true,
    theme: 'dark',
  });
