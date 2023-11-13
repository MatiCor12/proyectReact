import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {
    const onAdd = (quantity) => {
        alert(quantity)
    }
    return (
        <div>
            <h2>{producto.nombre}</h2>
            <img src="" alt={producto.nombre}/>
            <p>Categoria: {producto.categoria}</p>
            <p>Descripcion:{producto.descripcion}</p>
            <p>Stock:{producto.stock}</p>
            <p>Precio: ${producto.precio}</p>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail;

