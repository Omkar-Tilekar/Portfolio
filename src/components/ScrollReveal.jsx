import React from 'react';
import { motion } from 'framer-motion';

export function ScrollReveal({ children, delay = 0, yOffset = 50, duration = 0.6, className = "", style = {} }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1], // Cubic bezier for a smooth "pop" effect
            }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
}
