import { motion } from "motion/react";

export default function Impact() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-bottom border-border">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="text-center md:text-left">
          <h2 className="text-fg-muted font-headline uppercase tracking-[0.3em] text-[10px] font-bold mb-8">The Impact</h2>
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl md:text-8xl font-bold font-headline text-fg tracking-tighter leading-none">1.2M+</div>
              <p className="text-fg-muted text-sm font-medium mt-4 tracking-normal uppercase">프로젝트 누적 조회수</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-6xl md:text-8xl font-bold font-headline text-fg tracking-tighter leading-none">60+</div>
              <p className="text-fg-muted text-sm font-medium mt-4 tracking-normal uppercase">완료된 상업 프로젝트</p>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-light text-fg leading-[1.6]"
          >
            우리는 단순히 '예쁜' 영상이 아닌, <br />
            <span className="text-fg font-bold underline decoration-accent decoration-2 underline-offset-8">실질적인 비즈니스 성과</span>를 만드는 <br />
            전략적 콘텐츠를 제작합니다.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
