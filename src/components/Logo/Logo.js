
import css from './Logo.module.css'
import DayNightToggle from "react-day-and-night-toggle";
import {useState} from "react";

const Logo = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={css.Logo}>
            <h2>FLIXNET</h2>
            <DayNightToggle className={css.dayNightSwitcher} size={20}
                            onChange={() => setIsDarkMode(!isDarkMode)}
                            checked={isDarkMode}
            />
        </div>
    );
};

export {Logo};