import { useState } from "react";
import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const recentlyRead = [
  {
    id: 1,
    title: "Mystic Legends",
    cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lastChapter: "Chapter 83: The Portal"
  },
  {
    id: 2,
    title: "Digital Hearts",
    cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lastChapter: "Chapter 66: Code Confession"
  },
  {
    id: 3,
    title: "Void Chronicles",
    cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU4MjYwNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lastChapter: "Chapter 91: Lost Signal"
  },
  {
    id: 4,
    title: "Shadow Detective",
    cover: "https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc1ODMwNjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lastChapter: "Chapter 44: The Clue"
  }
];

const rankings = {
  weekly: [
    {
      id: 1,
      title: "Mystic Legends",
      cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genre: "Fantasy",
      rating: 4.8
    },
    {
      id: 2,
      title: "Digital Hearts",
      cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genre: "Romance",
      rating: 4.9
    },
    {
      id: 3,
      title: "Void Chronicles",
      cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU4MjYwNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genre: "Sci-Fi",
      rating: 4.7
    },
    {
      id: 4,
      title: "Shadow Detective",
      cover: "https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc1ODMwNjM4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genre: "Mystery",
      rating: 4.6
    },
    {
      id: 5,
      title: "Wild Adventures",
      cover: "https://images.unsplash.com/photo-1647495161969-f6fe559317e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUxMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genre: "Adventure",
      rating: 4.5
    }
  ],
  monthly: [
    {
      id: 1,
      title: "Digital Hearts",
      cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genre: "Romance",
      rating: 4.9
    },
    {
      id: 2,
      title: "Mystic Legends",
      cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genre: "Fantasy",
      rating: 4.8
    },
    {
      id: 3,
      title: "Void Chronicles",
      cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU4MjYwNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genre: "Sci-Fi",
      rating: 4.7
    }
  ],
  allTime: [
    {
      id: 1,
      title: "Digital Hearts",
      cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genre: "Romance",
      rating: 4.9
    },
    {
      id: 2,
      title: "Mystic Legends",
      cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      genre: "Fantasy",
      rating: 4.8
    }
  ]
};

export function Sidebar() {
  return (
    <div className="w-80 bg-black p-6 space-y-8">
      {/* Recently Read Section */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Recently Read</h3>
        <div className="space-y-3">
          {recentlyRead.map((novel, index) => (
            <motion.div
              key={novel.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-900 transition-colors cursor-pointer group"
            >
              <ImageWithFallback
                src={novel.cover}
                alt={novel.title}
                className="w-12 h-16 object-cover rounded-lg"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-white text-sm font-semibold truncate group-hover:text-[#FF6B6B] transition-colors">
                  {novel.title}
                </h4>
                <p className="text-gray-400 text-xs truncate">
                  {novel.lastChapter}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Rankings Section */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Rankings</h3>
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900">
            <TabsTrigger 
              value="weekly" 
              className="text-xs data-[state=active]:bg-[#FF6B6B] data-[state=active]:text-white"
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger 
              value="monthly" 
              className="text-xs data-[state=active]:bg-[#FF6B6B] data-[state=active]:text-white"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger 
              value="allTime" 
              className="text-xs data-[state=active]:bg-[#FF6B6B] data-[state=active]:text-white"
            >
              All-Time
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="weekly" className="mt-4">
            <div className="space-y-3">
              {rankings.weekly.map((novel, index) => (
                <motion.div
                  key={novel.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-900 transition-colors cursor-pointer group"
                >
                  <div className="text-[#FFD700] font-bold text-sm w-6">
                    #{index + 1}
                  </div>
                  <ImageWithFallback
                    src={novel.cover}
                    alt={novel.title}
                    className="w-10 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-semibold truncate group-hover:text-[#FF6B6B] transition-colors">
                      {novel.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{novel.genre}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-3 h-3 text-[#FFD700] fill-current" />
                      <span className="text-[#FFD700] text-xs">{novel.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="monthly" className="mt-4">
            <div className="space-y-3">
              {rankings.monthly.map((novel, index) => (
                <motion.div
                  key={novel.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-900 transition-colors cursor-pointer group"
                >
                  <div className="text-[#FFD700] font-bold text-sm w-6">
                    #{index + 1}
                  </div>
                  <ImageWithFallback
                    src={novel.cover}
                    alt={novel.title}
                    className="w-10 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-semibold truncate group-hover:text-[#FF6B6B] transition-colors">
                      {novel.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{novel.genre}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-3 h-3 text-[#FFD700] fill-current" />
                      <span className="text-[#FFD700] text-xs">{novel.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="allTime" className="mt-4">
            <div className="space-y-3">
              {rankings.allTime.map((novel, index) => (
                <motion.div
                  key={novel.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-900 transition-colors cursor-pointer group"
                >
                  <div className="text-[#FFD700] font-bold text-sm w-6">
                    #{index + 1}
                  </div>
                  <ImageWithFallback
                    src={novel.cover}
                    alt={novel.title}
                    className="w-10 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white text-sm font-semibold truncate group-hover:text-[#FF6B6B] transition-colors">
                      {novel.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{novel.genre}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="w-3 h-3 text-[#FFD700] fill-current" />
                      <span className="text-[#FFD700] text-xs">{novel.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}