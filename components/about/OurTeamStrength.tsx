"use client";

import {
  Palette,
  Video,
  Sparkles,
  Share2,
  PenTool,
  Code2,
  ClipboardCheck,
  BrainCircuit,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const teamStrength = [
  {
    number: "01",
    title: "Creative Designers",
    icon: Palette,
  },
  {
    number: "02",
    title: "Video Editors",
    icon: Video,
  },
  {
    number: "03",
    title: "Animators",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Social Media Team",
    icon: Share2,
  },
  {
    number: "05",
    title: "Content Team",
    icon: PenTool,
  },
  {
    number: "06",
    title: "Web Development Support",
    icon: Code2,
  },
  {
    number: "07",
    title: "Project Coordination Team",
    icon: ClipboardCheck,
  },
  {
    number: "08",
    title: "AI Creative Support",
    icon: BrainCircuit,
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const topWavePaths = [
  "M400 0 C220 0 220 170 400 170",
  "M378 0 C220 0 220 170 378 192",
  "M356 0 C220 0 220 170 356 214",
  "M334 0 C220 0 220 170 334 236",
  "M312 0 C220 0 220 170 312 258",
  "M290 0 C220 0 220 170 290 280",
  "M268 0 C220 0 220 170 268 302",
];

export default function OurTeamStrength() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,.35) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,.35) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Yellow Glow */}

        <motion.div
          animate={{
            x: [30, -30, 30],
            y: [-20, 30, -20],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-64
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#FFCC00]/10
            blur-[160px]
          "
        />

        {/* Small Left Glow */}

        <motion.div
          animate={{
            x: [-20, 30, -20],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-64
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#FCEB77]/10
            blur-[150px]
          "
        />

        {/* Top Right Lines */}

        <svg
          className="
            absolute
            right-0
            top-0
            h-[260px]
            w-[260px]
            opacity-15
          "
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
              whileInView={{
                pathLength: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.8,
                delay: i * 0.1,
              }}
            />
          ))}
        </svg>

        {/* Noise */}

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: "radial-gradient(circle,#000 1px,transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {/* =====================================================
              HEADER
          ====================================================== */}

          <motion.div variants={item} className="flex items-center gap-4">
            <div className="h-9 w-[2px] rounded-full bg-[#FFCC00]" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#ffcc00]
              "
            >
              Our Team Strength
            </span>
          </motion.div>

          {/* =====================================================
              TEAM GRID
          ====================================================== */}

          <div
            className="
              mt-12
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
              lg:mt-14
            "
          >
            {teamStrength.map((member) => {
              const Icon = member.icon;

              return (
                <motion.div
                  key={member.number}
                  variants={item}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[22px]
                    border
                    border-neutral-200
                    bg-white
                    p-6
                    transition-all
                    duration-300
                    hover:border-[#FFCC00]/50
                    hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]
                  "
                >
                  {/* Top Row */}

                  <div className="flex items-start justify-between">
                    {/* Icon */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-neutral-200
                        bg-neutral-50
                        text-neutral-700
                        transition-all
                        duration-300
                        group-hover:border-[#FFCC00]
                        group-hover:bg-[#FFCC00]
                        group-hover:text-black
                      "
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.8}
                        className="
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      />
                    </div>

                    {/* Number */}
                    <span
                      className="
                        font-heading
                        tabular-nums
                        text-xs
                        font-bold
                        tracking-[0.2em]
                        text-neutral-400
                        transition-colors
                        duration-300
                        group-hover:text-[#ffcc00]
                      "
                    >
                      {member.number}
                    </span>
                  </div>

                  {/* Title */}

                  <h3
                    className="
                      mt-8
                      max-w-[220px]
                      text-xl
                      font-black
                      leading-tight
                      tracking-[-0.025em]
                      text-black
                      transition-colors
                      duration-300
                      group-hover:text-[#ffcc00]
                    "
                  >
                    {member.title}
                  </h3>

                  {/* Bottom Accent */}

                  <div
                    className="
                      mt-7
                      h-[2px]
                      w-8
                      rounded-full
                      bg-[#FFCC00]
                      transition-all
                      duration-300
                      group-hover:w-14
                    "
                  />

                  {/* Corner Glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-28
                      w-28
                      rounded-full
                      bg-[#FFCC00]/10
                      opacity-0
                      blur-2xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
