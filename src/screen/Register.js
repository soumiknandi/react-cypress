import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Register = () => {
    return (
        <Container>
            <Row className='justify-content-center mt-2'>
                <Col md="6">
                    <Card>
                        <Card.Body>
                            <h3>Register</h3>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter full name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Col className='d-flex align-items-center justify-content-evenly'>
                                    <Button className='w-100' style={{ marginRight: '8px' }} variant="primary" type="button">
                                        Register
                                    </Button>
                                </Col>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};

export default Register;