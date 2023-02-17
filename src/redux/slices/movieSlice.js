import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";


const initialState = {
    movies: [],
    page: null,
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
           const {page, results} = action.payload
            state.page=page;
            state.movies = results;

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