import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  type: 'red' | 'blue';
}

export const ScientificBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle nodes count
    const particleCount = Math.min(Math.floor((width * height) / 19000), 50);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.2 + Math.random() * 1.8;
      // 70% red USAL, 30% blue USAL to match "más rojo que azul"
      const type: 'red' | 'blue' = Math.random() > 0.3 ? 'red' : 'blue';
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius,
        baseRadius: radius,
        alpha: 0.25 + Math.random() * 0.45,
        type
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains('dark');
      // USAL corporate colors: #d22020 (Rojo) & #385e9d (Azul)
      const redNode = isDark ? '230, 57, 57' : '210, 32, 32';
      const blueNode = isDark ? '91, 130, 198' : '56, 94, 157';
      const lineColor = isDark ? '91, 130, 198' : '56, 94, 157';

      // Connect near particles with delicate molecular lines
      const maxDistance = 115;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * (isDark ? 0.16 : 0.12);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${lineColor}, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particle nodes
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const nodeColor = p.type === 'red' ? redNode : blueNode;
        ctx.fillStyle = `rgba(${nodeColor}, ${p.alpha})`;
        ctx.fill();

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;

          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-60"
      aria-hidden="true"
    />
  );
};
