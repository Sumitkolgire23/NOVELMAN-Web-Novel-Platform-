import { motion } from "motion/react";
import { BookOpen, PenTool, Users } from "lucide-react";

const promotionalCards = [
  {
    id: 1,
    title: "Original Stories",
    subtitle: "Discover unique tales from creative minds worldwide.",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    bgPattern: "radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.2) 0%, transparent 50%)",
    icon: BookOpen,
    href: "#original-stories"
  },
  {
    id: 2,
    title: "Becoming an Author",
    subtitle: "Transform your ideas into captivating stories.",
    gradient: "from-emerald-500 via-teal-600 to-cyan-600",
    bgPattern: "radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.2) 0%, transparent 50%)",
    icon: PenTool,
    href: "#become-author"
  },
  {
    id: 3,
    title: "Community Hub",
    subtitle: "Connect with fellow readers and writers.",
    gradient: "from-rose-500 via-pink-600 to-purple-600",
    bgPattern: "radial-gradient(circle at 50% 30%, rgba(244, 63, 94, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 70%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)",
    icon: Users,
    href: "#author-guide"
  }
];

interface PromotionalCardsProps {
  onBecomeAuthorClick?: () => void;
}

export function PromotionalCards({ onBecomeAuthorClick }: PromotionalCardsProps = {}) {
  return (
    <motion.section 
      className="px-4 sm:px-6 py-8 sm:py-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {promotionalCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                onClick={card.id === 2 ? onBecomeAuthorClick : undefined}
                className={`relative overflow-hidden rounded-2xl p-6 sm:p-8 text-white cursor-pointer group bg-gradient-to-br ${card.gradient} hover:shadow-2xl transition-all duration-300`}
                style={{ 
                  backgroundImage: card.bgPattern,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
              >
                {/* Enhanced Background decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
                  <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/25 rounded-full blur-md"></div>
                  <div className="absolute bottom-8 right-12 w-8 h-8 bg-white/35 rounded-full blur-sm"></div>
                </div>
                
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="mb-4 sm:mb-6"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <IconComponent size={36} className="text-white drop-shadow-lg" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-white transition-colors drop-shadow-sm"
                    initial={{ opacity: 0.95 }}
                    whileHover={{ opacity: 1, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-white/85 text-sm sm:text-base leading-relaxed group-hover:text-white/95 transition-colors drop-shadow-sm"
                    initial={{ opacity: 0.85 }}
                    whileHover={{ opacity: 1, y: -1 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  >
                    {card.subtitle}
                  </motion.p>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/20 transition-all duration-300"
                  initial={false}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}