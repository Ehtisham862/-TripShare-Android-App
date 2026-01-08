
import React from 'react';
import { User, Mail, Lock, Camera, ChevronRight } from 'lucide-react';

interface RegistrationPageProps {
  onRegister: () => void;
  onSwitchToLogin: () => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onRegister, onSwitchToLogin }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 max-w-md mx-auto px-8 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-slate-900">Create Account</h1>
        <p className="text-slate-500 mt-2 font-medium">Start sharing your adventures securely</p>
      </div>

      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 bg-indigo-50 rounded-full border-2 border-dashed border-indigo-200 flex flex-col items-center justify-center text-indigo-400 cursor-pointer hover:bg-indigo-100 transition-colors">
          <Camera size={24} />
          <span className="text-[10px] font-bold mt-1 uppercase">Add Photo</span>
        </div>
      </div>

      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onRegister(); }}>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Ehtisham Ali" 
              className="w-full bg-white border border-slate-200 py-4 pl-12 pr-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="w-full bg-white border border-slate-200 py-4 pl-12 pr-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="password" 
              placeholder="At least 8 characters" 
              className="w-full bg-white border border-slate-200 py-4 pl-12 pr-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
            />
          </div>
        </div>

        <p className="text-[11px] text-slate-400 leading-relaxed px-1">
          By signing up, you agree to our <span className="text-indigo-600 font-bold">Terms of Service</span> and <span className="text-indigo-600 font-bold">Privacy Policy</span>.
        </p>

        <button 
          type="submit"
          className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-[0.98] transition-all mt-6"
        >
          <span>Create Account</span>
          <ChevronRight size={18} />
        </button>
      </form>

      <div className="mt-auto pt-10 text-center">
        <p className="text-slate-500 font-medium">
          Already have an account?{' '}
          <button onClick={onSwitchToLogin} className="text-indigo-600 font-bold hover:underline">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
