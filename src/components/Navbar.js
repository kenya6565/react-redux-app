import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../HeroIcons";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <div className="nav-center">
      <h3>Redux Shopping</h3>
      <div className="nav-container">
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
