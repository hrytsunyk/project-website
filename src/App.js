import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {HomePage, MoviePage, MoviesPage, SearchPage, UserPage} from "./pages";

const App = () => {
    return (

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'movie'} element={<MoviePage/>}/>
                    <Route path={'user'} element={<UserPage/>}/>
                    <Route path={'search'} element={<SearchPage/>}/>
                </Route>
            </Routes>

    );
};

export {App};