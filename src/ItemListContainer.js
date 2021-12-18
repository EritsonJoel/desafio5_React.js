
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ItemListContainer() {
   

    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => setPokemons(data));
    }, []);

//el return del <p>{pokemon.name}</p> se usa cuando uso lleves, sino no hace falta el return y lo pongo todo en la misma linea
    return (
        <div>


          {pokemons.map( poke =><div key={poke.id} className="card w-50 mt-5">

          <div className="card-header">
           {poke.title}
     </div>
     <div className="card-body">
     {}
        
     </div>
    <div  className="card-footer">
     
     <Link to={`/detalle/${poke.id}`}>
      <button className="btn btn-outline-primary btn-block">
        DETALLE PRODUCTO
      </button>
      </Link>
    
    </div> 


          </div>)}
     
    </div>
    );
}

export default ItemListContainer
