import {Outlet} from "react-router-dom";
import {Header} from "../components";

import css from './mainLayout.module.css';
import {Logo} from "../components/Logo/Logo";

const MainLayout = () => {
    return (
        <div className={css.mainLayout}>

                <Header/>
                {/*<Logo/>*/}
                <Outlet/>

        </div>
    );
};

export {MainLayout};