import { useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useSelector } from 'react-redux';

const HeaderCartButton = (props) => {
  const [btnIsHighLighted, setBtnIsHighlighted] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  // calculate the total number of items in cart
  const numberOfCartItems = cartItems.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  // btn css class
  const btnClasses = `${classes.button} ${
    btnIsHighLighted ? classes.bump : ''
  }`;

  // when add item into cart, bump the button for 300ms
  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        {/* svg icon */}
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
