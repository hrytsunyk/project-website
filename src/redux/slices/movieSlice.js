import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


const initialState = {
    movies: [],
    next: null,
    prev: null,
    loading: null,
    error: null
};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async ({page}, thunkAPI) => {
        try {
            const {data} = await movieService.getMovies({page});
            return data

        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.movies = action.payload
        })
    }
});

const {reducer: movieReducer} = movieSlice;


const movieActions = {
    getMovies
};


export {
    movieReducer,
    movieActions
}