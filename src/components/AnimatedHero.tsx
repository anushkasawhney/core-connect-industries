import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface AnimatedHeroProps {
  image: string;
  title: string;
  subtitle: string;
  badge?: string;
  ctaText?: string;
  ctaLink?: string;
}

const AnimatedHero = ({ image, title, subtitle, badge, ctaText, ctaLink }: AnimatedHeroProps) => (
  <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
    <motion.div
      className="absolute inset-0 origin-center"
      initial={{ scale: 1.2, rotateX: 5, rotateY: -3 }}
      animate={{ scale: 1, rotateX: 0, rotateY: 0 }}
      transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ perspective: 1200, transformStyle: "preserve-3d" }}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        animate={{
          scale: [1, 1.04, 1, 1.03, 1],
          rotateY: [0, 2, -2, 1, 0],
          rotateX: [0, -1, 1, -0.5, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-navy-dark/80" />
    </motion.div>
    <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-foreground/20 text-primary-foreground/70 text-sm font-medium mb-6">
            {badge}
          </span>
        )}
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link
            to={ctaLink}
            className="inline-flex mt-8 px-8 py-3.5 rounded-md bg-highlight text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            {ctaText}
          </Link>
        )}
      </motion.div>
    </div>
  </section>
);

export default AnimatedHero;
