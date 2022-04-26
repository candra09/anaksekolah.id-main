import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import RegisterMurid from "./components/Register/RegisterMurid";
import SD from "./components/Pembelajaran/SD";
import Silabus from "./components/Silabus/Silabus";
import Tugas from "./components/Tugas/Tugas";
import Soal from "./components/Soal/Soal";
import Diskusi from "./components/Diskusi/Diskusi";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <div className="app-header">
            <Navbar />
          </div>
          <Switch>
            <div className="app-content">
              <Route path="/" exact component={Home} />
              <Route path="/register" exact component={RegisterMurid} />
              <Route path="/SD" exact component={SD} />
              <Route path="/silabus" exact component={Silabus} />
              <Route path="/tugas" exact component={Tugas} />
              <Route path="/soal" exact component={Soal} />
              <Route path="/diskusi" exact component={Diskusi} />
            </div>
          </Switch>
          <div className="app-footer">
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
