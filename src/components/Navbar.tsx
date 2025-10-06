import { useState } from "react";
import { Search, BookOpen, User, Library } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BrowseDropdown } from "./BrowseDropdown";

interface NavbarProps {
  onCreateClick?: () => void;
  onCommunityClick?: () => void;
  onProfileClick?: () => void;
  onLibraryClick?: () => void;
}

export function Navbar({ 
  onCreateClick, 
  onCommunityClick, 
  onProfileClick, 
  onLibraryClick 
}: NavbarProps = {}) {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  const handleBrowseToggle = () => {
    setIsBrowseOpen(!isBrowseOpen);
  };

  const handleBrowseClose = () => {
    setIsBrowseOpen(false);
  };

  const handleBrowseMouseEnter = () => {
    setIsBrowseOpen(true);
  };

  const handleBrowseMouseLeave = () => {
    setIsBrowseOpen(false);
  };

  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-[#FF6B6B]" />
            <span className="text-white text-xl font-bold">Novelman</span>
          </div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-[#FF6B6B] transition-colors">Home</a>
            <BrowseDropdown 
              isOpen={isBrowseOpen}
              onToggle={handleBrowseToggle}
              onClose={handleBrowseClose}
              onMouseEnter={handleBrowseMouseEnter}
              onMouseLeave={handleBrowseMouseLeave}
            />
            <a href="#" className="text-gray-300 hover:text-[#FF6B6B] transition-colors">Comics</a>
            <button 
              onClick={onCommunityClick}
              className="text-gray-300 hover:text-[#FF6B6B] transition-colors"
            >
              Community
            </button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onCreateClick}
              className="text-gray-300 hover:text-[#FF6B6B] hover:bg-gray-900"
            >
              Create
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              placeholder="Search novels, authors, genres..." 
              className="pl-10 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-[#FF6B6B] w-full"
            />
          </div>
        </div>

        {/* Right Side - Rankings, Create, Contest, Library & Profile */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onLibraryClick}
            className="text-gray-300 hover:text-[#FF6B6B] hover:bg-gray-900"
          >
            <Library className="w-5 h-5 mr-2" />
            Library
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onProfileClick}
            className="text-gray-300 hover:text-[#FF6B6B] hover:bg-gray-900"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}