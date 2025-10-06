import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  BookOpen, 
  Bookmark, 
  Clock, 
  Heart, 
  Star, 
  Filter,
  Search,
  Grid3X3,
  List,
  Plus,
  Download,
  Eye,
  Calendar,
  MoreHorizontal,
  Play,
  Pause,
  CheckCircle
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LibraryPageProps {
  onBack: () => void;
}

const libraryBooks = [
  {
    id: 1,
    title: "Chronicles of the Dark Realm",
    author: "Alex Morrison",
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=200",
    progress: 85,
    totalChapters: 45,
    currentChapter: 38,
    rating: 4.8,
    genre: "Dark Fantasy",
    status: "reading",
    lastRead: "2 hours ago",
    addedDate: "2024-01-15",
    isFavorite: true,
    isDownloaded: true
  },
  {
    id: 2,
    title: "Cyber Dreams",
    author: "Sarah Chen",
    cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?w=200",
    progress: 100,
    totalChapters: 32,
    currentChapter: 32,
    rating: 4.6,
    genre: "Sci-Fi",
    status: "completed",
    lastRead: "3 days ago",
    addedDate: "2024-01-10",
    isFavorite: false,
    isDownloaded: true
  },
  {
    id: 3,
    title: "Ethereal Academy",
    author: "Michael Zhang",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200",
    progress: 45,
    totalChapters: 60,
    currentChapter: 27,
    rating: 4.2,
    genre: "Fantasy Romance",
    status: "reading",
    lastRead: "1 week ago",
    addedDate: "2024-01-05",
    isFavorite: true,
    isDownloaded: false
  },
  {
    id: 4,
    title: "The Silent Assassin",
    author: "Emma Thompson",
    cover: "https://images.unsplash.com/photo-1698954634383-eba274a1b1c7?w=200",
    progress: 0,
    totalChapters: 28,
    currentChapter: 0,
    rating: 4.9,
    genre: "Action Thriller",
    status: "want-to-read",
    lastRead: "Never",
    addedDate: "2024-01-20",
    isFavorite: false,
    isDownloaded: false
  },
  {
    id: 5,
    title: "Reincarnator's Journey",
    author: "David Kim",
    cover: "https://images.unsplash.com/photo-1647495161969-f6fe559317e5?w=200",
    progress: 100,
    totalChapters: 89,
    currentChapter: 89,
    rating: 4.7,
    genre: "Isekai Fantasy",
    status: "completed",
    lastRead: "2 weeks ago",
    addedDate: "2023-12-20",
    isFavorite: true,
    isDownloaded: true
  },
  {
    id: 6,
    title: "Shadow Slave",
    author: "Guiltythree",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200",
    progress: 65,
    totalChapters: 1456,
    currentChapter: 946,
    rating: 4.9,
    genre: "Dark Fantasy",
    status: "reading",
    lastRead: "Yesterday",
    addedDate: "2023-11-15",
    isFavorite: true,
    isDownloaded: true
  }
];

const readingLists = [
  {
    id: 1,
    name: "Fantasy Adventures",
    count: 12,
    color: "bg-purple-600",
    description: "Epic fantasy novels with amazing world-building"
  },
  {
    id: 2,
    name: "Sci-Fi Classics",
    count: 8,
    color: "bg-blue-600",
    description: "Must-read science fiction masterpieces"
  },
  {
    id: 3,
    name: "Romance Collection",
    count: 15,
    color: "bg-pink-600",
    description: "Heartwarming romantic stories"
  },
  {
    id: 4,
    name: "Want to Read",
    count: 23,
    color: "bg-gray-600",
    description: "Books I plan to read soon"
  }
];

export function LibraryPage({ onBack }: LibraryPageProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const filteredBooks = libraryBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "reading") return matchesSearch && book.status === "reading";
    if (activeTab === "completed") return matchesSearch && book.status === "completed";
    if (activeTab === "want-to-read") return matchesSearch && book.status === "want-to-read";
    if (activeTab === "favorites") return matchesSearch && book.isFavorite;
    
    return matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "reading": return <Play className="w-4 h-4 text-green-500" />;
      case "completed": return <CheckCircle className="w-4 h-4 text-blue-500" />;
      case "want-to-read": return <Plus className="w-4 h-4 text-gray-500" />;
      default: return <Pause className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "reading": return "bg-green-600/20 text-green-400";
      case "completed": return "bg-blue-600/20 text-blue-400";
      case "want-to-read": return "bg-gray-600/20 text-gray-400";
      default: return "bg-yellow-600/20 text-yellow-400";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="text-gray-300 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div className="text-gray-400">|</div>
              <h1 className="text-white text-2xl font-bold">My Library</h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-gray-800 rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-[#FF6B6B]" : ""}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-[#FF6B6B]" : ""}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/80">
                <Plus className="w-4 h-4 mr-2" />
                Add Book
              </Button>
            </div>
          </div>
          
          {/* Search and Filter */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search your library..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <Button variant="outline" className="border-gray-600">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Library Stats */}
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-white font-bold mb-4">Library Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Books</span>
                  <span className="text-white font-semibold">{libraryBooks.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Currently Reading</span>
                  <span className="text-white font-semibold">
                    {libraryBooks.filter(b => b.status === 'reading').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Completed</span>
                  <span className="text-white font-semibold">
                    {libraryBooks.filter(b => b.status === 'completed').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Want to Read</span>
                  <span className="text-white font-semibold">
                    {libraryBooks.filter(b => b.status === 'want-to-read').length}
                  </span>
                </div>
              </div>
            </Card>

            {/* Reading Lists */}
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-white font-bold mb-4">Reading Lists</h3>
              <div className="space-y-3">
                {readingLists.map((list, index) => (
                  <div
                    key={list.id}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors"
                  >
                    <div className={`w-4 h-4 rounded-full ${list.color}`}></div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{list.name}</p>
                      <p className="text-gray-400 text-xs">{list.count} books</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-gray-600">
                <Plus className="w-4 h-4 mr-2" />
                New List
              </Button>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="bg-gray-900 border-gray-700">
                <TabsTrigger value="all" className="data-[state=active]:bg-[#FF6B6B]">
                  All Books ({libraryBooks.length})
                </TabsTrigger>
                <TabsTrigger value="reading" className="data-[state=active]:bg-[#FF6B6B]">
                  Reading ({libraryBooks.filter(b => b.status === 'reading').length})
                </TabsTrigger>
                <TabsTrigger value="completed" className="data-[state=active]:bg-[#FF6B6B]">
                  Completed ({libraryBooks.filter(b => b.status === 'completed').length})
                </TabsTrigger>
                <TabsTrigger value="want-to-read" className="data-[state=active]:bg-[#FF6B6B]">
                  Want to Read ({libraryBooks.filter(b => b.status === 'want-to-read').length})
                </TabsTrigger>
                <TabsTrigger value="favorites" className="data-[state=active]:bg-[#FF6B6B]">
                  Favorites ({libraryBooks.filter(b => b.isFavorite).length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="space-y-6">
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredBooks.map((book, index) => (
                      <motion.div
                        key={book.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group cursor-pointer"
                      >
                        <Card className="bg-gray-900 border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300">
                          <div className="relative">
                            <ImageWithFallback
                              src={book.cover}
                              alt={book.title}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 left-2">
                              {getStatusIcon(book.status)}
                            </div>
                            <div className="absolute top-2 right-2 flex space-x-1">
                              {book.isFavorite && <Heart className="w-4 h-4 text-red-500 fill-current" />}
                              {book.isDownloaded && <Download className="w-4 h-4 text-green-500" />}
                            </div>
                            <div className="absolute bottom-2 left-2 right-2">
                              <Badge className={`${getStatusColor(book.status)} text-xs`}>
                                {book.status.replace('-', ' ')}
                              </Badge>
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="text-white font-medium text-sm mb-1 line-clamp-2 group-hover:text-[#FF6B6B] transition-colors">
                              {book.title}
                            </h3>
                            <p className="text-gray-400 text-xs mb-2">{book.author}</p>
                            <div className="flex items-center space-x-1 mb-2">
                              <Star className="w-3 h-3 text-[#FFD700] fill-current" />
                              <span className="text-[#FFD700] text-xs">{book.rating}</span>
                              <span className="text-gray-400 text-xs">• {book.genre}</span>
                            </div>
                            {book.progress > 0 && (
                              <div className="space-y-1">
                                <div className="flex justify-between text-xs text-gray-400">
                                  <span>Chapter {book.currentChapter}/{book.totalChapters}</span>
                                  <span>{book.progress}%</span>
                                </div>
                                <Progress value={book.progress} className="h-1" />
                              </div>
                            )}
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredBooks.map((book, index) => (
                      <motion.div
                        key={book.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Card className="bg-gray-900 border-gray-700 p-4 hover:bg-gray-800 transition-colors cursor-pointer">
                          <div className="flex items-center space-x-4">
                            <img
                              src={book.cover}
                              alt={book.title}
                              className="w-16 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="text-white font-medium mb-1">{book.title}</h3>
                                  <p className="text-gray-400 text-sm">{book.author}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="flex items-center space-x-1">
                                    <Star className="w-4 h-4 text-[#FFD700] fill-current" />
                                    <span className="text-[#FFD700] text-sm">{book.rating}</span>
                                  </div>
                                  <Badge className={`${getStatusColor(book.status)} text-xs`}>
                                    {book.status.replace('-', ' ')}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 text-sm text-gray-400">
                                  <span>{book.genre}</span>
                                  <span>•</span>
                                  <span>Ch. {book.currentChapter}/{book.totalChapters}</span>
                                  <span>•</span>
                                  <span>{book.lastRead}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  {book.isFavorite && <Heart className="w-4 h-4 text-red-500 fill-current" />}
                                  {book.isDownloaded && <Download className="w-4 h-4 text-green-500" />}
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                              {book.progress > 0 && (
                                <div className="mt-3">
                                  <Progress value={book.progress} className="h-2" />
                                </div>
                              )}
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}