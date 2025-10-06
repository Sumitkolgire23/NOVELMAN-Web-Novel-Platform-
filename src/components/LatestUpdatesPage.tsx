import { useState } from "react";
import { motion } from "motion/react";
import { Clock, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const latestUpdatesData = [
  {
    id: 1,
    title: "My Exclusive Tower Guide",
    cover: "https://images.unsplash.com/photo-1721404030353-83d04a4ea35c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5od2ElMjB3ZWJ0b29uJTIwY292ZXJ8ZW58MXx8fHwxNzU5MDcwMDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapters: [
      { number: "Chapter 86", timeAgo: "Public in 11 hours" },
      { number: "Chapter 85", timeAgo: "3 days ago" },
      { number: "Chapter 84", timeAgo: "11 days ago" }
    ]
  },
  {
    id: 2,
    title: "Star Instructor, Master Baek",
    cover: "https://images.unsplash.com/photo-1755853913084-c55e7ef1746b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2klMjBmaSUyMGN5YmVycHVuayUyMGFuaW1lfGVufDF8fHx8MTc1OTA3MDExNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapters: [
      { number: "Chapter 140", timeAgo: "Public in 11 hours" },
      { number: "Chapter 139", timeAgo: "8 days ago" },
      { number: "Chapter 138", timeAgo: "13 days ago" }
    ]
  },
  {
    id: 3,
    title: "Margrave's Bastard Son was The...",
    cover: "https://images.unsplash.com/photo-1734517709284-b6dcc9afd30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYW5pbWUlMjBjb21pYyUyMGJvb2t8ZW58MXx8fHwxNzU5MDcwMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapters: [
      { number: "Chapter 86", timeAgo: "Public in 11 hours" },
      { number: "Chapter 85", timeAgo: "5 days ago" },
      { number: "Chapter 84", timeAgo: "16 days ago" }
    ]
  },
  {
    id: 4,
    title: "Regressor Instruction Manual",
    cover: "https://images.unsplash.com/photo-1666153184660-a09d73e5b755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMG1hbmdhJTIwY2hhcmFjdGVyJTIwYXJ0fGVufDF8fHx8MTc1OTA3MDEwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapters: [
      { number: "Chapter 155", timeAgo: "Public in 11 hours" },
      { number: "Chapter 154", timeAgo: "3 days ago" },
      { number: "Chapter 153", timeAgo: "15 days ago" }
    ]
  },
  {
    id: 5,
    title: "Genius of the Unique Lineage",
    cover: "https://images.unsplash.com/photo-1598430464639-3ca8afb98589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMG5vdmVsJTIwY292ZXJ8ZW58MXx8fHwxNzU5MDcwMTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapters: [
      { number: "Chapter 131", timeAgo: "Public in 11 hours" },
      { number: "Chapter 130", timeAgo: "10 days ago" },
      { number: "Chapter 129", timeAgo: "10 days ago" }
    ]
  },
  {
    id: 6,
    title: "Playing the Perfect Fox-Eyed V...",
    cover: "https://images.unsplash.com/photo-1727047022121-8ab1768f2e38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpYyUyMGNyeXN0YWwlMjBmYW50YXN5JTIwYXJ0fGVufDF8fHx8MTc1OTA3MDExOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapters: [
      { number: "Chapter 32", timeAgo: "Public in 1 hours" },
      { number: "Chapter 31", timeAgo: "8 days ago" },
      { number: "Chapter 30", timeAgo: "8 days ago" }
    ]
  },
  {
    id: 7,
    title: "The Return of the Crazy Demon",
    cover: "https://images.unsplash.com/photo-1710376722163-c897f1c6d189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGFjdGlvbiUyMGFuaW1lfGVufDF8fHx8MTc1OTA3MDEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapters: [
      { number: "Chapter 171", timeAgo: "Public in 0.9 hours" },
      { number: "Chapter 170", timeAgo: "5 days ago" },
      { number: "Chapter 169", timeAgo: "12 days ago" }
    ]
  },
  {
    id: 8,
    title: "The Last Adventurer",
    cover: "https://images.unsplash.com/photo-1577720086808-ee62b140bc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1OTA3MDEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    chapters: [
      { number: "Chapter 90", timeAgo: "Public in 0.9 hours" },
      { number: "Chapter 89", timeAgo: "4 days ago" },
      { number: "Chapter 88", timeAgo: "13 days ago" }
    ]
  }
];

interface LatestUpdatesPageProps {
  onBack: () => void;
}

export function LatestUpdatesPage({ onBack }: LatestUpdatesPageProps) {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-black px-6 py-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="text-white hover:text-[#FF6B6B] transition-colors p-2"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-white text-2xl font-semibold">Latest Updates</h1>
          </div>
          <button className="bg-[#9333EA] text-white px-4 py-2 rounded-lg hover:bg-[#A855F7] transition-colors">
            VIEW ALL
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestUpdatesData.map((novel, index) => (
              <motion.div
                key={novel.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex space-x-4 bg-gray-900/20 rounded-xl p-4 hover:bg-gray-900/40 transition-colors group cursor-pointer"
              >
                {/* Cover Image */}
                <div className="flex-shrink-0">
                  <ImageWithFallback
                    src={novel.cover}
                    alt={novel.title}
                    className="w-24 h-32 md:w-32 md:h-40 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold mb-4 group-hover:text-[#FF6B6B] transition-colors line-clamp-2">
                    {novel.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {novel.chapters.map((chapter, chapterIndex) => (
                      <motion.div
                        key={chapterIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (chapterIndex * 0.05) }}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#FF6B6B] rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer">
                            {chapter.number}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-1 text-gray-500 text-sm">
                          <Clock className="w-3 h-3" />
                          <span>{chapter.timeAgo}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-xl transition-colors duration-300 hover:shadow-lg hover:shadow-[#FF6B6B]/20"
            >
              Load More Updates
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}