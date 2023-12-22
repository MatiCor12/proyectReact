import React,{ useState, useEffect, useContext} from 'react';
import { collection,addDoc,updateDoc,doc,getDoc, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../contexto/CartContext';
import { useForm } from "react-hook-form";

const Checkout = () => {
    
    const [pedidoId,setPedidoId] = useState("");
    const { cart, totalPrice, clearCart } = useCartContext();

    const { register, handleSubmit } = useForm();
    const db = getFirestore()

    const comprar = (data) => {
        const pedido ={
            cliente : data,
            productos: cart,
            total: totalPrice()
        }
        
        const pedidosRef =  collection(db, "productos");
        addDoc(pedidosRef,pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            clearCart();
        })
    }

    if(pedidoId) {
        return (
            <div>
                <h1>Muchas gracias por tu compra</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Finalizar compra</h1>
            <form onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")}/>
                <input type="email" placeholder="Ingresa tu email" {...register("email")}/>
                <input type="phone" placeholder="Ingresa tu telefono" {...register("telefono")}/>

                <button type="submit">Comprar</button>
            </form>
        </div>
    )
};

export default Checkout;