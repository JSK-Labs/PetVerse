import { HeroSection } from '../../components/HomePage/HeroSection';
import { PostInput } from '../../components/HomePage/PostInput';
import { PostList } from '../../components/HomePage/PostList';
import { YourImpact } from '../../components/HomePage/Sidebar/Impact';
import { ActiveCampaigns } from '../../components/HomePage/Sidebar/ActiveCampaigns';
import { UpcomingEvents } from '../../components/HomePage/Sidebar/UpcomingEvents';
import { Notifications } from '../../components/HomePage/Sidebar/Notifications';


export default function HomePage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <HeroSection />
              <PostInput />
              <PostList />
            </div>
            <div className="space-y-6">
              <YourImpact />
              <ActiveCampaigns />
              <UpcomingEvents />
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
