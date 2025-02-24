
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const research = [
  {
    title: "Evaluating Cultural Sensitivity in Vision-Language Models",
    status: "(In preparation for publication)",
    description: "Performed soft alignment tests on Qwen-VL, Pixtral, LLaVA, and InternVL open-source models using PyTorch, evaluating cultural sensitivity through multimodal prompts and statistical agreement metrics.",
    link: "#research"
  },
  {
    title: "SpeakQL – SQL Generation from Natural Language",
    status: "International Journal of Computer Applications (2023)",
    description: "AI-driven system leveraging deep learning and sequence-aware modeling to translate natural language into SQL queries.",
    link: "https://www.ijcaonline.org/media/proceedings/LLMUC202416.pdf"
  }
];

const Research = () => {
  return (
    <section className="py-32 bg-[#121212]" id="research">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-[#50E3C2]/10 text-[#50E3C2] rounded-full"
            >
              Research
            </motion.span>
          </div>

          <div className="space-y-8">
            {research.map((item, index) => {
              const [ref, inView] = useInView({
                triggerOnce: false,
                threshold: 0.2,
              });

              return (
                <motion.a
                  key={index}
                  href={item.link}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#50E3C2]/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title} <span className="text-[#50E3C2]">{item.status}</span>
                  </h3>
                  <p className="text-white/60">{item.description}</p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
