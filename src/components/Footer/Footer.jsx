
import rewindLogo from "../../assets/logos/rewind-logo.png";

import "./Footer.scss";

export function Footer() {
    return (
        <section className="footer">
            <div className="footer__bar">
                <img className="footer__logo" src={rewindLogo} alt="" />
            </div>
        </section>
    );
}