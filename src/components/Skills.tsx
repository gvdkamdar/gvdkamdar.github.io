import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "Java", "C++", "TypeScript", "Shell Script", "PHP", "HTML", "CSS", "Solidity"]
  },
  {
    title: "ML & AI",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Keras", "NLTK", "SpaCy", "Llama-Index", "Langchain"]
  },
  {
    title: "Data Science",
    skills: ["NumPy", "Pandas", "Tableau", "Power BI", "Matplotlib", "Seaborn", "Apache Kafka", "Spark", "Alteryx"]
  },
  {
    title: "Web & Cloud",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "MySQL", "PostgreSQL", "GraphQL", "AWS", "Docker", "Kubernetes"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Jenkins", "AdobeXD", "Figma", "MixPanel", "Jira", "Selenium", "Metabase", "CleverTap", "Prometheus"]
  }
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"]  // Changed from ["start end", "end start"]
  });

  const scrollX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-65%"]
  );

  return (
    <section className="py-32 bg-[#121212]" id="skills" ref={containerRef}>
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex justify-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-[#50E3C2]/10 text-[#50E3C2] rounded-full"
            >
              Skills & Technologies
            </motion.span>
          </div>

          <motion.div 
            ref={scrollRef}
            style={{ x: scrollX }}
            className="flex flex-nowrap gap-6 pb-4"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-none w-80 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (i * 0.05) }}
                      className="px-3 py-1 bg-[#50E3C2]/10 text-[#50E3C2] rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
