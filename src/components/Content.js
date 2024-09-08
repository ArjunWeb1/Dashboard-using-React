import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faDollarSign, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Line, Pie, Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ScatterController, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { useSprings, useSpring, animated } from '@react-spring/web';
import './css/Content.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ScatterController,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ['9:00AM', '12:00PM', '3:00PM', '6:00PM', '9:00PM', '12:00AM', '3:00AM', '6:00AM'],
  datasets: [
    {
      label: 'Active Users',
      data: [65, 59, 80, 81, 56, 55, 40, 35],
      fill: false,
      backgroundColor: 'rgb(38, 96, 96)',
      borderColor: 'rgba(38, 96, 96, 0.2)',
      tension: 0.4,
    },
    {
      label: 'New Signups',
      data: [28, 48, 40, 19, 86, 27, 90, 88],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.4,
    },
  ],
};

const pieData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const scatterData = {
  datasets: [
    {
      label: 'User Activities',
      data: [
        { x: 10, y: 20 },
        { x: 15, y: 25 },
        { x: 20, y: 30 },
        { x: 25, y: 35 },
        { x: 30, y: 40 },
        { x: 35, y: 45 },
        { x: 40, y: 50 },
        { x: 45, y: 55 },
      ],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
    },
    {
      label: 'Errors',
      data: [
        { x: 10, y: 30 },
        { x: 15, y: 35 },
        { x: 20, y: 40 },
        { x: 25, y: 45 },
        { x: 30, y: 50 },
        { x: 35, y: 55 },
        { x: 40, y: 60 },
        { x: 45, y: 65 },
      ],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const Content = ({ isDarkMode }) => {
  const cardAnimationProps = useSprings(3, [
    {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
      config: { tension: 280, friction: 60 },
      delay: 200,
    },
    {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
      config: { tension: 280, friction: 60 },
      delay: 400,
    },
    {
      from: { opacity: 0, transform: 'translateY(20px)' },
      to: { opacity: 1, transform: 'translateY(0px)' },
      config: { tension: 280, friction: 60 },
      delay: 600,
    },
  ]);

  const chartAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.9)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className={`content ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Container fluid>
        <Row>
          <Col md={4}>
            <animated.div style={cardAnimationProps[0]}>
              <Card className="mb-3 card-hover">
                <Card.Body className="card-body-hover">
                  <Row>
                    <Col xs={2} className="text-center">
                      <FontAwesomeIcon icon={faDatabase} size="2x" className="icon-blue" />
                    </Col>
                    <Col xs={10}>
                      <Card.Title>Storage Usage</Card.Title>
                      <Card.Text>150GB / 500GB</Card.Text>
                      <Card.Text>Used: 30%</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </animated.div>
          </Col>
          <Col md={4}>
            <animated.div style={cardAnimationProps[1]}>
              <Card className="mb-3 card-hover">
                <Card.Body className="card-body-hover">
                  <Row>
                    <Col xs={2} className="text-center">
                      <FontAwesomeIcon icon={faDollarSign} size="2x" className="icon-red" />
                    </Col>
                    <Col xs={10}>
                      <Card.Title>Revenue</Card.Title>
                      <Card.Text>$1,345</Card.Text>
                      <Card.Text>+12% this month</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </animated.div>
          </Col>
          <Col md={4}>
            <animated.div style={cardAnimationProps[2]}>
              <Card className="mb-3 card-hover">
                <Card.Body className="card-body-hover">
                  <Row>
                    <Col xs={2} className="text-center">
                      <FontAwesomeIcon icon={faExclamationTriangle} size="2x" className="icon-warning" />
                    </Col>
                    <Col xs={10}>
                      <Card.Title>Errors</Card.Title>
                      <Card.Text>23</Card.Text>
                      <Card.Text>Last 24 hours</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </animated.div>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <animated.div style={chartAnimation} className="chart-hover">
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Users Behavior</Card.Title>
                  <Line
                    data={lineData}
                    options={{
                      responsive: true,
                      animation: { duration: 2000, easing: 'easeOutBounce' },
                      hover: {
                        mode: 'nearest',
                        intersect: true,
                      },
                    }}
                  />
                </Card.Body>
              </Card>
            </animated.div>
          </Col>
          <Col md={4}>
            <animated.div style={chartAnimation} className="chart-hover">
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Email Statistics</Card.Title>
                  <Pie
                    data={pieData}
                    options={{
                      responsive: true,
                      animation: { duration: 2000, easing: 'easeOutBounce' },
                      hover: {
                        mode: 'nearest',
                        intersect: true,
                      },
                    }}
                  />
                </Card.Body>
              </Card>
            </animated.div>
          </Col>
          <Col md={12}>
            <animated.div style={chartAnimation} className="chart-hover">
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>User Activities</Card.Title>
                  <Scatter
                    data={scatterData}
                    options={{
                      responsive: true,
                      animation: { duration: 2000, easing: 'easeOutBounce' },
                      hover: {
                        mode: 'nearest',
                        intersect: true,
                      },
                    }}
                  />
                </Card.Body>
              </Card>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
