import { Link, useNavigate, useParams } from "react-router";
import Button from "../../components/UI/Button";
import { useEffect } from "react";
import projects from "../../data/projects";
import ImageCarousel from "../../components/UI/ImageCarousel";
import styles from "./ProjectDetail.module.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    if (!project) {
      navigate("/portfolio", { replace: true });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className={styles.projectDetailontainer}>
      <div className={styles.wrapper}>
        <div>
          <Link to="/portfolio" className={styles.backLink}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Portfolio
          </Link>
        </div>

        <div className={styles.contentGrid}>
          <div>
            <ImageCarousel images={project.images} alt={project.title} />
          </div>

          <div>
            <h1 className={styles.projectTitle}>{project.title}</h1>

            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Location</h3>
                <p className={styles.detailValue}>{project.location}</p>
              </div>
              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Year</h3>
                <p className={styles.detailValue}>{project.year}</p>
              </div>
              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Client</h3>
                <p className={styles.detailValue}>{project.client}</p>
              </div>
              <div className={styles.detailItem}>
                <h3 className={styles.detailLabel}>Category</h3>
                <p className={styles.detailValue}>{project.category}</p>
              </div>
            </div>

            <div className={styles.descriptionSection}>
              <h2 className={styles.descriptionTitle}>Project Description</h2>
              <p className={styles.descriptionText}>{project.description}</p>
            </div>

            <Link to="/contact">
              <Button variant="primary" className={styles.contactButton}>
                Contact Us About This Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
