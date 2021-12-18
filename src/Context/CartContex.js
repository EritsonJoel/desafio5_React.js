import { useState, createContext, useContext } from 'react' //createContext: lo importamos cada vez que   usaemos un contexto

//contexto: nos sirve para guardadr estados y funciones globales
//vamos a guardar listas  y con context , podemos usar LAS Listas donde quedramos ,
//sin necesidad de usar (props)

   export  const CartContext= createContext([])  //creo la variable en donde se va a guardar el contexto.CREO EL CONTEXTO
   //export : es para exportarlo y asi usarlo en los componentes.
 
 //USO EL CONTEXTO: 


function CartContextProvider({ children }) {  //creo  la funcion para traer el Provider osea el Proveedor :el que provee los estados
    //y funcines , en este caso del componente App.js
    //childrem: es una Props : que me retorna los componentes hijos, envuelve a los componente hijos en un array

    const [cartList, setCartList] = useState([]) //creo un estado

    
    const agregarProducto =(item)=>{ //esta funcion me guardará el producto, en u array
      
       
            setCartList([ ...cartList, item]) //me guardaa todos los productos que le doy agregar .EN UN ARRAY 
            //cartList : es el producto que ya se agrego y item: es el nuevo producto al que se le esta dando click, asi
            //todos se va guardando en un array
       
        
    }

     
    const vaciarCarrito=()=>{//esat funcion me borrará todo el listado, el array
        setCartList([])
    }


    // createContex: paea crear el contexto.
    //useContext: para usar el Contexto.

    return( 
        <CartContext.Provider value={{ ///le inyecto al contexto con la pro VALUE = le inyecto, los estados y funcionesque quiero que sena
            // Globales./ de esos estados se podran usaran ,cada ves que se llamen por  UseContext  
            cartList, 
            agregarProducto,
            vaciarCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider