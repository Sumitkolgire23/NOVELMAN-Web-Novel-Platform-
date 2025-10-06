import { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  MessageCircle, 
  TrendingUp, 
  Users, 
  Clock, 
  Heart, 
  Reply, 
  Pin,
  Flame,
  Award,
  Eye,
  ThumbsUp,
  Search,
  Filter,
  Plus
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Avatar } from "./ui/avatar";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CommunityPageProps {
  onBack: () => void;
}

const trendingTopics = [
  { 
    id: 1, 
    title: "Best Fantasy Novels of 2024", 
    replies: 234, 
    views: 12450, 
    likes: 89,
    author: "NovelMaster",
    lastActivity: "2h ago",
    category: "Fantasy",
    isPinned: true
  },
  { 
    id: 2, 
    title: "Writing Tips for New Authors", 
    replies: 156, 
    views: 8900, 
    likes: 145,
    author: "AuthorGuru",
    lastActivity: "4h ago",
    category: "Writing",
    isPinned: false
  },
  { 
    id: 3, 
    title: "Romantic Manhwa Recommendations", 
    replies: 89, 
    views: 5600, 
    likes: 67,
    author: "ManhwaLover",
    lastActivity: "6h ago",
    category: "Romance",
    isPinned: false
  },
  { 
    id: 4, 
    title: "Sci-Fi vs Fantasy: The Great Debate", 
    replies: 78, 
    views: 4200, 
    likes: 34,
    author: "GenreExplorer",
    lastActivity: "8h ago",
    category: "Discussion",
    isPinned: false
  },
];

const recentPosts = [
  {
    id: 1,
    title: "Just finished reading 'Chronicles of the Dark Realm' - Amazing!",
    content: "I can't believe how well-written this story is. The character development is phenomenal and the world-building is incredibly detailed. Highly recommend to anyone who loves dark fantasy!",
    author: "BookwormReader",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829?w=150",
    category: "Reviews",
    timestamp: "30 min ago",
    likes: 23,
    replies: 5,
    hasLiked: false
  },
  {
    id: 2,
    title: "Looking for beta readers for my new novel",
    content: "Hey everyone! I'm looking for some beta readers for my upcoming fantasy novel. It's about 80k words and focuses on elemental magic systems. DM me if interested!",
    author: "AspringAuthor99",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    category: "Writing",
    timestamp: "1h ago",
    likes: 12,
    replies: 8,
    hasLiked: true
  },
  {
    id: 3,
    title: "Weekly Reading Challenge - Week 23",
    content: "This week's challenge: Read a story from a genre you've never tried before! Share your picks and thoughts in the comments. I'm going with historical fiction for the first time.",
    author: "ChallengeHost",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    category: "Challenges",
    timestamp: "2h ago",
    likes: 45,
    replies: 28,
    hasLiked: false
  }
];

const topContributors = [
  { name: "NovelMaster", points: 15420, rank: 1, avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" },
  { name: "AuthorGuru", points: 12350, rank: 2, avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b829?w=100" },
  { name: "BookCritic", points: 9870, rank: 3, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" },
  { name: "StorySeeker", points: 8540, rank: 4, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100" },
];

const categories = [
  { name: "Fantasy", count: 1247, color: "bg-purple-600" },
  { name: "Romance", count: 986, color: "bg-pink-600" },
  { name: "Sci-Fi", count: 743, color: "bg-blue-600" },
  { name: "Writing", count: 654, color: "bg-green-600" },
  { name: "Reviews", count: 532, color: "bg-orange-600" },
  { name: "Discussion", count: 421, color: "bg-indigo-600" }
];

export function CommunityPage({ onBack }: CommunityPageProps) {
  const [activeTab, setActiveTab] = useState("trending");
  const [searchQuery, setSearchQuery] = useState("");

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
                Back to Platform
              </Button>
              <div className="text-gray-400">|</div>
              <h1 className="text-white text-2xl font-bold">Community Hub</h1>
            </div>
            <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/80">
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </div>
          
          {/* Search and Filter */}
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search discussions..."
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
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="bg-gray-900 border-gray-700">
                <TabsTrigger value="trending" className="data-[state=active]:bg-[#FF6B6B]">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending
                </TabsTrigger>
                <TabsTrigger value="recent" className="data-[state=active]:bg-[#FF6B6B]">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent
                </TabsTrigger>
                <TabsTrigger value="popular" className="data-[state=active]:bg-[#FF6B6B]">
                  <Flame className="w-4 h-4 mr-2" />
                  Popular
                </TabsTrigger>
              </TabsList>

              <TabsContent value="trending" className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-900 border-gray-700 p-6 hover:bg-gray-800 transition-colors cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {topic.isPinned && <Pin className="w-4 h-4 text-[#FFD700]" />}
                            <Badge variant="secondary" className="bg-[#FF6B6B]/20 text-[#FF6B6B]">
                              {topic.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2 hover:text-[#FF6B6B] transition-colors">
                            {topic.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span>by {topic.author}</span>
                            <span>{topic.lastActivity}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{topic.replies}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{topic.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{topic.likes}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="recent" className="space-y-6">
                {recentPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-900 border-gray-700 p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-10 h-10">
                          <ImageWithFallback
                            src={post.avatar}
                            alt={post.author}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-white">{post.author}</span>
                            <Badge variant="secondary" className="bg-gray-700 text-gray-300">
                              {post.category}
                            </Badge>
                            <span className="text-gray-400 text-sm">{post.timestamp}</span>
                          </div>
                          <h4 className="text-white font-medium mb-2">{post.title}</h4>
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{post.content}</p>
                          <div className="flex items-center space-x-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`text-gray-400 hover:text-white ${post.hasLiked ? 'text-[#FF6B6B]' : ''}`}
                            >
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                              <Reply className="w-4 h-4 mr-1" />
                              {post.replies}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>

              <TabsContent value="popular">
                <Card className="bg-gray-900 border-gray-700 p-8">
                  <div className="text-center">
                    <Flame className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">Popular posts will appear here based on engagement metrics.</p>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-white font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-[#FFD700]" />
                Top Contributors
              </h3>
              <div className="space-y-3">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      contributor.rank === 1 ? 'bg-[#FFD700] text-black' :
                      contributor.rank === 2 ? 'bg-gray-400 text-black' :
                      contributor.rank === 3 ? 'bg-orange-500 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {contributor.rank}
                    </div>
                    <Avatar className="w-8 h-8">
                      <ImageWithFallback
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-white text-sm font-medium">{contributor.name}</p>
                      <p className="text-gray-400 text-xs">{contributor.points.toLocaleString()} points</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Categories */}
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-white font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800 cursor-pointer transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                      <span className="text-gray-300">{category.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{category.count}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Community Stats */}
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-white font-bold mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Members</span>
                  <span className="text-white font-semibold">24,567</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Active Today</span>
                  <span className="text-white font-semibold">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Posts</span>
                  <span className="text-white font-semibold">87,291</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">New This Week</span>
                  <span className="text-green-400 font-semibold">+456</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}