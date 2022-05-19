import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Users from './components/Users';
import Header from './components/Header';

const gitHubUrl = 'https://api.github.com/users?since=2000';

const App = () => {
  const [userData, setUserData] = useState([]);

  const getGitHubUserWithFetch = async () => {
    fetch(gitHubUrl)
      .then((response) => response.json())
      .then((users) => {
        setUserData(users);
        users.forEach(function (user) {
          const userUrl = `https://api.github.com/users/${user.login}`;
          fetch(userUrl)
            .then((response) => response.json())
            .then((data) => {
              setUserData((a) => [data, ...a], ...userData);
            });
        });
      });
  };

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);
  return (
    <>
      <Header title="GitHub User Data" />
      <Routes>
        <Route path="/" element={<Users data={userData} />} />
        <Route
          exact
          path="/profile/:id"
          element={<Profile data={userData} />}
        />
      </Routes>
    </>
  );
};
export default App;
