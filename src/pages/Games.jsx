import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Games.css';
import shellComeBackImg from '../assets/She\'ll come back.png';
import interningGodImg from '../assets/Interning God.png';
import harvesterRunImg from '../assets/harvester run.png';
import cyberCityBgImg from '../assets/cyber city background.png';

export default function Games() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = {
    'shell-come-back': {
      title: "She'll Come Back",
      subtitle: "Released",
      status: "Released",
      itchLink: "https://itch.io/placeholder",
      description: "Project details for She'll Come Back"
    },
    'interning-god': {
      title: "Interning God",
      subtitle: "Released",
      status: "Released",
      itchLink: "https://itch.io/placeholder",
      description: "Project details for Interning God"
    },
    'soul-traveler': {
      title: "Soul Traveler's Dream",
      subtitle: "In development",
      status: "In development",
      description: "Project details for Soul Traveler's Dream"
    },
    'harvester-run': {
      title: "Harvester Run",
      subtitle: "Released",
      status: "Released",
      description: "A game demo showcase"
    }
  };

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="games-main">
      <section className="game-projects-section">
        <div className="game-projects-container">
          {/* Centered Intro Card */}
          <div className="intro-card">
            <p>
              Here you'll find my game projects, design experiments, and in-progress work. 
              I focus on gameplay systems and interaction design, and I'm especially interested 
              in combat design — exploring how timing, readability, combo and hit feedback shape 
              challenging but fair encounters. I also have strong hands-on coding experience from 
              shipping these projects.
            </p>
            <Link to="/games-played" className="games-played-link">
              Games I've Played
            </Link>
          </div>

          {/* 2x2 Grid of Project Blocks */}
          <div className="projects-grid">
            {/* Top-left: She'll Come Back */}
            <div 
              className="project-block"
              onClick={() => handleProjectClick('shell-come-back')}
            >
              <div className="project-image-placeholder">
                <img src={shellComeBackImg} alt="She'll Come Back" />
                <div className="project-overlay">
                  <h3 className="project-title">She'll Come Back</h3>
                  <p className="project-subtitle">Released</p>
                </div>
              </div>
              <div className="project-content">
              </div>
            </div>

            {/* Top-right: Interning God */}
            <div 
              className="project-block"
              onClick={() => handleProjectClick('interning-god')}
            >
              <div className="project-image-placeholder">
                <img src={interningGodImg} alt="Interning God" />
                <div className="project-overlay project-overlay-right">
                  <h3 className="project-title">Interning God</h3>
                  <p className="project-subtitle">Released</p>
                </div>
              </div>
              <div className="project-content">
              </div>
            </div>

            {/* Bottom-left: Soul Traveler's Dream */}
            <div 
              className="project-block"
              onClick={() => handleProjectClick('soul-traveler')}
            >
              <div className="project-image-placeholder">
                <img src={cyberCityBgImg} alt="Soul Traveler's Dream" />
                <div className="project-overlay">
                  <h3 className="project-title">Soul Traveler's Dream</h3>
                  <p className="project-subtitle">In development</p>
                </div>
              </div>
              <div className="project-content">
              </div>
            </div>

            {/* Bottom-right: Harvester Run */}
            <div 
              className="project-block"
              onClick={() => handleProjectClick('harvester-run')}
            >
              <div className="project-image-placeholder">
                <img src={harvesterRunImg} alt="Harvester Run" />
                <div className="project-overlay project-overlay-right">
                  <h3 className="project-title">Harvester Run</h3>
                  <p className="project-subtitle">Released</p>
                </div>
              </div>
              <div className="project-content">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2>{projects[selectedProject].title}</h2>
            <p className="modal-status">{projects[selectedProject].status || projects[selectedProject].subtitle}</p>
            <p>{projects[selectedProject].description}</p>
          </div>
        </div>
      )}
    </main>
  );
}
