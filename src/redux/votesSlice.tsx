import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {voteType} from '../types';

interface CommentsState {
    isSuccess: boolean;
    isFetching: boolean;
    isError: boolean;
    errorMessage: string;
    votes: any;
}

const initialState: CommentsState = {
    isSuccess: false,
    isFetching: false,
    isError: false,
    errorMessage: '',
    votes: [],
};

export const fetchVotes = createAsyncThunk(
    'votes/fetchVotes',
    async (values, thunkAPI) => {
        try {
                const votes = await axios.get<voteType[]>(`https://api.thecatapi.com/v1/votes`, {
                    headers: {
                        'x-api-key': 'DEMO-API-KEY',
                    }
                });

            const data = await votes.data;

            if (votes.status === 200) {
                return data;
            }
            return thunkAPI.rejectWithValue({ ...data });
        } catch (e: any) {
            return thunkAPI.rejectWithValue({ ...e.response.data });
        }
    },
);

export const fetchOneVote = createAsyncThunk(
    'votes/fetchOneVote',
    async (voteId: string | undefined, thunkAPI) => {
        try {
            const vote = await axios.get<voteType>(`https://api.thecatapi.com/v1/votes/${voteId}`, {
                headers: {
                    'x-api-key': 'DEMO-API-KEY',
                }
            });

            const data = await vote.data;

            if (vote.status === 200) {
                return data;
            }
            return thunkAPI.rejectWithValue({ ...data });
        } catch (e: any) {
            return thunkAPI.rejectWithValue({ ...e.response.data });
        }
    },
);

export const votesSlice = createSlice({
    name: 'votes',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchVotes.fulfilled.toString()]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.votes = payload;
        },
        [fetchVotes.pending.toString()]: (state) => {
            state.isFetching = true;
        },
        [fetchVotes.rejected.toString()]: (state) => {
            state.isFetching = false;
            state.isSuccess = false;
        },
        [fetchOneVote.fulfilled.toString()]: (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
            state.votes = payload;
        },
        [fetchOneVote.pending.toString()]: (state) => {
            state.isFetching = true;
        },
        [fetchOneVote.rejected.toString()]: (state) => {
            state.isFetching = false;
            state.isSuccess = false;
        },
    },
});

export default votesSlice.reducer;
