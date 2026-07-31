# Fiverr gallery assets — Business Website

Promotional material for a Fiverr gig, generated from the finished
**Meridian Advisory** website in this repository. Meridian Advisory is a
fictional brand and this is a self-initiated portfolio concept: no real client,
engagement, or commercial result is represented anywhere in these files.

Everything here is produced by automation from the real site. Nothing is a
placeholder, a stock mockup, or a hand-edited screenshot.

## What to upload

| Slot                | File                               | Notes                                                       |
| ------------------- | ---------------------------------- | ----------------------------------------------------------- |
| Gallery image **1** | `business-website-gallery.png`     | Main image. Upload first — Fiverr uses it as the thumbnail. |
| Gallery image 2     | `gallery-desktop-presentation.png` | Desktop experience slide.                                   |
| Gallery image 3     | `gallery-mobile-responsive.png`    | Responsive design slide.                                    |
| Gallery image 4     | `desktop-home.png`                 | Raw desktop capture, if a plain screenshot is preferred.    |
| Gallery image 5     | `mobile-home.png`                  | Raw mobile capture.                                         |
| PDF attachment      | `business-website-case-study.pdf`  | Three-page case study.                                      |
| Video               | `business-website-clip.mp4`        | 18.7 s silent clip, H.264.                                  |

Fiverr accepts up to five gallery files, so the table above is already ordered
for a full upload.

## File reference

### Presentation images (composed canvases)

| File                               | Size       | Contents                                                          |
| ---------------------------------- | ---------- | ----------------------------------------------------------------- |
| `business-website-gallery.png`     | 1280 × 769 | Headline, feature labels, browser + phone + services mockups.     |
| `gallery-desktop-presentation.png` | 1280 × 769 | Home and services pages side by side with four capability labels. |
| `gallery-mobile-responsive.png`    | 1280 × 769 | Two phone frames plus the reviewed breakpoint list.               |

All device frames (browser chrome, phone bezels, panels) are drawn with plain
HTML and CSS in `src/components/fiverr/frames.tsx`. No licensed mockup artwork
or third-party template is used.

### Raw browser captures

| File                    | Size        | Source                                                      |
| ----------------------- | ----------- | ----------------------------------------------------------- |
| `desktop-home.png`      | 2880 × 2000 | `/` at a 1440 × 1000 viewport, captured at 2× device scale. |
| `desktop-services.png`  | 2880 × 2000 | `/services` at the same viewport.                           |
| `mobile-home.png`       | 780 × 1688  | `/` at a 390 × 844 viewport, 2× device scale.               |
| `mobile-navigation.png` | 780 × 1688  | Same viewport with the mobile menu open.                    |
| `contact-form.png`      | 1154 × 1334 | The contact form card only, captured as an element.         |

### Documents and video

| File                              | Details                                                          |
| --------------------------------- | ---------------------------------------------------------------- |
| `business-website-case-study.pdf` | Exactly 3 pages, each 1280 × 769 (horizontal 5:3), 2.5 MB.       |
| `business-website-clip.mp4`       | 18.7 s, 1280 × 720, 30 fps, H.264 High profile, silent, 2.15 MB. |

PDF page order: project overview, website solution, technology and process.

## How the material is generated

Every asset is exported from the hidden `/fiverr-showcase` route, which is
excluded from the navigation, the sitemap, and `robots.txt`. The route is built
from the same components and design tokens as the live site.

```bash
npm run fiverr:assets
```

That command builds the project, starts the **production** server on port 3100
(so the development overlay never appears in a capture), runs each export in
order, and shuts the server down afterwards.

Individual steps, all of which assume `npm run build` has been run at least
once:

```bash
npm run fiverr:screenshots   # real browser captures of the live site
npm run fiverr:gallery       # 1280 x 769 gallery canvases
npm run fiverr:pdf           # three-page case study PDF
npm run fiverr:video         # record the clip and encode it to MP4
```

The specs assert the results rather than trusting them: exact pixel dimensions
for every canvas, a page count of exactly 3 for the PDF, no content overflowing
a PDF page box, and a clip duration between 15 and 22 seconds under 20 MB.

### How the video was made

Playwright drives a real Chromium session through the production site: title
screen, home hero, a slow scripted scroll through the services overview,
navigation to the services page, typing into the contact form, a responsive
frame, and the closing screen. Playwright can only write VP8 WebM, so the
recording is transcoded to H.264 with the ffmpeg binary provided by the
`ffmpeg-static` dev dependency. The first second is trimmed because it contains
the blank frames recorded before the title screen paints, which keeps the very
first frame usable as a thumbnail.

Exact conversion command (as logged by `npm run fiverr:video`):

```bash
ffmpeg -y -ss 1 -i <recording>.webm \
  -vf "fps=30,scale=1280:720:flags=lanczos" \
  -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p \
  -profile:v high -movflags +faststart -an \
  fiverr-assets/business-website/business-website-clip.mp4
```

If `ffmpeg-static` is unavailable, the spec falls back to an `ffmpeg`
installation on `PATH`.

## Fonts and project assets

- **Fraunces** (display) and **Source Sans 3** (body), self-hosted through
  `next/font/google` in `src/app/layout.tsx`. The same pairing as the website.
- Colour tokens from `src/app/globals.css`: canvas `#F8F9FB`, navy `#0F2744`,
  cobalt `#2563EB`, amber `#F59E0B`.
- The logo mark is the original SVG from `src/components/layout/Logo.tsx`.
- All screenshots are of this repository's own website.

No stock photography, purchased template, or externally licensed asset is
included.

## Contact information statement

These files contain **no** personal email address, phone number, WhatsApp
number, social media handle, QR code, payment detail, or invitation to make
contact outside Fiverr.

The only address-like string that appears is the fictional label
`hello@meridian-advisory.example`, which belongs to the demo website's own
footer and contact page. `.example` is an IANA-reserved domain that cannot send
or receive mail, and the site states next to it that no personal contact
details are published. Browser mockups show the fictional host
`meridian-advisory.example.com` rather than any live deployment URL. The
composed gallery images and the PDF avoid the label entirely; it is only
visible in the walkthrough video and in the raw full-page captures, as part of
the demonstrated website.
