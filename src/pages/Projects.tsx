import { useParams } from 'react-router-dom';
import projects from '../data/projects.json';
import { ProjectCard } from '../components';

const Projects = () => {
  const { id } = useParams();
  // Find the project whose id matches the URL parameter (both as strings)
  const project = id ? projects.find(p => String(p.title) === id) : null;

  return (
    <>
      {!project ? (
        projects.map(p => (
          <ProjectCard
            title={p.title}
            role={p.role}
            timeframe={p.timeframe}
            impact={p.impact}
            techStack={p.techStack}
            tasks={p.tasks}
          />
        ))
      ) : (
        <ProjectCard
          title={project.title}
          role={project.role}
          timeframe={project.timeframe}
          impact={project.impact}
          techStack={project.techStack}
          tasks={project.tasks}
        />
      )}
    </>
  );
};

export default Projects;
