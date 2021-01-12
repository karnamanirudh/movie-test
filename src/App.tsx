import React, { useState, useEffect } from 'react';
import './App.css';
import MoviesList from './MoviesList';
import SearchField from './SearchField';
import TopMovies from './TopMovies';

const topMovies: Array<string> = ['The Shawshank Redemption', 'The Dark Knight', '12 Angry Men', 'The GodFather: part II',
  'Pulp Fiction', 'Fight Club', 'Forrest Gump', ' The Good, the Bad and the Ugly', 'The Matrix']

interface IResultData {
  Poster: string,
  Title: string,
  Genre: string,
  imdbRating: string,
  Response: string
}

export interface TopMoviesList {
  moviesList: Array<TopMoviesData>;
}

export interface TopMoviesData {
  [key: string]: string | undefined;
}

function App() {

  const [result, getData] = useState<Array<TopMoviesData>>([]);
  const [searchResult, getSearchResults] = useState<IResultData>({ Poster: '', Title: '', Genre: '', imdbRating: '', Response: '' });
  const [inputData, setInputData] = useState('');

  useEffect(() => {
    topMovies.map(movie => {
      return (
        fetch('https://www.omdbapi.com/?apikey=ef69a2eb&t=' + movie)
          .then(res => res.json())
          .then(data => getData(movies => movies.concat(data)))
      )
    })
    
  }, []);

  const getInputData = (inputString: string) => {
    setInputData(inputString);
    let url = 'https://www.omdbapi.com/?apikey=ef69a2eb&t=' + inputString;
    fetch(url)
      .then(res => res.json())
      .then(data => getSearchResults(data))
  }
  return (
    <div>
      <h1 className='App'>Movies Search</h1>
      <SearchField inputFieldData={getInputData} />
      {topMovies && inputData !== '' ?
        <MoviesList movieData={searchResult} inputString={inputData} />
        :
        <TopMovies movies={result} />
      }
    </div>
  );
}

export default App;
