import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const navbarStyle = {
  backgroundColor: '#eeeee',
};

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} bg="light" variant="light">
      <Container>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#212529',
          }}
        >
          <h1>GitHub users</h1>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
