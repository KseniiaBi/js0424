'use client';
import Image from "next/image"
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {increment, decrement, removedFromCart} from '../lib/reducer'

export default function Cart(){
    const cart = useAppSelector(state => state.cart);
    const cartTotal = useAppSelector(state => state.totalSum);
    const dispatch = useAppDispatch();
    return(
        <div className="cart">
            {
                cart.map(({id, name, image, price, count}) =>{
                    return(
                        <div key={id} className="product">
                          <Image
                            src={`/images/${image}`}
                            alt={name}
                            width={200}
                            height={200}
                           /> 
                           <h4>{name}</h4>
                           <p>{price}</p>
                           <div className="product_counter">
                            <button onClick={()=>dispatch(decrement(id))}>-</button>
                            <span className="product_count">{count}</span>
                            <button onClick={()=>dispatch(increment(id))}>+</button>
                            </div>
                           <button onClick={()=>dispatch(removedFromCart(id))}>Remove from cart</button>

                           <h3>{count*price} UAH</h3>
                        </div>
                    )
                })
            }
            <div className="totalSum">{cartTotal} UAH</div>
        </div>
    )
}