import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cv from './pages/Cv'
import Navbar from './components/Navbar';
import ProjectsDetails from './pages/ProjectsDetail';
function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsDetails />} />
          <Route path="/cv" element={<Cv />} />
    
      </Routes>
    </Router>
  );
}

export default App;