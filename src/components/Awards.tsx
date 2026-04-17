import { motion } from "motion/react";
import { Award, Trophy, Star } from "lucide-react";

const awards = [
  {
    title: "금마왕자와 월출산낭자",
    category: "BEST ANIMATION SHORT / Grand Prix",
    org: "2025 SEOUL INTERNATIONAL AI FILM FESTIVAL",
    icon: Trophy
  },
  {
    title: "PRISM",
    category: "Best SHORT-SHORT FILM / SEMI-FINALIST",
    org: "2025 RED ROCK FILM FESTIVAL",
    icon: Award
  },
  {
    title: "서울대학교",
    category: "서울대학교 인문정보연구소 AI미디어콘텐츠연구실",
    org: "AI영화감독 / 미디어강사",
    icon: Star
  }
];

export default function Awards() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="mb-20">
          <span className="text-fg-muted font-headline tracking-[0.4em] text-[10px] uppercase font-bold">Excellence</span>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-fg mt-4 tracking-tight uppercase">RECOGNITION</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {awards.map((award, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col items-center border border-border p-8 rounded-sm bg-surface/50 hover:bg-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-6 group-hover:border-fg transition-colors duration-500">
                <award.icon className="text-fg w-6 h-6" />
              </div>
              <h3 className="text-fg font-headline font-bold text-base mb-2 uppercase tracking-wide">{award.title}</h3>
              <p className="text-fg-muted text-[11px] uppercase tracking-tight mb-2 font-medium">{award.category}</p>
              <p className="text-fg-muted/40 text-[9px] font-headline tracking-widest uppercase">{award.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
