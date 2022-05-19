/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Profile({data}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [userlocation, setLocation] = useState('');
  const [avatar, setAvatar] = useState('');
  const [blog, setBlog] = useState('');
  const [publicRepos, setPublicRepo] = useState('');
  const [publicGists, setPublicGists] = useState('');
  const [publicFollowers, setFollowers] = useState('');
  const [publicFollowing, setFollowing] = useState('');
  const [publicBio, setBio] = useState('');
  const [company, setCompany] = useState('');
  const [twitter, setTwitter] = useState('');
  const [userId, setUserId] = useState('');


  const fetchData = () => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setName(result.name);
        setUserName(result.login);
        setLocation(result.location);
        setAvatar(result.avatar_url);
        setBlog(result.blog);
        setPublicRepo(result.public_repos);
        setPublicGists(result.public_gists);
        setFollowers(result.follwers);
        setFollowing(result.following);
        setBio(result.bio);
        setCompany(result.company);
        setTwitter(result.twitter_username);
        setUserId(result.id);
      });
  };
  useEffect(() => {
    fetchData();
    }, [id]);


const  goToNext  = () => {
   const nextId = userId + 1;
   const object = data.find(obj => obj.id === nextId);
  
   if(object){
   setName(object.name);
   setUserName(object.login);
   setLocation(object.location);
   setAvatar(object.avatar_url);
   setBlog(object.blog);
   setPublicRepo(object.public_repos);
   setPublicGists(object.public_gists);
   setFollowers(object.follwers);
   setFollowing(object.following);
   setBio(object.bio);
   setCompany(object.company);
   setTwitter(object.twitter_username);
   }
   return object;
  }

  return (
    <Container className="mt-4">
      <Row style={{ width: '100%' }} sx={1} md={2} lg={3}>
        <Col xs={4}>
          <Row></Row>
          <Row>
            <Card.Img variant="top" src={avatar} />
          </Row>
          <Row>
            <h1>{name}</h1>
          </Row>
          <Row>{userName}</Row>
          <Row></Row>
          <Row>{userlocation}</Row>
          <Row>
            <Link to={blog}>{blog}</Link>
          </Row>
        </Col>
        <Col lg={8}>
          <Row>
            <Col>
              <div style={{ marginTop: '3rem', marginLeft: '1rem' }}>
                <div>
                  <h1>{publicRepos}</h1>
                  <div>Public Repos</div>
                </div>
              </div>
            </Col>

            <Col>
              <div style={{ marginTop: '3rem', marginLeft: '1rem' }}>
                <div>
                  <h1>{publicGists}</h1>
                  <div>Public gists</div>
                </div>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: '3rem', marginLeft: '1rem' }}>
                <div>
                  <h1>{publicFollowers > 0 ? publicFollowers : 0}</h1>
                  <div>Followers</div>
                </div>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: '3rem', marginLeft: '1rem' }}>
                <div>
                  <h1>{publicFollowing > 0 ? publicFollowing : 0}</h1>
                  <div>Following</div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            {!!publicBio ? (
              <div className="mt-5 pl-4">
                <span>
                  <strong>Biography: </strong>
                  {publicBio}
                </span>
              </div>
            ) : (
              ''
            )}
          </Row>
          <Row>
            {!!company ? (
              <div className="mt-5 pl-4">
                <span>
                  <strong>Company: </strong>
                  {company}
                </span>
              </div>
            ) : (
              ''
            )}
          </Row>
          <Row>
            <div className="mt-5 pl-4">
              {!!twitter ? (
                <span>
                  <strong>Twitter: </strong>
                  {twitter}
                </span>
              ) : (
                ''
              )}
            </div>
          </Row>
        </Col>
      </Row>
      <Row style={{ float: 'right' }}>
        

        <span className="pr-4">
          <Link to="./" onClick={() => navigate(-1)}>
            Prev
          </Link> 
          </span>
          <span>
          {'   '}
          <Link to={`/profile/${id}`} onClick={()=>goToNext()}>Next</Link>
        </span>
      </Row>
    </Container>
  );
}

export default Profile;
