import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { pokeApiSlice } from '../features/pokeApiSlice'
import teamSelectReducer from '../features/selection/teamSelectSlice'

export const store = configureStore({
    reducer: {
        teamSelect: teamSelectReducer,
        [pokeApiSlice.reducerPath]: pokeApiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(pokeApiSlice.middleware)
    }
})

//taking store's dispatch function and asking redux what kinda type it is
//exporting the type of the func as something we can use
export type AppDispatch = typeof store.dispatch;
//using typescript inference so we dont have to do the work to declare this ourselves
export type RootState = ReturnType<typeof store.getState>;