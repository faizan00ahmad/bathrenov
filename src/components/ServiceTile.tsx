import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceTile({ s, index, heading = "h3" }: { s: Service; index: number; heading?: "h2" | "h3" }) {
  const H = heading;
  return (
    <Link href={`/services/${s.slug}/`} className="tile reveal" aria-label={s.name}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/media/service-${index + 1}.webp`}
        alt={`${s.name}: ${s.short}`}
        width={800}
        height={900}
        loading="lazy"
        decoding="async"
      />
      <div className="label glass">
        <div>
          <H>{s.name}</H>
        </div>
        <span className="go" aria-hidden="true">→</span>
      </div>
    </Link>
  );
}
