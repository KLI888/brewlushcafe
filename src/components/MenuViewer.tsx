import React, { useEffect, useState } from "react";

type MenuViewerProps = {
  src?: string;
  height?: string;
  className?: string;
};

const MenuViewer: React.FC<MenuViewerProps> = ({
  src = "/menu.pdf",
  height = "800px",
  className = "",
}) => {
  const [status, setStatus] = useState<
    "checking" | "ok" | "notfound" | "notpdf" | "error"
  >(src ? "checking" : "notfound");

  useEffect(() => {
    if (!src) {
      setStatus("notfound");
      return;
    }

    let aborted = false;

    async function check() {
      try {
        // First try a HEAD request to check content-type
        let res = await fetch(src, { method: "HEAD" });
        let contentType = res.headers.get("content-type") || "";

        // Some servers don't respond to HEAD properly — fall back to a tiny GET
        if (!res.ok || !contentType) {
          res = await fetch(src, { method: "GET", headers: { Range: "bytes=0-0" } });
          contentType = res.headers.get("content-type") || "";
        }

        if (aborted) return;

        if (!res.ok) {
          setStatus("notfound");
          return;
        }

        if (contentType.includes("pdf")) {
          setStatus("ok");
        } else {
          setStatus("notpdf");
        }
      } catch (e) {
        if (aborted) return;
        setStatus("error");
      }
    }

    check();

    return () => {
      aborted = true;
    };
  }, [src]);

  return (
    <section className={`max-w-4xl mx-auto my-12 px-4 ${className}`}>
      <h2 className="text-2xl font-semibold mb-4">Our Menu</h2>

      {status === "checking" && (
        <div className="border rounded overflow-hidden" style={{ height }}>
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-sm text-gray-500">Loading menu…</span>
          </div>
        </div>
      )}

      {status === "ok" && (
        <div className="border rounded overflow-hidden">
          <object
            data={src}
            type="application/pdf"
            className="w-full"
            style={{ height }}
            aria-label="Cafe Menu PDF"
          >
            <embed src={src} type="application/pdf" width="100%" style={{ height }} />
            <div className="p-4">
              <p className="text-sm">
                Your browser does not support displaying PDFs. You can download it instead:
              </p>
              <a href={src} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">
                Open or download the PDF
              </a>
            </div>
          </object>
        </div>
      )}

      {status === "notpdf" && (
        <div className="border rounded p-4 bg-yellow-50">
          <p className="text-sm text-yellow-800">
            The requested resource was found but is not a PDF. You can open it directly:
          </p>
          <a href={src} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">
            Open the file
          </a>
        </div>
      )}

      {status === "notfound" && (
        <div className="border rounded p-4 bg-red-50">
          <p className="text-sm text-red-800">Menu PDF not found at the given location.</p>
          <p className="text-sm">
            Please place your PDF at <strong>public/menu.pdf</strong> or pass a valid PDF URL to the
            `src` prop.
          </p>
          <a href={src} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">
            Try opening the path
          </a>
        </div>
      )}

      {status === "error" && (
        <div className="border rounded p-4 bg-red-50">
          <p className="text-sm text-red-800">Failed to load menu. Try opening it directly.</p>
          <a href={src} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">
            Open or download the PDF
          </a>
        </div>
      )}
    </section>
  );
};

export default MenuViewer;
