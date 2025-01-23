import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackGround = ({movieId}) => {

    const [trailerId , setTrailerId] = useState(null);

    const getMoviesVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/976573/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        console.log(json);

        const filteredData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        console.log(trailer);
        setTrailerId(trailer.key);
    }

    useEffect(()=>{
        getMoviesVideos();
    },[]);

  return (
    <div>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+trailerId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VideoBackGround
