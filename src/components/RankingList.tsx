import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const rankingData = {
  weekly: [
    {
      id: 1,
      rank: 1,
      title: "Tears on a Withered Flower",
      cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Manhwa, Mature, Romance",
      rating: 8.9
    },
    {
      id: 2,
      rank: 2,
      title: "Wicked Husband",
      cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Drama, Fantasy, Romance",
      rating: 8.9
    },
    {
      id: 3,
      rank: 3,
      title: "The Story of a Low-Rank Soldier Becoming a Monarch",
      cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU4MjYwNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Completed, Fantasy, Manhwa...",
      rating: 8.9
    },
    {
      id: 4,
      rank: 4,
      title: "Divine Ring Descends: The Strongest Otherworld",
      cover: "https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc1ODMwNjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Drama, fantasy, Shounen",
      rating: 8.9
    },
    {
      id: 5,
      rank: 5,
      title: "For My Lost Love",
      cover: "https://images.unsplash.com/photo-1647495161969-f6fe559317e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUxMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Drama, Fantasy, Historical, Manhwa, Manhwa Hot, Romance...",
      rating: 8.9
    }
  ],
  monthly: [
    {
      id: 1,
      rank: 1,
      title: "Return of the Legendary Spear Knight",
      cover: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Fantasy, Manhwa",
      rating: 9.2
    },
    {
      id: 2,
      rank: 2,
      title: "The Greatest Estate Developer",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Comedy, Fantasy, Manhwa",
      rating: 9.9
    }
  ],
  all: [
    {
      id: 1,
      rank: 1,
      title: "Solo Leveling",
      cover: "https://images.unsplash.com/photo-1604098365294-e08f5733a6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBub3ZlbCUyMGNvdmVyfGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genres: "Action, Adventure, Fantasy, Manhwa",
      rating: 9.8
    }
  ]
};

export function RankingList() {
  const [activeTab, setActiveTab] = useState<'weekly' | 'monthly' | 'all'>('weekly');

  const tabs = [
    { key: 'weekly' as const, label: 'Weekly' },
    { key: 'monthly' as const, label: 'Monthly' },
    { key: 'all' as const, label: 'All' }
  ];

  return (
    <div className="w-80 bg-black px-6 py-8">
      <h2 className="text-white text-xl font-semibold mb-6">Popular Series</h2>
      
      {/* Tabs */}
      <div className="flex bg-gray-900 rounded-lg p-1 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === tab.key
                ? 'bg-[#9333EA] text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Ranking List */}
      <div className="space-y-4">
        {rankingData[activeTab].map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start space-x-3 group cursor-pointer hover:bg-gray-900/50 p-2 rounded-lg transition-colors"
          >
            {/* Rank Number */}
            <div className="flex-shrink-0 w-6 h-6 bg-gray-700 rounded text-white text-xs font-bold flex items-center justify-center mt-1">
              {item.rank}
            </div>
            
            {/* Cover Image */}
            <div className="flex-shrink-0">
              <ImageWithFallback
                src={item.cover}
                alt={item.title}
                className="w-12 h-16 object-cover rounded"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-white text-sm font-medium leading-tight mb-1 group-hover:text-[#FF6B6B] transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs leading-tight mb-2 line-clamp-2">
                Genres: {item.genres}
              </p>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-3 h-3 ${
                      star <= Math.floor(item.rating)
                        ? "text-[#FFD700] fill-current"
                        : "text-gray-600"
                    }`}
                  />
                ))}
                <span className="text-[#FFD700] text-xs font-medium ml-1">
                  {item.rating}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}