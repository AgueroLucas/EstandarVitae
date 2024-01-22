import "./App.css";
import Cv from "./pages/CV.jsx";
import Main from "./pages/Main";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      {
        <Router basename="/EstandarVitae">
          <Routes >
            <Route path="/" element={<Main />} />
            <Route path="/cv" element={<Cv />} />
          </Routes>
        </Router>
      }
    </div>
  );
}

export default App;

