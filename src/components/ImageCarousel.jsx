'use client'

import { useState, useEffect, useRef } from 'react'

const IMAGES = [
    { src: '/consultation.png', alt: 'Consultation' },
    { src: '/aiconsultation.png', alt: 'AI Consultation' },
    { src: '/aiconsultationside.png', alt: 'AI Consultation Side' },
]

const DURATION = 5000
const TRANSITION_MS = 1400

export default function ImageCarousel() {
    const [active, setActive] = useState(0)
    const [prev, setPrev] = useState(null)
    const [tick, setTick] = useState(0)
    const [hovered, setHovered] = useState(false)
    const timeoutRef = useRef(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setPrev(a => a)
            setActive(a => {
                setPrev(a)
                setTick(t => t + 1)
                return (a + 1) % IMAGES.length
            })
        }, DURATION)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        timeoutRef.current = setTimeout(() => setPrev(null), TRANSITION_MS)
        return () => clearTimeout(timeoutRef.current)
    }, [active])

    return (
        <div
            className="relative w-full h-full overflow-hidden"
            style={{ background: 'var(--surface-container)' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.18); }
        }
        .kb { animation: kenBurns ${DURATION + TRANSITION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
      `}</style>

            {IMAGES.map((img, i) => {
                const isActive = i === active
                const isPrev = i === prev
                const isVisible = isActive || isPrev

                return (
                    <div
                        key={img.src}
                        className="absolute inset-0"
                        style={{
                            zIndex: isActive ? 20 : isPrev ? 10 : 0,
                            opacity: isActive ? 1 : isPrev ? 0 : 0,
                            transition: `opacity ${TRANSITION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`,
                            pointerEvents: 'none',
                        }}
                    >
                        <div
                            className={isActive ? 'kb' : ''}
                            key={`${tick}-${i}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                transform: hovered && isActive ? 'scale(1.22)' : undefined,
                                transition: hovered ? 'transform 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : undefined,
                            }}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                                style={{
                                    filter: hovered && isActive ? 'brightness(1.08) saturate(1.15)' : 'brightness(1) saturate(1)',
                                    transition: 'filter 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                }}
                            />
                        </div>
                    </div>
                )
            })}

            {/* Cinematic gradient */}
            <div
                className="absolute inset-0 z-30 pointer-events-none"
                style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)',
                    opacity: hovered ? 0.7 : 1,
                    transition: 'opacity 1.8s cubic-bezier(0.65, 0, 0.35, 1)',
                }}
            />
        </div>
    )
}