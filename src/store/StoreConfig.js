import {combineReducers,createStore,applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import thunk from 'redux-thunk'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import { composeWithDevTools } from 'redux-devtools-extension';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'


import UserReducer from './reducer/UserReducer'


const rootReducer=combineReducers({
        UserRed:UserReducer
})

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


    export const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)))
    export const persistor = persistStore(store)
    