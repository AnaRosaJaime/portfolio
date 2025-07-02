import styles from './style.module.css';

type ProjectCardProps = {
  title: string;
  role: string;
  timeframe: string;
  impact: string;
  techStack: string[];
  tasks: string[];
};

export const ProjectCard = ({
  title,
  role,
  timeframe,
  impact,
  techStack,
  tasks,
}: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.role}>
        {role} • {timeframe}
      </p>
      <p className={styles.impact}>{impact}</p>

      <div className={styles.stack}>
        {techStack.map(tech => (
          <span key={tech} className={styles.tech}>
            {tech}
          </span>
        ))}
      </div>

      <ul className={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={styles.task}>
            • {task}
          </li>
        ))}
      </ul>
    </div>
  );
};
