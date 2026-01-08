
import React, { useState } from 'react';
import { Trip, Expense } from '../types';
import { Plus, Filter, PieChart as ChartIcon, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface ExpensesPageProps {
  selectedTrip: Trip;
}

const MOCK_EXPENSES: Expense[] = [
  { id: 'e1', tripId: 't1', amount: 1500, description: 'Hotel Booking', payerId: 'u1', date: '2024-06-15', participants: ['u1', 'u2'] },
  { id: 'e2', tripId: 't1', amount: 500, description: 'Dinner Hunza', payerId: 'u2', date: '2024-06-16', participants: ['u1', 'u2'] },
  { id: 'e3', tripId: 't1', amount: 200, description: 'Gas refill', payerId: 'u1', date: '2024-06-17', participants: ['u1', 'u2'] },
];

const COLORS = ['#6366f1', '#a855f7', '#ec4899', '#f97316'];

const ExpensesPage: React.FC<ExpensesPageProps> = ({ selectedTrip }) => {
  const [expenses, setExpenses] = useState<Expense[]>(MOCK_EXPENSES);

  const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
  
  const chartData = [
    { name: 'Accommodation', value: 1500 },
    { name: 'Food', value: 500 },
    { name: 'Fuel', value: 200 },
  ];

  return (
    <div className="p-6 space-y-6">
      <section>
        <h2 className="text-2xl font-bold text-slate-800">Expenses</h2>
        <p className="text-slate-500 text-sm mt-1">{selectedTrip.title}</p>
      </section>

      {/* Expense Summary Card */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Total Trip Cost</p>
            <h3 className="text-3xl font-bold text-slate-800 mt-1">Rs. {totalSpent.toLocaleString()}</h3>
          </div>
          <div className="bg-indigo-50 p-3 rounded-2xl">
            <ChartIcon className="text-indigo-600" />
          </div>
        </div>
        
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Balance Section */}
      <div className="flex space-x-4">
        <div className="flex-1 bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
          <div className="flex items-center text-emerald-600 mb-1">
            <ArrowDownLeft size={16} className="mr-1" />
            <span className="text-xs font-bold uppercase tracking-tight">To Receive</span>
          </div>
          <p className="text-lg font-bold text-emerald-700">Rs. 850</p>
        </div>
        <div className="flex-1 bg-rose-50 p-4 rounded-2xl border border-rose-100">
          <div className="flex items-center text-rose-600 mb-1">
            <ArrowUpRight size={16} className="mr-1" />
            <span className="text-xs font-bold uppercase tracking-tight">To Pay</span>
          </div>
          <p className="text-lg font-bold text-rose-700">Rs. 250</p>
        </div>
      </div>

      {/* Recent History */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-bold text-slate-800">History</h4>
          <button className="text-slate-400">
            <Filter size={18} />
          </button>
        </div>

        <div className="space-y-3">
          {expenses.map((expense) => (
            <div key={expense.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold">
                  {expense.description.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-800">{expense.description}</p>
                  <p className="text-xs text-slate-400">{expense.date} • Paid by you</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-800">Rs. {expense.amount}</p>
                <p className="text-[10px] text-slate-400 uppercase font-semibold">Split with {expense.participants.length - 1} others</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Add Button */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-lg shadow-indigo-200 flex items-center justify-center active:scale-95 transition-transform z-40">
        <Plus size={28} />
      </button>
    </div>
  );
};

export default ExpensesPage;
