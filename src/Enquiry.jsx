import React, { useState } from 'react';

function Enquiry() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        interest: 'Kids Batch',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            window.scrollTo(0, 0);
        }, 500);
    };

    if (submitted) {
        return (
            <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div className="container">
                    <h2 className="section-title">Thank <span>You!</span></h2>
                    <p style={{ fontSize: '1.5rem', color: '#ccc' }}>
                        We have received your enquiry, <strong>{formData.name}</strong>.<br />
                        Our team will contact you shortly at <strong>{formData.phone}</strong>.
                    </p>
                    <button className="btn" style={{ marginTop: '30px' }} onClick={() => setSubmitted(false)}>Send Another Enquiry</button>
                </div>
            </section>
        );
    }

    return (
        <section className="section" style={{ paddingTop: '100px' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <h2 className="section-title">Enquiry <span>Form</span></h2>
                <form onSubmit={handleSubmit} style={{ background: '#222', padding: '40px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.1)' }}>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>Name *</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '12px', borderRadius: '5px', border: 'none', background: '#333', color: '#fff', fontSize: '1rem' }}
                        />
                    </div>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>Phone Number *</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            required
                            pattern="[0-9]{10}"
                            title="Please enter a valid 10-digit phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '12px', borderRadius: '5px', border: 'none', background: '#333', color: '#fff', fontSize: '1rem' }}
                        />
                    </div>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>Email (Optional)</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '12px', borderRadius: '5px', border: 'none', background: '#333', color: '#fff', fontSize: '1rem' }}
                        />
                    </div>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label htmlFor="interest" style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>Interested In</label>
                        <select
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '12px', borderRadius: '5px', border: 'none', background: '#333', color: '#fff', fontSize: '1rem' }}
                        >
                            <option value="Kids Batch">Kids Batch</option>
                            <option value="Junior & Adult Batch">Junior & Adult Batch</option>
                            <option value="Zumba">Zumba</option>
                            <option value="Event Management">Event Management</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group" style={{ marginBottom: '30px' }}>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '12px', borderRadius: '5px', border: 'none', background: '#333', color: '#fff', fontSize: '1rem', resize: 'vertical' }}
                        ></textarea>
                    </div>

                    <button type="submit" className="btn" style={{ width: '100%', border: 'none', fontSize: '1.2rem' }}>Submit Enquiry</button>

                </form>
            </div>
        </section>
    );
}

export default Enquiry;
