import {
    configureStore,
    combineReducers,
  } from '@reduxjs/toolkit'
import { navLinkReducer } from './slices/link'
import { authReducer } from './slices/auth'
import { profileReducer } from './slices/profile'
import refreshTokenMiddleware from './refreshTokenMiddleware'

const rootReducer = combineReducers({ navLinkReducer, authReducer, profileReducer})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(refreshTokenMiddleware),
    })
}
