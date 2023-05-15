import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items,action.payload]
    },
    removeToCart: (state, action) => {
      const ind = state.items.findIndex((item)=>item.id === action.payload.id)
      let newBasket = [...state.items]
      if(ind >= 0){
        newBasket.splice(ind,1)
      }
      state.items = newBasket
    },
  }
})

export const { addToCart, removeToCart} = basketSlice.actions
export const selectBasjetitem = (state)=>state.basket.items
export const selectBasjetitemwithid = (state,id)=>state?.basket?.items.filter((itm)=>itm.id===id)
export const itemTotal = (state)=>state?.basket?.items.reduce((total,item)=>total+=item.dish_price,0)
export default basketSlice.reducer