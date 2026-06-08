type PhotoModule = { default: string };

const photoModules = import.meta.glob("../assets/photos/*.{jpg,jpeg,png}", {
  eager: true,
}) as Record<string, PhotoModule>;

export const galleryPhotos = Object.entries(photoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([file], index) => ({
    src: photoModules[file].default,
    alt: `BrewLush Café photo ${index + 1}`,
  }));
