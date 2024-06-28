import { useState, useEffect } from "react";

import { MoviesApi } from "../../utils/MoviesApiClass.jsx";

import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { CardScrollArea } from "../../components/CardScrollArea/CardScrollArea.jsx";

import "./HomePage.scss";

export function HomePage() {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        const fetchMoviesData = async () => {
            const moviesApi = new MoviesApi();
            try {
                const moviesResponse = await moviesApi.getMoviesList();
                setMoviesList(moviesResponse.data);
            } catch (error) {
                console.error("Unable to load movies list");
            }
        }
        fetchMoviesData();
    }, [setMoviesList]);

    return (
        <section className="home">
            <AboutApp />
            <CardScrollArea moviesList={moviesList} />
        </section>
    );
}
