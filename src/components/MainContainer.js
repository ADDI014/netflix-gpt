import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'
import { useSelector } from 'react-redux'


const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[0];
    console.log(mainMovie);


  return (
    <div>
      <VideoTitle/>
      <VideoBackGround/>
    </div>
  )
}

export default MainContainer
