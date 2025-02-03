import { Link } from "react-router";
import './Header.scss';

export default function Header() {

    return (
        <header className="header">
            <Link to={'/'} className="header__link">
                <h1>Emma Lindekilde Larsen</h1>
            </Link>
            <h2>Web Developer</h2>
        </header>
    )
}