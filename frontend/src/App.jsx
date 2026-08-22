import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cv from './pages/Cv'
import Navbar from './components/Navbar';
import ProjectsDetails from './pages/ProjectsDetail';
function App() {
  return (
    <Router>
       <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsDetails />} />
            <Route path="/cv" element={<Cv />} />

        </Routes>
      </main>
    </Router>
  );
}

export default App;
