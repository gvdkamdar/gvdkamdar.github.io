
import { motion } from "framer-motion";

interface TimelineAchievementProps {
  achievement: string;
  index: number;
  inView: boolean;
  isLeftSide: boolean;
}

export const TimelineAchievement = ({ achievement, index, inView, isLeftSide }: TimelineAchievementProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, x: isLeftSide ? -20 : -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
      className="text-gray-300 flex items-start space-x-3"
    >
      <span className="text-[#50E3C2] mt-1.5">•</span>
      <span>{achievement}</span>
    </motion.li>
  );
};
