import { Tuple, combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: () => new Tuple(thunk),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
