import React from 'react';
import {
   Card, CardImg, CardTitle, CardText,
    CardSubtitle, Row, Col, Container
} from 'reactstrap';

interface MovieData {
    movieData: {
        Poster: string,
        Title: string,
        Genre: string,
        imdbRating: string,
        Response: string
    },
    inputString: string
}

const MoviesList: React.FC<MovieData> = (props) => {
    return (
        <div className='App'>
            <Container className='movies-list'>
                <Row>
                    {props.inputString.length > 0 && props.movieData.Response !== "False" ?
                        <Col xs='12'>
                            <Card>
                            <CardImg top width='100%' src={props.movieData.Poster} alt={props.movieData.Title} />
                            <CardTitle tag="h5">{props.movieData.Title}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{props.movieData.Genre}</CardSubtitle>
                            <CardText>{props.movieData.imdbRating}</CardText>
                            </Card>
                        </Col>
                        :
                        <p>No Data</p>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MoviesList;