import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restaurant:{
    id:null,
    title:null,
    rating:null,
    address:null,
    short_desc:null,
    dishes:null,
  }
}

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setRestaurant:(state,action)=>{
        state.restaurant = action.payload
    }
  }
})

export const { setRestaurant} = restaurantSlice.actions
export const selectRestaurant = (state)=>state.restaurants.restaurant
export default restaurantSlice.reducer