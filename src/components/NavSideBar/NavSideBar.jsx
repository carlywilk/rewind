
import computer1 from "../../assets/icons/computer-1.svg";
import home1 from "../../assets/icons/home-1.svg";
import randomPurple from "../../assets/icons/random-purple.svg";
import search1 from "../../assets/icons/search-1.svg";
import user3 from "../../assets/icons/user-3.svg";



import "./NavSideBar.scss";

export function NavSideBar() {
    return (
        <>
        <nav className="nav">
            <div className="nav__icon">
                <button className="nav__button">
                    <img className="nav__image" src={search1} alt="" />
                    <p className="nav__label">search</p>
                </button>
            </div>
            <div className="nav__icon">
                <button className="nav__button">
                    <img className="nav__image" src={randomPurple} alt="" />
                    <p className="nav__label">surprise</p>
                </button>
            </div>
            <div className="nav__icon">
                <button className="nav__button">
                    <img className="nav__image" src={user3} alt="" />
                    <p className="nav__label">profile</p>
                </button>
            </div>
            <div className="nav__icon">
                <button className="nav__button">
                <img className="nav__image" src={computer1} alt="" />
                <p className="nav__label">home</p>
                </button>
            </div>
        </nav>
        </>
    );
}