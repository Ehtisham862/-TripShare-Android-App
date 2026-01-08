
import React from 'react';
import { Mail, Lock, ChevronRight, Globe } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
  onSwitchToRegister: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onSwitchToRegister }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 max-w-md mx-auto relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="flex-1 flex flex-col justify-center px-8 relative z-10">
        <div className="mb-10 text-center">
          <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-100 rotate-3">
            <Globe className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">TripShare</h1>
          <p className="text-slate-500 mt-3 font-medium">Join the circle of verified travelers</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
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
                placeholder="••••••••" 
                className="w-full bg-white border border-slate-200 py-4 pl-12 pr-4 rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
              />
            </div>
          </div>

          <button className="text-indigo-600 text-sm font-bold block ml-auto hover:underline">
            Forgot Password?
          </button>

          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center space-x-2 shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-[0.98] transition-all mt-6"
          >
            <span>Sign In</span>
            <ChevronRight size={18} />
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="text-slate-500 font-medium">
            New to TripShare?{' '}
            <button onClick={onSwitchToRegister} className="text-indigo-600 font-bold hover:underline">
              Create an Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
