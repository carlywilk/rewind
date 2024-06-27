import { Link } from "react-router-dom";

import appLogo from "../../assets/logos/rewind-logo.png";

import "./Header.scss";

export function Header() {
    return (
        <nav className="header">
            <Link className="header__link" to="/">
                <img className="header__logo" src={appLogo} alt="" />
            </Link>
            <div className="header__buttons-container">
                <button className="header__nav">browse</button>
                <button className="header__nav header__nav--spaced">surprise</button>
            </div>
        </nav>
    );
}