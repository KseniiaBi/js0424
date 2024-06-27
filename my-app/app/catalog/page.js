'use client'

import Image from "next/image"
import { useState } from "react"

const products = [
	{
		"name": "Cup",
		"price": 199,
		"image": "4547315873913_1260.jpg",
		"id": "123"
	},
	{
		"name": "Plate",
		"price": 299,
		"image": "png-transparent-white-plate-white-simple-plate-thumbnail.png",
		"id": "425"
	},
	{
		"name": "Spoon",
		"price": 99,
		"image": "frokostske_2000x2000.webp",
		"id": "917"
	},
	{
		"name": "Knife",
		"price": 319,
		"image": "dq74s.jpg",
		"id": "484"
	},
	{
		"name": "Cuttlery set",
		"price": 399,
		"image": "4844523_R_Z001A.jpeg",
		"id": "57"
	},
	{
		"name": "Runner",
		"price": 399,
		"image": "81jRHqNi3aL.jpg",
		"id": "115"
	},
	{
		"name": "Fork",
		"price": 99,
		"image": "personalised-metal-fork.jpg",
		"id": "309"
	}
]


export default function Catalog(){
    const [cart, addItem] = useState([]);

    function addToCart(id){
        let item;
        products.forEach(product => {
            if(product.id === id){
                item = product;
            }
        });

        addItem([...cart, item]);
    }

    return(
        <>
            <h1>Catalog</h1>
            <p>Now in cart {cart.length} elements</p>
            <div className="shop">
            {
                products.map(({id, name, image, price}) =>{
                    return(
                        <div key={id} className="product">
                          <Image
                            src={`/images/${image}`}
                            alt={name}
                            width={200}
                            height={200}
                           /> 
                           <h4>{name}</h4>
                           <h3>{price}</h3>
                           <button onClick={()=>addToCart(id)}>Add to cart</button>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}