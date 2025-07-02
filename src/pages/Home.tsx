import { Link } from 'react-router-dom';
import { TypewriterEffect, TechStack } from '../components';
import projects from '../data/projects.json';

const Home = () => {
  return (
    <div>
      <h1>Hello, I’m Ana Jaime</h1>
      <p>Full-stack developer with a passion for clean code and timeless, minimal design.</p>
      <TypewriterEffect
        words={[
          'Python Developer 🐍',
          'Frontend & Backend Engineer',
          '10+ years of experience',
          'Clean Code Enthusiast ✨',
          'Design Lover & UI Minimalist',
          'Worked at Roche 💊',
          'Consulting Background',
          'TypeScript & React Expert',
          'Node.js Backend Developer',
          'Architecture-Driven Thinker',
          'Simple, maintainable code 💡',
        ]}
      />
      <TechStack />
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.title}>
            <Link to={`/projects/${project.title}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
      <h2>Contact</h2>
      <p>Email: anajaimeperez@gmail.com</p>
      <p>
        LinkedIn:{' '}
        <a href="https://www.linkedin.com/in/anajaimeperez" target="_blank">
          Ana Jaime
        </a>
      </p>
    </div>
  );
};

export default Home;
