import styles from "./ProjectFilter.module.scss";
import { ClassList } from "../../Utils/Class-List/ClassList";

interface ProjectFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProjectFilterProps) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterList}>
        <button
          onClick={() => onCategoryChange("All")}
          className={ClassList(
            styles.filterButton,
            selectedCategory === "All" ? styles.active : styles.inactive
          )}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={ClassList(
              styles.filterButton,
              selectedCategory === category ? styles.active : styles.inactive
            )}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
