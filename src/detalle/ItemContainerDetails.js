import React from 'react'
import { useEffect, useState,useContext } from 'react'; //importo useContex: es para usar el context
import { CartContext } from '../Context/CartContex'
import { useParams } from 'react-router-dom';



function ItemDetailsContainer() {


    const [productoIndividual , setProducto] = useState({});
    const  {idcategoria} = useParams();
    const [ count, setCount] = useState(1);


    const { cartList, agregarProducto } =  useContext(CartContext) //le paso  como parametro CartContex: que es el contexto   que cree
  





      function onAdd(cant) {
       setCount(cant)
   if(cartList <=1){
    agregarProducto( {...productoIndividual, cantidad: cant} )
    //llamo la funcion y le paso como paraetro el producto , mas la cantidad
  //llama al Objeto:
 
   }else{
     
   }


 
     

    }
     console.log(cartList)
 
   

  // hago la promesa para  obtener  la id de la url 


  
   
   useEffect(()=>{

    const getDatos =  async () =>{
     const data = await  fetch(`https://jsonplaceholder.typicode.com/todos/${idcategoria}`)
      const users = await  data.json()
     setProducto(users)
      }

    getDatos();

    }, [idcategoria])


    //console.log(productoIndividual)



    return (
        <>
               <p style={{fontSize: 20, color: "black"}}>  Lista </p>
    
        

            <div>
 
              <h3>{productoIndividual.title}</h3>
                <button onClick={()=>onAdd(3)}>AGREGAR AL CARRITO</button>
            </div>
            
            
     
     
        </>
    )
}

export default ItemDetailsContainer



