import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import './Hero.css';

export function Hero() {
    return (
        <section id="hero" className="hero-section container">
            <ScrollReveal yOffset={30}>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Hi, I'm <span className="text-gradient">Omkar Tilekar</span>
                    </h1>
                    <h2 className="hero-subtitle accent-text">AI & Full-Stack Developer | Building Intelligent Systems</h2>
                    <p className="hero-tagline">
                        "I design and build AI-powered systems that connect data, decisions, and real-world impact."
                    </p>

                    <div className="hero-actions">
                        <Button href="#projects" variant="primary" size="lg">View Projects</Button>
                        <Button href="#contact" variant="secondary" size="lg">Contact Me</Button>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/Rakmo5" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/OmkarTilekar" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </ScrollReveal>

            <div className="hero-ticker-wrapper">
                <div className="hero-ticker">
                    <div className="ticker-track">
                        <span className="ticker-item">Agentic AI</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">LangGraph</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">LangChain</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">RAG Systems</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">AWS</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">Python</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">FastAPI</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">React</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">Docker</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">TensorFlow</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">Git</span>
                        <span className="ticker-dot">•</span>

                        {/* Duplicate for infinite scroll effect */}
                        <span className="ticker-item">Agentic AI</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">LangGraph</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">LangChain</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">RAG Systems</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">AWS</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">Python</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">FastAPI</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">React</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">Docker</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">TensorFlow</span>
                        <span className="ticker-dot">•</span>
                        <span className="ticker-item">Git</span>
                        <span className="ticker-dot">•</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
