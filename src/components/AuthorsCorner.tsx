import { useState } from "react";
import { motion } from "motion/react";
import { 
  BookOpen, 
  Plus, 
  Eye, 
  Heart, 
  MessageCircle, 
  TrendingUp, 
  Calendar,
  Edit3,
  BarChart3,
  Users,
  Star,
  ArrowLeft,
  PenTool,
  FileText,
  Settings
} from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface AuthorsCornerProps {
  onBack: () => void;
}

const myNovels = [
  {
    id: 1,
    title: "Chronicles of the Dark Realm",
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMGJvb2t8ZW58MXx8fHwxNzU4MzUxMDAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "Publishing",
    chapters: 45,
    views: 12850,
    likes: 2341,
    comments: 456,
    lastUpdate: "2 days ago",
    rating: 4.7
  },
  {
    id: 2,
    title: "Ethereal Academy",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1ODMxNDQyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    status: "Draft",
    chapters: 12,
    views: 0,
    likes: 0,
    comments: 0,
    lastUpdate: "1 week ago",
    rating: 0
  },
  {
    id: 3,
    title: "Cyber Dreams",
    cover: "https://images.unsplash.com/photo-1530519362533-b36020711133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZmljdGlvbiUyMGJvb2t8ZW58MXx8fHwxNzU4MjYwNjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "Completed",
    chapters: 78,
    views: 45230,
    likes: 8945,
    comments: 1234,
    lastUpdate: "3 months ago",
    rating: 4.9
  }
];

const quickActions = [
  { icon: Plus, label: "New Novel", color: "bg-blue-600 hover:bg-blue-700" },
  { icon: Edit3, label: "Continue Writing", color: "bg-green-600 hover:bg-green-700" },
  { icon: BarChart3, label: "Analytics", color: "bg-purple-600 hover:bg-purple-700" },
  { icon: Users, label: "Community", color: "bg-orange-600 hover:bg-orange-700" }
];

const stats = [
  { label: "Total Views", value: "58,080", icon: Eye, change: "+12.5%" },
  { label: "Total Likes", value: "11,286", icon: Heart, change: "+8.3%" },
  { label: "Comments", value: "1,690", icon: MessageCircle, change: "+15.2%" },
  { label: "Followers", value: "2,847", icon: Users, change: "+23.1%" }
];

export function AuthorsCorner({ onBack }: AuthorsCornerProps) {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
            <h1 className="text-white text-2xl font-bold">Author's Corner</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-[#FF6B6B] text-white">
              Premium Author
            </Badge>
            <Button variant="outline" size="sm" className="border-gray-600">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="bg-gray-900 border-gray-700">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-[#FF6B6B]">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="novels" className="data-[state=active]:bg-[#FF6B6B]">
              My Novels
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-[#FF6B6B]">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="earnings" className="data-[state=active]:bg-[#FF6B6B]">
              Earnings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-8">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] rounded-2xl p-8 text-white"
            >
              <h2 className="text-3xl font-bold mb-2">Welcome back, Author!</h2>
              <p className="text-white/90 mb-6">Ready to continue your writing journey? Your readers are waiting for the next chapter.</p>
              <div className="flex space-x-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <Button
                      key={index}
                      className={`${action.color} text-white border-0`}
                      size="lg"
                    >
                      <IconComponent className="w-5 h-5 mr-2" />
                      {action.label}
                    </Button>
                  );
                })}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gray-900 border-gray-700 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <IconComponent className="w-8 h-8 text-[#FF6B6B]" />
                        <Badge variant="secondary" className="bg-green-600/20 text-green-400">
                          {stat.change}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <p className="text-3xl font-bold text-white">{stat.value}</p>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Recent Activity */}
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: "New chapter published", novel: "Chronicles of the Dark Realm", time: "2 hours ago" },
                  { action: "Received 25 new comments", novel: "Cyber Dreams", time: "1 day ago" },
                  { action: "Novel reached 50K views", novel: "Chronicles of the Dark Realm", time: "3 days ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                    <div className="w-3 h-3 bg-[#FF6B6B] rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white">{activity.action}</p>
                      <p className="text-gray-400 text-sm">{activity.novel} • {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="novels" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">My Novels</h2>
              <Button className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/80">
                <Plus className="w-4 h-4 mr-2" />
                Create New Novel
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myNovels.map((novel, index) => (
                <motion.div
                  key={novel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900 border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={novel.cover}
                        alt={novel.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge 
                        className={`absolute top-2 right-2 ${
                          novel.status === 'Publishing' ? 'bg-green-600' : 
                          novel.status === 'Draft' ? 'bg-yellow-600' : 'bg-blue-600'
                        }`}
                      >
                        {novel.status}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">{novel.title}</h3>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex justify-between">
                          <span>Chapters:</span>
                          <span className="text-white">{novel.chapters}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Views:</span>
                          <span className="text-white">{novel.views.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Likes:</span>
                          <span className="text-white">{novel.likes.toLocaleString()}</span>
                        </div>
                        {novel.rating > 0 && (
                          <div className="flex justify-between">
                            <span>Rating:</span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-[#FFD700] fill-current" />
                              <span className="text-white">{novel.rating}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-700 flex space-x-2">
                        <Button size="sm" className="flex-1 bg-[#FF6B6B] hover:bg-[#FF6B6B]/80">
                          <Edit3 className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-600">
                          <BarChart3 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Analytics Dashboard</h3>
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Analytics dashboard coming soon...</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="earnings">
            <Card className="bg-gray-900 border-gray-700 p-6">
              <h3 className="text-xl font-bold text-white mb-6">Earnings Overview</h3>
              <div className="text-center py-12">
                <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Earnings dashboard coming soon...</p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}