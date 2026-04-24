import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";

export function ForgivePopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.6, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", damping: 18, stiffness: 220 }}
            className="relative w-full max-w-md rounded-3xl bg-card p-10 text-center shadow-glow border border-border"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <motion.div
              animate={{ scale: [1, 1.2, 1, 1.15, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-button shadow-soft"
            >
              <Heart className="h-10 w-10 fill-primary-foreground text-primary-foreground" />
            </motion.div>

            <h3 className="font-display text-4xl text-foreground">
              Thank you for being my person
            </h3>
            <p className="mt-3 text-base text-muted-foreground">
              I promise I'll gift you a good hair dye..(colour jaye toh paisa wapas) ❤️
            </p>

            <div className="mt-6 flex justify-center gap-1 text-2xl">
              {["💖", "🌷", "💕", "🌸", "💗"].map((e, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.15 }}
                >
                  {e}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
