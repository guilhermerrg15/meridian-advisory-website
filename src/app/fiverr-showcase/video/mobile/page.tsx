import { VideoMobileFrame, VideoStage } from "@/components/fiverr/video-frames";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Clip responsive frame",
  description:
    "Responsive transition frame recorded into the promotional clip.",
  path: "/fiverr-showcase/video/mobile",
  noIndex: true,
});

export default function ClipMobilePage() {
  return (
    <VideoStage>
      <VideoMobileFrame />
    </VideoStage>
  );
}
