import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-40 bg-white text-center border-t border-border">
      <div className="max-w-5xl mx-auto px-8">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-headline font-bold text-fg mb-12 leading-[1.1] tracking-tighter uppercase"
        >
          당신의 비전을<br />
          <span className="text-fg-muted">현실로 만듭니다</span>
        </motion.h2>
        
        <p className="text-fg-muted text-lg md:text-xl font-normal mb-16 tracking-tight">
          단순하고 강력한 솔루션으로 프로젝트를 시작하세요.
        </p>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary uppercase tracking-widest text-[11px]"
        >
          Start Project
        </motion.button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-border px-12 py-12 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="text-xl font-bold tracking-tight text-fg font-headline">
        LEEYEONSU.
      </div>
      
      <div className="text-fg-muted text-[9px] tracking-[0.2em] font-medium uppercase text-center md:text-left">
        © 2026 LEEYEONSU PRODUCTIONS. ALL RIGHTS RESERVED.
      </div>
      
      <div className="flex gap-8">
        <a href="#" className="text-fg-muted text-[9px] tracking-widest uppercase hover:text-fg transition-colors">Privacy</a>
        <a href="#" className="text-fg-muted text-[9px] tracking-widest uppercase hover:text-fg transition-colors">Terms</a>
      </div>
    </footer>
  );
}
