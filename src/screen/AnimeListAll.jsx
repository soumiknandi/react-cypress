import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const GET_ANIME_LIST = gql`
query MediaList($type: MediaType) {
  Page {
    mediaList(type: $type) {
      media {
        id
        title {
          english
          native
        }
        duration
        description
        coverImage {
          large
        }
      }
    }
  }
}`

const AnimeListAll = () => {
    const { loading, error, data } = useQuery(GET_ANIME_LIST, {
        variables: {
            MediaType: 'ANIME'
        }
    });

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/${id}`)
    }


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (

        <Container fluid={true}>
            <Row className=' mt-2'>
                <div className='h2'>Anime</div>

                {data.Page.mediaList.map(({
                    media: {
                        id,
                        title: { english, native },
                        coverImage: { large }
                    }
                }) => (
                    <Col md="2" className='mt-1 mb-2'>
                        <Card onClick={() => handleClick(id)}>
                            <Card.Title className=''>
                                <Image height={360} src={large} className='mx-auto d-block w-100' />
                            </Card.Title>
                            <Card.Body className='text-truncate'>
                                {english} {native}
                            </Card.Body>

                        </Card>
                    </Col>

                ))}

            </Row>
        </Container>



    )
}

export default AnimeListAll;
export { GET_ANIME_LIST };

