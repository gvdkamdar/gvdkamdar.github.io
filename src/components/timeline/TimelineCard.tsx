
import { motion } from "framer-motion";
import { TimelineAchievement } from "./TimelineAchievement";
import type { TimelineItem } from "@/data/timeline";

interface TimelineCardProps {
  item: TimelineItem;
  inView: boolean;
  isLeftSide: boolean;
}

export const TimelineCard = ({ item, inView, isLeftSide }: TimelineCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-4 p-8 rounded-2xl border border-[#50E3C2]/20 bg-[#1a1a1a] backdrop-blur-sm transition-all duration-300 hover:border-[#50E3C2]/40"
    >
      <p className="text-[#50E3C2] font-medium text-lg">
        {item.period}
      </p>
      <h3 className="text-2xl font-bold text-white">
        {item.title}
      </h3>
      <p className="text-lg text-gray-400">
        {item.company} | {item.location}
      </p>
      
      <ul className="space-y-3">
        {item.achievements.map((achievement, i) => (
          <TimelineAchievement
            key={i}
            achievement={achievement}
            index={i}
            inView={inView}
            isLeftSide={isLeftSide}
          />
        ))}
      </ul>
    </motion.div>
  );
};
