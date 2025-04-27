import { ReactNode } from "react";
import styles from "./Card.module.scss";
import { ClassList } from "../../Utils/Class-List/ClassList";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div className={ClassList(styles.card, className)}>
      {children}
    </div>
  );
};

export default Card;
