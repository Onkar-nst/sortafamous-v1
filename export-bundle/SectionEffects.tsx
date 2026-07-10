import RevealTextEffect from "./RevealTextEffect";
import FadeAnimEffect from "./FadeAnimEffect";
import ScrollMoveUpEffect from "./ScrollMoveUpEffect";
import ScrollRotateIdleEffect from "./ScrollRotateIdleEffect";

/**
 * Mount this ONCE, high in your app tree (e.g. just under your top-level layout),
 * so the scroll-driven effects attach to the two sections by CSS class:
 *
 *   .reveal-text      → RevealTextEffect      (per-character reveal on scroll)
 *   .at_fade_anim     → FadeAnimEffect        (fade-up on scroll)
 *   .scroll-move-up   → ScrollMoveUpEffect    (bottom paragraph drifts up)
 *   .at-scroll-rotate → ScrollRotateIdleEffect (asterisk rotates with scroll)
 *
 * The scatter/parallax of the avatar thumbnails and the pinned testimonial
 * cards are self-contained inside the two section components themselves, so
 * they need nothing here.
 *
 * If your app uses a client-side router, remount these on route change by
 * giving each a `key={pathname}` — see the note in README.md.
 */
export default function SectionEffects() {
  return (
    <>
      <RevealTextEffect />
      <FadeAnimEffect />
      <ScrollMoveUpEffect />
      <ScrollRotateIdleEffect />
    </>
  );
}
