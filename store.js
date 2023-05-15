import { configureStore } from '@reduxjs/toolkit'
import basketSlice from './features/basketSlice'
import restaurantSlice from './features/restaurantSlice'

export default configureStore({
  reducer: {
    basket:basketSlice,
    restaurant:restaurantSlice
  }
})