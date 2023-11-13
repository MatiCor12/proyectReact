import React, {useState} from 'react';

const ItemCount = ({initial,stock,onAdd}) => {
    const [count,setCount] = useState(initial)

    const increment = () =>{
        if(count < stock) {
            setCount(count+1)
        }
    }

    const decrement = () =>{
        if(count > 1){
            setCount(count-1)
        }
    }

    return (
        <div>
            <button onClick={increment}>Agregarlo</button>
            <span>{count}</span>
            <button onClick={decrement}>Sacarlo</button>
            <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;