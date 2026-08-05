import React from 'react';
import { Card } from '../components/Card';
import { ScrollReveal } from '../components/ScrollReveal';
import './Skills.css';

const skillCategories = [
    {
        title: 'Programming',
        skills: ['Python', 'C++', 'JavaScript']
    },
    {
        title: 'AI / ML',
        skills: ['Machine Learning', 'Deep Learning', 'RAG', 'LLMs', 'LangGraph', 'LangChain', 'Prompt Engineering', 'AI Agents', 'Vector Databases', 'Semantic Search', 'LLM APIs', 'CNNs', 'Transfer Learning', 'Model Training & Evaluation', 'NLP']
    },
    {
        title: 'Frameworks & Tools',
        skills: ['TensorFlow', 'TensorBoard', 'Streamlit', 'OpenCV', 'ChromaDB', 'SQLite']
    },
    {
        title: 'Web / Full Stack',
        skills: ['React', 'FastAPI', 'REST APIs', 'Node.js', 'Express', 'JavaScript', 'HTML', 'CSS', 'Vite', 'EJS']
    },
    {
        title: 'Cloud & DevOps',
        skills: ['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'RDS', 'Docker', 'Linux', 'Git', 'GitHub']
    },
    {
        title: 'Data & Analytics',
        skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn']
    }
];

export function Skills() {
    return (
        <section id="skills" className="section-padding container">
            <ScrollReveal>
                <h2 className="section-title">Technical Skills</h2>
            </ScrollReveal>

            <div className="skills-grid">
                {skillCategories.map((category, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1} style={{ height: '100%' }}>
                        <Card className="skill-category" style={{ height: '100%' }}>
                            <h3 className="category-title">{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, sIdx) => (
                                    <span key={sIdx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
