/**
 * Shared constants for the hidden Fiverr promotional showcase.
 *
 * The canvas size follows Fiverr's recommended gallery image of 1280 x 769
 * (horizontal 5:3). Fiverr center-crops gallery thumbnails to roughly 4:3, so
 * `SAFE_INSET` marks the horizontal band that always survives that crop.
 * Headlines and other critical copy must stay inside it.
 */
export const CANVAS_WIDTH = 1280;
export const CANVAS_HEIGHT = 769;
export const SAFE_INSET = 128;

export const canvasSize = { width: CANVAS_WIDTH, height: CANVAS_HEIGHT };

/**
 * Real browser captures produced by `npm run fiverr:screenshots`. They are
 * written to `public/fiverr-captures/` (git-ignored) so the showcase route can
 * compose them with plain <img> tags.
 */
export const captures = {
  desktopHome: "/fiverr-captures/desktop-home.png",
  desktopServices: "/fiverr-captures/desktop-services.png",
  mobileHome: "/fiverr-captures/mobile-home.png",
  mobileNavigation: "/fiverr-captures/mobile-navigation.png",
  contactForm: "/fiverr-captures/contact-form.png",
} as const;

/** Fictional domain from `siteConfig.url`; never a real or contactable host. */
export const demoDomain = "meridian-advisory.example.com";

export const portfolioBadge = "Self-initiated portfolio concept";
