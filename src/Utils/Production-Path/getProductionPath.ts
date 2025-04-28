// This function will grab and import the assets properly so in production, vite includes medias (picture, videos, and etc.) correctly in the project production phase.

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
