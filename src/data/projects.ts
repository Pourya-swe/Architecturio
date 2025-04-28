import getProductionPath from "../Utils/Production-Path/getProductionPath";

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  location: string;
  year: number;
  client: string;
  category: string;
  images: string[];
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "modern-villa",
    title: "Modern Villa",
    shortDescription: "A contemporary villa with panoramic ocean views",
    description:
      "This modern villa design embraces minimalist aesthetics while maximizing the breathtaking ocean views. The structure features floor-to-ceiling windows, an open-concept living space, and sustainable materials throughout. The integration of indoor and outdoor living spaces creates a seamless experience for the residents, with multiple terraces and an infinity pool that appears to merge with the horizon.",
    location: "Malibu, CA",
    year: 2022,
    client: "Private Client",
    category: "Residential",
    images: [
      getProductionPath("about01-1x.webp"),
      getProductionPath("project01-02.webp"),
      getProductionPath("project01-03.webp"),
    ],
    featured: true,
  },
  {
    id: "urban-office-tower",
    title: "Urban Office Tower",
    shortDescription: "A sustainable skyscraper in the heart of downtown",
    description:
      "This 40-story office tower redefines urban architecture with its innovative approach to sustainability. The double-skin façade system optimizes energy efficiency, while sky gardens at every fifth floor improve air quality and provide recreational spaces for employees. The building achieved LEED Platinum certification through its comprehensive green roof system, rainwater harvesting, and solar panel integration.",
    location: "Chicago, IL",
    year: 2021,
    client: "Metropolis Development Corp",
    category: "Commercial",
    images: [
      getProductionPath("about02-1x.webp"),
      getProductionPath("project02-02.webp"),
      getProductionPath("project02-03.webp"),
    ],
    featured: true,
  },
  {
    id: "cultural-center",
    title: "Cultural Arts Center",
    shortDescription:
      "A dynamic space for artistic expression and community engagement",
    description:
      "This cultural arts center serves as a hub for creative expression and community gathering. The design incorporates flexible performance spaces, galleries, and workshops that can be reconfigured for various events and exhibitions. The building's distinctive form draws inspiration from traditional local crafts while employing contemporary construction techniques. Natural lighting floods the interior spaces through strategically placed skylights and clerestory windows.",
    location: "Portland, OR",
    year: 2023,
    client: "Portland Arts Foundation",
    category: "Cultural",
    images: [
      getProductionPath("project05-01.webp"),
      getProductionPath("project05-02.webp"),
    ],
    featured: false,
  },
  {
    id: "eco-resort",
    title: "Eco-Resort & Spa",
    shortDescription:
      "A luxury retreat that harmonizes with its natural surroundings",
    description:
      "This eco-resort was designed to blend seamlessly with its tropical forest setting while providing luxury accommodations. The 30 individual cabins are elevated on stilts to minimize ground impact and maximize views of the surrounding landscape. Sustainable features include passive cooling systems, locally sourced materials, and a comprehensive water recycling program. The main lodge houses dining facilities, a spa, and communal spaces that open to the natural environment.",
    location: "Bali, Indonesia",
    year: 2020,
    client: "Harmony Resorts International",
    category: "Hospitality",
    images: [
      getProductionPath("project06-01.webp"),
      getProductionPath("project06-02.webp"),
      getProductionPath("project06-03.webp"),
    ],
    featured: true,
  },
  {
    id: "urban-renewal",
    title: "Urban Renewal Project",
    shortDescription:
      "Transformation of an industrial district into a vibrant mixed-use neighborhood",
    description:
      "This urban renewal project transformed a former industrial area into a thriving mixed-use neighborhood. The master plan preserved several historic factory buildings, repurposing them as lofts, offices, and retail spaces. New construction complements the industrial aesthetic while introducing contemporary elements. Public plazas, green spaces, and pedestrian pathways create a walkable community that honors the site's heritage while embracing modern urban living.",
    location: "Detroit, MI",
    year: 2022,
    client: "Detroit Revitalization Authority",
    category: "Urban Planning",
    images: [
      getProductionPath("project07-01.webp"),
      getProductionPath("project07-02.webp"),
      getProductionPath("project07-03.webp"),
    ],
    featured: false,
  },
  {
    id: "minimalist-residence",
    title: "Minimalist Residence",
    shortDescription:
      "A serene family home that celebrates simplicity and natural light",
    description:
      "This minimalist residence embodies the principle that less is more. Clean lines, uncluttered spaces, and a neutral color palette create a sense of calm throughout the home. Strategic window placement maximizes natural light while maintaining privacy. The open floor plan enhances family connectivity, while thoughtfully designed storage solutions eliminate visual clutter. The landscaping extends the minimalist aesthetic outdoors with geometric plantings and a zen-inspired garden.",
    location: "Austin, TX",
    year: 2021,
    client: "Private Client",
    category: "Residential",
    images: [
      getProductionPath("project08-01.webp"),
      getProductionPath("project08-02.webp"),
      getProductionPath("project08-03.webp"),
    ],
    featured: false,
  },
];

export default projects;
