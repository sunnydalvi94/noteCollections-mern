import React from "react";
import { Card } from "react-bootstrap";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate1 = useNavigate();
  return (
    <>
      <div className="main">
        <div>
          <Card style={{ width: "100vmin" }} className="cardBg my-5">
            <Card.Body>
              <Card.Title className="title">
                <b> Welcome to Note Collection</b>
              </Card.Title>
              <div className="subtitle">One safe place for all your notes</div>

              <div className="buttonContainer pt-5 text-center">
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    navigate1("/login");
                  }}
                >
                  <b> LOGIN</b>
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    navigate1("/register");
                  }}
                >
                  <b>SIGNUP</b>
                </button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
