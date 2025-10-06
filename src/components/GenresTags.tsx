import { motion } from "motion/react";

const genreCategories = [
  {
    id: "core",
    title: "📚 Core Genres",
    tags: [
      "Action", "Adventure", "Comedy", "Drama", "Fantasy", 
      "Historical", "Horror", "Mystery", "Romance", "Sci-Fi", 
      "Slice of Life", "Thriller", "Crime", "Supernatural"
    ]
  },
  {
    id: "themes",
    title: "🌀 Themes / Subgenres",
    tags: [
      "Isekai", "Reincarnation", "Regression", "Revenge", "System",
      "Game", "Dungeons", "Martial Arts", "Murim", "Superpower",
      "Magic", "Magical", "Survival", "Time Travel", "Cultivation"
    ]
  },
  {
    id: "character",
    title: "🎭 Character & Relationship",
    tags: [
      "Harem", "Reverse Harem", "Shounen", "Shoujo", "Shounen Ai",
      "Shoujo Ai", "Mature", "Adult", "Psychological", "School Life",
      "Office Life", "Gender Bender", "Josei", "Ecchi"
    ]
  },
  {
    id: "format",
    title: "🎨 Format / Origin",
    tags: [
      "Manga", "Manhwa", "Manhua", "Full Color", "Completed",
      "Ongoing", "Hiatus", "Korean", "Japanese", "Chinese",
      "Webtoon", "Long Strip", "Adaptation"
    ]
  },
  {
    id: "additional",
    title: "🏷️ Additional Tags",
    tags: [
      "18+", "Bloody", "College Life", "Cooking", "Crossdressing",
      "Demon", "Demons", "Business", "Animal", "Childhood Friend",
      "Comic", "Crazy MC", "Doujinshi", "Ghosts", "Grumpy Guy",
      "Hunter", "Kids", "Loli", "MAfia", "Manhwa Hot"
    ]
  }
];

export function GenresTags() {
  return (
    <motion.section 
      className="px-6 py-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-600/10 to-pink-900/20"></div>
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-white text-3xl font-bold mb-8 text-center">
            Genres & Tags
          </h2>
        </motion.div>

        {/* Categories Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {genreCategories.slice(0, 4).map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-5 border border-gray-700/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
            >
              <motion.h3 
                className="text-white text-lg font-semibold mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + categoryIndex * 0.1 }}
              >
                {category.title}
              </motion.h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {category.tags.slice(0, 12).map((tag, tagIndex) => (
                  <motion.button
                    key={`${category.id}-${tag}`}
                    className="bg-gray-800/60 hover:bg-purple-600/80 text-gray-300 hover:text-white px-3 py-2 rounded-lg border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 text-sm font-medium group relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.5 + categoryIndex * 0.1 + tagIndex * 0.02,
                      duration: 0.3 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: "0 8px 20px -5px rgba(147, 51, 234, 0.3)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/20 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Tag text */}
                    <span className="relative z-10">{tag}</span>
                    
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </motion.button>
                ))}
                {category.tags.length > 12 && (
                  <motion.button
                    className="bg-gray-700/40 hover:bg-gray-600/60 text-gray-400 hover:text-gray-300 px-3 py-2 rounded-lg border border-gray-600/30 transition-all duration-300 text-sm font-medium"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    +{category.tags.length - 12} more
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tags - Full Width */}
        {genreCategories[4] && (
          <motion.div
            className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-5 border border-gray-700/30 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.h3 
              className="text-white text-lg font-semibold mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              {genreCategories[4].title}
            </motion.h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {genreCategories[4].tags.slice(0, 18).map((tag, tagIndex) => (
                <motion.button
                  key={`${genreCategories[4].id}-${tag}`}
                  className="bg-gray-800/60 hover:bg-purple-600/80 text-gray-300 hover:text-white px-3 py-2 rounded-lg border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300 text-sm font-medium group relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.9 + tagIndex * 0.02,
                    duration: 0.3 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 8px 20px -5px rgba(147, 51, 234, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-500/20 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Tag text */}
                  <span className="relative z-10">{tag}</span>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Popular Tags Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <h3 className="text-white text-lg font-semibold mb-4">🔥 Trending Now</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Isekai", "System", "Revenge", "Reincarnation", "Harem", "Martial Arts", "Fantasy", "Manhwa"].map((tag, index) => (
              <motion.button
                key={tag}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  boxShadow: "0 15px 30px -5px rgba(234, 88, 12, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}