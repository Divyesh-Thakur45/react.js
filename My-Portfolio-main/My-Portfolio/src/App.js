import './App.css';
import Contacts from './Components/Contacts';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import GithubStatus from './Components/GithubStatus';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <GithubStatus />
      <Contacts />
      <Footer />
    </div>
  );
}
export default App;