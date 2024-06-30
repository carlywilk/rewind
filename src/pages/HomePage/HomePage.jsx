import { useState, useEffect } from "react";

import { MoviesApi } from "../../utils/MoviesApiClass.jsx";

import { AboutApp } from "../../components/AboutApp/AboutApp.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";
import { MovieWindow } from "../../components/MovieWindow/MovieWindow.jsx";
import { NavSideBar } from "../../components/NavSideBar/NavSideBar.jsx";

import "./HomePage.scss";

export function HomePage() {
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        // const fetchMoviesData = async () => {
        //     const moviesApi = new MoviesApi();
        //     try {
        //         const moviesResponse = await moviesApi.getMoviesList();
        //         setMoviesList(moviesResponse.data);
        //     } catch (error) {
        //         console.error("Unable to load movies list");
        //     }
        // }
        const fetchMoviesData = async () => {
            const moviesApi = new MoviesApi();
            try {
                const moviesResponse = await moviesApi.getMoviesList();
                // Assuming moviesResponse.data is an array of movies
                setMoviesList(moviesResponse); // Update state with array of movies
            } catch (error) {
                console.error("Unable to load movies list", error);
                // Handle error (show message to user, retry logic, etc.)
            }
        };
        fetchMoviesData();
    }, []);

    return (
        <section className="home" style={{ height: "100vh" }}>
            <div className="home__content">
                <div className="home__nav-section">
                    <NavSideBar />
                </div>
            <MovieWindow moviesList={moviesList} />
            </div>
            {/* <AboutApp /> */}
            <Footer />
        </section>
    );
}
