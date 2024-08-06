import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export const GET_ANIME_SINGLE = gql`
query Media($mediaId: Int) {
  Media(id: $mediaId) {
    title {
      english
      native
    }
    duration
    genres
    description
    bannerImage
    coverImage {
      large
    }
  }
}
`

const AnimeSingle = () => {

    const { id } = useParams();


    const { loading, error, data } = useQuery(GET_ANIME_SINGLE, {
        variables: {
            mediaId: id
        }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <Container fluid={true}>
            <Row>
                <Col>
                    <Image src={data.Media.bannerImage} />
                    <h2>{data.Media.title.english}</h2>
                    <p>{data.Media.description}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default AnimeSingle;