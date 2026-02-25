import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Meena R.",
            class: "Adult Batch",
            quote: "Joining Happy Paradise was the best decision! The energy in the Adult Batch is incredible, and Suriya is an amazing teacher.",
            avatar: "/gallery/1000179602.jpg",
            rating: 5
        },
        {
            name: "Rahul S.",
            class: "Zumba & Fitness",
            quote: "I've lost 5kg in just 2 months! The Zumba sessions are so much fun, I never want to miss a class.",
            avatar: "/gallery/1000008272.jpg",
            rating: 5
        },
        {
            name: "Anita J.",
            class: "Classical Dance",
            quote: "Master Veeriah's teaching is so graceful and patient. I am finally connecting with my roots through Classical Dance.",
            avatar: "/gallery/1000149903.jpg",
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        return [...Array(rating)].map((_, i) => (
            <span key={i} className="star">★</span>
        ));
    };

    return (
        <section id="testimonials" className="section testimonials">
            <div className="container">
                <h2 className="section-title">Happy <span>Voices</span></h2>
                <div className="testimonial-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="stars">
                                    {renderStars(testimonial.rating)}
                                </div>
                                <p className="quote">"{testimonial.quote}"</p>
                            </div>
                            <div className="testimonial-footer">
                                <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                                <div className="student-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.class}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
