
import "./CardScrollArea.scss";

export function CardScrollArea({ moviesList }) {
    return (
        <section className="scroll">
            <div className="scroll__container">
                {moviesList.map((movie) => (
                    <img key={movie.id} className="scroll__image" src={movie.poster} alt={movie.title} />
                ))}
            </div>
        </section>
    );
}