import './App.css';
import ContactSection from './components/contact/contact';
import HeroSection from './components/hero/hero';
import KnowSection from './components/knowme/know';
import ProjectSection from './components/projects/project';

function App() {
  return (
    <div>
      <HeroSection></HeroSection>
      <KnowSection></KnowSection>
      <ContactSection></ContactSection>
      {/* <ProjectSection></ProjectSection> */}
    </div>
  );
}

export default App;
