import Reactotron from '~/ReactotronConfig'

import { createStore, Store } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer, { RootState } from './rootReducer'

// Config for redux persist.
const persistConfig = {
  key: 'root',
  storage,
}

// Create the persister reducer with root reducer.
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create the store with Reactotron.
const store: Store<RootState> = Reactotron.createEnhancer
  ? createStore(persistedReducer, Reactotron.createEnhancer())
  : createStore(persistedReducer)

// Export persistor.
export const persistor = persistStore(store)

// Export store.
export default store
