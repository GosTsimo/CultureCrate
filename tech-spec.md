# CultureCrate - Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.1 | UI framework |
| react-dom | ^19.1 | React DOM renderer |
| react-router-dom | ^7.6 | Client-side SPA routing (14+ pages) |
| three | ^0.175 | 3D engine (Starfield, Phone mockup) |
| @types/three | ^0.175 | TypeScript types for Three.js |
| gsap | ^3.13 | Core animation engine, ScrollTrigger, SplitText |
| lenis | ^1.3 | Smooth scroll with inertia |
| tailwindcss | ^4.1 | Utility-first CSS |
| @tailwindcss/vite | ^4.1 | Tailwind Vite integration |
| typescript | ^5.8 | Type safety |
| vite | ^6.3 | Build tool |
| @vitejs/plugin-react | ^4.5 | React Vite plugin |

---

## Component Inventory

### Layout

| Component | Source | Notes |
|-----------|--------|-------|
| Navbar | Custom | Fixed, transparent on Home, solid Cream on product pages. Gold "Subscribe" CTA. |
| Footer | Custom | Deep Navy, newsletter signup with gold border, quick links. |
| PageTransitionOverlay | Custom | Deep Navy fullscreen div, fades in/out on route change to mask Three.js canvas re-mounting. |

### Pages

| Component | Source | Notes |
|-----------|--------|-------|
| HomePage | Custom | Combines Hero (Gallery), Scroll Narrative (Text Reveal), Country Explorer (Starfield). |
| MoroccoBoxPage | Custom | Two-col hero, highlights, Digital Experience (3D Phone), Isometric Journey, Gallery, Footer. |
| MexicoBoxPage | Custom | Same structure as MoroccoBoxPage, different assets/colors. |
| PeruBoxPage | Custom | Same structure as MoroccoBoxPage, different assets/colors. |
| ChinaBoxPage | Custom | Same structure as MoroccoBoxPage, different assets/colors. |
| ItalyBoxPage | Custom | Same structure as MoroccoBoxPage, different assets/colors. |
| SubscriptionPlansPage | Custom | Pricing cards, plan comparison. |
| AboutPage | Custom | Brand story, team, values. |
| ContactPage | Custom | Contact form, info. |
| FAQPage | Custom | Accordion-style FAQ. |
| LoginPage | Custom | Login/register form toggle. |
| DashboardPage | Custom | Subscription management, order history, profile. |
| BlogPage | Custom | Stories listing. |
| BlogPostPage | Custom | Individual story. |
| NotFoundPage | Custom | Creative 404 with starfield background. |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| AtmosphericGallery | Custom | HomePage — CSS 3D carousel with FLIP fullscreen viewer. |
| CinematicTextReveal | Custom | HomePage — GSAP ScrollTrigger fade/scale text sequence. |
| HypnoticStarfield | Custom | HomePage (Country Explorer), NotFoundPage — Three.js Points shader system. |
| CountrySelectorPills | Custom | HomePage (within Starfield section) — 5 pill buttons overlaying the canvas. |
| PhoneMockup3D | Custom | MoroccoBoxPage, MexicoBoxPage, etc. — Three.js scene with video texture, drag rotation. |
| IsometricBlocksScroll | Custom | MoroccoBoxPage, etc. — GSAP ScrollTrigger horizontal wipe reveal. |
| BoxHeroSection | Custom | All country detail pages — Two-column hero with title, description, CTA, product image. |
| ProductHighlights | Custom | All country detail pages — Three-icon feature row. |
| GalleryCarousel | Custom | Country detail pages — Horizontal scroll carousel. |
| TrustFeaturesRow | Custom | Country detail pages — Four feature badges. |
| PricingCards | Custom | SubscriptionPlansPage — Animated plan comparison cards. |

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Atmospheric Gallery (CSS 3D Cube) | Vanilla JS (RAF) | CSS `preserve-3d` transforms on 12 cells. Pointer drag updates `rotateY`. RAF loop lerps current to target angle. Opacity toggles for active cells. | **High** 🔒 |
| Fullscreen FLIP Expand | CSS Transitions + JS | On card click: compute start/end rects, apply inverse transform, force reflow, remove transform, let CSS transition animate to fullscreen. Reverse on close. | **High** 🔒 |
| Cinematic Text Reveal | GSAP + ScrollTrigger | `scrub: 1` timeline per text item. Fade/scale in at 0, fade/scale out at 0.6. | Medium |
| Hypnotic Starfield | Three.js (raw) | Custom WebGL vertex/fragment shaders. 10,000 particles with rotation around cursor, pulsing size based on mouse proximity. GoldenRatio exponential falloff. | **High** 🔒 |
| Isometric Blocks Scroll | GSAP + ScrollTrigger | `scrub: true` timeline. 300vh container with sticky inner. Images animate x: ±100% alternately. Text blocks fade in with staggered entry. Lenis slows scroll (lerp 0.05, wheelMultiplier 0.7). | **High** 🔒 |
| 3D Phone Mockup | Three.js (raw) | Rounded box geometry for body. VideoTexture on screen plane. RoomEnvironment for PBR reflections. Pointer drag with inertia (delta × 0.95/frame). | **High** 🔒 |
| Page Transitions | GSAP | Deep Navy overlay fades in/out over 400ms on route change. Necessary to mask Three.js canvas creation/destruction. | Medium |
| Navbar Scroll State | CSS/JS | Toggle transparent ↔ solid background class based on scroll position. | Low |
| Gallery Carousel | CSS scroll-snap | Horizontal scroll container with `scroll-snap-type: x mandatory`. | Low |
| Button Hover States | CSS | Gold background color transition to hover shade. | Low |

---

## State & Logic

### React ↔ Three.js Bridge (Non-obvious)

All three Three.js scenes (Starfield, Phone Mockup, Gallery) use **raw Three.js** (not R3F). Each scene is wrapped in a React component that:
1. Creates the renderer, scene, and camera in a `useEffect` on mount.
2. Manages its own RAF loop via `useRef` for the animation frame ID.
3. Stores mutable state (mouse coords, rotation angles) in `useRef` to avoid React re-renders during 60fps updates.
4. Cleans up renderer, geometries, materials, and textures on unmount to prevent WebGL context leaks.
5. Exposes no imperative handles — all interaction is via DOM event listeners attached inside the effect.

This approach is chosen because the Starfield and Phone require custom GLSL shaders and imperative pointer logic that R3F's declarative model would fight against. Gallery uses CSS 3D (not Three.js) so it is pure DOM.

### Page Transition Orchestration

Route changes must wait for the exit animation to complete before the new route mounts, and the enter animation must fire after mount. Implementation:
1. Router uses a wrapper component that intercepts navigation.
2. On navigation intent: GSAP animates overlay to `opacity: 1`.
3. On animation complete: `navigate()` is called.
4. New page mounts, initializes its Three.js scenes.
5. GSAP animates overlay to `opacity: 0`.

This is necessary because Three.js canvases cannot be hidden/shown via CSS — they must be created after the DOM element exists and destroyed when no longer needed.

### Lenis + GSAP ScrollTrigger Global Setup

Lenis is instantiated once at the app root. GSAP ScrollTrigger must be configured to use Lenis's scroll position:
- `ScrollTrigger.scrollerProxy` or `lenis.on('scroll', ScrollTrigger.update)` bridges Lenis events to ScrollTrigger.
- Lenis `requestAnimationFrame` loop must be started manually and tied to GSAP's ticker.
- On route change, Lenis must `.scrollTo(0, { immediate: true })` and all ScrollTriggers must be `.kill()`ed before new ones are created.
