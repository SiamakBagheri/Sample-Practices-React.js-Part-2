import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function TWT() {
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

  const likeTweet = (index) => {
    const newTweets = [...tweets];
    newTweets[index].likes += 1;
    setTweets(newTweets);
  };

  const addComment = (event, index) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    const newTweets = [...tweets];
    newTweets[index].comments.push(comment);
    setTweets(newTweets);
    event.target.comment.value = "";
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>توییتر</h1>
          <Form onSubmit={addTweet}>
            <Form.Group controlId="formBasicTweet">
              <Form.Control
                type="text"
                placeholder="توییت جدید"
                value={newTweet}
                onChange={({ target }) => setNewTweet(target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              توییت کن
            </Button>
          </Form>
          {tweets.map((tweet, index) => (
            <div key={index} className="my-3 p-3 border">
              <p>{tweet.content}</p>
              <div className="d-flex justify-content-between">
                <div>
                  <Button variant="link" onClick={() => likeTweet(index)}>
                    ❤️ {tweet.likes}
                  </Button>
                  <Button variant="link">{tweet.comments.length} نظر</Button>
                </div>
              </div>
              <Form onSubmit={(event) => addComment(event, index)}>
                <Form.Group controlId={`formBasicComment${index}`}>
                  <Form.Control type="text" placeholder="نظر" name="comment" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  ارسال
                </Button>
              </Form>
              {tweet.comments.map((comment, index) => (
                <p key={index}>{comment}</p>
              ))}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default TWT;
