import {combineReducers,createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import { composeWithDevTools } from 'redux-devtools-extension';



import UserReducer from './reducer/UserReducer'


const rootReducer=combineReducers({
        UserRed:UserReducer
})

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


    export const store = createStore(persistedReducer,composeWithDevTools())
    export const persistor = persistStore(store)
    