import React from "react";
import { MinusIcon, PlusIcon } from "../HeroIcons";
import { removeItem } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { img, id, title, price, amount } = props;
  return (
    <article className="cart-item">
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}円</h4>
        <button className="remove-btn">削除</button>
        <button className="amount-btn">
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => dispatch(removeItem(id))}>
          <MinusIcon />
        </button>
      </div>
    </article>
  );
};

export default CartItem;