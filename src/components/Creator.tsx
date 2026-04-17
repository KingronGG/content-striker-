import { motion } from "motion/react";

export default function Creator() {
  return (
    <section id="about" className="py-24 bg-white border-bottom border-border">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-7">
          <span className="text-fg-muted font-headline tracking-widest text-[10px] uppercase font-bold mb-4 block">The Visionary</span>
          <h2 className="text-5xl md:text-7xl font-bold text-fg mb-8 leading-[1.1] tracking-tighter uppercase">
            감정을 번역하는<br />
            시네마틱 디자인
          </h2>
          <p className="text-fg-muted text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-normal">
            10년의 필드 경험을 미니멀리즘과 결합합니다. 우리는 불필요한 장식을 덜어내고, 
            가장 순수한 감정의 핵심만을 전달하는 연출을 지향합니다.
          </p>
          
          <div className="flex gap-10 border-t border-border pt-10">
            <div>
              <p className="text-fg font-bold text-3xl font-headline">150+</p>
              <p className="text-fg-muted text-[10px] uppercase tracking-widest font-bold mt-1">Tools</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <p className="text-fg font-bold text-3xl font-headline">12Y</p>
              <p className="text-fg-muted text-[10px] uppercase tracking-widest font-bold mt-1">Timeline</p>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div>
              <p className="text-fg font-bold text-3xl font-headline">70+</p>
              <p className="text-fg-muted text-[10px] uppercase tracking-widest font-bold mt-1">Archive</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative group">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-sm aspect-[4/5] border border-border bg-surface"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnp7ybE8ZIEU2WhLo86T9YDf4AoC1_Ey_SZscxrSm3vXarP060srBwlYzbhLlPC686-CKJAfGys2noQWBfqdnG99ESMdM-bZcikfxz85DCMBi9wmQNms5hMn9HnA_bGYK08H_-Poxx7rjgrTX4ipgaTNlvjLKQ-AyUstdwOWMbUOzHV7q9e_1cw-eZe5jofsLhJEo5nOm19xA2NK30p-zCuwI2D2vLzz7W6-cvz9ZL7J8jZyJjJCTUThCLkhmyDLLjfnTUIKB9lw" 
              alt="Lee Yeon Su Profile" 
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
