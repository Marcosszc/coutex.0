import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ intensity = 'medium' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for subtle interactive energy distortion
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 180,
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Particle density calculation
    const particleCount = Math.floor(
      (width * height) / (intensity === 'high' ? 9000 : intensity === 'medium' ? 14000 : 20000)
    );

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseRadius: number;
      radius: number;
      alpha: number;
      color: string;
      pulseSpeed: number;
      pulsePhase: number;
    }

    const blueColors = [
      'rgba(56, 189, 248, ',  // sky-400
      'rgba(14, 165, 233, ',  // sky-500
      'rgba(59, 130, 246, ',  // blue-500
      'rgba(37, 99, 235, ',   // blue-600
      'rgba(96, 165, 250, ',  // blue-400
      'rgba(30, 58, 138, ',   // blue-900 (deep)
    ];

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const colorBase = blueColors[Math.floor(Math.random() * blueColors.length)];
      const baseRadius = Math.random() * 2.2 + 0.8;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        baseRadius,
        radius: baseRadius,
        alpha: Math.random() * 0.6 + 0.2,
        color: colorBase,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Energy pulse waves
    let energyWaves: Array<{ x: number; y: number; r: number; maxR: number; alpha: number }> = [];
    let lastWaveTime = 0;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Periodically spawn subtle background energy wave
      if (time - lastWaveTime > 4000) {
        lastWaveTime = time;
        energyWaves.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: 10,
          maxR: Math.min(width, height) * 0.5,
          alpha: 0.18,
        });
      }

      // Draw subtle energy rings expanding in deep blue
      for (let i = energyWaves.length - 1; i >= 0; i--) {
        const wave = energyWaves[i];
        wave.r += 0.8;
        wave.alpha *= 0.985;

        if (wave.alpha <= 0.005 || wave.r >= wave.maxR) {
          energyWaves.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(wave.x, wave.y, wave.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(14, 165, 233, ${wave.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Pulse size and alpha
        p.pulsePhase += p.pulseSpeed;
        const pulse = Math.sin(p.pulsePhase);
        p.radius = p.baseRadius + pulse * 0.6;
        const currentAlpha = Math.max(0.1, Math.min(0.9, p.alpha + pulse * 0.15));

        // Mouse interaction: subtle organic deflection
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 1.5;
          p.y -= Math.sin(angle) * force * 1.5;
        }

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
        ctx.shadowBlur = p.radius > 2 ? 12 : 6;
        ctx.fill();

        // Connect nearby particles with luminous blue lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 130;

          if (distBetween < maxDist) {
            const lineAlpha = (1 - distBetween / maxDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      id="coutex-background-canvas"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
