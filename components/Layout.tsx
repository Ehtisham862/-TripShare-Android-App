
import React from 'react';
import { Home, Compass, Map, Receipt, Image, User, PlusCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onAddClick?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, onAddClick }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Compass, label: 'Explore' },
    { id: 'expenses', icon: Receipt, label: 'Split' },
    { id: 'gallery', icon: Image, label: 'Vault' },
    { id: 'profile', icon: User, label: 'You' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 max-w-md mx-auto relative shadow-2xl overflow-hidden border-x border-slate-200">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600 tracking-tight">TripShare</h1>
        <button 
          onClick={onAddClick}
          className="bg-indigo-600 p-2 rounded-full text-white shadow-lg shadow-indigo-200 active:scale-90 transition-transform"
        >
          <PlusCircle size={20} />
        </button>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto pb-24 no-scrollbar">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-slate-200 px-4 py-3 flex justify-between items-center z-50">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center space-y-1 transition-all duration-300 ${
              activeTab === item.id ? 'text-indigo-600 scale-110' : 'text-slate-400'
            }`}
          >
            <item.icon size={20} fill={activeTab === item.id ? "currentColor" : "none"} strokeWidth={activeTab === item.id ? 2.5 : 2} />
            <span className="text-[9px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
