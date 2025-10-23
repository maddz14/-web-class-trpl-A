import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";

const slides = [
  { image: gallery1, title: "Praktikum Web Development", date: "15 Jan 2025" },
  { image: gallery2, title: "Workshop Cybersecurity", date: "22 Jan 2025" },
  { image: gallery3, title: "Hackathon Internal", date: "5 Feb 2025" },
  { image: gallery4, title: "Study Group - Database", date: "12 Feb 2025" },
  { image: gallery5, title: "Project Presentation Day", date: "20 Feb 2025" },
  { image: gallery6, title: "Team Building Activity", date: "28 Feb 2025" },
  { image: gallery7, title: "Guest Lecture", date: "5 Mar 2025" },
  { image: gallery8, title: "Coding Competition", date: "15 Mar 2025" },
  { image: gallery9, title: "UI/UX Design Sprint", date: "22 Mar 2025" },
  { image: gallery10, title: "Git Workshop", date: "1 Apr 2025" },
  { image: gallery11, title: "Final Project Demo", date: "10 Apr 2025" },
  { image: gallery12, title: "Class Gathering", date: "20 Apr 2025" },
];

export const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="gallery" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            📸 Album Kegiatan Kelas
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card/70 backdrop-blur-[25px] border-2 border-accent-blue/20 rounded-3xl overflow-hidden shadow-elegant"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative aspect-video">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 0.95,
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${index === currentSlide ? "z-10" : "z-0"}`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card/90 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-text-primary mb-1">{slide.title}</h3>
                  <p className="text-accent-purple font-medium">{slide.date}</p>
                </div>
              </motion.div>
            ))}

            {/* Navigation Buttons */}
            <Button
              size="icon"
              variant="ghost"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-accent-blue/80 hover:bg-accent-blue text-white rounded-full w-12 h-12 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-accent-blue/80 hover:bg-accent-blue text-white rounded-full w-12 h-12 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="relative h-2 bg-secondary">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-primary"
              initial={{ width: "0%" }}
              animate={{ width: isPaused ? `${(currentSlide / slides.length) * 100}%` : "100%" }}
              transition={{ duration: isPaused ? 0 : 4, ease: "linear" }}
              key={currentSlide}
            />
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 py-4 bg-card/50">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-accent-blue w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
