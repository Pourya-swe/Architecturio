import { useState, useEffect } from "react";
import styles from "./ImageCarousel.module.scss";
import { ClassList } from "../../Utils/Class-List/ClassList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel = ({ images, alt }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null
  );

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setSlideDirection("right");
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setSlideDirection("left");
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setSlideDirection(slideIndex > currentIndex ? "left" : "right");
    setCurrentIndex(slideIndex);
  };

  // Reset animation after it completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideDirection(null);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  if (images.length === 0) {
    return <div className={styles.noImages}>No images available</div>;
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`${alt} - Image ${currentIndex + 1}`}
          className={ClassList(
            styles.image,
            slideDirection === "left" ? styles.slideLeft : "",
            slideDirection === "right" ? styles.slideRight : ""
          )}
        />

        {/* Left Arrow */}
        <div
          className={`${styles.leftArrow} ${styles.arrow}`}
          onClick={goToPrevious}
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            className={ClassList(styles.icon)}
          />
        </div>

        {/* Right Arrow */}
        <div
          className={`${styles.rightArrow} ${styles.arrow}`}
          onClick={goToNext}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className={ClassList(styles.icon)}
          />
        </div>
      </div>

      {/* Dots/Indicators */}
      <div className={styles.dots}>
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={ClassList(
              styles.dot,
              currentIndex === slideIndex ? styles.active : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
