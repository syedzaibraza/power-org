import { NextResponse } from "next/server";
import { readdirSync } from "fs";
import { join } from "path";

const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".webp", ".gif"];

export async function GET() {
  try {
    const galleryPath = join(process.cwd(), "public", "gallery");
    const files = readdirSync(galleryPath);
    const images = files
      .filter((f) => IMAGE_EXT.some((ext) => f.toLowerCase().endsWith(ext)))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => ({
        src: `/gallery/${encodeURIComponent(f)}`,
      }));
    return NextResponse.json(images);
  } catch (err) {
    return NextResponse.json([], { status: 200 });
  }
}
