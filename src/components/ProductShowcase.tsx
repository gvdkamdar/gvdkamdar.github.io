
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "RAG-Based Personal Assistant",
    description: "Developed an advanced personal assistant using Llama-Index and FAISS vector database, achieving 92% retrieval accuracy and 1.2-second average response time. Integrated Sentence Transformers for embeddings and implemented a sophisticated retrieval pipeline.",
    tags: ["Llama-Index", "FAISS", "PyTorch", "NLP"],
    gradient: "from-[#50E3C2]/5 to-[#50E3C2]/10",
    link: "https://github.com/gvdkamdar/Alfred"
  },
  {
    title: "Real-Time Repetition Tracker",
    description: "Built a full-stack fitness application with real-time pose estimation using MediaPipe, React.js for UI, and Flask/Django REST API. Implemented session logging with PostgreSQL and real-time video tracking.",
    tags: ["MediaPipe", "React.js", "Flask", "Computer Vision"],
    gradient: "from-[#50E3C2]/5 to-[#50E3C2]/15",
    link: "https://github.com/gvdkamdar/workout-assistant"
  },
  {
    title: "Book to Knowledge Graphs",
    description: "Developed a system to convert books into interactive knowledge graphs using Google Gemini API for entity extraction. Built with Neo4j for graph storage, React.js for visualization, and Node.js/Flask backend.",
    tags: ["Neo4j", "React.js", "Node.js", "LLM"],
    gradient: "from-[#50E3C2]/15 to-[#50E3C2]/25",
    link: "https://github.com/gvdkamdar/Book-to-Knowledge-Graph-using-LLM"
  },
  {
    title: "QGen",
    description: "Developed a system for generating contextual questions and summaries from texts by integrating Graph Embeddings with PyTorch Geometric and coreference resolution via spaCy, enhanced by information retrieval techniques from NLTK for in-depth text analysis. Utilized the word disambiguation capabilities of PyWSD along with PyTorch's transformer models, including LSTM and attention mechanisms, to create diverse question types, significantly enriching the interactive learning experience.",
    tags: ["PyTorch", "NLP", "NLTK", "spaCy"],
    gradient: "from-[#50E3C2]/10 to-[#50E3C2]/20",
    link: "https://github.com/gvdkamdar/QGen"
  }
];

const ProductShowcase = () => {
  return (
    <section className="py-32 bg-[#121212]" id="projects">
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
              Projects
            </motion.span>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => {
              const [ref, inView] = useInView({
                triggerOnce: false,
                threshold: 0.2,
              });

              return (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`block bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${project.gradient} hover:border-[#50E3C2]/40 transition-all duration-300`}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/60 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, delay: 0.2 + (i * 0.05) }}
                        className="px-3 py-1 bg-[#50E3C2]/10 text-[#50E3C2] rounded-full text-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;
