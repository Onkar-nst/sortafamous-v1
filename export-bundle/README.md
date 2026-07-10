# Scatter-Hero + Testimonials — portable bundle

Two sections from this project, packaged so you can drop them into another React
project with the **same animations and effects**. Everything they need lives in
this one folder.

## What's inside

| File | What it is |
|------|------------|
| `HeroScatterTestimonial.tsx` | **The section in your screenshot** — scattered circular avatars that spread apart on scroll (GSAP), a rotating brand-quote line ("Fame is earned. We manage the rest.") that reveals character-by-character, and a "Get in touch" pill button flanked by prev/next arrows (Swiper). |
| `InsightsFromPartners.tsx` | **The testimonials section** — a centre title that stays *pinned* while four testimonial cards scrub upward past it (GSAP ScrollTrigger pin). Blinking-dot eyebrow, star ratings, per-character title reveal. |
| `RevealText.tsx` | Splits text into per-word / per-character spans so it can be revealed. Used by both sections. |
| `SectionEyebrow.tsx` | The "● TESTIMONIALS ↗" eyebrow (blinking green dot). |
| `smoothScrollTo.ts` | Smooth in-page scroll for the "Get in touch" link. |
| `RevealTextEffect.tsx` | Scroll-driven per-character reveal for any `.reveal-text`. |
| `FadeAnimEffect.tsx` | Scroll fade-up for any `.at_fade_anim`. |
| `ScrollMoveUpEffect.tsx` | Drift-up for `.scroll-move-up` (the closing line). |
| `ScrollRotateIdleEffect.tsx` | Rotates the `.at-scroll-rotate` asterisk with scroll. |
| `SectionEffects.tsx` | Mounts the four effects above — **render this once** in your app. |
| `scatter-testimonial.css` | All styles for both sections (self-contained). |
| `assets/` | The images both sections use. |

## Animations, at a glance

**HeroScatterTestimonial**
- *Scatter parallax* — avatars 1,2,4,5 fly outward on scroll. Owned locally in the
  component (`gsap.matchMedia` + `ScrollTrigger`, different distances per breakpoint;
  no effect below 575px). See the `// GSAP thumbs parallax` `useEffect`.
- *Quote reveal* — each character of the headline fades/slides in on scroll
  (`RevealText` markup + `RevealTextEffect`).
- *Swiper* — thumbnails ↔ main quote are linked Swipers with 5s autoplay.
- *Button group* — the flanking circle buttons scale in on hover (pure CSS `.at-btn-group`).

**InsightsFromPartners**
- *Pinned scroll* — the centre title is pinned and the cards translate up past it
  (`ScrollTrigger` `pin` + `scrub`). Owned locally in the component so it survives
  layout shifts; disabled below 992px. See the first `useEffect`.
- *Title reveal* — `.reveal-text` per-character.
- *Eyebrow dot* — CSS blink. *Asterisk* — rotates with scroll (`.at-scroll-rotate`).
- *Closing line* — fades up + drifts (`.at_fade_anim` + `.scroll-move-up`).

## Install (in the target project)

```bash
npm i gsap swiper
# React 18 or 19, TypeScript. Bootstrap 5 utility classes are used for layout.
```

Peer requirements the markup leans on:
- **GSAP** with the `ScrollTrigger` plugin (imported dynamically inside the components — nothing to register yourself). `ScrollSmoother` is optional; `smoothScrollTo` falls back to native scroll without it.
- **Swiper** — import its CSS once anywhere: `import "swiper/css";`
- **Bootstrap 5 CSS** — the JSX uses grid/utility classes (`container`, `row`, `col-*`, `d-flex`, `justify-content-center`, `mt-50`, `w-50`, `mx-auto`, `fw-700`, …). Either include Bootstrap's CSS, or provide equivalents. The section-specific spacing helpers (`pt-120`, `pb-120`, `mt-50`, `sf-section-gutter`) are already in `scatter-testimonial.css`.

## Use

```tsx
import HeroScatterTestimonial from "./export-bundle/HeroScatterTestimonial";
import InsightsFromPartners from "./export-bundle/InsightsFromPartners";
import SectionEffects from "./export-bundle/SectionEffects";
import "./export-bundle/scatter-testimonial.css";
import "swiper/css";
// import "bootstrap/dist/css/bootstrap.min.css"; // if you don't already have it

export default function Page() {
  return (
    <>
      <HeroScatterTestimonial />
      <InsightsFromPartners />
      {/* Mount ONCE, anywhere in the tree. */}
      <SectionEffects />
    </>
  );
}
```

### Images
Both components reference `/assets/imgs/...` absolute paths. The images are copied
into `export-bundle/assets/`. Either:
1. Copy `assets/scatter/*` and `assets/testimonial/*` into your `public/` folder at
   matching paths, **or**
2. Edit the `src` strings in the two `.tsx` files to point at wherever you put them
   (search for `/assets/imgs/`).

Files used:
- Scatter avatars: `assets/scatter/avatar-15…19.webp`
- Testimonials: `assets/testimonial/sec8-avatar-1…4.webp`, `sec8-star.svg`, `sec8-asterisk.svg`

### Router note
If your app uses React Router, remount the effects on navigation so they re-scan
new DOM — give each effect (or `SectionEffects`) a `key={location.pathname}`.
On a single static page you don't need this.

### Notes
- The testimonial quotes in `InsightsFromPartners.tsx` are **placeholders** (tagged
  `[Sample]`) — swap in real ones.
- Both sections were designed on a **light/cream** theme. Colours come from the
  `--at-neutral-*` CSS variables defined at the top of `scatter-testimonial.css`.
