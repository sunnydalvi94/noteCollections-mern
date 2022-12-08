import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage";
import MyNotes from "./screens/MyNotes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/MyNotes" element={<MyNotes />}></Route>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
