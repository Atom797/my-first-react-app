import headerCss from './Header.module.css';
import { NavLink } from 'react-router-dom';
const Header = (props) => {
    return (
        <div className={headerCss.header}>
            <img src="https://kvmarvel.ru/wp-content/uploads/2018/03/avengers.png" />

            <div className={headerCss.loginBlock}>
                <NavLink to={'/login'}>{props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : "Login"}
                </NavLink>
            </div>
        </div>
    )
}

export default Header;