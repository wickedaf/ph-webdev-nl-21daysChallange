import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/CounterSlice";
import logger from "./middlewares/logger";

const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware().concat(logger)},
    // devTools: false,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
