import { useFormik } from 'formik';
import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";

const Login = () => {

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string().required("Password is required")
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: (values) => {
            if (values.email === 'mail@test.com') {
                alert("Logged In")
            } else {
                alert("Invalid User")
            }
        }
    })


    const handleRegister = () => {
        navigate('/Register');
    };

    return (
        <Container>
            <Row className='justify-content-center mt-2'>
                <Col md="6">
                    <Card>
                        <Card.Body>
                            <h3>Login</h3>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        id="email"
                                        type="email"
                                        placeholder="Enter email"
                                        isInvalid={formik.errors.email}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                        isInvalid={formik.errors.password}
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Col className='d-flex align-items-center justify-content-evenly'>
                                    <Button id='btnLogin' onClick={formik.handleSubmit} className='w-100' style={{ marginRight: '8px' }} variant="primary" type="button">
                                        Login
                                    </Button>
                                    <Button id='btnRegister' onClick={handleRegister} className='w-100' variant="warning" type="button">
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
}

export default Login;
