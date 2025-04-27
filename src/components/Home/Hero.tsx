import { Link } from "react-router";
import styles from "./Hero.module.scss";
import { ClassList } from "../../Utils/Class-List/ClassList";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={ClassList(styles.backgroundVideo)}>
        <video className={ClassList(styles.videoContent)} autoPlay muted loop>
          <source src="/src/assets/videos/video.mp4" type="video/mp4" />
          <source src="/src/assets/videos/video.webm" type="video/webm" />
          You browser is not supported!
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Transforming Spaces into Extraordinary Places
        </h1>
        <p className={styles.subtitle}>
          We create innovative architectural solutions that blend form and
          function, delivering sustainable and inspiring spaces for our clients.
        </p>
        <div className={styles.ctaContainer}>
          <Link to="/portfolio" className={styles.primaryCta}>
            View Our Projects
          </Link>
          <Link to="/contact" className={styles.secondaryCta}>
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
