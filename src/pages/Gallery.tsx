import { galleryPhotos } from "@/lib/photos";
import { ArrowLeft, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <ImageIcon className="h-6 w-6" />
              </div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
                BrewLush Art Gallery
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Explore our cafe through photos
              </h1>
              <p className="mt-4 text-body text-base text-muted-foreground max-w-2xl">
                See the warm interiors, latte art, food moments, and cozy corners captured inside BrewLush Café.
              </p>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <a href={photo.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-80 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </a>
                <div className="p-4">
                  <p className="text-sm font-semibold text-foreground">{photo.alt}</p>
                  <p className="text-xs text-muted-foreground mt-2">Tap to enlarge</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
