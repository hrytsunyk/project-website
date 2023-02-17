import css from './Header.module.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUser, faSearch, faSignOut, faFilm} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import DayNightToggle from 'react-day-and-night-toggle'


const Header = () => {

   const [isDarkMode, setIsDarkMode] = useState(false);


    return (
        <div className={css.HeaderFather}>
            <div className={css.Header}>

                <DayNightToggle className={css.dayNightSwitcher} size={20}
                    onChange={() => setIsDarkMode(!isDarkMode)}
                    checked={isDarkMode}
                />
                <div className={css.Icons}>
                    <div className={css.top_icons}>
                        <NavLink to={'/home'}><FontAwesomeIcon icon={faHome}/></NavLink>
                        <NavLink to={'/movies'}><FontAwesomeIcon icon={faFilm}/></NavLink>
                        <NavLink to={'/user'}><FontAwesomeIcon icon={faUser}/></NavLink>
                        <NavLink to={'/search'}><FontAwesomeIcon icon={faSearch}/></NavLink>
                    </div>
                    {/*<FontAwesomeIcon icon={} className={}/>*/}
                    {/*<FontAwesomeIcon icon={} className={}/>*/}
                   <NavLink to={'logout'}><FontAwesomeIcon icon={faSignOut}/></NavLink>
                </div>
            </div>
        </div>
    );
};

export {Header};