
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { timeline } from "@/data/timeline";
import { TimelineCard } from "./timeline/TimelineCard";

const Experience = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-32" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={headerInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-[#50E3C2]/10 text-[#50E3C2] rounded-full"
            >
              Journey
            </motion.span>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 h-full w-px bg-gradient-to-b from-[#50E3C2] via-[#50E3C2]/50 to-transparent" />

            <div className="space-y-24">
              {timeline.map((item, index) => {
                const [ref, inView] = useInView({
                  triggerOnce: false,
                  threshold: 0.2,
                });

                const isLeftSide = item.type === "education";

                return (
                  <motion.div
                    key={index}
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#50E3C2] rounded-full shadow-glow z-10" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      {isLeftSide ? (
                        <>
                          <div>
                            <TimelineCard item={item} inView={inView} isLeftSide={isLeftSide} />
                          </div>
                          <div className="hidden md:block" />
                        </>
                      ) : (
                        <>
                          <div className="hidden md:block" />
                          <div>
                            <TimelineCard item={item} inView={inView} isLeftSide={isLeftSide} />
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
