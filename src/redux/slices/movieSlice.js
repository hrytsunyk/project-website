import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosService} from "../../services/axiosService";
import {movieService} from "../../services/movieService";


const initialState = {
    movies:[],
    loading:null,
    error: null,

};

const getMovies = createAsyncThunk(
    'movieSlice/getMovies',
    async (_,thunkAPI)=>{
        try {
           const {data} = await movieService.getMovies()
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{

    }
});

const {reducer:movieReducer} = movieSlice;


const movieActions  ={
    getMovies
};


export {
    movieReducer,
    movieActions
}