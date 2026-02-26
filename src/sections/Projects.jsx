import React from 'react';
import { Github } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import './Projects.css';

const projectCategories = [
    {
        title: "Machine Learning & Data Science",
        projects: [
            {
                title: 'Osteoarthritis Severity Prediction using Transfer Learning',
                description: 'Deep learning classification model using EfficientNet Transfer Learning and custom CNN layers to predict osteoarthritis severity from X-ray imagery. Includes strategies like class-weighted loss to handle dataset imbalance.',
                tech: ['Python', 'TensorFlow', 'EfficientNet', 'Pandas', 'NumPy'],
                github: 'https://github.com/Rakmo5/Osteoarthritis'
            },
            {
                title: 'Dog Vision Classification',
                description: 'End-to-end Image Classification model built using TensorFlow and modern deep learning techniques to accurately predict and differentiate various dog breeds from the Kaggle Dog Breed Identification dataset.',
                tech: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
                github: 'https://github.com/Rakmo5/dog-vision-project'
            },
            {
                title: 'Trader Sentiment Analysis System',
                description: 'NLP-based pipeline to analyze trader sentiment and generate structured market insight indicators.',
                tech: ['Python', 'NLP', 'Data Analytics'],
                github: 'https://github.com/Rakmo5/primetrade-trader-sentiment-analysis'
            }
        ]
    },
    {
        title: "Agentic AI & RAG",
        projects: [
            {
                title: 'Personal Knowledge Brain (RAG Assistant)',
                description: 'User-scoped Retrieval-Augmented Generation system with persistent memory and vector database integration, enabling grounded document-based AI responses.',
                tech: ['Python', 'ChromaDB', 'SQLite', 'LLM APIs'],
                github: 'https://github.com/Rakmo5/readyTensor_RAG-project',
                publication: 'https://app.readytensor.ai/publications/personal-knowledge-brain-user-scoped-rag-assistant-O6J2U9Uw8i0W'
            },
            {
                title: 'Multi-Agent Resume Analyzer',
                description: 'Modular AI system with task-specific agents for skill extraction, scoring, and job-description matching with explainable outputs.',
                tech: ['Python', 'Streamlit', 'NLP', 'Agent Architecture'],
                github: 'https://github.com/Rakmo5/resumeAnalyser'
            },
            {
                title: 'COREP AI Reporting Assistant',
                description: 'AI-driven reporting assistant for structured financial insights using retrieval pipelines and LLM integration.',
                tech: ['Python', 'RAG', 'Financial Data Processing'],
                github: 'https://github.com/Rakmo5/corep-ai-reporting-assistant'
            },
            {
                title: 'AI Financial Research Tool',
                description: 'Document retrieval and LLM-powered summarization system for structured financial research workflows.',
                tech: ['Python', 'LLM APIs', 'Data Processing'],
                github: 'https://github.com/Rakmo5/finanace-research-tool'
            },
            {
                title: 'AI Project Publication Assistant',
                description: 'A Multi-Agent system that analyzes GitHub repositories to produce grounded suggestions. Uses LangGraph for coordinated Analysis, Writing, and Review agents with bounded retries.',
                tech: ['Python', 'LangGraph', 'Agent Architecture', 'LLMs'],
                github: 'https://github.com/Rakmo5/readyTensor_LLM-project',
                publication: 'https://app.readytensor.ai/publications/ai-project-publication-assistant-a-conditional-multi-agent-system-l8nDFQrmBvC5'
            },
            {
                title: 'Multi-User Conversational RAG API',
                description: 'Production-style RAG backend API ensuring multi-user data isolation. Features background document ingestion, hybrid retrieval, and in-memory rate limiting.',
                tech: ['FastAPI', 'LangChain', 'ChromaDB', 'SQLite', 'Groq API'],
                github: 'https://github.com/Rakmo5/readyTensor_RAG-project/tree/internship-rag-api'
            }
        ]
    },
    {
        title: "Full-Stack Development",
        projects: [
            {
                title: 'Kolam Extractor & Generator',
                description: 'Full-stack AI system that analyzes geometric patterns using computer vision and exposes structured insights via REST APIs.',
                tech: ['React', 'FastAPI', 'OpenCV'],
                github: 'https://github.com/Rakmo5/SIH25'
            }
        ]
    }
];

export function Projects() {
    return (
        <section id="projects" className="section-padding container">
            <ScrollReveal>
                <h2 className="section-title">Featured Projects</h2>
            </ScrollReveal>

            {projectCategories.map((category, cIdx) => (
                <div key={cIdx} className="project-category-section" style={{ marginTop: cIdx === 0 ? '2rem' : '4rem' }}>
                    <ScrollReveal>
                        <h3 className="category-subtitle">{category.title}</h3>
                    </ScrollReveal>

                    <div className="projects-grid">
                        {category.projects.map((project, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1} style={{ height: '100%' }}>
                                <Card className="project-card" style={{ height: '100%' }}>
                                    <div className="project-content">
                                        <h3 className="project-title">{project.title}</h3>
                                        <p className="project-desc">{project.description}</p>

                                        <div className="project-tech">
                                            {project.tech.map((tag, tIdx) => (
                                                <span key={tIdx} className="tech-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="project-footer" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                        <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm" as="a">
                                            <Github size={16} /> Source Code
                                        </Button>
                                        {project.publication && (
                                            <Button href={project.publication} target="_blank" rel="noopener noreferrer" variant="primary" size="sm" as="a">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.25rem' }}>
                                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                                </svg>
                                                Publication
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}
