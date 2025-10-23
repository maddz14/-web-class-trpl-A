import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "trpl@pks-cwe.ac.id",
      color: "text-accent-blue",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 812-3456-7890",
      color: "text-accent-purple",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Politeknik Kelapa Sawit Citra Widya Edukasi",
      color: "text-accent-blue",
    },
  ];

  const socialLinks = [
    { icon: Instagram, color: "hover:bg-accent-purple" },
    { icon: Twitter, color: "hover:bg-accent-blue" },
    { icon: Linkedin, color: "hover:bg-accent-blue" },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            📧 Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card/70 backdrop-blur-[25px] border-2 border-accent-blue/20 rounded-3xl shadow-elegant overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary border-2 border-transparent focus:border-accent-blue rounded-2xl text-text-primary"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary border-2 border-transparent focus:border-accent-purple rounded-2xl text-text-primary"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-secondary border-2 border-transparent focus:border-accent-blue rounded-2xl min-h-[150px] text-text-primary"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-white hover:scale-105 transition-all shadow-elegant rounded-full text-lg py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="p-8 md:p-12 bg-gradient-subtle">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Contact Information</h3>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ x: 50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`p-3 bg-gradient-primary rounded-2xl ${info.color}`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">{info.label}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-border pt-8">
                <h4 className="font-semibold text-text-primary mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-text-primary transition-all ${social.color} hover:text-white`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
