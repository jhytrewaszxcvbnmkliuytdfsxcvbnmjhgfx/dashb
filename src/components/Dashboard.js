import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import WidgetCard from './WidgetCard';

const Dashboard = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Container fluid>
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky"></div>
              <Nav.Item>
                <Nav.Link href="#overview">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#reports">Reports</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#analytics">Analytics</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#export">Export</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          
          <Col xs={10} id="page-content-wrapper">
            <h1>Dashboard Content</h1>
            <p>Welcome to your dashboard. Here you can find various metrics and reports.</p>
            <Row>
              <WidgetCard title="Widget 1" text="This is a widget" />
              <WidgetCard title="Widget 2" text="This is another widget" />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
