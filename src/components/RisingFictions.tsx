import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const risingBooksGrid = [
  {
    id: 1,
    cover: "https://images.unsplash.com/photo-1598618356503-d79f9f19e91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbm92ZWwlMjBjb3ZlcnN8ZW58MXx8fHwxNzU4NDY3NTE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Dragon's Legacy"
  },
  {
    id: 2,
    cover: "https://images.unsplash.com/photo-1755543832265-aa4a6b8c1414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc1ODQ2NzUxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Magic Academy"
  },
  {
    id: 3,
    cover: "https://images.unsplash.com/photo-1576924423220-49915f67a9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGxpZ2h0JTIwbm92ZWx8ZW58MXx8fHwxNzU4NDY3NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Anime Chronicles"
  },
  {
    id: 4,
    cover: "https://images.unsplash.com/photo-1755541608494-5c02cf56e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVycyUyMGdyaWR8ZW58MXx8fHwxNzU4NDY3NTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Mystic Realm"
  },
  {
    id: 5,
    cover: "https://images.unsplash.com/photo-1633680842723-2a0d770f2b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2klMjBmaSUyMGJvb2slMjBjb3ZlcnN8ZW58MXx8fHwxNzU4NDY3NTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Space Odyssey"
  },
  {
    id: 6,
    cover: "https://images.unsplash.com/photo-1598618356503-d79f9f19e91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnN8ZW58MXx8fHwxNzU4Mzk5MjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Love's Journey"
  },
  {
    id: 7,
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5fGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Dark Magic"
  },
  {
    id: 8,
    cover: "https://images.unsplash.com/photo-1647495161969-f6fe559317e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUxMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Adventure Quest"
  },
  {
    id: 9,
    cover: "https://images.unsplash.com/photo-1604098365294-e08f5733a6a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBub3ZlbCUyMGNvdmVyfGVufDF8fHx8MTc1ODM1MTAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Shadow Realm"
  }
];

const featuredNovel = {
  title: "Truth and Family: A God's Journey",
  genre: "Fantasy",
  cover: "https://images.unsplash.com/photo-1739513275605-8f768065d402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBmYW50YXN5JTIwY2hhcmFjdGVyfGVufDF8fHx8MTc1ODQ2NzUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
};

export function RisingFictions() {
  return (
    <motion.section 
      className="px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Rising Fictions Section */}
          <div>
            <motion.h2 
              className="text-white text-2xl font-semibold mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Rising Fictions
            </motion.h2>
            
            {/* Book Grid */}
            <motion.div 
              className="grid grid-cols-4 gap-2 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {risingBooksGrid.slice(0, 8).map((book, index) => (
                <motion.div
                  key={book.id}
                  className="aspect-[3/4] relative group cursor-pointer overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ 
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Center title overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-2">
                    <span className="text-white text-sm font-semibold text-center leading-tight drop-shadow-lg">
                      {book.title}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Featured Novel */}
            <motion.div 
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex gap-4">
                <motion.div 
                  className="w-16 h-24 rounded-xl overflow-hidden flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={featuredNovel.cover}
                    alt={featuredNovel.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-white text-base font-semibold mb-1">
                    {featuredNovel.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {featuredNovel.genre}
                  </p>
                  <div className="flex gap-2">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full transition-all duration-300 hover:scale-105 text-sm"
                    >
                      READ NOW
                    </Button>
                    <motion.button 
                      className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, backgroundColor: "#FF6B6B" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Plus size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cheering Reads Section */}
          <div>
            <motion.h2 
              className="text-white text-2xl font-semibold mb-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Cheering Reads
            </motion.h2>
            
            <div className="space-y-4">
              {cheeringReads.map((novel, index) => (
                <motion.div
                  key={novel.id}
                  className="flex gap-4 p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800/30 hover:bg-gray-800/40 transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-12 h-16 rounded-lg overflow-hidden flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={novel.cover}
                      alt={novel.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-medium mb-1 truncate group-hover:text-blue-400 transition-colors">
                      {novel.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {novel.genre}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

const cheeringReads = [
  {
    id: 1,
    title: "The Fraud Heir to The...",
    genre: "Fantasy",
    cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Summoning Millions of...",
    genre: "Fantasy",
    cover: "https://images.unsplash.com/photo-1666153184660-a09d73e5b755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nYSUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNTI1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Calculating My Way To...",
    genre: "Eastern",
    cover: "https://images.unsplash.com/photo-1563818072824-ed3d6ff52955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNTI1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Super Rich from Winning a...",
    genre: "Urban",
    cover: "https://images.unsplash.com/photo-1663841364455-d82b3d4bbd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5od2ElMjBjb21pYyUyMGJvb2t8ZW58MXx8fHwxNzU4MzUyNTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "Martial Arts Genius with...",
    genre: "Eastern",
    cover: "https://images.unsplash.com/photo-1755541608494-5c02cf56e1f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMG5vdmVsJTIwY292ZXJ8ZW58MXx8fHwxNzU4MzUyNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    title: "Primordial Lust System",
    genre: "Fantasy",
    cover: "https://images.unsplash.com/photo-1486821416551-68a65ef4d618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwbm92ZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NTgzNDMxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];