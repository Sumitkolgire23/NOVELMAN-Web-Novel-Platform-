import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { FeaturedCarousel } from "./components/FeaturedCarousel";
import { PopularNovels } from "./components/PopularNovels";
import { RecentUploads } from "./components/RecentUploads";
import { RisingFictions } from "./components/RisingFictions";
import { PromotionalCards } from "./components/PromotionalCards";
import { GenresTags } from "./components/GenresTags";
import { Footer } from "./components/Footer";
import { LatestUpdatesPage } from "./components/LatestUpdatesPage";
import { AuthorsCorner } from "./components/AuthorsCorner";
import { CommunityPage } from "./components/CommunityPage";
import { ProfilePage } from "./components/ProfilePage";
import { LibraryPage } from "./components/LibraryPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'latest-updates' | 'authors-corner' | 'community' | 'profile' | 'library'>('home');

  const handleViewAllLatestUpdates = () => {
    setCurrentPage('latest-updates');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const handleCreateClick = () => {
    setCurrentPage('authors-corner');
  };

  const handleBecomeAuthorClick = () => {
    setCurrentPage('authors-corner');
  };

  const handleCommunityClick = () => {
    setCurrentPage('community');
  };

  const handleProfileClick = () => {
    setCurrentPage('profile');
  };

  const handleLibraryClick = () => {
    setCurrentPage('library');
  };

  if (currentPage === 'latest-updates') {
    return (
      <div className="min-h-screen bg-black">
        <Navbar 
          onCreateClick={handleCreateClick}
          onCommunityClick={handleCommunityClick}
          onProfileClick={handleProfileClick}
          onLibraryClick={handleLibraryClick}
        />
        <LatestUpdatesPage onBack={handleBackToHome} />
      </div>
    );
  }

  if (currentPage === 'authors-corner') {
    return (
      <AuthorsCorner onBack={handleBackToHome} />
    );
  }

  if (currentPage === 'community') {
    return (
      <CommunityPage onBack={handleBackToHome} />
    );
  }

  if (currentPage === 'profile') {
    return (
      <ProfilePage 
        onBack={handleBackToHome} 
        onLibraryClick={handleLibraryClick}
      />
    );
  }

  if (currentPage === 'library') {
    return (
      <LibraryPage onBack={handleBackToHome} />
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <Navbar 
        onCreateClick={handleCreateClick}
        onCommunityClick={handleCommunityClick}
        onProfileClick={handleProfileClick}
        onLibraryClick={handleLibraryClick}
      />
      
      {/* Featured Carousel Section */}
      <FeaturedCarousel />
      
      {/* Today's Popular Section */}
      <PopularNovels />
      
      {/* Latest Updates with S Ranking List */}
      <RecentUploads onViewAll={handleViewAllLatestUpdates} />
      
      {/* Promotional Cards Section */}
      <PromotionalCards onBecomeAuthorClick={handleBecomeAuthorClick} />
      
      {/* Rising Fictions and Cheering Reads Section */}
      <RisingFictions />
      
      {/* Genres & Tags Section */}
      <GenresTags />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}