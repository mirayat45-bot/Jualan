"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulsePhase: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    const NODE_COUNT = typeof window !== "undefined" && window.innerWidth < 768 ? 40 : 80;
    const MAX_DISTANCE = 180;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initNodes = () => {
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Radial glow at center
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.7
      );
      gradient.addColorStop(0, "rgba(0, 128, 255, 0.04)");
      gradient.addColorStop(0.5, "rgba(0, 212, 255, 0.02)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.35;
            const pulse = Math.sin(time * 0.001 + nodes[i].pulsePhase) * 0.15 + 0.85;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            const lineGrad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            lineGrad.addColorStop(0, `rgba(0, 212, 255, ${alpha * pulse})`);
            lineGrad.addColorStop(0.5, `rgba(0, 128, 255, ${alpha * 0.5 * pulse})`);
            lineGrad.addColorStop(1, `rgba(0, 212, 255, ${alpha * pulse})`);

            ctx.strokeStyle = lineGrad;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(time * 0.002 + node.pulsePhase) * 0.3 + 0.7;
        const r = node.radius * pulse;

        // Outer glow
        const glowGrad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 8);
        glowGrad.addColorStop(0, `rgba(0, 212, 255, ${node.opacity * 0.4 * pulse})`);
        glowGrad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(node.x, node.y, r * 8, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${node.opacity * pulse})`;
        ctx.fill();
      });

      // Floating particles (small)
      const particleCount = 15;
      const t = time * 0.0003;
      for (let i = 0; i < particleCount; i++) {
        const px = (Math.sin(t + i * 1.3) * 0.5 + 0.5) * canvas.width;
        const py = (Math.cos(t * 0.7 + i * 0.9) * 0.5 + 0.5) * canvas.height;
        const pa = (Math.sin(t * 2 + i) * 0.5 + 0.5) * 0.3;

        ctx.beginPath();
        ctx.arc(px, py, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${pa})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    initNodes();
    animationId = requestAnimationFrame(draw);

    window.addEventListener("resize", () => {
      resize();
      initNodes();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}
