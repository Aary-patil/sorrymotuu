import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Smile, Coffee, Sun, MessageCircleHeart, Music2 } from "lucide-react";
import heroImg from "@/assets/hero-romance-new.jpg";
import mem1 from "@/assets/memory-1-new.jpg";
import mem2 from "@/assets/memory-2-new.jpg";
import mem3 from "@/assets/memory-3-new.jpg";
import { FloatingHearts } from "@/components/FloatingHearts";
import { MusicPlayer } from "@/components/MusicPlayer";
import { ForgivePopup } from "@/components/ForgivePopup";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I'm Sorry — A Letter For You ❤️" },
      {
        name: "description",
        content: "A heartfelt apology and love letter, written just for you.",
      },
      { property: "og:title", content: "I'm Sorry — A Letter For You ❤️" },
      {
        property: "og:description",
        content: "A heartfelt apology and love letter, written just for you.",
      },
    ],
  }),
  component: Index,
});

const reasons = [
  { icon: Smile, text: "Your smile makes my whole day brighter" },
  { icon: MessageCircleHeart, text: "You understand me like no one else" },
  { icon: Sun, text: "You are my peace in every Dokdughi" },
  { icon: Coffee, text: "Even the smallest moments with you feel magical" },
  { icon: Sparkles, text: "You make me want to be a better person" },
  { icon: Heart, text: "My heart only beats softer when you're near" },
];

const memories = [
  { src: mem1, caption: "Lazy mornings together" },
  { src: mem2, caption: "That golden evening" },
  { src: mem3, caption: "Little moments, big love" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className={`relative z-10 mx-auto w-full max-w-5xl px-6 py-20 md:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}

function Index() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />
      <MusicPlayer />

      {/* HERO */}
      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-8 w-full max-w-2xl"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-button opacity-30 blur-3xl" />
          <img
            src={heroImg}
            alt="A couple holding hands beneath floating hearts"
            width={1536}
            height={1024}
            className="relative w-full rounded-[2rem] shadow-soft"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="flex items-center gap-2 text-sm tracking-[0.3em] uppercase text-primary"
        >
          <Heart className="h-3 w-3 fill-primary animate-heartbeat" />
          From me, to you
          <Smile className="h-3 w-3 fill-primary animate-heartbeat" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-display mt-6 text-balance text-6xl leading-[1.05] text-foreground md:text-8xl"
        >
          I'm Really Sorry <span className="text-primary">❤️</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
        >
          I never meant to hurt you. You mean everything to me.
        </motion.p>

        <motion.a
          href="#letter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition"
        >
          ↓ Read my letter
        </motion.a>
      </section>

      {/* APOLOGY */}
      <Section className="text-center">
        <span id="letter" className="block -mt-20 pt-20 text-slate-100" />
        <h2 className="text-5xl md:text-6xl text-foreground">My Apology</h2>
        <div className="mx-auto mt-8 h-px w-24 bg-gradient-button" />
        <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl text-balance">
          I've been replaying everything in my head, and I just want you to know
          how sorry I am. You know I can't stay mad at you for long.. I know words
          can't undo the way I made you feel, but please believe me when I say it
          wasn't who I want to be — and it definitely wasn't who you deserve.
          You've given me so much love, patience, and softness, and I promise to
          hold all of it more carefully from now on. I Miss you, and I'm going to
          do better — for us, for you, and because you mean the world to me. 💗
        </p>
      </Section>

      {/* REASONS */}
      <Section>
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl text-foreground">Reasons I Miss You</h2>
          <p className="mt-3 text-muted-foreground">A few of the endless ones…</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl bg-card/70 p-6 backdrop-blur-md border border-border shadow-soft"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-button shadow-soft">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-foreground/85 leading-relaxed">{r.text}</p>
                <Heart className="absolute top-5 right-5 h-4 w-4 fill-blush text-blush opacity-50 group-hover:opacity-100 transition" />
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* MEMORIES */}
      <Section>
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl text-foreground whitespace-pre-wrap">
            You can see a Glow on your Face{"\n"}
            when we're together
          </h2>
          <p className="mt-3 text-muted-foreground">
            See see now, your hair turned white after fighting with me....
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {memories.map((m, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30, rotate: i % 2 ? 2 : -2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              className="group rounded-3xl bg-card p-3 shadow-soft border border-border"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={m.src}
                  alt={m.caption}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <figcaption className="font-display mt-3 mb-2 text-center text-2xl text-foreground">
                {m.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      {/* PROMISE */}
      <Section className="text-center">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-gradient-petal p-10 md:p-16 shadow-soft border border-border relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />

          <Heart className="mx-auto h-10 w-10 fill-primary text-primary animate-heartbeat" />
          <h2 className="mt-6 text-5xl md:text-6xl text-foreground">My Promise</h2>
          <p className="mt-6 text-lg md:text-2xl leading-relaxed text-foreground/80 font-display">
            "I promise to be better, to listen more, and to never take you for
            granted."
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center pb-32">
        <h2 className="text-4xl md:text-5xl text-foreground">So… will you?</h2>
        <p className="mt-3 text-muted-foreground">One little tap means the world to me 🥺</p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPopupOpen(true)}
          className="relative mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-button px-10 py-5 text-lg md:text-xl font-semibold text-primary-foreground shadow-glow"
        >
          <Heart className="h-5 w-5 fill-primary-foreground animate-heartbeat" />
          Forgive Me? 🥺
          <Heart className="h-5 w-5 fill-primary-foreground animate-heartbeat" />
        </motion.button>

        <p className="mt-16 inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-muted-foreground">
          <Music2 className="h-3 w-3" /> Made with love, just for you
        </p>
      </Section>

      <ForgivePopup open={popupOpen} onClose={() => setPopupOpen(false)} />
    </main>
  );
}
