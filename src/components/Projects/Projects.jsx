import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hotel from '../../media/hotel.png';
import budget from '../../media/budget.png';
import mathm from '../../media/mathm.png';
import abflims from '../../media/abflims.png';
import awbooks from '../../media/awbooks.png';
import leaderboard from '../../media/leaderboard.png';
import lib from '../../media/lib.png';
import metrics from '../../media/metrics.png';
import sheeran from '../../media/sheeran.png';
import spacehub from '../../media/spacehub.png';
import './Projects.css';

const Projects = () => (
  <div className="projects">
    <h2>My Projects</h2>
    <Carousel className="carousel">
      <Carousel.Item>
        <img src={hotel} alt="Hotel Booking" className="projects-img" />
        <Carousel.Caption className="caption">
          <h3>The Hotel Booking app</h3>
          <p>It is a booking app where the user can reserve/unreserve a hotel on a selected date and admin can add/delete the hotel. Built with Rails for the back-end, React for the front-end.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={budget} alt="The Budget app" className="projects-img" />
        <Carousel.Caption className="caption">
          <h3>The Budget app</h3>
          <p>The Budget app is a mobile web application where the user can manage the budget.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={mathm} alt="Math Magicians" className="projects-img" />
        <Carousel.Caption className="caption">
          <h3>Math Magicians</h3>
          <p>It is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: - Make simple calculations. - Read a random math-related quote. Built with React.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={metrics} alt="The Metrics app" className="projects-img" />
        <Carousel.Caption className="caption">
          <h3>The Metrics app</h3>
          <p>A mobile web application to check a list of metrics (numeric values). Built with React and Redux.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={leaderboard} alt="The leaderboard" className="projects-img" />
        <Carousel.Caption className="caption">
          <h3>The leaderboard</h3>
          <p>The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={awbooks} alt="The awesome books" className="projects-img" />
        <Carousel.Caption className="caption">
          <h3>The awesome books</h3>
          <p>Built with ES6 syntax</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={abflims} alt="A&B films" className="projects-img" />
        <Carousel.Caption className="caption">
          <h3>The A&B films</h3>
          <p>The A&B films website is a web application based on an external API. There&apos;s selected an API that provides data about popular movies . The webapp has 2 user interfaces.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={sheeran} alt="The Concert website" className="projects-img" />
        <Carousel.Caption className="caption">
          <h3>The Concert website</h3>
          <p>This is my first capstone project where I created a website for a concert by singer Ed Sheeran. The project has two pages Home and About. Also, guest singers&apos; cards are added using javascript. A responsive application, available in desktop and mobile versions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={lib} alt="The Bookstore" className="projects-img" />
        <Carousel.Caption className="caption">
          <h3>The Bookstore</h3>
          <p>The Bookstore is a website which allows to user: -Display a list of books; -Add a book; -Remove a selected book; Built with React and Redux.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={spacehub} alt="The Space Traveler's hub" className="projects-img" />
        <Carousel.Caption className="caption">
          <h3>The Space Traveler&apos;s hub</h3>
          <p>The project consists of Rockets, Missions, and the My Profile sections. Built with React&Redux.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Projects;
