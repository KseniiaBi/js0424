'use client'

import Image from "next/image"
import { products } from "../productsData";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {addedToCart} from '../lib/reducer'

export default function Catalog(){
	const dispatch = useAppDispatch();
    return(
        <>
            <h1>Catalog</h1>
            <p>Now in cart {useAppSelector(state => state.totalCount)} elements</p>
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
                           <button onClick={()=>dispatch(addedToCart(id))}>Add to cart</button>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}