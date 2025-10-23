import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ShootingStar {
  id: number;
  left: string;
  top: string;
  delay: number;
}

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  color: string;
  duration: number;
}

export const BackgroundEffects = () => {
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate shooting stars
    const stars: ShootingStar[] = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 80 + 10}%`,
      top: `${Math.random() * 50}%`,
      delay: Math.random() * 10,
    }));
    setShootingStars(stars);

    // Generate floating particles
    const particleColors = ["#2196F3", "#9575CD", "#42A5F5", "#BA68C8"];
    const particleList: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 100 + 50,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
      duration: Math.random() * 5 + 3,
    }));
    setParticles(particleList);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-accent-blue rounded-full"
          style={{
            left: star.left,
            top: star.top,
            boxShadow: "0 0 10px 2px currentColor",
          }}
          animate={{
            x: [0, 300],
            y: [0, 300],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 7,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20 blur-xl"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Liquid Blob Animation */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{
          background: "linear-gradient(135deg, #2196F3, #9575CD)",
          top: "20%",
          right: "10%",
        }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
