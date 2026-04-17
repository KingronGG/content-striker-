import { motion } from "motion/react";
import { Sparkles, Brain, Film } from "lucide-react";

const aiWorks = [
  { img: "https://lh3.googleusercontent.com/aida/ADBb0uhJkkMa97WVqxBwDOtIspBFnGfLvYrvCJfPYZmgYSornyIhjhcsCUo72-HCMol-xHA2twNFwkySXopMk9jl4oWZUX7f2CPIFy7HNE21hik-JTRp622UlxJUSCyOq3Ilp_uJslFmvnzbJlQch4pfnE6-EpVZpQM9ArHnaP8konirx2goznLotwKGOzpChvSJRGnTrJlNG4maRdbo0xsz91Yd5jZ3UH_tMNb2j_rrMsPdXJNT9o74LWVvogSM3-2qwtg_FCw1SM7E", label: "AI Generation", icon: Sparkles },
  { img: "https://lh3.googleusercontent.com/aida/ADBb0uiVl4C1_KM1YhHpIYjqd3Y6Fuz8JUoE53wkGOgA2EhnPL9TSPRlHuAIrWZRohzmM4lzKwlWYI99R1CRzHiYzm5B117lDGGSHGMvMne2JsOyv98WhQC0MNnFIQcSd0Z3TwEIoV6qQ_VEMdkCCfuoCb5-uM7ikPsMrrZNmM3KBfjSxpLmY3Axxmk7LEa_xeKWPNxIIaUgRkoqsUpWIVoouZ5WpgFRR4a4JoyeMNzK17Y7DhXKz8RlS93O7uIyl7LHL6C60Ps3tKyM", label: "AI Strategy", icon: Brain },
  { img: "https://lh3.googleusercontent.com/aida/ADBb0uhxuHivUCCfXoFr3GByoKXpOX_opqsDi8vpHYeEh2at2uPy9j_xzV-5dT29CtP5F7FZAW7EArIUSs1C1jsJgLEVTX6wwGAWaYsCdGss3Gmu7jV3QSkBmoNscrzelVe0lS2wlMRfl1emaB-GHtvi4U22dXzMkpcsgagrxFff_pFXQEy89tZ3rTtRNNlu2HB0hThnpjFOORFNayaPtZbz6UnzOhw4UXk6CFNrrN8hqVgNFrlhGgEmtE0j7PtaeWqyyvaBwgvtoFVG", label: "AI Post-Production", icon: Film },
  { img: "https://lh3.googleusercontent.com/aida/ADBb0ujfENNbSs_i6XCjC2ZvtZEBkDYhIE5KFpic0lnhjQl94Cmicu5per2mySCFKcsPsRyHL3F7hBxty1vO7WoeUdk1_PmZsEcsm4LES0wLeghI2tGK1nuxJ9nKTQc6Yv-VGmWMzfqeGsEb40A12QD5kJsYBeIhfNSyGFRM0tsgRfG4v5ordoiEQC-rXDsqu_Ebqf3wl4oOwzvvAkN2EYiraLZ2JTzRUUT4oRltcR91x3_osWUEzcG3AjGZG5ULXBHPg5DsyZlL3q8V", label: "AI Generation", icon: Sparkles },
  { img: "https://lh3.googleusercontent.com/aida/ADBb0ugoW5SrQW4uAsyf56qho8-WXTnQzs_BSNCFbzO8LMUhRBx3cdDAWBxrzCfdrNqQN9Xx3aiGEmaV7c_LMxoQqTtAbTlA_FIhWCSbPPZ0VTFi_t2Qx6dyXXlejYuhTLrVn3Iqhk9J_8DUvHkv7eob-EtfkG9qyV8JoRtCskYPhHHIsi78pzrszzKXND84jUGYYQfdHQTRXUEbkXGKfM9zC4Wy2QrEhf-VYQfQ3_ztu0FN4zv-JG55MES2R9kK1TTXHAL8kgllV4fx", label: "AI Vision", icon: Sparkles }
];

export default function CreativeLab() {
  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-fg-muted font-headline tracking-widest text-[10px] uppercase font-bold">Innovation Focus</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-fg mt-2 tracking-tight">CREATIVE LAB</h2>
          </div>
          <p className="max-w-md text-fg-muted text-sm md:text-base leading-relaxed">
            인공지능과 현대적 미학을 결합하여, 제작 공정의 효율을 극대화하고 새로운 시각적 경험을 탐구합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {aiWorks.map((work, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group relative aspect-video bg-white border border-border overflow-hidden rounded-sm shadow-sm"
            >
              <img 
                src={work.img} 
                className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all">
                <span className="bg-accent text-white text-[9px] px-2 py-1 font-bold tracking-widest uppercase rounded-sm w-fit mb-2">
                  {work.label}
                </span>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                <work.icon className="text-fg w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
