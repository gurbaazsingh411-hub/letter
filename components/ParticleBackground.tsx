import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: HeartParticle[] = [];

    const colors = ['#ffb6c1', '#ffc0cb', '#ffe4e1', '#fff0f5']; // pastel pinks

    class HeartParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      rotation: number;
      rotationSpeed: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 5 + 3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = -Math.random() * 0.5 - 0.2; // float upwards
        this.opacity = Math.random() * 0.4 + 0.4; // Higher baseline opacity
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        
        // Draw heart shape
        const topCurveHeight = this.size * 0.3;
        ctx.bezierCurveTo(0, -topCurveHeight, -this.size, -topCurveHeight, -this.size, 0);
        ctx.bezierCurveTo(-this.size, topCurveHeight, 0, this.size, 0, this.size * 1.5);
        ctx.bezierCurveTo(0, this.size, this.size, topCurveHeight, this.size, 0);
        ctx.bezierCurveTo(this.size, -topCurveHeight, 0, -topCurveHeight, 0, 0);
        
        ctx.fillStyle = `rgba(255, 107, 107, ${this.opacity})`; // Brighter pink/red
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.y < -this.size) {
          this.y = canvas!.height + this.size;
          this.x = Math.random() * canvas!.width;
        }
        if (this.x < 0 || this.x > canvas!.width) {
          this.speedX *= -1;
        }
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < 40; i++) {
        particles.push(new HeartParticle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'linear-gradient(to bottom, #fffaf0, #fff0f5)',
      }}
    />
  );
};

export default ParticleBackground;
