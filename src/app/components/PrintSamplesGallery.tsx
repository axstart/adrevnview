import { useMemo, useState } from "react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  PRINT_SAMPLE_FILTERS,
  samplesForService,
  type PrintSample,
  type PrintSampleCategory,
} from "@/lib/content/printSamples";

type PrintSamplesGalleryProps = {
  slug: string;
  showFilters?: boolean;
};

export function PrintSamplesGallery({ slug, showFilters = false }: PrintSamplesGalleryProps) {
  const all = useMemo(() => samplesForService(slug), [slug]);
  const [filter, setFilter] = useState<"all" | PrintSampleCategory>("all");

  if (all.length === 0) return null;

  const samples: PrintSample[] = showFilters && filter !== "all" ? all.filter((s) => s.category === filter) : all;

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
        Print samples
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-2xl">
        Original mockups of best-selling print formats. Names and marks are fictional demonstration brands — not client
        work and not affiliated with any real company.
      </p>

      {showFilters ? (
        <div className="flex flex-wrap gap-2 mb-6">
          {PRINT_SAMPLE_FILTERS.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  active
                    ? "bg-sky-600 text-white border-sky-600"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-sky-500/40"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="grid sm:grid-cols-2 gap-5">
        {samples.map((sample) => (
          <figure key={sample.id} className="rounded-xl border border-border bg-card overflow-hidden">
            <ImageWithFallback
              src={sample.image}
              alt={sample.alt}
              className="w-full h-56 object-cover"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="p-4">
              <p className="text-foreground font-semibold text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                {sample.title}
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                {sample.categoryLabel} · {sample.finish}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
