import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store';
const MealItem = (props) => {
  // const cartCtx = CartContext;
  const price = `$${props.price.toFixed(2)}`; // make price two decimal places
  const dispatch = useDispatch();

  const addToCartHandler = (amount) => {
    // cartCtx.addItem({
    //   id: props.id,
    //   name: props.name,
    //   amount: amount,
    //   price: props.price,
    // });
    dispatch(
      cartActions.addCartItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      })
    );
  };

  return (
    <li className={classes.meal}>
      {/* details of the item */}
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* manage the amount of the item */}
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
