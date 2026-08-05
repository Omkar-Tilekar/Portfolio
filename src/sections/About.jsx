import React, { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import './About.css';

export function About() {
    const [showSGPA, setShowSGPA] = useState(false);
    return (
        <section id="about" className="section-padding container">
            <ScrollReveal>
                <h2 className="section-title">About Me</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-lead">
                            I am a student pursuing a BE in <strong>Artificial Intelligence & Data Science</strong> (2023–2027) with a current CGPA of <strong style={{ cursor: 'pointer', color: 'var(--accent-primary)', textDecoration: 'underline' }} onClick={() => setShowSGPA(!showSGPA)} title="Click to view semester SGPAs">9.41</strong>.
                        </p>

                        <p>
                            I am currently working as an AI Engineering Intern, building production-grade LLM applications for the healthcare domain. My work includes developing RAG pipelines, AI agent workflows, FastAPI microservices, and deploying scalable AI solutions. Alongside this, I recently completed the AWS Certified Cloud Practitioner certification and am expanding my expertise in cloud-native AI and DevOps.
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
                        <div 
                            className="highlight-item" 
                            onClick={() => setShowSGPA(!showSGPA)} 
                            style={{ cursor: 'pointer' }}
                            title="Click to view semester SGPAs"
                        >
                            <h3>Academic</h3>
                            {!showSGPA ? (
                                <>
                                    <p>CGPA 9.41</p>
                                    <span className="highlight-sub">Consistent Performer (Click for SGPAs)</span>
                                </>
                            ) : (
                                <div className="sgpa-details" style={{ fontSize: '0.85rem', textAlign: 'left', marginTop: '0.4rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-subtle)', paddingBottom: '2px' }}>
                                        <span>Sem 1:</span> <strong>9.68</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-subtle)', paddingBottom: '2px' }}>
                                        <span>Sem 2:</span> <strong>9.73</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-subtle)', paddingBottom: '2px' }}>
                                        <span>Sem 3:</span> <strong>9.32</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-subtle)', paddingBottom: '2px' }}>
                                        <span>Sem 4:</span> <strong>9.23</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border-subtle)', paddingBottom: '2px' }}>
                                        <span>Sem 5:</span> <strong>8.62</strong>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '2px' }}>
                                        <span>Sem 6:</span> <strong>9.86</strong>
                                    </div>
                                    <span className="highlight-sub" style={{ display: 'block', marginTop: '0.4rem', textAlign: 'center', color: 'var(--accent-primary)', fontSize: '0.7rem', fontWeight: 600 }}>
                                        Click to hide
                                    </span>
                                </div>
                            )}
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
