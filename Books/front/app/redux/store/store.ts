"use client";

import { createStore, combineReducers } from "redux";
import { bookReducer } from "../reducers/bookReducer";

const rootReducer = combineReducers({
  book: bookReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
