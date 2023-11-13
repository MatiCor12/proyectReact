import React from 'react';
import "./item.css"
import { Link } from 'react-router-dom';

const Item = ({product}) => {
    return (
        <>
        <div>
            <Link to={`/item/${product.id}`}>
                <h1>{product.nombre}</h1>
            </Link>
            <img src="" alt=""/>
        </div>
        </>
    )
}

export default Item;