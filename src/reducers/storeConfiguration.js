
import storage from "redux-persist/lib/storage"

import { persistReducer, persistStore } from 'redux-persist'
import allReducer from './index'
import allReducers from "./index"
import { createStore } from "@reduxjs/toolkit"

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {store, persistor}