import { VideoStage, VideoTitleFrame } from "@/components/fiverr/video-frames";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Clip title frame",
  description: "Opening frame recorded into the promotional clip.",
  path: "/fiverr-showcase/video/title",
  noIndex: true,
});

export default function ClipTitlePage() {
  return (
    <VideoStage>
      <VideoTitleFrame />
    </VideoStage>
  );
}
