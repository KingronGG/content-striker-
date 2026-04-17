import { motion } from "motion/react";
import { Lightbulb, Users, Video, Film, Sparkles } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "기획 (Pre-production)",
    desc: "프로젝트의 목적을 분석하고 영상의 방향성과 각본을 구성합니다.",
    icon: Lightbulb
  },
  {
    num: "2",
    title: "연출 (Directing)",
    desc: "시작적 스타일과 스토리텔링을 결정하며 현장을 리딩합니다.",
    icon: Users
  },
  {
    num: "3",
    title: "촬영 (Production)",
    desc: "최고급 시네마 장비를 활용하여 기획된 이미지를 실제로 담아냅니다.",
    icon: Video
  },
  {
    num: "4",
    title: "편집 (Post-production)",
    desc: "정교한 컷 편집과 색보정, 사운드 디자인을 통해 완성도를 끌어올립니다.",
    icon: Film
  },
  {
    num: "5",
    title: "후보정 (VFX & Finishing)",
    desc: "CG, 타이포그래피, 최종 마스터링을 통해 압도적인 영상미를 완성합니다.",
    icon: Sparkles
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white border-bottom border-border">
      <div className="max-w-5xl mx-auto px-8">
        <h2 className="text-3xl font-headline font-bold text-fg text-center mb-24 uppercase tracking-tighter">Production Process</h2>
        
        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border hidden md:block"></div>
          
          <div className="space-y-24">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-xl font-bold text-fg mb-2">{step.num}. {step.title}</h3>
                  <p className="text-fg-muted text-sm md:text-base leading-relaxed">{step.desc}</p>
                </div>
                
                <div className="relative z-10 w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center shadow-sm">
                  <step.icon className="text-accent w-5 h-5" />
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
