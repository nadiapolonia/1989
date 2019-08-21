import React, { Component } from 'react'
import axios from 'axios'

class Movie extends Component {
  state = {
    movieResults: []
  }

  movie = async searchTerm => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=69d23e9b46d479e367d00ab334350749'
    )
    this.setState({
      movieResults: resp.data.results
    })
  }

  async componentDidMount() {
    this.movie()
  }

  render() {
    return (
      <main>
        <section>
          <h1 className="section-top">Like, Totally Excellent Movies!</h1>
          <p className="section-top">
            Much like the year that preceded it, 1989 was a pretty significant
            year for movies. During the decade’s last gasp, we saw the first big
            studio film directed by a black woman (A Dry White Season), the
            official return of Disney animation (The Little Mermaid), the
            feature debut of Steven Soderbergh (Sex, Lies, and Videotape), the
            arrival (love him or hate him) or documentarian/provocateur Michael
            Moore and the second splashdown harbinging the Superheroic Age of
            Film we currently occupy courtesy of Tim Burton’s Batman. Along with
            these films came plenty of influential pop culture mainstays—When
            Harry Met Sally, Heathers and Field of Dreams—as well as at least
            one movie by a director/studio whose influence on these shores would
            blossom later (Hayao Miyazaki/Studio Ghibli’s Kiki’s Delivery
            Service). Whether you lived it, or are just looking to brush up on
            the significant (and simply enjoyable) films of the year:
          </p>

          <h2 className="section-top">
            Here are some of the great movies of 1989...
          </h2>
        </section>
        <section>
          <ul>
            {this.state.movieResults.map(results => {
              return (
                <li key={results.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                      results['poster_path']
                    }`}
                  />
                  <h3>{results.title}</h3>
                  <p>{results.overview}</p>
                  <p>{results['release_date']}</p>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    )
  }
}

export default Movie
