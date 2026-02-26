import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { ScrollReveal } from '../components/ScrollReveal';
import './Contact.css';

export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setStatus("Please fill in all fields.");
            return;
        }

        setStatus("Sending...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "c790cdb7-ce19-42a3-9ae0-6c37a46ba071",
                    name: name,
                    email: email,
                    message: message,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(""), 5000);
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("Something went wrong. Please try again.");
        }
    };

    return (
        <section id="contact" className="section-padding container">
            <ScrollReveal>
                <h2 className="section-title">Get In Touch</h2>
            </ScrollReveal>

            <div className="contact-content">
                <ScrollReveal delay={0.1}>
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p className="contact-desc">
                            I'm currently looking for new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to drop a message!
                        </p>

                        <div className="contact-methods">
                            <a href="mailto:otilekar999@gmail.com" className="method-item card card-hover">
                                <div className="method-icon"><Mail size={24} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>otilekar999@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/OmkarTilekar" target="_blank" rel="noopener noreferrer" className="method-item card card-hover">
                                <div className="method-icon"><Linkedin size={24} /></div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <p>OmkarTilekar</p>
                                </div>
                            </a>

                            <a href="https://github.com/Rakmo5" target="_blank" rel="noopener noreferrer" className="method-item card card-hover">
                                <div className="method-icon"><Github size={24} /></div>
                                <div>
                                    <h4>GitHub</h4>
                                    <p>Rakmo5</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="contact-form-container card">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Hello Omkar, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" className="submit-btn" size="lg" disabled={status === 'Sending...'}>
                                Send Message <Send size={18} />
                            </Button>
                            {status && (
                                <p className="form-status" style={{
                                    marginTop: '1rem',
                                    color: status.includes('success') ? '#00ff80' : 'var(--accent-primary)',
                                    fontSize: '0.95rem',
                                    fontWeight: '500'
                                }}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
