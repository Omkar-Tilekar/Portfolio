import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import './About.css';

export function About() {
    return (
        <section id="about" className="section-padding container">
            <ScrollReveal>
                <h2 className="section-title">About Me</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-lead">
                            I am a student pursuing a <strong>BE in Artificial Intelligence & Data Science</strong> (2023–2027) with a current CGPA of <strong>9.3</strong>.
                        </p>

                        <p>
                            My core focus areas revolve around building intelligent AI systems, Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), and scalable full-stack architectures. I am deeply interested in building end-to-end AI products that solve real-world problems.
                        </p>

                        <p>
                            What sets me apart is my emphasis on <strong>system thinking</strong> over just model training. I believe that an AI model is only as good as the infrastructure and user experience surrounding it. Hence, I focus on integrating machine learning pipelines with robust backend infrastructure and intuitive frontend interfaces.
                        </p>
                    </div>

                    <div className="about-highlights">
                        <div className="highlight-item">
                            <h3>Education</h3>
                            <p>BE in AI & Data Science</p>
                            <span className="highlight-sub">2023 - 2027</span>
                        </div>
                        <div className="highlight-item">
                            <h3>Academic</h3>
                            <p>CGPA 9.3</p>
                            <span className="highlight-sub">Consistent Performer</span>
                        </div>
                        <div className="highlight-item">
                            <h3>Focus</h3>
                            <p>AI Systems & Full-Stack</p>
                            <span className="highlight-sub">End-to-end Products</span>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
