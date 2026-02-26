import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import './Experience.css';

const experiences = [
    {
        role: 'Intern',
        company: 'CODSOFT',
        duration: '1 month',
        description: [
            'Developed and optimized intelligent features using modern ML frameworks.',
            'Collaborated on real-world projects to build end-to-end Python applications.'
        ]
    },
    {
        role: 'Intern',
        company: 'TechGeek Connect',
        duration: '1 month',
        description: [
            'Contributed to full-stack development tasks and improved user experience.',
            'Assisted in integrating AI-driven systems into web interfaces.'
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="section-padding container">
            <ScrollReveal>
                <h2 className="section-title">Experience</h2>
            </ScrollReveal>

            <div className="experience-timeline">
                {experiences.map((exp, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.2} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content card card-hover">
                            <div className="timeline-header">
                                <h3 className="role">{exp.role} <span className="accent-text">@ {exp.company}</span></h3>
                                <span className="duration">{exp.duration}</span>
                            </div>
                            <ul className="timeline-desc">
                                {exp.description.map((desc, dIdx) => (
                                    <li key={dIdx}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
