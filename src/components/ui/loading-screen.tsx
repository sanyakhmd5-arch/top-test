"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // No artificial delay — hide as soon as the site is fully loaded
    const hideLoader = () => {
      setIsLoading(false);
      setTimeout(() => setShow(false), 700);
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader, { once: true });
    }
  }, []);

  // Remove the static pre-loader once React mounts
  useEffect(() => {
    const preLoader = document.getElementById("pre-loader");
    if (preLoader) {
      preLoader.style.opacity = "0";
      setTimeout(() => {
        preLoader.remove();
      }, 600);
    }
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {/* ── Logo Container ── */}
          <div className="flex flex-col items-center">
            {/* Logo with cinematic animations */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{
                opacity: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
                filter: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
              }}
            >
              {/* Logo Image — 40% larger */}
              <div className="relative w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] md:w-[160px] md:h-[160px]">
                <Image
                  src="/images/logo/logo-loading.png"
                  alt="TOP TEST"
                  fill
                  className="object-contain"
                  priority
                />

                {/* Gold Light Reflection Sweep */}
                <motion.div
                  className="absolute inset-0 overflow-hidden rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.2 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(
                        105deg,
                        transparent 0%,
                        transparent 30%,
                        rgba(212, 164, 55, 0.0) 38%,
                        rgba(212, 164, 55, 0.2) 43%,
                        rgba(212, 164, 55, 0.3) 47%,
                        rgba(212, 164, 55, 0.2) 51%,
                        rgba(212, 164, 55, 0.0) 56%,
                        transparent 65%,
                        transparent 100%
                      )`,
                    }}
                    initial={{ x: "-120%", y: "-15%" }}
                    animate={{ x: "120%", y: "15%" }}
                    transition={{
                      delay: 0.5,
                      duration: 1.0,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Gold Line Animation — more refined */}
            <motion.div
              className="mt-6 h-[1.5px] overflow-hidden rounded-full"
              style={{ width: "100px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.3 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, #D4A437, #D4A437, transparent)`,
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.45,
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
