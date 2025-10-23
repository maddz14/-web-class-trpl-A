import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award, Star, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Champion",
    date: "March 2025",
    description: "First place in National Software Development Competition",
  },
  {
    icon: Award,
    title: "Best Final Project",
    date: "February 2025",
    description: "Excellence award for innovative e-commerce platform",
  },
  {
    icon: Star,
    title: "Community Contribution",
    date: "January 2025",
    description: "Open source contribution to major JavaScript framework",
  },
  {
    icon: Zap,
    title: "Innovation Award",
    date: "December 2024",
    description: "Recognition for AI-powered chatbot development",
  },
  {
    icon: Trophy,
    title: "UI/UX Excellence",
    date: "November 2024",
    description: "Best design award in regional design competition",
  },
  {
    icon: Award,
    title: "Team Collaboration",
    date: "October 2024",
    description: "Outstanding teamwork in cross-functional project",
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="achievements" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            🏆 Achievements & Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-primary hidden md:block" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1" />

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full z-10 shadow-glow-blue">
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-full h-full bg-gradient-primary rounded-full"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex-1 bg-card/70 backdrop-blur-[25px] border-2 border-accent-purple/20 rounded-3xl p-6 shadow-elegant hover:shadow-purple transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-primary rounded-2xl">
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-accent-purple font-medium mb-2">{achievement.date}</p>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
