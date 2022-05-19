/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = ({data}) => {


    const users = data.map((user, i) => {
    return (
          <div key={i}>
            <Col key={user.login} className="pb-3">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.avatar_url} />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>
                    {user.login || user.location}
                    <span>
                      <Link to={`/profile/${user.login}`}>View Profile</Link>
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        )});
  
  
    return (
      <>
      <div className="App">
        <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
            {users}
            </Row>
        </Container>
     </div>
      </>
    );
  };

export default Users;
