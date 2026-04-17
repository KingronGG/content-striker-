import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-white/80 border-bottom border-border">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-bold tracking-tight text-fg font-headline"
      >
        LEEYEONSU.
      </motion.div>
      
      <div className="hidden md:flex items-center gap-10">
        <a href="#showreel" className="font-medium text-xs uppercase tracking-wider text-fg transition-colors">
          Showreel
        </a>
        <a href="#projects" className="font-medium text-xs uppercase tracking-wider text-fg-muted hover:text-fg transition-colors">
          Projects
        </a>
        <a href="#process" className="font-medium text-xs uppercase tracking-wider text-fg-muted hover:text-fg transition-colors">
          Process
        </a>
        <a href="#about" className="font-medium text-xs uppercase tracking-wider text-fg-muted hover:text-fg transition-colors">
          About
        </a>
      </div>

      <motion.button 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-accent text-white px-6 py-2 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:opacity-80 transition-all"
      >
        Start Project
      </motion.button>
    </nav>
  );
}
