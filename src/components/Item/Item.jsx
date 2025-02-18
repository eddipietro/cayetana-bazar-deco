import React from "react";
import { Link } from "react-router-dom";
import { FaTag } from "react-icons/fa"; // Importamos un ícono de etiqueta
import "./Item.css";

const Item = ({ product }) => {
  const tieneOferta = product.oferta !== undefined && product.oferta < product.precio;

  return (
    <div className={`item ${tieneOferta ? "item-oferta" : ""}`}>
      {tieneOferta && <span className="etiqueta-oferta"><FaTag /> Oferta</span>}
      <img src={product.img} className="item-img" alt={product.nombre} />
      <div className="item-body">
        <h5 className="item-title">{product.nombre}</h5>
        <p className="item-precio">
          {tieneOferta ? (
            <>
              <span className="precio-original">${product.precio}</span> 
              <span className="precio-oferta"> ${product.oferta}</span>
            </>
          ) : (
            <>$ <span>{product.precio}</span></>
          )}
        </p>
        <p className="item-stock">
          Stock: <span>{product.stock}</span>
        </p>
        <div className="item-button">
          {product.stock === 0 ? (
            <div>
              <p className="item-sinstock">Producto sin Stock</p>
            </div>
          ) : (
            <div>
              <Link to={`/detail/${product.id}`}>
                <button className="btn btn-dark">Ver Detalle</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
