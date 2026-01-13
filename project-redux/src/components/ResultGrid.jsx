import { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi"
import { useDispatch, useSelector } from 'react-redux'
import { setError, setLoading, setResults } from "../Redux/features/seachSlice";
import ResultCard from './ResultCard'
const ResultGrid = () => {

    const { query, activeTab, loading, results, error } = useSelector((store) => store.search)
    const disPatch = useDispatch();

    useEffect(() => {
        async function getData() {
            try {
                let data = [];
                // disPatch(setLoading());
                if (activeTab == 'Photos') {
                    let response = await fetchPhotos(query);
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photos',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                    }))
                } else if (activeTab == 'Videos') {
                    let response = await fetchVideos(query);
                    console.log(response.videos);
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'videos',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[0].link || "",
                    }))
                }
                disPatch(setResults(data));
            } catch (err) {
                disPatch(setError(err.message));
            }
        }
        getData();
    }, [query, activeTab])
    if (!query) return;
    console.log(results);
    if (error) return <h1>Error occured</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className="flex flex-wrap justify-center gap-6 overflow-auto px-5" >
            {
                results?.map((item, id) => {
                    return <div key={id} > <ResultCard item={item} /> </div>
                })
            }
        </div>
    )
}

export default ResultGrid
