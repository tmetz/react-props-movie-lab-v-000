import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map(
      <MovieCard title = {title} IMDBRating = {IMDBRating} genres = {genres} poster = {poster}>
      item => {item})
  }

  render() {
    return
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>

  }
}
