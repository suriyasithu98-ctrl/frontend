import React, { useState } from 'react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Images from user
    const images = [
        { id: 1, src: '/gallery/1000008272.jpg', alt: 'Gallery Image 1', caption: 'Happy Paradise Moments' },
        { id: 2, src: '/gallery/1000037688.jpg', alt: 'Gallery Image 2', caption: 'Dance & Fitness' },
        { id: 3, src: '/gallery/1000121189.jpg', alt: 'Gallery Image 3', caption: 'Studio Events' },
        { id: 4, src: '/gallery/1000179602.jpg', alt: 'Gallery Image 4', caption: 'Energizing Sessions' },
        { id: 5, src: '/gallery/1000167578.jpg', alt: 'Gallery Image 5', caption: 'Performance' },
        { id: 6, src: '/gallery/1000149903.jpg', alt: 'Gallery Image 6', caption: 'Team Spirit' },
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section id="gallery" className="section gallery">
            <div className="container">
                <h2 className="section-title">Our <span>Moments</span></h2>
                <div className="gallery-grid">
                    {images.map((image) => (
                        <div key={image.id} className="gallery-item" onClick={() => openLightbox(image)}>
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>{image.caption}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeLightbox}>&times;</button>
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <div className="lightbox-caption">
                            <h3>{selectedImage.caption}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
