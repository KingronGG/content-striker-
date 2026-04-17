import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center bg-white pt-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-headline text-5xl md:text-8xl font-bold tracking-tight text-fg mb-8 leading-[1.05]"
          >
            당신의 비전을<br />
            디자인하세요.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-fg-muted mb-12 font-regular max-w-lg leading-relaxed"
          >
            단순함은 복잡함의 궁극적인 정교함입니다. 생산성을 극대화하는 미니멀리스트 시네마틱 워크플로우를 경험하세요.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="btn-primary uppercase tracking-widest text-[11px]">
              포트폴리오 보기
            </button>
            <button className="btn-secondary uppercase tracking-widest text-[11px]">
              프로젝트 문의
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full bg-surface border border-border rounded-xl overflow-hidden"
        >
          <img 
            src="https://picsum.photos/seed/minimal/1200/800" 
            alt="Minimal Workspace" 
            className="w-full h-full object-cover grayscale opacity-80"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
