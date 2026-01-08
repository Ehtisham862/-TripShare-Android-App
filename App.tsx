
import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ExpensesPage from './pages/ExpensesPage';
import MapsPage from './pages/MapsPage';
import GalleryPage from './pages/GalleryPage';
import ProfilePage from './pages/ProfilePage';
import TripDetail from './pages/TripDetail';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import ExplorePage from './pages/ExplorePage';
import AddTripPage from './pages/AddTripPage';
import { Trip, User } from './types';

// Mock Data
const MOCK_USER: User = { id: 'u1', name: 'Ehtisham Ali', email: 'ea9773520@gmail.com', avatar: 'https://picsum.photos/seed/user1/100/100' };
const INITIAL_MOCK_TRIPS: Trip[] = [
  {
    id: 't1',
    title: 'Northern Adventure',
    destination: 'Hunza Valley',
    startDate: '2024-06-15',
    endDate: '2024-06-22',
    description: 'A deep dive into the Karakoram mountains.',
    ownerId: 'u1',
    participants: [MOCK_USER, { id: 'u2', name: 'Zohaib Hassan', email: 'cheema@gmail.com' }],
    coverImage: 'https://images.unsplash.com/photo-1548062005-e50d0639138c?auto=format&fit=crop&q=80&w=800',
    status: 'active'
  },
  {
    id: 't2',
    title: 'Lahore Food Crawl',
    destination: 'Lahore, Pakistan',
    startDate: '2024-03-10',
    endDate: '2024-03-12',
    description: 'Exploring the best street food in the world.',
    ownerId: 'u1',
    participants: [MOCK_USER],
    coverImage: 'https://images.unsplash.com/photo-1622549042981-482fb3322421?auto=format&fit=crop&q=80&w=800',
    status: 'completed'
  }
];

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [activeTab, setActiveTab] = useState('home');
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [isAddingTrip, setIsAddingTrip] = useState(false);
  const [trips, setTrips] = useState<Trip[]>(INITIAL_MOCK_TRIPS);

  const handleAddTrip = (newTrip: Omit<Trip, 'id' | 'ownerId' | 'participants' | 'status'>) => {
    const trip: Trip = {
      ...newTrip,
      id: `t${trips.length + 1}`,
      ownerId: user?.id || 'u1',
      participants: [user || MOCK_USER],
      status: 'draft'
    };
    setTrips([trip, ...trips]);
    setIsAddingTrip(false);
    setActiveTab('home');
  };

  // If not logged in, show auth screens
  if (!user) {
    if (authMode === 'login') {
      return <LoginPage onLogin={() => setUser(MOCK_USER)} onSwitchToRegister={() => setAuthMode('register')} />;
    }
    return <RegistrationPage onRegister={() => setUser(MOCK_USER)} onSwitchToLogin={() => setAuthMode('login')} />;
  }

  const renderContent = () => {
    if (isAddingTrip) {
      return <AddTripPage onAdd={handleAddTrip} onCancel={() => setIsAddingTrip(false)} />;
    }

    if (selectedTrip) {
      return <TripDetail trip={selectedTrip} onBack={() => setSelectedTrip(null)} />;
    }

    switch (activeTab) {
      case 'home':
        return <Dashboard trips={trips} onSelectTrip={setSelectedTrip} />;
      case 'explore':
        return <ExplorePage />;
      case 'expenses':
        return <ExpensesPage selectedTrip={trips[0]} />;
      case 'maps':
        return <MapsPage destination={trips[0].destination} />;
      case 'gallery':
        return <GalleryPage tripId={trips[0].id} />;
      case 'profile':
        return <ProfilePage user={user} onLogout={() => { setUser(null); setActiveTab('home'); }} />;
      default:
        return <Dashboard trips={trips} onSelectTrip={setSelectedTrip} />;
    }
  };

  return (
    <Layout 
      activeTab={(selectedTrip || isAddingTrip) ? 'none' : activeTab} 
      setActiveTab={(tab) => {
        setSelectedTrip(null);
        setIsAddingTrip(false);
        setActiveTab(tab);
      }}
      onAddClick={() => {
        setSelectedTrip(null);
        setIsAddingTrip(true);
      }}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;
