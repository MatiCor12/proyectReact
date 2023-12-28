import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import { useCartContext } from '../../contexto/CartContext';
import "./itemDetal.css"

const ItemDetail = ({producto}) => {
    const {addProduct} = useCartContext();
    const [quantity,setQuantity] = useState (0)
    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addProduct(producto, cantidad)
    }
    return (
        <div className='tituloDetail'>
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre}/>
            <p>Descripcion:{producto.descripcion}</p>
            <p>Stock:{producto.stock}</p>
            <p>Precio: ${producto.precio}</p>
            {quantity == 0 ?
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
            :
            <Link to={"/Cart"}>Ver carrito</Link>
            }
        </div>
    )
}

export default ItemDetail;

