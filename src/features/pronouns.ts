import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import wretch from 'wretch';
import { Pronouns } from '@prisma/client';
import { LoadingKey, LoadingStatusWrapper } from './loading-statuses';

export type PronounsState = Pronouns[];

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchPronouns = createAsyncThunk(
    'pronouns/fetchPronouns',
    LoadingStatusWrapper(LoadingKey.Pronouns, async () => {
        return await wretch('/api/pronouns').get().json();
    })
);

export const pronounsSlice = createSlice({
    name: 'pronouns',
    initialState: null,
    reducers: {
        updatePronouns: (state, action: PayloadAction<PronounsState>) => action.payload
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPronouns.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const { updatePronouns } = pronounsSlice.actions;

export const selectPronouns = (state: RootState) => state.pronouns;

export const pronounsReducer = pronounsSlice.reducer;