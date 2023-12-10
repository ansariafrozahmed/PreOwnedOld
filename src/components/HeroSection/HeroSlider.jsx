"use client"
import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";

const HeroSlider = () => {
    return (
        <>
            <Carousel className="h-[250px] md:h-[500px]"
                // prevArrow={false}
                // nextArrow={false}
                autoplay={true}
                loop={true}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1601801958048-aa2e1c3e21e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1511370235399-1802cae1d32f?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1525342306245-c6a1e32087ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                </div>
            </Carousel>
        </>
    )
}

export default HeroSlider