import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXEL_KEY = import.meta.env.VITE_PEXEL_KEY



export async function fetchPhotos(query,page =1, per_page = 20) {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page, per_page},
        headers:{Authorization: `Client-ID ${UNSPLASH_KEY}`},
    })
    console.log(response.data.results);
    return response.data;
}

export async function fetchVideos(query, per_page = 20) {
    const response = await axios('https://api.pexels.com/videos/search',{
        params:{query, per_page},
        headers:{Authorization:`Client-ID ${PEXEL_KEY}`},
    })
    response.data.videos.forEach(element => {
        console.log(element.image);
    });
    // console.log(response.data.videos);
    return response.data;
}