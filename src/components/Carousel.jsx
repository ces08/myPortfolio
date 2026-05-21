import { useState, useEffect, useRef } from "react";


export function Carousel({slides, startIdx, onClose}){

    const [curr, setCurr] = useState(startIdx);
    const ref = useRef(null);

    const prev = () => setCurr((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setCurr((i) => (i + 1) % slides.length);

    const {img, caption} = slides[curr];

    useEffect(() => {
        ref.current?.focus();
    }, []);

    const handleKey = (e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'Escape') onClose();
    }

    return(

        <div 
            ref={ref}
            className="outline-none fixed inset-0 z-50 bg-black/90 flex flex-col justify-center items-center"
            onClick = {onClose}
            onKeyDown = {handleKey}
            tabIndex = {0}
        >

            <div className = 'items-center justify-center flex w-8/12 gap-5'>

                <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    className="carousel-btn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>

                 <img
                    src={img}
                    alt={caption}
                    className="flex-1 h-full object-contain rounded-md"
                />

                <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    className="carousel-btn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>


            <div className="flex flex-col items-center gap-3 py-4">
                <div className="text-white/70 text-sm text-center max-w-xl px-4">{caption}</div>
                <div className="flex gap-2">
                    {slides.map((_, i) => (
                        <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurr(i); }}
                        className={`w-2 h-2 rounded-full transition ${i === curr ? 'bg-white' : 'bg-white/30'}`}
                        />
                    ))}
                </div>
            </div>
        </div>

    )
}