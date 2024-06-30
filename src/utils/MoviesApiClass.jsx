import axios from "axios";

export class MoviesApi {
    constructor() {
        this.serverUrl = process.env.REACT_APP_SERVER_URL;
    }

    // async getMoviesList() {
    //     return await axios.get("http://localhost:8080/api/movies")
    // }
    async getMoviesList() {
        try {
            const response = await axios.get("http://localhost:8080/api/movies");
            let movies = response.data; // Assuming API response returns an array of movies

            // Sort movies by release year (oldest to newest)
            movies.sort((a, b) => a.release - b.release);

            return movies;
        } catch (error) {
            console.error("Error fetching movies:", error);
            throw new Error("Failed to fetch movies");
        }
    }
}