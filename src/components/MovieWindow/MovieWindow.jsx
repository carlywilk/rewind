
import { CardScrollArea } from "../CardScrollArea/CardScrollArea";

import "./MovieWindow.scss";

export function MovieWindow({ moviesList }) {
    return (
        <section className="window">
            <div className="window__top-bar">
                <p className="window__exit-container"><span className="window__exit">x</span></p>
            </div>
            <div className="window__content">
                <CardScrollArea moviesList={moviesList} />
            </div>
        </section>
    )
}