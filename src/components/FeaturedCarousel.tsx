import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const featuredNovels = [
  {
    id: 1,
    chapter: "Chapter: 179",
    title: "Solo Leveling",
    summary: "Read Solo Leveling / 나 혼자만 레벨업 / Only I Level Up. When the weakest Hunter Sung Jin-Woo acquired a mysterious power that allowed him to level up indefinitely, he became humanity's greatest weapon against the magic beasts emerging from otherworldly dungeons.",
    genres: ["Action", "Adventure", "Fantasy", "Manhwa Hot", "Supernatural", "Webtoon"],
    cover: "https://images.unsplash.com/photo-1597361786755-cfb52e4d7f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xvJTIwbGV2ZWxpbmclMjBhbmltZSUyMGNoYXJhY3RlciUyMGRhcmslMjBmYW50YXN5fGVufDF8fHx8MTc1ODU0ODEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    chapter: "Chapter: 456",
    title: "The Beginning After The End",
    summary: "Read The Beginning After The End / TBATE. King Grey has unrivaled strength, wealth, and prestige in a world governed through martial ability. However, solitude lingers closely behind those with great power. Beneath the glamorous exterior lies a deep loneliness.",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Magic", "Reincarnation"],
    cover: "https://images.unsplash.com/photo-1663035045563-24d54c1e8e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWFnaWMlMjBhY2FkZW15JTIwYW5pbWUlMjBjaGFyYWN0ZXJ8ZW58MXx8fHwxNzU4NTQ4MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    chapter: "Chapter: 551",
    title: "Omniscient Reader's Viewpoint",
    summary: "Read Omniscient Reader's Viewpoint / 전지적 독자 시점 / ORV. Dokja was the sole reader of a web novel for years. When the novel suddenly becomes reality, he's the only one who knows how the world will end. Now he must use his knowledge to survive and save everyone.",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Psychological", "Webtoon"],
    cover: "https://images.unsplash.com/photo-1730050070251-c0433d7c94d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBtYW5od2ElMjBmYW50YXN5JTIwd2FycmlvciUyMGNoYXJhY3RlcnxlbnwxfHx8fDE3NTg1NDgxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredNovels.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredNovels.length) % featuredNovels.length);
  };

  const currentNovel = featuredNovels[currentIndex];

  return (
    <div className="relative h-[420px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={currentNovel.cover}
              alt={currentNovel.title}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Text Content */}
                <motion.div 
                  className="space-y-3 lg:space-y-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {/* Chapter Info */}
                  <motion.div 
                    className="text-gray-400 text-sm"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {currentNovel.chapter}
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h1 
                    className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentNovel.title}
                  </motion.h1>
                  
                  {/* Summary - Truncated for mobile */}
                  <motion.p 
                    className="text-gray-300 text-sm lg:text-base leading-relaxed max-w-xl line-clamp-3 lg:line-clamp-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {currentNovel.summary}
                  </motion.p>
                  
                  {/* Genres - Show only first 4 on mobile */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {currentNovel.genres.slice(0, 4).map((genre, index) => (
                      <motion.span
                        key={genre}
                        className="px-2.5 py-1 bg-gray-800/50 backdrop-blur-sm text-gray-300 text-xs rounded-md border border-gray-600/40 hover:bg-gray-700/50 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {genre}
                      </motion.span>
                    ))}
                    {currentNovel.genres.length > 4 && (
                      <span className="px-2.5 py-1 bg-gray-800/30 text-gray-400 text-xs rounded-md">
                        +{currentNovel.genres.length - 4}
                      </span>
                    )}
                  </motion.div>
                  
                  {/* Start Reading Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button 
                      className="bg-[#FFD700] hover:bg-[#FFC700] text-black px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      Start Reading
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right Side - Character Art (visual space) */}
                <div className="hidden lg:block relative">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Transparent space for background art */}
                    <div className="w-full h-[320px] relative opacity-0"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-3 flex items-center z-20">
        <motion.button
          onClick={prevSlide}
          className="bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
      </div>
      
      <div className="absolute inset-y-0 right-3 flex items-center z-20">
        <motion.button
          onClick={nextSlide}
          className="bg-black/20 hover:bg-black/40 text-white p-2.5 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
        {featuredNovels.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-110 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}