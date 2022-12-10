import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import MainScreen from "../components/mainScreen/MainScreen";
import { useNavigate } from "react-router-dom";
import "./RegisterScreen.css";
import axios from "axios";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { set } from "mongoose";

function RegisterScreen() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setconPassword] = useState("");
  const [pic, setPic] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const [message, setMessage] = useState(null);
  const [picMessage, setpicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const passAuth = (e) => {
    if (password !== conPassword) {
      setMessage("Password Don't Match");
      e.preventDefault();
    } else {
      setMessage("");
      submitHandler(e);
    }
  };

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
        "api/users",
        { name, email, password, pic },
        config
      );
      setLoading(false);
    } catch (error) {
        setError(error.response.data.message)
      console.log(error.response.data.message);
    }
    return;
  };

  return (
    <>
      <MainScreen title="Registration">
        {message && <ErrorMessage bg="warning">{message}</ErrorMessage>}
        {error && <ErrorMessage bg="warning">{error}</ErrorMessage>}

        {/* {loading && <Loading />} */}
        <Form onSubmit={passAuth}>
          <Form.Group className="mb-3">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
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
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm Password"
              value={conPassword}
              onChange={(e) => {
                setconPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group controlId="pic" className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => {
                setPic(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" size="sm">
            Submit
          </Button>
          <Form.Group className="mt-2" controlId="formBasicPassword">
            <Form.Label>
              Already have a Account ? &nbsp;
              <span
                onClick={() => {
                  navigate("/login");
                }}
              >
                <span className="regLink">Login Here</span>
              </span>
            </Form.Label>
          </Form.Group>
        </Form>
      </MainScreen>
    </>
  );
}

export default RegisterScreen;
