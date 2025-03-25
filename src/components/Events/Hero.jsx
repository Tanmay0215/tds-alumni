import React, { useState, useEffect, useRef } from "react";

export default function HeroOfEvent() {
    const [imageIndex, setImageIndex] = useState(0);
    const intervalRef = useRef(null);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    
    const images = [
        "https://res.cloudinary.com/dqvwf3z2c/image/upload/v1739714352/anwi_9_mj0xd4.jpg",
        "https://res.cloudinary.com/dqvwf3z2c/image/upload/v1739714350/anwi_3_m3gmn5.jpg",
        "https://res.cloudinary.com/dqvwf3z2c/image/upload/v1739714901/vc7fyaepggtdkrf50qrm.jpg",
        "https://res.cloudinary.com/dqvwf3z2c/image/upload/v1739715224/pu7foul8u6gvuajffgxa.jpg",
        "https://res.cloudinary.com/dqvwf3z2c/image/upload/v1739715224/z0euzmks9lnigun1nyo0.jpg",
    ];

    const placeholderImage = "https://via.placeholder.com/600x400?text=Loading+Image"; // Replace with your placeholder image

    useEffect(() => {
        const loadImages = async () => {
            const promises = images.map((src) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = resolve;
                    img.onerror = resolve;
                });
            });

            await Promise.all(promises);
            setImagesLoaded(true);
        };

        loadImages();
    }, []);

    const handleHover = () => {
        if (!imagesLoaded) return;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 500);
    };

    const handleHoverLeave = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <section className="bg-black flex items-center">
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-white uppercase tracking-wider text-xl font-medium">EVENTS</h2>
                            <h1 className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">JOIN US IRL</h1>
                        </div>
                        <p className="text-gray-400 text-xl sm:text-2xl leading-relaxed">
                            We pride ourselves on meeting and hanging out with our community in real life. Come join us at a number of
                            conferences and hangouts throughout the year.
                        </p>
                    </div>
                    <div className="relative md:col-span-2 lg:col-span-1">
                        <img
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHoverLeave}
                            src={imagesLoaded ? images[imageIndex] : placeholderImage}
                            className="event-image"
                            alt="Event visuals"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
