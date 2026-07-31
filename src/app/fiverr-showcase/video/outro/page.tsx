import { VideoOutroFrame, VideoStage } from "@/components/fiverr/video-frames";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Clip closing frame",
  description: "Closing frame recorded into the promotional clip.",
  path: "/fiverr-showcase/video/outro",
  noIndex: true,
});

export default function ClipOutroPage() {
  return (
    <VideoStage>
      <VideoOutroFrame />
    </VideoStage>
  );
}
