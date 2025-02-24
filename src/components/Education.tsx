import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stony Brook University",
    location: "New York, USA",
    period: "Aug 2023 - May 2025",
    details: [
      "GPA: 3.4/4.0",
      "Teaching Assistant: Programming Abstractions",
      "Coursework: Machine Learning, Data Science, Database Systems, Visualization"
    ]
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: "University of Mumbai",
    location: "Mumbai, India",
    period: "Aug 2018 - May 2022",
    details: [
      "GPA: 8.4/10",
      "Coursework: Data Structures & Algorithms, Object Oriented Programming, Operating Systems, NLP, AI, Cloud Computing"
    ]
  }
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-[#121212]" id="education">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-[#50E3C2]/10 text-[#50E3C2] rounded-full"
          >
            Education
          </motion.span>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-[#50E3C2]/20"
              >
                <div className="absolute w-4 h-4 bg-[#50E3C2]/20 rounded-full -left-[9px] top-0 transform" />
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-lg text-white/60">{edu.school} | {edu.location}</p>
                  <p className="text-sm text-white/40">{edu.period}</p>
                </div>
                
                <ul className="space-y-3">
                  {edu.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (i * 0.1) }}
                      className="text-white/60"
                    >
                      • {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
