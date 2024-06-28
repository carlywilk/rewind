import axios from "axios";

export class MoviesApi {
    constructor() {
        this.serverUrl = process.env.REACT_APP_SERVER_URL;
    }

    async getMoviesList() {
        return await axios.get("http://localhost:8080/api/movies")
    }
}