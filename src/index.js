import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./redux/store";

setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

