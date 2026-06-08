import { Link } from "react-router-dom";
import { galleryPhotos } from "@/lib/photos";

const GalleryPreview = () => {
  const previewPhotos = galleryPhotos.slice(0, 4);

  return (
    <section className="relative max-w-6xl mx-auto py-20 px-4">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            BrewLush Moments
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Cafe photo gallery
          </h2>
          <p className="text-body text-base text-muted-foreground max-w-2xl mt-3">
            See BrewLush Café in Ravet through our warm interiors, artful details, and happy moments.
          </p>
        </div>
        <Link
          to="/gallery"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          View full gallery
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {previewPhotos.map((photo) => (
          <div key={photo.src} className="overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPreview;
