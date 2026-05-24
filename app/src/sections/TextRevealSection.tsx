import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const words = ['AUTHENTIC', 'CURATED', 'GLOBAL', 'YOURS'];

export default function TextRevealSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray<HTMLElement>('.text-reveal-item');

      texts.forEach((text) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: text,
            start: 'top 85%',
            end: 'bottom 40%',
            scrub: 1,
          },
        });

        tl.fromTo(
          text,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, ease: 'power2.out' },
          0
        );

        tl.fromTo(
          text,
          { opacity: 1 },
          { opacity: 0, scale: 1.05, ease: 'power2.in' },
          0.6
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-navy py-32 md:py-48"
    >
      <div className="flex flex-col items-center justify-center">
        {words.map((word, i) => (
          <div
            key={i}
            className="w-full text-center py-12 md:py-16"
          >
            <h2
              className="text-reveal-item font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-light tracking-[-0.02em] text-cream opacity-0 will-change-transform"
              style={{ lineHeight: 1 }}
            >
              {word}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
