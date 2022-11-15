import { AsyncThunkPayloadCreator, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum LoadingKey {
    Pronouns,
    User
}

export enum LoadingStatus {
    LOADING,
    COMPLETE,
    ERROR
}

export type LoadingStatusesState = Record<LoadingKey, LoadingStatus>;

export const loadingStatusesSlice = createSlice({
    name: 'loadingStatuses',
    initialState: {
        [LoadingKey.Pronouns]: LoadingStatus.LOADING,
        [LoadingKey.User]: LoadingStatus.LOADING
    },
    reducers: {
        setLoadingStatuses: (state, action: PayloadAction<Partial<LoadingStatusesState>>) => {
            return {
                ...state,
                ...action.payload
            };
        }
    }
});

export const { setLoadingStatuses } = loadingStatusesSlice.actions;

export const selectLoadingStatuses = (state: RootState) => state.loadingStatuses;
export const selectLoadingStatus = (key: LoadingKey) => (state: RootState) => selectLoadingStatuses(state)[key];
export const isLoading = (key: LoadingKey) => (state: RootState) => selectLoadingStatus(key)(state) === LoadingStatus.LOADING;
export const areAnyLoading = (keys: LoadingKey[]) => (state: RootState) => keys.some((key) => isLoading(key)(state));

export const loadingStatusesReducer = loadingStatusesSlice.reducer;

export function LoadingStatusWrapper<Returned, ThunkArg = void>(key: LoadingKey, thunk: AsyncThunkPayloadCreator<Returned, ThunkArg, unknown>) {
    return (args: ThunkArg, thunkAPI) => {
        thunkAPI.dispatch(setLoadingStatuses({
            [key]: LoadingStatus.LOADING
        }));

        try {
            const response = thunk(args, thunkAPI);

            thunkAPI.dispatch(setLoadingStatuses({
                [key]: LoadingStatus.COMPLETE
            }));

            return response;
        } catch {
            thunkAPI.dispatch(setLoadingStatuses({
                [key]: LoadingStatus.ERROR
            }));
        }
    }
}