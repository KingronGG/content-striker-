import { motion } from "motion/react";
import { PlayCircle } from "lucide-react";

const productions = [
  "https://lh3.googleusercontent.com/aida/ADBb0uh5jC-IuvYvSsZQ328LtgvbEixA_xP7eMbN_Tb-xFQN4cZ10Jul0stXf6N9xaN9y5j2wzzmR7Q4krcnjZ_zmb3YJeZP9ebyvYHOnBIqQMYiE9lzvRChpDyTCq9KLquFDd7OZWj9TKzFMSEjs7KsJQhaXy0iD8E8e2cDdonsLQPHcQQ1CmR8y-7rp6bpNyE0Iu1sA6GVXVdgZPsy_H_omEKdIridenJlPuh5pELvpO-BZ7mC4yqcXAuxSMJGe6HDuqaMJWYEr86U",
  "https://lh3.googleusercontent.com/aida/ADBb0uh8qPjNP0ATFx3XbD3okYBZfRuwnc95ecePa3d8RZTaxrZFlG4Fo1LWuQQpgTZcaes4HCRryVzTOmW2x90nUwTTXxLxfT9HazV_ElgNLZQfIZkCU-Ub_GNGqa9c5t2d4TOMZ8YGJUjrv-vFUQYmCPBFLqCG2JqsziF4932JeihHZ56OXkoRNHYfyL4WLqPfMB4S5J1sxtOyvRJzfmKsb8OK5aF_gwbfXu0SUvxyGy7hWyj8nWcHq_pgrmX_D17hHDiDbmlpRpvK",
  "https://lh3.googleusercontent.com/aida/ADBb0uisusq84ORhj9-OgRQ-WOGf-mmo6T3k_GPPmqi4BL6Rqv-ZCEa_j9pyJ2GOegdG17ELlSMLJnOAou6-J04vgs3ml7U8Je0i7idG7BiRJ2NfOS8QW22_ae9aOa_CsIprGzL6MKdGvBMq3h60nUwOoisy_VajCN_ThWNz5Vp5ORh9KM35tX6K_1MYUU2sI0Tx4FrIpb_nq0dwiB0mCyCELulVgUYoXRZvyhTpBFXZIplepqf6Z4dHrHi2dh3KIWC7518hVrlmSmRV",
  "https://lh3.googleusercontent.com/aida/ADBb0ujUXdUV51KSgPNyuY8-Lg-dy4BAE3DEqVB4O6T3UTj3IUZ4pivT42Xto5BAN79CZP-scRnWnCgRXEt6BYgIXNkRU_OYDzSYmKH2IP7R7qpQRT9HEw8bAve-d2Liy1AV6Kx-8RxLbTQhh9amsUJXxrFZrK8mSAA2vT4wsXQRb3Y_fv5w9M2SaSqd-70-pTG0oqxH_m8IEm6cK2QV6DNj3fdkkmE2klmtpk_aGtQpGOh0b8g08XXq-y3anB_7Wv3Asce2c0OPlOZ-",
  "https://lh3.googleusercontent.com/aida/ADBb0uiUROHTXAUEGkS8OLTBorbvW-fGevvb-eBSEOjJxc4ehrLMgRPLaZgZOiPWbf13-olCqlaKy2GrrJ8Rxuuj5hZs1-51hygQzkG_ZQanL-3YuhHtteSxuPWFazFg-G-MwhnV7SQD9rn5Pc3N30RR4uzwM39gyCCMMNPnkzi8wzDOniGFB-90QDmWkji8KOpvDuKHx2dBCbpNd8yRlh9zUXubSuOd1PxHERV2d2W3dFlvlCutIxTgm3mTqR2jOgKqqYro6LG07qZQ"
];

export default function RecentProductions() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-8">
        <h2 className="text-2xl font-headline font-bold text-fg mb-12 tracking-tight">RECENT PRODUCTIONS</h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {productions.map((prod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[2/3] overflow-hidden rounded-sm border border-border cursor-pointer transition-all duration-500"
            >
              <img 
                src={prod} 
                alt={`Production ${i}`} 
                className="w-full h-full object-cover grayscale brightness-110 contrast-90 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <button className="flex items-center gap-2 text-fg text-[10px] font-bold tracking-widest uppercase">
                  <PlayCircle className="w-3 h-3" /> VIEW PROJECT
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
