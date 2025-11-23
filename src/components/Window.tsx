import { motion } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';
import { useStore } from '../store/useStore';

export default function Window({ id, title, children, constraintsRef }: any) {
  const { closeApp, bringToFront, activeApp } = useStore();
  const isActive = activeApp === id;

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragMomentum={false}
      onMouseDown={() => bringToFront(id)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className={`absolute top-20 left-10 md:left-1/4 w-[90vw] md:w-[600px] h-[400px] md:h-[500px] rounded-lg shadow-2xl overflow-hidden border border-white/20 backdrop-blur-xl ${isActive ? 'z-50' : 'z-10'} bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white`}
    >
      {/* Window Bar */}
      <div className="h-8 bg-gray-200 dark:bg-gray-800 flex items-center px-4 justify-between select-none" onPointerDownCapture={(e) => e.stopPropagation()}>
        <div className="flex gap-2 group">
          <button onClick={() => closeApp(id)} className="w-3 h-3 rounded-full bg-red-500 hover:brightness-90 flex items-center justify-center"><X size={8} className="opacity-0 group-hover:opacity-100 text-black" /></button>
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:brightness-90 flex items-center justify-center"><Minus size={8} className="opacity-0 group-hover:opacity-100 text-black" /></button>
          <button className="w-3 h-3 rounded-full bg-green-500 hover:brightness-90 flex items-center justify-center"><Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-black" /></button>
        </div>
        <span className="text-xs font-semibold font-mono opacity-70">{title}</span>
        <div className="w-12"></div>
      </div>
      
      {/* Content Area */}
      <div className="h-[calc(100%-2rem)] overflow-y-auto p-0 custom-scrollbar">
        {children}
      </div>
    </motion.div>
  );
}