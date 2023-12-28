import React from 'react';
import "./item.css"
import { Link } from 'react-router-dom';
import "./item.css";

const Item = ({product}) => {
    return (
        <>
        <div className='card'>
            <div className='productosItem'>
            <Link to={`/item/${product.id}`}>
                <h2>{product.nombre}</h2>
            </Link>
            <img src={product.img} alt={product.nombre}/>
        </div>
        </div>
        </>
    )
}

export default Item;