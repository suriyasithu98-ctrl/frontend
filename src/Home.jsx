import React from 'react';
import { Link } from 'react-router-dom';
import Gallery from './Gallery';
import AboutSection from './AboutSection';
import Instructors from './Instructors';
import Testimonials from './Testimonials';

function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Happy Paradise<br />Dance and Fitness Studio</h1>
                    <p>Professional Dance, Fitness & Event Management</p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                        <a href="#about" className="btn">Explore More</a>
                        <Link to="/admission" className="btn btn-outline" style={{ background: 'transparent', border: '2px solid var(--secondary)', color: 'var(--secondary)' }}>Join Now</Link>
                    </div>
                </div>
            </section>

            <AboutSection />

            <section id="classes" className="section classes">
                <div className="container">
                    <h2 className="section-title">Our <span>Classes</span></h2>
                    <div className="class-grid">
                        <div className="class-card">
                            <div className="class-img-small">
                                <img src="/gallery/1000179602.jpg" alt="Adult Batch" />
                            </div>
                            <h3>Adult Batch</h3>
                            <p>Mon / Wed / Sat</p>
                            <p><strong>7:00 PM - 8:00 PM</strong></p>
                        </div>
                        <div className="class-card">
                            <div className="class-img-small">
                                <img src="/gallery/1000166707.jpg" alt="Kids & Junior Batch" />
                            </div>
                            <h3>Kids & Junior Batch</h3>
                            <p>Fri / Sat (7 PM - 8 PM)</p>
                            <p>Sunday (4 PM - 5 PM)</p>
                        </div>
                        <div className="class-card">
                            <div className="class-img-small">
                                <img src="/gallery/1000149903.jpg" alt="Classical Dance" />
                            </div>
                            <h3>Classical Dance</h3>
                            <p>Saturday (5 PM - 7 PM)</p>
                            <p>Sunday (10 AM - 12 PM)</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="classical-feature" className="section classical-feature">
                <div className="container">
                    <div className="classical-content">
                        <div className="classical-image">
                            <img src="/gallery/1000149903.jpg" alt="Classical Dance Excellence" />
                            <div className="image-accent"></div>
                        </div>
                        <div className="classical-text">
                            <h2 className="section-title">Classical <span>Grace</span></h2>
                            <p className="subtitle">Connect with your roots through the art of Bharatanatyam.</p>
                            <p>Our classical dance program, led by Master Veeriah, focuses on the traditional mudras, rhythms, and expressions of ancient Indian heritage. We believe in preserving the purity of the art form while making it accessible to students of all ages.</p>
                            <ul className="classical-benefits">
                                <li>✨ Traditional Mudras & Expressions</li>
                                <li>✨ Rhythmic Footwork (Thalam)</li>
                                <li>✨ Cultural Heritage & Discipline</li>
                                <li>✨ Certified Syllabus Training</li>
                            </ul>
                            <div className="classical-times">
                                <h3>Class Schedule</h3>
                                <p><strong>Saturday:</strong> 5:00 PM - 7:00 PM</p>
                                <p><strong>Sunday:</strong> 10:00 AM - 12:00 PM</p>
                            </div>
                            <a href="#contact" className="btn btn-outline" style={{ marginTop: '30px' }}>Join the Tradition</a>
                        </div>
                    </div>
                </div>
            </section>

            <Instructors />

            <Gallery />

            <Testimonials />

            <section id="services" className="section services">
                <div className="container">
                    <h2 className="section-title">Event <span>Services</span></h2>
                    <div className="service-content-wrapper" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '40px', alignItems: 'center' }}>
                        <div className="service-box">
                            <h3>Event Management & Entertainment</h3>
                            <p>We specialize in making your special moments unforgettable.</p>
                            <ul style={{ listStyle: 'none', marginTop: '20px', fontSize: '1.2rem', color: '#ccc' }}>
                                <li>✨ Wedding Choreography</li>
                                <li>✨ Corporate Shows</li>
                                <li>✨ Live Entertainment</li>
                            </ul>
                        </div>
                        <div className="service-image-container" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                            <img src="/gallery/1000037688.jpg" alt="Event Management" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="section contact">
                <div className="container">
                    <h2 className="section-title">Get in <span>Touch</span></h2>
                    <div className="contact-info">
                        <div className="contact-item">
                            <h4>Address</h4>
                            <p>28/4 Nadar Mela Ratha Veethi,<br />Opposite Amarnath Travels,<br />Aruppukottai - 626101</p>
                        </div>
                        <div className="contact-item">
                            <h4>Call Us</h4>
                            <p className="phone-number">98434 68986</p>
                            <p className="phone-number">84381 37008</p>
                        </div>
                        <div className="contact-item">
                            <h4>Email Us</h4>
                            <p className="phone-number" style={{ fontSize: '1.2rem', wordBreak: 'break-all' }}>happyparadisedanceandfitness@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="floating-buttons">
                <a href="https://www.instagram.com/happyparadisedanceandfitness?igsh=MW4xbXdsZDg5MXR0ag==" className="float-btn instagram-btn" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="https://wa.me/919843468986" className="float-btn whatsapp-btn" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                </a>
                <a href="mailto:happyparadisedanceandfitness@gmail.com" className="float-btn gmail-btn" aria-label="Email us">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                </a>
                <a href="tel:9843468986" className="float-btn call-btn" aria-label="Call Now">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                </a>
            </div>
        </>
    );
}

export default Home;
