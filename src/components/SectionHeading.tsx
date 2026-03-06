import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "left" | "center";
}

const SectionHeading = ({ title, subtitle, light, align = "center" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}
  >
    <h2 className={`font-heading text-3xl md:text-4xl font-bold ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-base md:text-lg max-w-2xl ${align === "center" ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
    <div className={`mt-4 h-1 w-16 rounded-full bg-highlight ${align === "center" ? "mx-auto" : ""}`} />
  </motion.div>
);

export default SectionHeading;
