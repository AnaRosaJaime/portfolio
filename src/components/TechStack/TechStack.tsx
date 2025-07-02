import techs from '../../data/techs.json';
import styles from './style.module.css';

export const TechStack = () => {
  return (
    <section className={styles.techStack}>
      <h2 className={styles.heading}>My Tech Stack</h2>
      <ul className={styles.grid}>
        {techs.map(({ icon, name }) => (
          <li key={name} className={styles.card}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.name}>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
