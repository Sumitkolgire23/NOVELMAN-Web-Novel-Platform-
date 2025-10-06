import { Star } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const popularNovels = [
  {
    id: 1,
    title: "The Greatest Estate Developer",
    cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapter: "Chapter 209",
    rating: 9.9,
    type: "MANHWA"
  },
  {
    id: 2,
    title: "Childhood Friend of the Zenith",
    cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapter: "Chapter 79",
    rating: 9.2,
    type: "MANHWA"
  },
  {
    id: 3,
    title: "Absolute Regression",
    cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU4MjYwNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapter: "Chapter 66",
    rating: 9.7,
    type: "MANHWA"
  },
  {
    id: 4,
    title: "A Regressor's Tale of Cultivation",
    cover: "https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc1ODMwNjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapter: "Chapter 20",
    rating: 9.7,
    type: "MANHWA"
  },
  {
    id: 5,
    title: "Reincarnator",
    cover: "https://images.unsplash.com/photo-1647495161969-f6fe559317e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUxMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapter: "Chapter 99",
    rating: 8.6,
    type: "MANHWA"
  },
  {
    id: 6,
    title: "Shadow Slave",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGJvb2t8ZW58MXx8fHwxNzU4MzUxMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapter: "Chapter 1456",
    rating: 9.5,
    type: "NOVEL"
  }
];

export function PopularNovels() {
  return (
    <div className="bg-black px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-xl font-semibold mb-6">Popular Today</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {popularNovels.map((novel, index) => (
            <motion.div
              key={novel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-3">
                <ImageWithFallback
                  src={novel.cover}
                  alt={novel.title}
                  className="w-full h-[240px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-[#FF6B6B] text-white text-xs font-bold px-2 py-1 rounded">
                    {novel.type}
                  </span>
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-white font-medium text-sm leading-tight group-hover:text-[#FF6B6B] transition-colors">
                  {novel.title}
                </h3>
                <p className="text-gray-400 text-xs">
                  {novel.chapter}
                </p>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3 h-3 ${
                        star <= Math.floor(novel.rating)
                          ? "text-[#FFD700] fill-current"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                  <span className="text-[#FFD700] text-xs font-medium ml-1">
                    {novel.rating}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}