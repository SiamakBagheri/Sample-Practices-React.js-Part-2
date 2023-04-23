import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  users: [],
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        users: state.users.concat(action.payload),
        currentUser: action.payload,
      };
    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

function TWT2() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const addTweet = (event) => {
    event.preventDefault();
    const tweetObject = {
      content: newTweet,
      likes: 0,
      comments: [],
    };
    setTweets(tweets.concat(tweetObject));
    setNewTweet("");
  };

  const handleNewTweetChange = (event) => {
    setNewTweet(event.target.value);
  };

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const newUser = {
      username: form.username.value,
      password: form.password.value,
    };
    store.dispatch({ type: "REGISTER_USER", payload: newUser });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const user = store
      .getState()
      .users.find((u) => u.username === username && u.password === password);
    if (user) {
      store.dispatch({ type: "LOGIN_USER", payload: user });
    }
  };

  const handleLogout = (event) => {
    event.preventDefault();
    store.dispatch({ type: "LOGOUT_USER" });
  };

  const currentUser = store.getState().currentUser;

  return (
    <Provider store={store}>
      <Container>
        <Row>
          <Col>
            <h1>My Twitter</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {currentUser ? (
              <Form onSubmit={handleLogout}>
                <p>Hello, {currentUser.username}!</p>
                <Button variant="primary" type="submit">
                  Logout
                </Button>
              </Form>
            ) : (
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>{" "}
                <Button variant="link" href="/register">
                  Register
                </Button>
              </Form>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={addTweet}>
              <Form.Group controlId="newTweet">
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newTweet}
                  onChange={handleNewTweetChange}
                  placeholder="What's happening?"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Tweet
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            {tweets.map((tweet, index) => (
              <div key={index}>
                <p>{tweet.content}</p>
                <p>
                  Likes: {tweet.likes} | Comments: {tweet.comments.length}
                </p>
                <Button variant="link">Like</Button>{" "}
                <Button variant="link">Comment</Button>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default TWT2;
