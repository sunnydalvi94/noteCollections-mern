import { useEffect, useState } from "react";

import { Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../components/mainScreen/MainScreen";
import "./MyNotes.css";
// import Notes from "../data/Notes.json";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyNotes() {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  
  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <>
      <MainScreen
        title="hello guys, i am software developer ..!"
        subchild={"hello tester"}
      >
        <Link to="/createNote">
          <Button variant="dark" className="px-4 ">
            <h5> Create New Note </h5>
          </Button>
        </Link>

        <div className="my-4">
          {notes.map((note) => (
            <Accordion key={note._id}>
              <Accordion.Item eventKey={note._id}>
                <Accordion.Header>
                  <div className="noteContainer">
                    <div>
                      <b>{note.title}</b>
                    </div>
                    <div>
                      <Button
                        className="mx-3"
                        variant="success"
                        onClick={() => {
                          navigate(`note/${note._id}`);
                        }}
                      >
                        Edit
                      </Button>
                      <Button variant="warning">Delete</Button>
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="badge bg-secondary">
                    Category - {note.category}
                  </p>

                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created On Date
                    </footer>
                  </blockquote>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
        </div>
      </MainScreen>
    </>
  );
}

export default MyNotes;
