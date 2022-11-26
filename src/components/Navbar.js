import React from "react";

const Navbar = () => {
  return (
    <div className="nav-center">
      <h3>Redux Shopping</h3>
      <div className="nav-container">
        ロゴ
        <div className="amount-container">
          <p className="total-amount">0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
