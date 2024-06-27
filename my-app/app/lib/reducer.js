import { products } from "../productsData";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalSum: 0,
        totalCount: 0
    },
    reducers: {
        addedToCart(state, action){
            const id = action.payload;
            let indexInCart = -1;
            let justAdded;

            products.forEach((product) => {
                if(product.id === id){
                    justAdded = product; 
                }
            });
            state.cart.forEach((item,index) => {
                if(item.id === id){
                    indexInCart = index; 
                }
            });
            if(indexInCart >= 0){
                state.cart[indexInCart].count += 1; 
            }
            else{
                state.cart.push({
                    id: justAdded.id,
                    image: justAdded.image,
                    price: justAdded.price,
                    name: justAdded.name, 
                    count: 1});
            }
            state.totalCount += 1;
            state.totalSum += justAdded.price;
        },
        increment(state, action){
            const id = action.payload;
            state.cart.forEach((item, index) => {
                if(item.id === id){
                    state.cart[index].count += 1;
                    state.totalSum += item.price;
                }
            });
            state.totalCount += 1;
        },
        decrement(state, action){
            const id = action.payload;
            state.cart.forEach((item,index) => {
                if(item.id === id){
                    if(item.count === 1){
                        state.totalCount -= item.count;
                        state.totalSum -= item.price*item.count;
                        state.cart.splice(index, 1);
                    }
                    else{
                        state.cart[index].count -= 1;
                        state.totalSum -= item.price;
                    }
                    
                }
            });
            state.totalCount -= 1;
        },
        removedFromCart(state, action){
            const id = action.payload;
            state.cart.forEach((item,index) => {
                if(item.id === id){
                    state.totalCount -= item.count;
                    state.totalSum -= item.price*item.count;
                    state.cart.splice(index, 1);
                }
            });
            
        }
    }
});


export const {addedToCart, increment, decrement, removedFromCart} = cartSlice.actions;

export default cartSlice.reducer;