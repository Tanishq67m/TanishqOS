import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Battery, Wifi, Search } from 'lucide-react';
import { useStore } from '../store/useStore';
import { APPS } from '../data/config';

export const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 bg-black/20 backdrop-blur-md text-white flex justify-between items-center px-4 text-xs fixed top-0 w-full z-50 select-none">
      <div className="flex gap-4 font-semibold">
        <span></span>
        <span className="hidden md:inline">Finder</span>
        <span className="hidden md:inline">File</span>
        <span className="hidden md:inline">Edit</span>
        <span className="hidden md:inline">View</span>
      </div>
      <div className="flex gap-4 items-center">
        <Wifi size={14} />
        <Battery size={14} />
        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    </div>
  );
};

export const Dock = () => {
  const { toggleApp, openApps } = useStore();
  
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/10 p-3 rounded-2xl flex gap-4 shadow-2xl items-end">
        {Object.values(APPS).map((app) => (
          <motion.button
            key={app.id}
            onClick={() => toggleApp(app.id as any)}
            whileHover={{ scale: 1.2, y: -10 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {app.title}
            </div>
            
            {/* Icon */}
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${app.color} flex items-center justify-center text-white shadow-lg`}>
               <app.icon size={24} />
            </div>

            {/* Active Indicator Dot */}
            {openApps.includes(app.id as any) && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};