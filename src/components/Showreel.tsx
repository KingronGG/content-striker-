import { motion } from "motion/react";
import { Play } from "lucide-react";

const thumbnails = [
  "https://lh3.googleusercontent.com/aida/ADBb0uh8qPjNP0ATFx3XbD3okYBZfRuwnc95ecePa3d8RZTaxrZFlG4Fo1LWuQQpgTZcaes4HCRryVzTOmW2x90nUwTTXxLxfT9HazV_ElgNLZQfIZkCU-Ub_GNGqa9c5t2d4TOMZ8YGJUjrv-vFUQYmCPBFLqCG2JqsziF4932JeihHZ56OXkoRNHYfyL4WLqPfMB4S5J1sxtOyvRJzfmKsb8OK5aF_gwbfXu0SUvxyGy7hWyj8nWcHq_pgrmX_D17hHDiDbmlpRpvK",
  "https://lh3.googleusercontent.com/aida/ADBb0uisusq84ORhj9-OgRQ-WOGf-mmo6T3k_GPPmqi4BL6Rqv-ZCEa_j9pyJ2GOegdG17ELlSMLJnOAou6-J04vgs3ml7U8Je0i7idG7BiRJ2NfOS8QW22_ae9aOa_CsIprGzL6MKdGvBMq3h60nUwOoisy_VajCN_ThWNz5Vp5ORh9KM35tX6K_1MYUU2sI0Tx4FrIpb_nq0dwiB0mCyCELulVgUYoXRZvyhTpBFXZIplepqf6Z4dHrHi2dh3KIWC7518hVrlmSmRV",
  "https://lh3.googleusercontent.com/aida/ADBb0ujUXdUV51KSgPNyuY8-Lg-dy4BAE3DEqVB4O6T3UTj3IUZ4pivT42Xto5BAN79CZP-scRnWnCgRXEt6BYgIXNkRU_OYDzSYmKH2IP7R7qpQRT9HEw8bAve-d2Liy1AV6Kx-8RxLbTQhh9amsUJXxrFZrK8mSAA2vT4wsXQRb3Y_fv5w9M2SaSqd-70-pTG0oqxH_m8IEm6cK2QV6DNj3fdkkmE2klmtpk_aGtQpGOh0b8g08XXq-y3anB_7Wv3Asce2c0OPlOZ-",
  "https://lh3.googleusercontent.com/aida/ADBb0uh5jC-IuvYvSsZQ328LtgvbEixA_xP7eMbN_Tb-xFQN4cZ10Jul0stXf6N9xaN9y5j2wzzmR7Q4krcnjZ_zmb3YJeZP9ebyvYHOnBIqQMYiE9lzvRChpDyTCq9KLquFDd7OZWj9TKzFMSEjs7KsJQhaXy0iD8E8e2cDdonsLQPHcQQ1CmR8y-7rp6bpNyE0Iu1sA6GVXVdgZPsy_H_omEKdIridenJlPuh5pELvpO-BZ7mC4yqcXAuxSMJGe6HDuqaMJWYEr86U",
  "https://lh3.googleusercontent.com/aida/ADBb0uh56W0wW2eUUiPitv9yxeSUf9woLP3PO-jRyhfEX2uaDWqY19v8tu1kmHBGrep2TL7Ip-8gBFPPRgJ3U_ZIVA8cU2HvtsOZ48LokRgrxNqNOWnYwD0SMwbPxS8hIihBAkHikWKs34m-Z4WnLLCO82bTsvBSnbX6QPSKJbSETAejih7y1FZ6TVDm3bcIz9Ct85w3lUkmI3ILurpXM2W_Jw8EQoRjCHxVykZPq-E3pVNr-5VyVWBezvL3cYbUhdqNkvi1HqdhX_er",
  "https://lh3.googleusercontent.com/aida/ADBb0ugVkJBYiaZVpruw1CLVMbjOmmkM2Mgq8BzNCci9VACeFcYnOT4YkZB5OLKakkOwIkwK5BOBPyRx_reXwq0x-kXfG_3mklPAxY0mcNiM53BqN39emZcLwfOH_kh9lj2Hf17O-MwBmFmn7RZ3ET3l6CGbohhNQflZPg1wW7WnssD_kQOx338s7aBgxWsaa9152mY3FyZDXWvVJ-fYPSlGo2AjAXTgTm55BPQfgb9sIOH0OQzP63rTFO7KXM0rXvSAWd4uQMk_Ka0y",
  "https://lh3.googleusercontent.com/aida/ADBb0uiUROHTXAUEGkS8OLTBorbvW-fGevvb-eBSEOjJxc4ehrLMgRPLaZgZOiPWbf13-olCqlaKy2GrrJ8Rxuuj5hZs1-51hygQzkG_ZQanL-3YuhHtteSxuPWFazFg-G-MwhnV7SQD9rn5Pc3N30RR4uzwM39gyCCMMNPnkzi8wzDOniGFB-90QDmWkji8KOpvDuKHx2dBCbpNd8yRlh9zUXubSuOd1PxHERV2d2W3dFlvlCutIxTgm3mTqR2jOgKqqYro6LG07qZQ",
  "https://lh3.googleusercontent.com/aida/ADBb0uiyPY1lOogm3TdCqU6p8Thq3520dEzFHndkyCMJn5Vux0f8v6Ty4QDJT6Z_i_Rdtor8JeBi0kb_jylxudV1aCUU3U8bVCxibAgTAatFVQPxWFlQQaV2A7-4aQ2qb_Sxlt_qDqWRFklyV0nSdHOXkbqlgM6AxG9p08ImmHpirYShqOor64seV4wnS6b84GZ-yZcOmL6WKvHazbSKb0lMQtWzsod6Ph1a8T8wjtSa-WvK-ij4QPl7sPbjhn_5dRKbcxcqnfOiV3I",
  "https://lh3.googleusercontent.com/aida/ADBb0ugMy-IFdjP5omlO4cFAtdWxnUtw_fLTPtskoV1zJAytw8_s3i2b3nokIIVsZSaFxrQVXsDkgGKikvmT4o9O3KhLNfu9q_Fl21dapxwlXjNG3ykJgzbpBmV0okbAzBbq98ULAZRH9-BT0s9ett5VTgSuG1KgiZHhRWeaijLnFExYq0gcmUcO03ZrFk4loRun59puyjDefxjvT_3FsKpWScMG4zOrqGF-vQAlQvUZ2097yPvn5OKSSfnzqqQ0mP7SKaunfmRy39gr",
  "https://lh3.googleusercontent.com/aida/ADBb0ugn3luDRcJNXWIR3EURUCuTpcQ0fi1FwZgMaxKdSJ13g2YwDaPglWUNxiU_jhF5UWkT_ICQBGkVUpMUCL1VihSxO8BEA6E3OzcIUJt9V-Oih3c_snnUJx9sFC9bmD9jf7evvdp40q0TBOW5ozliajmEsu2_dIiLFB8Brc-EEp8OML2SsKGta2bNhkyZVV8Pw_V4fY5zxsDdF_A_7KjYt0jcX4eSBq5KBvL-_IXB-RUCX7OiPItk93scHF_QqsflB4tBw_HBeA"
];

export default function Showreel() {
  return (
    <section id="showreel" className="py-24 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <span className="text-fg-muted font-headline tracking-widest text-[10px] uppercase font-bold">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-fg mt-2 tracking-tight">SHOWREEL</h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group aspect-video w-full overflow-hidden bg-surface rounded-sm border border-border cursor-pointer shadow-sm"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkoVqDQmX17R7BjQ7x5G53iAxgp3jeycHy3xqFVZgPw_Oo1uddw2l5bR0pLrsYgFCMa1PtKeivwiTHQ4esydk5Hg8qb1ztJnB-6VAcs8qHEsGcwX4NEpp3cdh2XQOV2zuwa5CyAyo4Yih8Xm2uQxqaGI3A3ROEQ84mqA91GERXB9q8M4_pxGettj-lgXyZjxYIAYIgjwzoAlwKiVx6tL0RxlNRWiSiQTjNiXm0DeqbOzo6zGpSZilq78OqLPHTJDGmPsApkiFJ7g" 
            alt="Showreel Main Thumbnail" 
            className="w-full h-full object-cover grayscale brightness-110 contrast-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 group-hover:bg-transparent transition-all">
            <div className="w-20 h-20 rounded-full border border-border flex items-center justify-center bg-white/80 backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Play className="text-fg w-8 h-8 fill-fg" />
            </div>
            <p className="mt-8 text-fg font-headline font-bold tracking-[0.4em] text-[10px] uppercase opacity-60 group-hover:opacity-100">
              PLAY SHOWREEL
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {thumbnails.map((thumb, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.4, y: 0 }}
              whileHover={{ opacity: 1, y: -4 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-video overflow-hidden border border-border bg-surface cursor-pointer group"
            >
              <img 
                src={thumb} 
                alt={`Archive ${i}`} 
                className="w-full h-full object-cover grayscale brightness-110 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
