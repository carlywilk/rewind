
// import { Carousel } from "../../components/Carousel/Carousel.jsx";
import { CardScrollArea } from "../../components/CardScrollArea/CardScrollArea.jsx";

import "./HomePage.scss";

export function HomePage() {
    return (
        <section className="home">
            {/* <p className="home__content">this is the homepage</p> */}
            {/* <Carousel /> */}
            <CardScrollArea />
        </section>
    );
}
