const assets = import.meta.glob(
  "/src/assets/**/*.{png,jpg,jpeg,svg,webm,mp4,webp}",
  { eager: true }
);

function getProductionPath(fileName: string): string {
  const match = Object.entries(assets).find(([path]) =>
    path.includes(fileName)
  );
  return match ? (match[1] as { default: string }).default : "";
}

export default getProductionPath;
