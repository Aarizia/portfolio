import { NavLink } from "react-router";
import '../components/Menu.scss';

export default function Menu() {

    return (
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item">
                    <NavLink to={"/"} className={({isActive, isPending}) =>
                        isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                            Home
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to={"/projects"} className={({isActive, isPending}) =>
                        isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                            Projects
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to={"/about"} className={({isActive, isPending}) =>
                        isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                            About
                    </NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to={"/contact"} className={({isActive, isPending}) =>
                        isPending ? 'pending' : isActive ? 'active' : 'not-active'}>
                            Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}