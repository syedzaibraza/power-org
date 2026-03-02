import { NextResponse } from "next/server";
import { readdirSync } from "fs";
import { join } from "path";

const VIDEO_EXT = [".mp4", ".webm", ".mov", ".m4v"];

export async function GET() {
  try {
    const videosPath = join(process.cwd(), "public", "videos");
    const files = readdirSync(videosPath);
    const videos = files
      .filter((f) => VIDEO_EXT.some((ext) => f.toLowerCase().endsWith(ext)))
      .map((f) => ({
        src: `/videos/${encodeURIComponent(f)}`,
        caption: f.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
      }));
    return NextResponse.json(videos);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
