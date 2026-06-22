import React from "react";

const MenuPDF: React.FC = () => {
  const pdfFilename = "cafe pdf.pdf";
  const pdfUrl = new URL(`../assets/${pdfFilename}`, import.meta.url).href;

  return (
    <section className="max-w-4xl mx-auto my-12 px-4">
      <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur rounded-lg shadow-lg border border-slate-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-semibold">Our Menu</h2>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500 text-white rounded-md hover:bg-amber-600"
          >
            Open {pdfFilename}
          </a>
        </div>

        <div className="w-full h-[650px] md:h-[800px] border rounded overflow-hidden">
          <iframe src={pdfUrl} className="w-full h-full" title="Cafe Menu PDF" />
        </div>

        <p className="mt-3 text-sm text-slate-600">
          Open in a new tab or download <span className="font-medium">{pdfFilename}</span> for offline viewing.
        </p>
      </div>
    </section>
  );
};

export default MenuPDF;
