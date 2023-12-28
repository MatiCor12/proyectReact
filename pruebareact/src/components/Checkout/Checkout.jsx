import React,{ useState, useEffect, useContext} from 'react';
import { collection,addDoc, getFirestore } from 'firebase/firestore';
import { useCartContext } from '../../contexto/CartContext';
import { useForm } from "react-hook-form";
import "./checkout.css"

const Checkout = () => {

    const [pedidoId,setPedidoId] = useState("");
    const { cart, totalPrice, clearCart } = useCartContext();

    const { register, formState: { errors }, handleSubmit } = useForm();
    const db = getFirestore()

    const comprar = (data) => {
        const pedido ={
            cliente : data,
            productos: cart,
            total: totalPrice()
        }

        const pedidosRef =  collection(db, "pedidos");
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
        <div className='container'>
            <h1>Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre", {required: true, maxLength: 10})}/>
                {errors.nombre?.type === "required" && <p>El campo nombre es requerido</p>}
                {errors.nombre?.type === "maxLength" && <p>El campo nombre debe tener menos de 10 caracteres</p>}
                <input type="text" placeholder="Ingresa tu apellido" {...register("apellido", {required: true, maxLength: 10})}/>
                {errors.apellido?.type === "required" && <p>El campo apellido es requerido</p>}
                {errors.apellido?.type === "maxLength" && <p>El campo nombre debe tener menos de 10 caracteres</p>}
                <input type="text" placeholder="Ingresa tu dirección" {...register("direccion", {required: true})}/>
                {errors.direccion?.type === "required" && <p>El campo direccion es requerido</p>}
                <input type="email" placeholder="Ingresa tu email" {...register("email", {pattern: /\S+@\S+\.\S+/})}/>
                {errors.email?.type === "pattern" && <p>El formato del email es incorrecto</p>}
                <input type="email" placeholder="Ingresa tu email de nuevo" {...register("emaildenuevo", {pattern: /\S+@\S+\.\S+/})}/>
                {errors.email?.type === "pattern" && <p>El formato del email es incorrecto</p>}
                <input type="phone" placeholder="Ingresa tu telefono" {...register("telefono", {required: true})}/>
                {errors.phone?.type === "required" && <p>El campo telefono es requerido</p>}

                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    )
};

export default Checkout;