import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Setting from './pages/Setting';
import NewsList from './components/NewsList'
import News from './pages/News';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/NewsList" element={<NewsList />} />
        <Route path="/News" element={<News />} />
      </Routes>
    </Router>
  );  
}

export default App;