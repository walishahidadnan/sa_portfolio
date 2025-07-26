'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-portfolio-light/60 backdrop-blur-lg"
        >
          <motion.div
            className="w-20 h-20 border-4 border-dashed border-loader rounded-full animate-spin bg-white/10 backdrop-blur-md shadow-xl shadow-black/10"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 0.5,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
