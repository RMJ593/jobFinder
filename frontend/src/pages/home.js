import React from 'react';
import './home.css';
import { Navbar, Container, Carousel, Button,Col } from 'react-bootstrap';

import {  Link } from 'react-router-dom';
function Home() {
  const token = localStorage.getItem('token');
  const userName = token ? JSON.parse(atob(token.split('.')[1])).user.id : 'Guest';
  
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
       
      <Container>
        <Navbar.Brand href="#home">JobFinder</Navbar.Brand>
        <Navbar.Toggle />
        <Col xs="auto">
              <Link to ='./login'>
              <Button type="submit" variant="warning">Login/Signup</Button>
              </Link>
            </Col>
            <Col xs="auto">
              <Link to ='./profile'>
              <Button type="submit" variant="warning">Profile</Button>
              </Link>
            </Col>
            <Col xs="auto">
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#profile">{userName}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Col>
        {/* <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          Signed in as: <a href="#login">{userId ? userId : 'Guest'}</a> 
          </Navbar.Text>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
      
      <Carousel>
      <Carousel.Item>
      <img
            class="slide d-block w-100"
            src={require('../components/job_seeker2.jpeg')}
            alt="First slide"
          />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            class="slide d-block w-100"
            src={require('../components/job-seeker1.jpeg')}
            alt="First slide"
          />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            class="slide d-block w-100"
            src={require('../components/job-seeker3.jpeg')}
            alt="First slide"
          />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Navbar bg="dark" data-bs-theme="dark">
    <p className="footer-text">
                Reach us at <a href="mailto:healthsupport@gmail.com">healthsupport@gmail.com</a>
          </p>
    </Navbar>
        </>
        );
    }
    export default Home;