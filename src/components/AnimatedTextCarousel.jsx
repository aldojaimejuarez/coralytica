import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const metrics = [
  "Top-selling products by location",
  "Inventory turnover rate",
  "Low-stock and overstock alerts",
  "Sales trends over time",
  "Customer lifetime value",
  "Profit margin by product category",
  "Store performance comparison",
  "Sales conversion rate",
  "Average time to restock",
  "Returns by product or region"
];

const AnimatedTextCarousel = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Frase inicial fija */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold text-primary">
          Your data has answers. We help you find them.
        </h2>
      </motion.div>

      {/* Carrusel de métricas con efecto de flujo continuo horizontal */}
      <div className="relative h-16 overflow-hidden w-full max-w-3xl bg-gradient-to-r from-gray-50 via-white to-gray-50">
        <motion.div
          animate={{
            x: [0, -300 * metrics.length],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute inset-0 flex items-center"
        >
          {[...metrics, ...metrics].map((metric, index) => (
            <div
              key={index}
              className="h-16 flex items-center justify-center min-w-[300px]"
            >
              <h3 className="text-2xl font-semibold text-center px-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                {metric}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedTextCarousel; 