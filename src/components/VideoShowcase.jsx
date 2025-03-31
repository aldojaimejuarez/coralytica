import { motion } from 'framer-motion';

const VideoShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-4xl mx-auto"
    >
      <div className="relative rounded-lg overflow-hidden shadow-2xl">
        <video
          className="w-full h-auto"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source src="/videos/analytics-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};

export default VideoShowcase; 