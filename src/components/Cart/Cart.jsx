import React, { useContext, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartProduct from "../CartProduct/CartProduct";
import "./Cart.css";
import Venta from "../Venta/Venta";

const Cart = () => {
  const { productsCart, clearCart } = useContext(cartContext);
  const [buyFinalized, setBuyFinalized] = useState(false);

  const finishBuy = () => {
    // Simulamos un tiempo de carga de 3 segundos antes de mostrar el gif
    setTimeout(() => {
      setBuyFinalized(true);
    }, 0);
  };

  // Calculamos el total sin descuento
  const totalSinDescuento = Math.round(
    productsCart.reduce((total, product) => {
      return total + product.precio * product.cantidad;
    }, 0)
  );

  // Calculamos el total con descuento
  const totalConDescuento = Math.round(
    productsCart.reduce((total, product) => {
      const tieneOferta = product.oferta !== undefined && product.oferta > 0;

      // Si hay oferta, aplicamos el descuento correctamente
      const precioConDescuento = tieneOferta
        ? (product.precio - (product.precio - product.oferta)) // Aplicamos el descuento
        : product.precio;

      // Sumamos el precio con descuento multiplicado por la cantidad de productos
      return total + precioConDescuento * product.cantidad;
    }, 0)
  );

  // Verificamos si hay productos con descuento
  const tieneDescuento = productsCart.some(product => product.oferta > 0);

  if (productsCart.length === 0) {
    return (
      <div className="container">
        <div className="titulo-text">
          Tu Carrito está vacío
          <Link to="/">
            <button className="btn btn-dark">Iniciar la Compra</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2>Tu Carrito de Compras: </h2>
      <div className="container-product">
        <div className="row">
          {productsCart.map((product) => {
            const tieneOferta = product.oferta !== undefined && product.oferta > 0;
            return (
              <div
                key={product.id}
                className={`cart-product ${tieneOferta ? "cart-product-oferta" : ""}`}
              >
                <CartProduct key={product.id} product={product} />
                <p className="cart-product-precio">
                  {tieneOferta ? (
                    <>
                    </> 
                  ) : null}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mostrar ambos precios si hay productos con descuento, de lo contrario solo el total */}
        <div className="cart-element">
          {tieneDescuento ? (
            <>
              <p className="total-text sinDescuento">Total sin descuento: ${totalSinDescuento}</p>
              <p className="total-text descuento">Total con descuento: ${totalConDescuento}</p>
            </>
          ) : (
            <p className="total-text">Total: ${totalSinDescuento}</p>
          )}
        </div>

        <div className="cart-element">
          <button onClick={() => clearCart()} className="btn btn-dark">
            Vaciar Carrito
          </button>
        </div>
        <div>
          {buyFinalized ? (
            <>
              <Venta />
            </>
          ) : (
            <div className="cart-element">
              <button onClick={finishBuy} className="btn btn-dark">
                Finalizar la Compra
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

