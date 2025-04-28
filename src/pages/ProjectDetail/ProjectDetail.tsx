import { Link, useNavigate, useParams } from "react-router";
import Button from "../../components/UI/Button";
import { useEffect } from "react";
import projects from "../../data/projects";
import styles from "./ProjectDetail.module.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClassList } from "../../Utils/Class-List/ClassList";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
  };

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
          <div className={styles.imageContainer}>
            <Slider {...sliderSettings}>
              {project.images.map((image, index) => (
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className={ClassList(styles.image)}
                />
              ))}
            </Slider>
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
