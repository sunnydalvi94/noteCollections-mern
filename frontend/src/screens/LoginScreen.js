import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import MainScreen from "../components/mainScreen/MainScreen";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import axios from "axios";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function LoginScreen() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);

      const { data } = await axios.post(
        // axios post method with obj of email and pass
        "api/users/login",
        {
          email,
          password,
        },
        config
      );
      setLoading(false);
      console.log(data);
      const { error } = data;
      setError(error);
      //   localStorage.setItem("userInfo", json.stringify(data));
    } catch (error) {
      console.log(error.response.data.message + " error");
    }
  };

  return (
    <>
      <MainScreen title="LOGIN">
        {error && <ErrorMessage bg="warning">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" size="sm">
            Submit
          </Button>
          <Form.Group className="mt-2" controlId="formBasicPassword">
            <Form.Label>
              New Customer ? &nbsp;
              <span
                onClick={() => {
                  navigate("/register");
                }}
              >
                <span className="regLink">Register Here</span>
              </span>
            </Form.Label>
          </Form.Group>
        </Form>
      </MainScreen>
    </>
  );
}

export default LoginScreen;
