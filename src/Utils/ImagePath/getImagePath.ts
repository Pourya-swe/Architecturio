const images = import.meta.glob("/src/assets/images/*.png", { eager: true });

function getImagePath(fileName: string): string {
  const match = Object.entries(images).find(([path, mod]) =>
    path.includes(fileName)
  );
  return match ? match[1].default : "";
}

export default getImagePath;
