import { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const stars: { x: number; y: number; z: number; size: number; color: string }[] = [];
    const STAR_COUNT = 800;

    const palette = [
      { r: 251, g: 247, b: 242 }, // cream
      { r: 212, g: 168, b: 83 },  // gold
      { r: 240, g: 230, b: 211 }, // parchment
    ];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        const c = palette[Math.floor(Math.random() * palette.length)];
        const variation = (Math.random() - 0.5) * 20;
        stars.push({
          x: Math.random() * w - w / 2,
          y: Math.random() * h - h / 2,
          z: Math.random() * 1000,
          size: Math.random() * 1.5 + 0.5,
          color: `rgb(${Math.min(255, Math.max(0, c.r + variation))}, ${Math.min(255, Math.max(0, c.g + variation))}, ${Math.min(255, Math.max(0, c.b + variation))})`,
        });
      }
    };

    resize();
    createStars();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / w - 0.5) * 2;
      mouseRef.current.y = (e.clientY / h - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', () => { resize(); createStars(); });

    let time = 0;

    const draw = () => {
      ctx.fillStyle = '#2C2F4E';
      ctx.fillRect(0, 0, w, h);

      time += 0.0003;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Rotation based on mouse
        const rotX = mouseRef.current.y * 0.02 + time;
        const rotY = mouseRef.current.x * 0.02;

        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);

        const y1 = s.y * cosX - s.z * sinX;
        const z1 = s.y * sinX + s.z * cosX;
        const x1 = s.x * cosY + z1 * sinY;
        const z2 = -s.x * sinY + z1 * cosY;

        const fov = 500;
        if (z2 + fov <= 0) continue;

        const scale = fov / (z2 + fov);
        const x2d = x1 * scale + w / 2;
        const y2d = y1 * scale + h / 2;

        // Mouse proximity effect
        const mouseXNorm = mouseRef.current.x * w / 2;
        const mouseYNorm = mouseRef.current.y * h / 2;
        const dx = x1 - mouseXNorm;
        const dy = y1 - mouseYNorm;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximityFactor = Math.max(0, 1 - dist / 300);
        const pulseSize = s.size * (1 + proximityFactor * 0.5 * (0.9 + 0.1 * Math.sin(time * 3 + i)));
        const alpha = Math.min(1, scale * 0.8 + proximityFactor * 0.3);

        ctx.beginPath();
        ctx.arc(x2d, y2d, pulseSize * scale, 0, Math.PI * 2);
        ctx.fillStyle = s.color.replace('rgb', 'rgba').replace(')', `, ${alpha})`);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
