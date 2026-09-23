import {configureStore} from '@reduxjs/toolkit'
import searchReducers from './feature/seacrchSlice'
import collectionReducers from './feature/collectionSlice'

export const store = configureStore({
    reducer: {
        search : searchReducers,
        collection : collectionReducers
    }
})