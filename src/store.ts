import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { EqualityFn, useDispatch, useSelector } from 'react-redux';
import { loadingStatusesReducer } from './features/loading-statuses';
import { pronounsReducer } from './features/pronouns';
import { userReducer } from './features/user';

export const store = configureStore({
    reducer: {
        user: userReducer,
        loadingStatuses: loadingStatusesReducer,
        pronouns: pronounsReducer
    }
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T, equalityFn?: EqualityFn<T> | undefined) => useSelector<RootState, T>(selector, equalityFn);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;