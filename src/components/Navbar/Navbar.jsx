import { NavLink } from 'react-router-dom';
import navBarCss from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={navBarCss.nav}>
            <div className={navBarCss.item}>
                <NavLink to="/profile" className={setActive}>Profile</NavLink>
            </div>
            <div className={navBarCss.item}>
                <NavLink to="/dialogs" className={setActive}>Messages</NavLink>
            </div>
            <div className={navBarCss.item}>
                <NavLink to="/news" className={setActive}>News</NavLink>
            </div>
            <div className={navBarCss.item}>
                <NavLink to="/music" className={setActive}>Music</NavLink>
            </div>
            <div className={navBarCss.item}>
                <NavLink to="/settings" className={setActive}>Settings</NavLink>
            </div>
        </div>
    )
}

const setActive = ({isActive}) => isActive ? navBarCss.active : navBarCss.item;

export default Navbar;