import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import resumeReducer from "../features/resumeSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["resume"],
};

const rootReducer = combineReducers({
  resume: resumeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
