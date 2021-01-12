import React from 'react';
import { TopMoviesData } from './App';
import {
    Card, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col, Container
} from 'reactstrap';

const TopMovies = (props: { movies: TopMoviesData[] }) => {
    console.log(props.movies)
    return (
        <div className='movie-list' id='movies-section'>
            <Container>
                <Row>
                    {props.movies.map((topMovie: TopMoviesData) => (
                        <Col xs='4' key={topMovie.imdbID}>
                            <CardDeck style={{marginBottom: '1em', textAlign:'center'}}>
                                <Card>
                                    <img src={topMovie.Poster} alt={topMovie.Title} className='poster' />
                                    <CardBody>
                                        <CardTitle tag="h5">{topMovie.Title}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">{topMovie.Genre}</CardSubtitle>
                                        <CardText>{topMovie.imdbRating}</CardText>
                                    </CardBody>
                                </Card>
                            </CardDeck>
                        </Col>

                    )
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default TopMovies;