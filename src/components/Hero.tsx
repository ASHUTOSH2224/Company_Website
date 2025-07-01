import React, { useEffect, useRef } from 'react';
import { ChevronRight, Play, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles with different colors
    const colors = ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'];
    
    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationFrame: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 6, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 3
        );
        gradient.addColorStop(0, `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections with enhanced visuals
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            );
            lineGradient.addColorStop(0, `${particle.color}${Math.floor((0.3 * (1 - distance / 120)) * 255).toString(16).padStart(2, '0')}`);
            lineGradient.addColorStop(1, `${otherParticle.color}${Math.floor((0.3 * (1 - distance / 120)) * 255).toString(16).padStart(2, '0')}`);
            
            ctx.strokeStyle = lineGradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #0a0a23 0%, #1e1b4b 30%, #312e81 70%, #1e293b 100%)' }}
      />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Animated badge */}
          <div className="animate-fade-in-down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8">
              <Sparkles size={16} className="animate-pulse" />
              <span>Elevating Intelligence Since 2025</span>
            </div>
          </div>

          {/* Main heading with staggered animation */}
          <div className="space-y-4">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              <div className="animate-fade-in-up animate-delay-100">
                <span className="text-gradient-animated">
                  Upstraiq:
                </span>
              </div>
              <div className="animate-fade-in-up animate-delay-200">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-text-shimmer">
                  Elevating Intelligence.
                </span>
              </div>
              <div className="animate-fade-in-up animate-delay-300">
                <span className="text-white">
                  Building Your Future.
                </span>
              </div>
            </h1>
          </div>
          
          {/* Subtitle with enhanced typography */}
          <div className="animate-fade-in-up animate-delay-400">
            <p className="font-body text-xl sm:text-2xl lg:text-3xl text-slate-300 max-w-5xl mx-auto leading-relaxed font-light">
              We craft <span className="text-cyan-400 font-medium">bespoke AI-powered solutions</span>—from automated applications to Web3 platforms—
              <span className="text-gradient font-medium"> driving strategic growth</span> for your business.
            </p>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 animate-fade-in-up animate-delay-500">
            <button className="group btn-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover-lift flex items-center gap-3 shadow-2xl">
              <span>Schedule a Consultation</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center gap-4 text-white glass px-10 py-5 rounded-full text-lg font-semibold hover-glow transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 animate-pulse-glow">
                <Play size={18} className="ml-1" />
              </div>
              <span>View Our Services</span>
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up animate-delay-600">
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};