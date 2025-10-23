import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, FolderGit2, Code2, Award } from "lucide-react";

const stats = [
  { icon: Users, label: "Mahasiswa", value: 32, color: "text-accent-blue" },
  { icon: FolderGit2, label: "Projects", value: 15, suffix: "+", color: "text-accent-purple" },
  { icon: Code2, label: "Tech Stack", value: 8, suffix: "+", color: "text-accent-blue" },
  { icon: Award, label: "Collaboration", value: 100, suffix: "%", color: "text-accent-purple" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 1000;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = end;
              return newCounts;
            });
            clearInterval(counter);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
          }
        }, 16);
      });
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            About TRPL Class
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card/70 backdrop-blur-[25px] border-2 border-accent-purple/20 rounded-3xl p-8 md:p-12 shadow-elegant mb-12"
        >
          <p className="text-lg text-text-primary leading-relaxed mb-6">
            Kelas TRPL (Teknologi Rekayasa Perangkat Lunak) adalah program studi unggulan di
            Politeknik Kelapa Sawit Citra Widya Edukasi yang fokus pada pengembangan perangkat
            lunak modern dan inovatif.
          </p>
          <p className="text-lg text-text-primary leading-relaxed mb-6">
            <strong className="text-accent-blue">Visi:</strong> Menjadi kelas yang menghasilkan
            software engineer berkualitas dengan kemampuan teknis dan soft skills yang mumpuni.
          </p>
          <p className="text-lg text-text-primary leading-relaxed">
            <strong className="text-accent-purple">Misi:</strong> Mengembangkan kompetensi
            mahasiswa dalam bidang software engineering melalui pembelajaran praktis, kolaborasi
            tim, dan proyek-proyek real-world yang memberikan dampak nyata.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card/70 backdrop-blur-[25px] border-2 border-accent-blue/20 rounded-3xl p-8 text-center shadow-elegant hover:shadow-blue transition-all"
            >
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-gradient-primary rounded-2xl">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {counts[index]}
                {stat.suffix || ""}
              </div>
              <div className="text-text-primary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
