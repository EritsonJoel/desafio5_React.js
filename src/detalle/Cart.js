import React from 'react'

import {useContext} from 'react' //importo para usar Context
import { CartContext } from '../Context/CartContex' 

function Cart() {

    const { cartList, vaciarCarrito} = useContext(CartContext) //le agrego el contexto que cree
    return (
        <div>
            <h2>soy cart</h2>

            {cartList.map( prod => <li key={prod.id}>{prod.title}</li>)}
            <button onClick={vaciarCarrito}>vaciar Carrito</button>
        </div>
    )
}

export default Cart
