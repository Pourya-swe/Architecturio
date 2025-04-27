import { Link } from "react-router";
import { Project } from "../../data/projects";
import Card from "../UI/Card";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/portfolio/${project.id}`}>
      <Card className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img
            src={project.images[0]}
            alt={project.title}
            className={styles.image}
          />
          {project.featured && (
            <div className={styles.featuredBadge}>Featured</div>
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.metadata}>
            {project.category} | {project.location}
          </p>
          <p className={styles.description}>{project.shortDescription}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ProjectCard;
