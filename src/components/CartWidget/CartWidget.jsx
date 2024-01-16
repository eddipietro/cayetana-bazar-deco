import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "./CartWidget.css";

const CartWidget = () => {
  const { qtyProducts } = useContext(cartContext);

  return (
    <div className="cart">
      <Link to="/cart">
        <img className="btn-carrito" src="https://i.postimg.cc/52DDcmD5/ico-carrito.png" alt="" />
      </Link>
      <div>
        {qtyProducts > 0 && <div className="cart-cantidad">{qtyProducts}</div>}
      </div>
    </div>
  );
};

export default CartWidget;
