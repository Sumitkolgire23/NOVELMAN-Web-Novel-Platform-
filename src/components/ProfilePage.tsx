import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Bell, 
  Bookmark, 
  Settings as SettingsIcon, 
  LogOut,
  Edit,
  History,
  Crown,
  CreditCard,
  Palette,
  Shield,
  Mail,
  Clock,
  Check,
  BookOpen
} from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Switch } from "./ui/switch";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";

interface ProfilePageProps {
  onBack: () => void;
  onLibraryClick: () => void;
}

type SidebarSection = 'profile' | 'notifications' | 'saved' | 'settings';
type SettingsMenu = 'profile' | 'notifications' | 'privacy' | 'payment' | 'theme';

// Mock Data
const userData = {
  name: "Alexander Wright",
  userId: "NM-2847391",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwYXZhdGFyfGVufDF8fHx8MTc1OTM5NDQyOHww&ixlib=rb-4.1.0&q=80&w=1080",
  membership: "Premium",
  joinDate: "January 2024"
};

const initialNotifications = [
  { id: 1, type: "chapter", title: "New chapter released: Chronicles of the Dark Realm - Ch 127", time: "2 hours ago", read: false },
  { id: 2, type: "system", title: "Your Premium membership has been renewed", time: "1 day ago", read: false },
  { id: 3, type: "message", title: "Author replied to your comment on Cyber Dreams", time: "2 days ago", read: true },
  { id: 4, type: "chapter", title: "New chapter released: Ethereal Academy - Ch 85", time: "3 days ago", read: true },
  { id: 5, type: "system", title: "Weekly reading summary: You've read 12 hours this week!", time: "5 days ago", read: true },
];

const savedNovels = [
  {
    id: 1,
    title: "Chronicles of the Dark Realm",
    cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1OTM4NTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 127,
    total: 200,
    percentage: 63
  },
  {
    id: 2,
    title: "Cyber Dreams",
    cover: "https://images.unsplash.com/photo-1614193471837-27a61f4ccc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzU5NDg2MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 89,
    total: 120,
    percentage: 74
  },
  {
    id: 3,
    title: "Moonlight Romance",
    cover: "https://images.unsplash.com/photo-1739521949473-a703e0536ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbmNlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1OTQ4NjAzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 45,
    total: 150,
    percentage: 30
  },
  {
    id: 4,
    title: "Ethereal Academy",
    cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1OTM4NTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 112,
    total: 180,
    percentage: 62
  }
];

const savedComics = [
  {
    id: 1,
    title: "Dark Knight Chronicles",
    cover: "https://images.unsplash.com/photo-1620336655055-088d06e36bf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NTk0ODYxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 45,
    total: 100,
    percentage: 45
  },
  {
    id: 2,
    title: "Galactic Warriors",
    cover: "https://images.unsplash.com/photo-1614193471837-27a61f4ccc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzU5NDg2MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 23,
    total: 80,
    percentage: 28
  }
];

const savedFanfic = [
  {
    id: 1,
    title: "The Lost Chronicles",
    cover: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc1OTM4NTI4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 34,
    total: 75,
    percentage: 45
  },
  {
    id: 2,
    title: "Alternate Reality",
    cover: "https://images.unsplash.com/photo-1614193471837-27a61f4ccc8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2ktZmklMjBib29rJTIwY292ZXJ8ZW58MXx8fHwxNzU5NDg2MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    progress: 56,
    total: 90,
    percentage: 62
  }
];

export function ProfilePage({ onBack, onLibraryClick }: ProfilePageProps) {
  const [activeSection, setActiveSection] = useState<SidebarSection>('profile');
  const [activeSettingsMenu, setActiveSettingsMenu] = useState<SettingsMenu>('profile');
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleCreateClick = () => {};
  const handleCommunityClick = () => {};
  const handleProfileClick = () => {};

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => notif.id === id ? { ...notif, read: true } : notif)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar 
        onCreateClick={handleCreateClick}
        onCommunityClick={handleCommunityClick}
        onProfileClick={handleProfileClick}
        onLibraryClick={onLibraryClick}
      />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-[#0A0A0A] border-r border-gray-800 min-h-screen sticky top-0">
          <div className="p-6">
            {/* Profile Header in Sidebar */}
            <div className="mb-8 pb-6 border-b border-gray-800">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FF6B6B] shadow-lg shadow-[#FF6B6B]/20">
                  <ImageWithFallback
                    src={userData.avatar}
                    alt={userData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-white">{userData.name}</p>
                  <p className="text-gray-400 text-sm">{userData.userId}</p>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2">
              <button
                onClick={() => setActiveSection('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  activeSection === 'profile' 
                    ? 'bg-[#FF6B6B] text-white shadow-lg shadow-[#FF6B6B]/20' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>

              <button
                onClick={() => setActiveSection('notifications')}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 ${
                  activeSection === 'notifications' 
                    ? 'bg-[#FF6B6B] text-white shadow-lg shadow-[#FF6B6B]/20' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5" />
                  <span>Notifications</span>
                </div>
                {notifications.filter(n => !n.read).length > 0 && (
                  <Badge className="bg-[#FFD700] text-black">
                    {notifications.filter(n => !n.read).length}
                  </Badge>
                )}
              </button>

              <button
                onClick={() => setActiveSection('saved')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  activeSection === 'saved' 
                    ? 'bg-[#FF6B6B] text-white shadow-lg shadow-[#FF6B6B]/20' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Bookmark className="w-5 h-5" />
                <span>Saved</span>
              </button>

              <button
                onClick={() => setActiveSection('settings')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                  activeSection === 'settings' 
                    ? 'bg-[#FF6B6B] text-white shadow-lg shadow-[#FF6B6B]/20' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <SettingsIcon className="w-5 h-5" />
                <span>Settings</span>
              </button>

              <Separator className="my-4 bg-gray-800" />

              <button
                onClick={onBack}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-2xl text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-black">
          {/* Profile Section */}
          {activeSection === 'profile' && (
            <div className="p-8">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-[#0A0A0A] to-gray-900 rounded-2xl p-8 mb-8 border border-gray-800 shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-6">
                    <div className="relative">
                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#FF6B6B] shadow-lg shadow-[#FF6B6B]/30">
                        <ImageWithFallback
                          src={userData.avatar}
                          alt={userData.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {userData.membership === "Premium" && (
                        <div className="absolute -bottom-2 -right-2 bg-[#FFD700] rounded-full p-2 shadow-lg">
                          <Crown className="w-5 h-5 text-black" />
                        </div>
                      )}
                    </div>
                    <div className="pt-2">
                      <h2 className="text-white text-3xl mb-2">{userData.name}</h2>
                      <p className="text-gray-400 mb-3">User ID: {userData.userId}</p>
                      <div className="flex items-center space-x-3">
                        <Badge className={`px-4 py-2 ${
                          userData.membership === "Premium" 
                            ? 'bg-gradient-to-r from-[#FFD700] to-yellow-600 text-black' 
                            : 'bg-gray-700 text-gray-300'
                        }`}>
                          {userData.membership === "Premium" && <Crown className="w-4 h-4 mr-2" />}
                          {userData.membership} Member
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white rounded-2xl shadow-lg shadow-[#FF6B6B]/30 transition-all duration-300 px-6 py-3">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="border-gray-600 hover:border-[#FFD700] text-white rounded-2xl transition-all duration-300 px-6 py-3">
                      <History className="w-4 h-4 mr-2" />
                      View History
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: "Books Read", value: "127", icon: BookOpen, color: "#FF6B6B" },
                  { label: "Reading Hours", value: "340h", icon: Clock, color: "#FFD700" },
                  { label: "Current Streak", value: "45 Days", icon: Check, color: "#4CAF50" },
                  { label: "Member Since", value: userData.joinDate, icon: User, color: "#2196F3" }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                    </div>
                    <p className="text-3xl text-white mb-1">{stat.value}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notifications Section */}
          {activeSection === 'notifications' && (
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-3xl">Notifications</h2>
                <Button 
                  onClick={markAllAsRead}
                  variant="outline" 
                  className="border-gray-600 hover:border-[#FF6B6B] text-white rounded-2xl"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Mark All as Read
                </Button>
              </div>

              {/* Announcement Bar */}
              <div className="bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] rounded-2xl p-4 mb-6">
                <p className="text-black text-center">
                  📚 Welcome to Novelman! Stay updated with the latest chapters and announcements
                </p>
              </div>

              {/* Notification List */}
              <ScrollArea className="h-[600px]">
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => markAsRead(notification.id)}
                      className={`bg-[#0A0A0A] border rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                        notification.read 
                          ? 'border-gray-800 opacity-60' 
                          : 'border-[#FF6B6B] shadow-lg shadow-[#FF6B6B]/10'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {notification.type === 'chapter' && <BookOpen className="w-4 h-4 text-[#FF6B6B]" />}
                            {notification.type === 'system' && <Bell className="w-4 h-4 text-[#FFD700]" />}
                            {notification.type === 'message' && <Mail className="w-4 h-4 text-blue-400" />}
                            <span className="text-white">{notification.title}</span>
                          </div>
                          <p className="text-gray-400 text-sm">{notification.time}</p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}

          {/* Saved/Library Section */}
          {activeSection === 'saved' && (
            <div className="p-8">
              <h2 className="text-white text-3xl mb-6">Saved Library</h2>

              <Tabs defaultValue="novels" className="space-y-6">
                <TabsList className="bg-[#0A0A0A] border border-gray-800 rounded-2xl p-1">
                  <TabsTrigger 
                    value="novels" 
                    className="rounded-xl data-[state=active]:bg-[#FF6B6B] data-[state=active]:text-white"
                  >
                    Novels
                  </TabsTrigger>
                  <TabsTrigger 
                    value="comics" 
                    className="rounded-xl data-[state=active]:bg-[#FF6B6B] data-[state=active]:text-white"
                  >
                    Comics
                  </TabsTrigger>
                  <TabsTrigger 
                    value="fanfic" 
                    className="rounded-xl data-[state=active]:bg-[#FF6B6B] data-[state=active]:text-white"
                  >
                    Fan-fic
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="novels">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {savedNovels.map((novel) => (
                      <div
                        key={novel.id}
                        className="bg-[#0A0A0A] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#FF6B6B] transition-all duration-300 group"
                      >
                        <div className="aspect-[3/4] overflow-hidden">
                          <ImageWithFallback
                            src={novel.cover}
                            alt={novel.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-white mb-2 line-clamp-2">{novel.title}</h3>
                          <div className="mb-3">
                            <div className="flex justify-between text-sm text-gray-400 mb-1">
                              <span>Chapter {novel.progress}/{novel.total}</span>
                              <span>{novel.percentage}%</span>
                            </div>
                            <Progress value={novel.percentage} className="h-2" />
                          </div>
                          <Button className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white rounded-xl transition-all duration-300">
                            Continue Reading
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="comics">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {savedComics.map((comic) => (
                      <div
                        key={comic.id}
                        className="bg-[#0A0A0A] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#FF6B6B] transition-all duration-300 group"
                      >
                        <div className="aspect-[3/4] overflow-hidden">
                          <ImageWithFallback
                            src={comic.cover}
                            alt={comic.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-white mb-2 line-clamp-2">{comic.title}</h3>
                          <div className="mb-3">
                            <div className="flex justify-between text-sm text-gray-400 mb-1">
                              <span>Issue {comic.progress}/{comic.total}</span>
                              <span>{comic.percentage}%</span>
                            </div>
                            <Progress value={comic.percentage} className="h-2" />
                          </div>
                          <Button className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white rounded-xl transition-all duration-300">
                            Continue Reading
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="fanfic">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {savedFanfic.map((fanfic) => (
                      <div
                        key={fanfic.id}
                        className="bg-[#0A0A0A] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#FF6B6B] transition-all duration-300 group"
                      >
                        <div className="aspect-[3/4] overflow-hidden">
                          <ImageWithFallback
                            src={fanfic.cover}
                            alt={fanfic.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-white mb-2 line-clamp-2">{fanfic.title}</h3>
                          <div className="mb-3">
                            <div className="flex justify-between text-sm text-gray-400 mb-1">
                              <span>Chapter {fanfic.progress}/{fanfic.total}</span>
                              <span>{fanfic.percentage}%</span>
                            </div>
                            <Progress value={fanfic.percentage} className="h-2" />
                          </div>
                          <Button className="w-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white rounded-xl transition-all duration-300">
                            Continue Reading
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Settings Section */}
          {activeSection === 'settings' && (
            <div className="p-8">
              <h2 className="text-white text-3xl mb-6">Settings</h2>

              <div className="grid grid-cols-4 gap-6">
                {/* Settings Menu - Left */}
                <div className="col-span-1 bg-[#0A0A0A] border border-gray-800 rounded-2xl p-5 h-fit">
                  <h3 className="text-white mb-4 px-2">Settings Menu</h3>
                  <nav className="space-y-2">
                    <button
                      onClick={() => setActiveSettingsMenu('profile')}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSettingsMenu === 'profile'
                          ? 'bg-[#FF6B6B] text-white shadow-lg'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <User className="w-5 h-5" />
                      <span>Profile Settings</span>
                    </button>

                    <button
                      onClick={() => setActiveSettingsMenu('notifications')}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSettingsMenu === 'notifications'
                          ? 'bg-[#FF6B6B] text-white shadow-lg'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <Bell className="w-5 h-5" />
                      <span>Notifications Settings</span>
                    </button>

                    <button
                      onClick={() => setActiveSettingsMenu('privacy')}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSettingsMenu === 'privacy'
                          ? 'bg-[#FF6B6B] text-white shadow-lg'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <Shield className="w-5 h-5" />
                      <span>Privacy & Security</span>
                    </button>

                    <button
                      onClick={() => setActiveSettingsMenu('payment')}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSettingsMenu === 'payment'
                          ? 'bg-[#FF6B6B] text-white shadow-lg'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <CreditCard className="w-5 h-5" />
                      <span>Payment & Subscription</span>
                    </button>

                    <button
                      onClick={() => setActiveSettingsMenu('theme')}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        activeSettingsMenu === 'theme'
                          ? 'bg-[#FF6B6B] text-white shadow-lg'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <Palette className="w-5 h-5" />
                      <span>Theme (Dark/Light)</span>
                    </button>
                  </nav>
                </div>

                {/* Settings Detail - Right */}
                <div className="col-span-3 bg-[#0A0A0A] border border-gray-800 rounded-2xl p-6">
                  <div className="mb-4">
                    <h3 className="text-white text-xl text-gray-400">Settings in Detail</h3>
                    <Separator className="bg-gray-800 mt-2" />
                  </div>

                  {activeSettingsMenu === 'profile' && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl mb-4">Profile Settings</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="username" className="text-gray-300">Username</Label>
                          <Input 
                            id="username" 
                            defaultValue={userData.name}
                            className="bg-gray-800 border-gray-700 text-white rounded-xl mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-gray-300">Email</Label>
                          <Input 
                            id="email" 
                            type="email"
                            defaultValue="alexander.wright@novelman.com"
                            className="bg-gray-800 border-gray-700 text-white rounded-xl mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="bio" className="text-gray-300">Bio</Label>
                          <Input 
                            id="bio" 
                            defaultValue="Passionate reader and literature enthusiast"
                            className="bg-gray-800 border-gray-700 text-white rounded-xl mt-2"
                          />
                        </div>

                        <Button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white rounded-xl">
                          Save Changes
                        </Button>
                      </div>
                    </div>
                  )}

                  {activeSettingsMenu === 'notifications' && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl mb-4">Notification Settings</h3>
                      
                      <div className="space-y-4">
                        {[
                          { label: "New Chapter Alerts", description: "Get notified when a new chapter is released" },
                          { label: "Comment Replies", description: "Get notified when someone replies to your comment" },
                          { label: "Author Updates", description: "Get notified about updates from followed authors" },
                          { label: "System Messages", description: "Receive important system notifications" },
                          { label: "Email Notifications", description: "Receive notifications via email" }
                        ].map((setting, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
                            <div>
                              <p className="text-white">{setting.label}</p>
                              <p className="text-gray-400 text-sm">{setting.description}</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeSettingsMenu === 'privacy' && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl mb-4">Privacy & Security</h3>
                      
                      <div className="space-y-4">
                        {[
                          { label: "Profile Visibility", description: "Make your profile visible to everyone" },
                          { label: "Show Reading Activity", description: "Display your reading activity publicly" },
                          { label: "Allow Messages", description: "Allow other users to send you messages" },
                          { label: "Two-Factor Authentication", description: "Add an extra layer of security" }
                        ].map((setting, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
                            <div>
                              <p className="text-white">{setting.label}</p>
                              <p className="text-gray-400 text-sm">{setting.description}</p>
                            </div>
                            <Switch defaultChecked={index < 2} />
                          </div>
                        ))}

                        <Separator className="bg-gray-700 my-4" />

                        <div>
                          <Label htmlFor="current-password" className="text-gray-300">Current Password</Label>
                          <Input 
                            id="current-password" 
                            type="password"
                            className="bg-gray-800 border-gray-700 text-white rounded-xl mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="new-password" className="text-gray-300">New Password</Label>
                          <Input 
                            id="new-password" 
                            type="password"
                            className="bg-gray-800 border-gray-700 text-white rounded-xl mt-2"
                          />
                        </div>

                        <Button className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white rounded-xl">
                          Update Password
                        </Button>
                      </div>
                    </div>
                  )}

                  {activeSettingsMenu === 'payment' && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl mb-4">Payment & Subscription</h3>
                      
                      <div className="bg-gradient-to-r from-[#FFD700] to-yellow-600 rounded-2xl p-6 mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Crown className="w-6 h-6 text-black" />
                              <h4 className="text-black text-xl">Premium Member</h4>
                            </div>
                            <p className="text-black/80">Next billing date: November 3, 2025</p>
                          </div>
                          <Button variant="outline" className="border-black text-black hover:bg-black hover:text-[#FFD700] rounded-xl">
                            Manage Subscription
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-white text-xl">Payment Methods</h4>
                        <div className="p-4 bg-gray-800 rounded-xl flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <CreditCard className="w-6 h-6 text-[#FF6B6B]" />
                            <div>
                              <p className="text-white">•••• •••• •••• 4242</p>
                              <p className="text-gray-400 text-sm">Expires 12/25</p>
                            </div>
                          </div>
                          <Button variant="ghost" className="text-gray-400 hover:text-white">
                            Remove
                          </Button>
                        </div>

                        <Button variant="outline" className="border-gray-600 text-white hover:border-[#FF6B6B] rounded-xl">
                          Add Payment Method
                        </Button>
                      </div>
                    </div>
                  )}

                  {activeSettingsMenu === 'theme' && (
                    <div className="space-y-6">
                      <h3 className="text-white text-2xl mb-4">Theme Settings</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-800 rounded-xl">
                          <div>
                            <p className="text-white">Dark Mode</p>
                            <p className="text-gray-400 text-sm">Use dark theme across the platform</p>
                          </div>
                          <Switch defaultChecked />
                        </div>

                        <div className="p-4 bg-gray-800 rounded-xl">
                          <p className="text-white mb-4">Accent Color</p>
                          <div className="flex space-x-3">
                            {['#FF6B6B', '#FFD700', '#4CAF50', '#2196F3', '#9C27B0'].map((color, index) => (
                              <button
                                key={index}
                                className="w-12 h-12 rounded-full border-2 border-gray-600 hover:border-white transition-all duration-300"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}