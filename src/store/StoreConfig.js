import {combineReducers,createStore,applyMiddleware} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import thunk from 'redux-thunk'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import { composeWithDevTools } from 'redux-devtools-extension';
import crossBrowserListener from './reduxpersist-listener'


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


    export const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)))
    export const persistor = persistStore(store)
    window.addEventListener('storage', crossBrowserListener(store, persistConfig));
    