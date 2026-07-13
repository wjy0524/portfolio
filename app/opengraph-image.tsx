import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Jaeyeon Won – Software Engineer";

export default async function Image() {
  const photoPath = path.join(process.cwd(), "public", "profile-og.jpg");
  const photoData = fs.readFileSync(photoPath);
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <img
          src={photoSrc}
          width={480}
          height={630}
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            gap: 18,
          }}
        >
          <div style={{ fontSize: 58, fontWeight: 700, color: "#111827" }}>
            Jaeyeon Won
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, color: "#2563eb" }}>
            Software Engineer
          </div>
          <div style={{ fontSize: 26, color: "#6b7280" }}>
            ECE @ UT Austin · Embedded Systems · AI · Apps
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
