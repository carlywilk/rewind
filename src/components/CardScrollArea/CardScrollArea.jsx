
import "./CardScrollArea.scss";

export function CardScrollArea({ moviesList }) {
    return (
        <section className="scroll">
            <div className="scroll__container">
                <div className="scroll__list">
                    {moviesList.map((movie) => (
                        <div className="scroll__cards" key={movie.id}>
                            <img className="scroll__image" src={movie.poster} alt={movie.title} />
                            <div className="scroll__image-overlay">
                                <h1 className="scroll__movie-title">{movie.title}</h1>
                                <p className="scroll__movie-release">{movie.release}</p>
                                <a className="scroll__movie-imdb" href={movie.imdb} target="_blank" rel="noreferrer">imdb</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}