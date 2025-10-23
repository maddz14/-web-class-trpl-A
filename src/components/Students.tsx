import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = ["Frontend Dev", "Backend Dev", "Full Stack", "UI/UX Designer", "DevOps", "Data Analyst", "Mobile Dev", "Security Specialist"];
const skills = ["React", "Node.js", "Python", "Java", "Flutter", "Figma", "Docker", "AWS", "TypeScript", "MongoDB", "PostgreSQL", "Vue.js"];

const generateStudents = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`,
    nim: `2024${String(i + 1).padStart(3, "0")}`,
    role: roles[i % roles.length],
    skills: [
      skills[i % skills.length],
      skills[(i + 1) % skills.length],
      skills[(i + 2) % skills.length],
      skills[(i + 3) % skills.length],
    ],
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
  }));
};

const students = generateStudents(32);

export const Students = () => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const displayedStudents = showAll ? students : students.slice(0, 8);

  return (
    <section id="students" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            👥 Our Amazing Team
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedStudents.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-card/70 backdrop-blur-[25px] border-2 border-accent-purple/20 rounded-3xl p-6 shadow-elegant hover:shadow-purple transition-all group"
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full border-2 border-accent-blue overflow-hidden bg-gradient-primary p-1">
                  {student.avatar ? (
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-full h-full rounded-full bg-white object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <User className="w-12 h-12 text-accent-blue" />
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-text-primary text-center mb-1">
                {student.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-2">{student.nim}</p>
              <div className="flex justify-center mb-4">
                <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple text-xs font-medium rounded-full">
                  {student.role}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {student.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-accent-blue/10 text-accent-blue text-xs rounded-full border border-accent-blue/20 hover:bg-accent-blue/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 justify-center">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="bg-card/70 backdrop-blur-[25px] border-2 border-accent-blue text-accent-blue hover:bg-gradient-primary hover:text-white hover:scale-110 rounded-full text-lg px-8 transition-all shadow-elegant"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua 32 Mahasiswa"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
