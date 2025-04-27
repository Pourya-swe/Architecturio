import { useMemo, useState } from "react";
import projects from "../../data/projects";
import ProjectFilter from "../../components/PortFolio/Poroject-Filter";
import ProjectCard from "../../components/PortFolio/Project-Card";
import styles from "./Portfolio.module.scss";

const PortFolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(() => {
    return Array.from(new Set(projects.map((project) => project.category)));
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className={styles.portfolioSection}>
      <div className={styles.portfolioContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Portfolio</h1>
          <p className={styles.description}>
            Explore our diverse collection of architectural projects spanning
            residential, commercial, cultural, and educational spaces.
          </p>
        </div>

        <ProjectFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.emptyMessage}>
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortFolio;
