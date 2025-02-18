import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { FaTag } from "react-icons/fa"; // Para agregar el ícono de oferta
import "./CartProduct.css";

const CartProduct = ({ product }) => {
  const { deleteCartProduct } = useContext(cartContext);

  // Determinamos si el producto tiene oferta válida
  const tieneOferta = product.oferta !== undefined && product.oferta < product.precio;

  return (
    <div className={`product ${tieneOferta ? "product-oferta" : ""}`}>
      <div>
        <img src={product.img} width="150px" alt={product.nombre} />
      </div>
      <p className="product-text">
        <label className="product-label">Producto: </label>
        {product.nombre}
      </p>
      <p className="product-text">
        <label className="product-label">Cantidad:</label>
        {product.cantidad}
      </p>

      {/* Mostrar el precio con descuento si existe */}
      <p className="product-text">
        <label className="product-label">Precio: $</label>
        {tieneOferta ? (
          <>
            <span className="precio-original">{product.precio}</span>
            <span className="precio-oferta"> ${product.oferta}</span>
          </>
        ) : (
          <span>{product.precio}</span>
        )}
      </p>

      {/* Mostrar el precio con descuento */}
      {tieneOferta && (
        <p className="product-text oferta">
          <FaTag /> <span>Oferta</span>
        </p>
      )}

      <p className="product-text">
        <button
          onClick={() => deleteCartProduct(product.id)}
          className="btn btn-dark"
        >
          X
        </button>
      </p>
    </div>
  );
};

export default CartProduct;
