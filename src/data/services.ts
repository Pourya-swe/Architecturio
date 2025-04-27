import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBuilding,
  faHouse,
  faMapLocationDot,
  faArrowsSpin,
} from "@fortawesome/free-solid-svg-icons";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: IconDefinition;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Architectural Design",
    description:
      "From concept to completion, we create innovative designs that meet your functional needs while expressing your unique vision.",
    icon: faBuilding,
  },
  {
    id: 2,
    title: "Interior Design",
    description:
      "We create harmonious interior spaces that complement the architecture and enhance the user experience through thoughtful material selection and spatial planning.",
    icon: faHouse,
  },
  {
    id: 3,
    title: "Urban Planning",
    description:
      "We develop comprehensive urban design strategies that create sustainable, livable communities with a focus on public spaces and connectivity.",
    icon: faMapLocationDot,
  },
  {
    id: 4,
    title: "Sustainable Design",
    description:
      "We integrate environmentally responsible practices into our designs, focusing on energy efficiency, renewable materials, and reduced environmental impact.",
    icon: faArrowsSpin,
  },
];
