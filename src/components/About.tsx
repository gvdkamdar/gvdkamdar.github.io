
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-32 bg-[#121212]" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-[#50E3C2]/10 text-[#50E3C2] rounded-full"
            >
              About Me
            </motion.span>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          > */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Gaurav Vipul Kamdar</h2>
              <p className="text-white/60">Stony Brook, NY</p>
            </div>
            <div className="flex flex-col items-start md:items-end mt-4 md:mt-0 space-y-2">


            </div>
          </div>

          <p className="text-xl text-white/60 leading-relaxed">
            Currently pursuing my Master's in Computer Science at Stony Brook University, I am passionate about leveraging AI and Machine Learning to solve real-world challenges. As a Graduate Research Assistant at the Visual Analytics and Imaging Lab, I work on cutting-edge ML workflows and data visualization projects.
          </p>

          <p className="text-xl text-white/60 leading-relaxed">
            My professional experience spans roles at Deloitte, Ernst & Young, and various research positions, where I've developed innovative solutions using AI, machine learning, and full-stack technologies. I specialize in creating scalable systems that bridge the gap between complex data and practical applications.
          </p>

          <p className="text-xl text-white/60 leading-relaxed">
            I'm currently focusing on research in cultural sensitivity in Vision-Language Models and developing advanced RAG-based systems, combining my technical expertise with a passion for creating impactful AI solutions.
          </p>
          {/* </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          > */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-[#50E3C2] font-bold mb-2">Research</h3>
            <p className="text-white/60">Focused on AI, Vision-Language Models, and Cultural Sensitivity in ML</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-[#50E3C2] font-bold mb-2">Development</h3>
            <p className="text-white/60">Full-stack expertise with emphasis on AI/ML integration</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-[#50E3C2] font-bold mb-2">Innovation</h3>
            <p className="text-white/60">Building next-gen solutions with cutting-edge technology</p>
          </div>
          {/* </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
