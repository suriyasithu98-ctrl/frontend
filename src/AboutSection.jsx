import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About <span>Us</span></h2>

                <div className="about-intro animate-on-scroll">
                    <p className="lead-text">
                        Welcome to <strong>Happy Paradise Dance & Fitness Studio & Event Management</strong>, where passion meets performance!
                        We are dedicated to nurturing talent, building confidence, and creating unforgettable stage experiences through dance and creative events.
                    </p>
                    <div className="about-details">
                        <p>Our dance school offers professional training in various dance styles for kids, teens, and adults. With experienced instructors and a positive learning environment, we focus on skill development, discipline, and self-expression.</p>
                        <p>Alongside dance training, we specialize in event management for school functions, cultural programs, stage shows, annual days, weddings, and special celebrations. From concept planning to choreography, stage design, and performance coordination, we ensure every event becomes a magical memory.</p>
                    </div>
                </div>

                <div className="mission-vision-grid">
                    <div className="mv-card mission">
                        <div className="icon">🚀</div>
                        <h3>Our Mission</h3>
                        <p>To inspire students through dance, promote cultural art forms, and deliver high-quality performances and events that leave a lasting impact.</p>
                    </div>
                    <div className="mv-card vision">
                        <div className="icon">👁️</div>
                        <h3>Our Vision</h3>
                        <p>To become a leading dance academy and event management team, known for creativity, professionalism, and excellence in every performance.</p>
                    </div>
                </div>

                <div className="offerings-container">
                    <div className="offering-column">
                        <h3 className="column-title">What We <span>Offer</span></h3>
                        <ul className="styled-list">
                            <li>💃 Dance training (Classical, Western, Folk, Fusion & Fitness)</li>
                            <li>🎭 School & cultural event choreography</li>
                            <li>🎤 Annual day & stage show planning</li>
                            <li>🎉 Wedding & special occasion performances</li>
                            <li>🏆 Competition training & concept dance shows</li>
                            <li>🎼 Theme-based dance productions</li>
                            <li>🎬 Reels & performance video concepts</li>
                        </ul>
                    </div>

                    <div className="offering-column">
                        <h3 className="column-title">Why <span>Choose Us</span></h3>
                        <ul className="check-list">
                            <li>Experienced & passionate trainers</li>
                            <li>Creative choreography concepts</li>
                            <li>Professional event planning</li>
                            <li>Student-friendly learning atmosphere</li>
                            <li>Customized event themes</li>
                            <li>100% dedication to quality performance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
