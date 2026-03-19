import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EnglishQuiz from './pages/EnglishQuiz';
import MathQuiz from './pages/MathQuiz';
import TopicQuiz from './pages/TopicQuiz';
import About from './pages/About';
import Contact from './pages/Contact';
import Updates from './pages/Updates';
import Privacy from './pages/Privacy';
import Login from './pages/Login';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/english-quiz" element={<EnglishQuiz />} />
          <Route path="/math-quiz" element={<MathQuiz />} />
          <Route path="/quiz/:category/:topicId" element={<TopicQuiz />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
}
