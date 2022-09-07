import './App.css';
import AboutSection from './components/about/about';
import HeroSection from './components/hero/hero';
import ProjectSection from './components/projects/project';

function App() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ProjectSection></ProjectSection>
    </div>
  );
}

export default App;
