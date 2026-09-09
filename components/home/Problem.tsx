"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const topWavePaths = [
  "M400 0 C220 0 220 180 400 180",
  "M378 0 C220 0 220 180 378 202",
  "M356 0 C220 0 220 180 356 224",
  "M334 0 C220 0 220 180 334 246",
  "M312 0 C220 0 220 180 312 268",
  "M290 0 C220 0 220 180 290 290",
  "M268 0 C220 0 220 180 268 312",
  "M246 0 C220 0 220 180 246 334",
];

const bottomWavePaths = [
  "M0 220 C180 220 180 400 400 220",
  "M0 238 C180 238 180 400 382 238",
  "M0 256 C180 256 180 400 364 256",
  "M0 274 C180 274 180 400 346 274",
  "M0 292 C180 292 180 400 328 292",
  "M0 310 C180 310 180 400 310 310",
  "M0 328 C180 328 180 400 292 328",
  "M0 346 C180 346 180 400 274 346",
];

export default function Problem() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        sm:py-16
        lg:py-20
      "
    >
      {/* =========================
          PREMIUM BACKGROUND
      ========================== */}

      <div className="absolute inset-0 overflow-hidden">

        {/* Soft Grid */}

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.35) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Aurora Left */}

        <motion.div
          animate={{
            x: [-60, 40, -60],
            y: [-30, 40, -30],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-72
            top-0
            h-[700px]
            w-[700px]
            rounded-full
            blur-[180px]
            bg-[#FFCC00]/15
          "
        />

        {/* Aurora Right */}

        <motion.div
          animate={{
            x: [40, -60, 40],
            y: [30, -30, 30],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-72
            bottom-0
            h-[700px]
            w-[700px]
            rounded-full
            blur-[180px]
            bg-[#FCEB77]/20
          "
        />

        {/* Animated Beam */}

        <motion.div
          animate={{
            x: ["-20%", "120%"],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            top-0
            h-full
            w-40
            -rotate-12
            bg-gradient-to-r
            from-transparent
            via-[#FFCC00]/10
            to-transparent
            blur-2xl
          "
        />

        {/* Top SVG Lines */}

        <svg
          className="absolute right-0 top-0 h-[320px] w-[320px] opacity-20"
          viewBox="0 0 400 400"
          fill="none"
        >
          {topWavePaths.map((path, i) => (
            <motion.path
              key={path}
              d={path}
              stroke="#FFCC00"
              strokeWidth="1"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2,
                delay: i * 0.12,
              }}
            />
          ))}
        </svg>

        {/* Bottom SVG */}

        <svg
          className="absolute bottom-0 left-0 h-[300px] w-[300px] opacity-15"
          viewBox="0 0 400 400"
          fill="none"
        >
          {bottomWavePaths.map((path, i) => (
            <motion.path
              key={path}
              d={path}
              stroke="#FCEB77"
              strokeWidth="1"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
              }}
            />
          ))}
        </svg>

        {/* Noise */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle,#000 1px,transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        {/* Fade */}

        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center,transparent 25%,rgba(255,255,255,.45) 75%,#fff 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            variants={item}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{
                y: [0, -3, 0],
                boxShadow: [
                  "0 4px 15px rgba(255,204,0,0.12)",
                  "0 8px 25px rgba(255,204,0,0.28)",
                  "0 4px 15px rgba(255,204,0,0.12)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#FFCC00]/50 bg-gradient-to-r from-[#FFF9E6] via-white to-[#FFF9E6] px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-[#A87B00] shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFCC00] opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E5B800]" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-[#E5B800]" />
              <span>The Challenges</span>
            </motion.div>
          </motion.div>

          <motion.h2
            variants={item}
            className="
              mt-8
              text-[42px]
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-black
              sm:text-[48px]
              md:text-[56px]
              lg:text-[60px]
              xl:text-[64px]
            "
          >
            Your Business May Be Good.

            <br />

            But Does It Look Like

            <br />

            <span className="relative inline-block">
              <span className="relative z-10 text-[#FFCC00]">
                A Brand?
              </span>

              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                }}
                className="
                  absolute
                  bottom-2
                  left-0
                  h-3
                  w-full
                  origin-left
                  rounded-full
                  bg-[#FFCC00]/20
                "
              />
            </span>
          </motion.h2>
          <motion.p
            variants={item}
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-lg
              leading-9
              text-[#555]
              lg:text-xl
            "
          >
            Many businesses have good products, good services, and good
            people — but their branding, content, website, and digital
            presence do not show their real value.
          </motion.p>

          <motion.p
            variants={item}
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-[#555]
              lg:text-xl
            "
          >
            That is where{" "}
            <span className="font-semibold text-black">
              Hatsoff Media
            </span>{" "}
            comes in. We help businesses present themselves better,
            communicate clearly, and grow stronger across digital
            platforms.
          </motion.p>
        </motion.div>

        {/* Animated Accent */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="mt-20 flex justify-center"
        >
          <div className="relative h-[2px] w-56 overflow-hidden rounded-full bg-black/10">
            <motion.div
              animate={{
                x: ["-100%", "250%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                top-0
                h-full
                w-24
                bg-gradient-to-r
                from-transparent
                via-[#FFCC00]
                to-transparent
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}