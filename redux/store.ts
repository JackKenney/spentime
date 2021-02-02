import { createStore } from 'redux'

// persister
import { persistReducer, persistStore } from 'redux-persist'
// tyeps may be unsupported for this version of react-redux (5.1.1),
// but is available onf 5.11.0-alpha
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// likely the default is AsyncStorage
import storage from 'redux-persist/lib/storage'
// local redux
import reducer from './reducer'

const persistConfig = {
    key: 'root', // accessibilityNeeds
    stateReconciler: autoMergeLevel2,
    storage,
}

const pReducer = persistReducer(persistConfig, reducer)

export const store = createStore(pReducer)
export const persistor = persistStore(store)
