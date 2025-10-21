import axios from "axios";

// Base URL for TVMaze API
const BASE_URL = "https://api.tvmaze.com";

// Fetch all shows
export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/shows`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// Fetch a single movie by ID
export const fetchMovieById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/shows/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with ID ${id}:`, error);
    return null;
  }
};
