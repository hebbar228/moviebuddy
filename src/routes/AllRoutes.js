import { Route, Routes } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

import React from 'react'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
     <Routes>
        <Route path="movie/:id" element={<MovieDetail apiPath="" />} />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular" />} />
        <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated" />} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming" />} />
        <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home" />} />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} />
     </Routes>
    </div>
  )
}
