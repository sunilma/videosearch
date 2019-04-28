import axios from 'axios';

const KEY = "AIzaSyBhYbbGfgaLgMO4MpciwYs2WE6I-MvfkNk";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});