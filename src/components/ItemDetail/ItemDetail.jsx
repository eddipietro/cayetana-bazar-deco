import React, { useContext, useState } from "react";
import "./itemDetail.css";
import { cartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [prodAdded, setProdAdded] = useState(false);
  const { addCartProduct } = useContext(cartContext);

  const onAdd = (amount) => {
    addCartProduct({ ...product, cantidad: amount });
    // Simulamos un tiempo de carga de 3 segundos antes de mostrar el gif
    setTimeout(() => {
      setProdAdded(true);
    }, 0);
  };

  return (
    <div className="detail">
      <div>
        <img src={product.img} className="detail-img" alt={product.nombre} />
      </div>
      <div className="detail-product">
        <h5 className="detail-title">{product.nombre}</h5>
        <p className="detail-text">{product.descripcion}</p>
        <p className="detail-precio">
          $ <span>{product.precio}</span>
        </p>
        <p className="detail-stock">
          Stock: <span>{product.stock}</span>
        </p>
        <div>
          {prodAdded ? (
            <>
              {/* <img src="osito-matero.gif" className="gif" alt="Cargando" /> */}
              <Link to="/cart">
                <button className="btn btn-dark">Ver Carrito</button>
              </Link>
            </>
          ) : (
            <ItemCount stock={product.stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;