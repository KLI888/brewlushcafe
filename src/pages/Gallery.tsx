import { galleryPhotos } from "@/lib/photos";
import { Coffee } from "lucide-react";

const Gallery = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Coffee className="h-6 w-6" />
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
              BrewLush Gallery
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Artful moments from our cafe
            </h1>
            <p className="mt-4 text-body text-base text-muted-foreground max-w-2xl mx-auto">
              Explore the cozy corners, warm lighting, and signature cafe atmosphere captured in our Pune BrewLush Café.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
                <a href={photo.src} target="_blank" rel="noopener noreferrer">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
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
