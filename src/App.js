import "./App.css";
import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Showbtn from "./Component/Showbutton/Showbtn";
import Showuser from "./Component/Showuser/Showuser";

function App() {
  return (
    <>
      <Router>
           <Header />
        <Routes>
          <Route path="/" element={<Showbtn/>} />
          <Route path="/showuser" element={<Showuser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
