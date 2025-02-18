import React, { useContext, useState } from "react";
import "./itemDetail.css";
import { cartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { FaTag } from "react-icons/fa"; // Importamos el ícono de la etiqueta de oferta

const ItemDetail = ({ product }) => {
  const [prodAdded, setProdAdded] = useState(false);
  const { addCartProduct } = useContext(cartContext);

  const onAdd = (amount) => {
    addCartProduct({ ...product, cantidad: amount });
    setTimeout(() => {
      setProdAdded(true);
    }, 0);
  };

  const tieneOferta = product.oferta !== undefined && product.oferta < product.precio;

  return (
    <div className="detail">
      <div>
        <img src={product.img} className="detail-img" alt={product.nombre} />
      </div>
      <div className="detail-product">
        <h5 className="detail-title">{product.nombre}</h5>
        <p className="detail-text">{product.descripcion}</p>
        
        {/* Mostrar precio y oferta si aplica */}
        <p className="detail-precio">
          {tieneOferta ? (
            <>
              <span className="precio-original">${product.precio}</span>
              <span className="precio-oferta">${product.oferta}</span>
            </>
          ) : (
            <>$ <span>{product.precio}</span></>
          )}
        </p>

        {/* Mostrar stock */}
        <p className="detail-stock">
          Stock: <span>{product.stock}</span>
        </p>

        {/* Mostrar el ícono de oferta si aplica */}
        {tieneOferta && <div className="etiqueta-oferta"><FaTag /> Oferta</div>}
        
        <div>
          {prodAdded ? (
            <>
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
