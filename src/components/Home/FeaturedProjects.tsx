import { Link } from "react-router";
import projects from "../../data/projects";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./FeaturedProjects.module.scss";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className={styles.section}>
      <div className={styles.featuredContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.description}>
            Explore some of our most innovative and impactful architectural
            designs that showcase our commitment to excellence.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {featuredProjects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col">
              <img
                src={project.images[0]}
                alt={project.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>
                  {project.shortDescription}
                </p>
                <div>
                  <Link to={`/portfolio/${project.id}`}>
                    <Button variant="outline" className="w-full">
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button variant="primary">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
