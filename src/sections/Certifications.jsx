import { Card } from '../components/Card';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import './Certifications.css';

const certifications = [
    {
        name: 'Machine Learning',
        issuer: 'NPTEL',
        status: 'Completed',
        link: 'https://drive.google.com/file/d/1N5LkfjauHOkrK9JGOnpnS2-s9ehWi20X/view?usp=drivesdk'
    },
    {
        name: 'Programming in Modern C++',
        issuer: 'NPTEL',
        status: 'Completed',
        link: 'https://drive.google.com/file/d/18XelNrvTWAYDav7DR92B1i_pNvhQDO_M/view?usp=drivesdk'
    },
    {
        name: 'Agile Scrum',
        issuer: 'Infosys',
        status: 'Completed',
        link: 'https://drive.google.com/file/d/1p2oAkKKMisnKlBsP2k9dUpOYLlH7TtlD/view?usp=drivesdk'
    },
    {
        name: 'Machine Learning',
        issuer: 'Udemy',
        status: 'Completed',
        link: 'https://drive.google.com/file/d/1A5or1035A6yX-sFD_7z7tArbW9wdJtMs/view?usp=drivesdk'
    },
    {
        name: 'Python',
        issuer: 'Udemy',
        status: 'Completed',
        link: 'https://drive.google.com/file/d/1AJaII6h3vCplKZH36NTMMexsMvoKkX5g/view?usp=drivesdk'
    },
    {
        name: 'Bhartiya Antariksh Hackathon',
        issuer: 'ISRO',
        status: 'Completed',
        link: 'https://drive.google.com/file/d/1jccyQ1dEN72u7K_fALxLe9BF3vxGZiUo/view?usp=drivesdk'
    }
];

export function Certifications() {
    return (
        <section id="certifications" className="section-padding container">
            <ScrollReveal>
                <h2 className="section-title">Certifications</h2>
            </ScrollReveal>

            <div className="cert-grid">
                {certifications.map((cert, idx) => (
                    <ScrollReveal key={idx} delay={idx * 0.1} style={{ height: '100%' }}>
                        <Card className={`cert-card ${cert.link ? 'has-link' : ''}`} style={{ height: '100%' }}>
                            {cert.link && (
                                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link-overlay" aria-label={`View ${cert.name} certification`}>
                                    <ExternalLink size={20} className="external-icon" />
                                </a>
                            )}
                            <div className="cert-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path>
                                </svg>
                            </div>
                            <div className="cert-info">
                                <h3 className="cert-name">{cert.name}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                            </div>
                            <div className={`cert-status ${cert.status === 'Completed' ? 'status-completed' : 'status-pending'}`}>
                                {cert.status}
                            </div>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
