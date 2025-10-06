import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface BrowseDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const browseData = {
  novels: {
    maleLeadTags: [
      "Urban", "Action", "Urban",
      "Eastern", "War", "Fantasy", 
      "Games", "Realistic", "History",
      "Fantasy", "History", "Teen",
      "Sci-fi", "", "LGBT+",
      "ACG", "", "Sci-fi",
      "Horror", "", "General",
      "Sports", "", "Chereads"
    ],
    femaleLeadTags: [
      "Urban", "Action", "Urban",
      "Fantasy", "War", "Fantasy",
      "History", "Realistic", "History", 
      "Teen", "History", "Teen",
      "LGBT+", "", "LGBT+",
      "Sci-fi", "", "Sci-fi",
      "General", "", "General",
      "Chereads", "", "Chereads"
    ]
  },
  comics: {
    column1: ["Romance", "Action", "Urban", "Eastern", "Fantasy", "School", "LGBT+", "Sci-Fi", "Comedy"],
    column2: ["Magic", "Wuxia", "Horror", "History", "Transmigration", "Harem", "Adventure", "Drama", "Mystery"],
    column3: ["Inspiring", "Cooking", "Slice-of-Life", "Sports", "Diabolical", "", "", "", ""]
  },
  fanfic: {
    tags: [
      "Anime & Comics", "Video Games", "Celebrities", "Music & Bands", 
      "Movies", "Books&Literature", "TV", "Theater", "Others"
    ]
  }
};

export function BrowseDropdown({ isOpen, onToggle, onClose, onMouseEnter, onMouseLeave }: BrowseDropdownProps) {
  const [activeSection, setActiveSection] = useState<'novels' | 'comics' | 'fanfic'>('novels');

  const handleSectionHover = (section: 'novels' | 'comics' | 'fanfic') => {
    setActiveSection(section);
  };

  const renderNovelsContent = () => (
    <div className="flex-1 grid grid-cols-3 gap-8 p-6">
      {/* Male Lead Column */}
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Male Lead</h3>
        <div className="space-y-2">
          {["Urban", "Eastern", "Games", "Fantasy", "Sci-fi", "ACG", "Horror", "Sports"].map((tag) => (
            <button
              key={tag}
              className="block text-gray-300 hover:text-white transition-colors text-left text-sm py-1.5 hover:bg-gray-700/50 rounded px-2 -mx-2"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Action Column */}
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Action</h3>
        <div className="space-y-2">
          {["Action", "War", "Realistic", "History"].map((tag) => (
            <button
              key={tag}
              className="block text-gray-300 hover:text-white transition-colors text-left text-sm py-1.5 hover:bg-gray-700/50 rounded px-2 -mx-2"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Female Lead Column */}
      <div>
        <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Female Lead</h3>
        <div className="space-y-2">
          {["Urban", "Fantasy", "History", "Teen", "LGBT+", "Sci-fi", "General", "Chereads"].map((tag) => (
            <button
              key={tag}
              className="block text-gray-300 hover:text-white transition-colors text-left text-sm py-1.5 hover:bg-gray-700/50 rounded px-2 -mx-2"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderComicsContent = () => (
    <div className="flex-1 grid grid-cols-3 gap-8 p-6">
      <div className="space-y-2">
        {browseData.comics.column1.map((tag, index) => (
          <button
            key={index}
            className="block text-gray-300 hover:text-white transition-colors text-left text-sm py-1.5 hover:bg-gray-700/50 rounded px-2 -mx-2"
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {browseData.comics.column2.map((tag, index) => (
          <button
            key={index}
            className="block text-gray-300 hover:text-white transition-colors text-left text-sm py-1.5 hover:bg-gray-700/50 rounded px-2 -mx-2"
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {browseData.comics.column3.map((tag, index) => (
          tag ? (
            <button
              key={index}
              className="block text-gray-300 hover:text-white transition-colors text-left text-sm py-1.5 hover:bg-gray-700/50 rounded px-2 -mx-2"
            >
              {tag}
            </button>
          ) : <div key={index} className="py-1.5"></div>
        ))}
      </div>
    </div>
  );

  const renderFanficContent = () => (
    <div className="flex-1 p-6">
      <div className="space-y-2 max-w-xs">
        {browseData.fanfic.tags.map((tag, index) => (
          <button
            key={index}
            className="block text-gray-300 hover:text-white transition-colors text-left text-sm py-1.5 hover:bg-gray-700/50 rounded px-2 -mx-2"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/* Browse Button */}
      <button
        className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
          isOpen 
            ? 'text-white bg-gray-800' 
            : 'text-gray-300 hover:text-[#FF6B6B] hover:bg-gray-900'
        }`}
      >
        <span>Browse</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40"
              onClick={onClose}
            />
            
            {/* Dropdown Content */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 z-50"
              style={{ maxWidth: 'calc(100vw - 2rem)' }}
            >
              <div className="flex">
                {/* Left Sidebar - Section Navigation */}
                <div className="w-48 bg-black rounded-l-2xl">
                  <div className="p-4 space-y-2">
                    <div
                      onMouseEnter={() => handleSectionHover('novels')}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                        activeSection === 'novels'
                          ? 'bg-[#3B82F6] text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      Novels
                    </div>
                    <div
                      onMouseEnter={() => handleSectionHover('comics')}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                        activeSection === 'comics'
                          ? 'bg-[#3B82F6] text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      Comics
                    </div>
                    <div
                      onMouseEnter={() => handleSectionHover('fanfic')}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                        activeSection === 'fanfic'
                          ? 'bg-[#3B82F6] text-white'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      Fan-fic
                    </div>
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1 bg-gray-800 rounded-r-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeSection}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.15 }}
                    >
                      {activeSection === 'novels' && renderNovelsContent()}
                      {activeSection === 'comics' && renderComicsContent()}
                      {activeSection === 'fanfic' && renderFanficContent()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}