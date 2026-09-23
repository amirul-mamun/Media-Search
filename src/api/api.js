import axios from 'axios';

const Unsplash = import.meta.env.VITE_UNSPLASH_KEY;

export async function  fetchPhoto(query, page = 1, per_page = 20) {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {query, page, per_page},
        headers:{Authorization: `Client-ID ${Unsplash}`}
    })
    return res.data;

}



const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_KEY ;

export async function fetchGiphyGIFs(query, limit = 20, offset = 0) {
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: GIPHY_API_KEY,
            q: query,
            limit,
            offset
        }
    });

    return res.data;
    
}



const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_KEY;

export async function fetchVideos(query, page = 1, per_page = 20) {
    const res = await axios.get('https://api.pexels.com/v1/videos/search', {
        params: {
            query,
            page,
            per_page
        },
        headers: {
            Authorization: PEXELS_API_KEY
        }
    });

    return res.data;
}