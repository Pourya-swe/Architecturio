const images = import.meta.glob("/src/assets/images/*.png", { eager: true });

function getImagePath(fileName: string): string {
  const match = Object.entries(images).find(([path]) =>
    path.includes(fileName)
  );
  return match ? (match[1] as { default: string }).default : "";
}

export default getImagePath;
