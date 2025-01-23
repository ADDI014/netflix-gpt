import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // const [trailerId , setTrailerId] = useState(null);

    const getMoviesVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();

        const filteredData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        // setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(()=>{
        getMoviesVideos();
    },[]);
}

export default useMovieTrailer;