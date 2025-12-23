"use client"

import { useState, useRef } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

interface ProjectVideoProps {
    src: string
    poster: string
}

export function ProjectVideo({ src, poster }: ProjectVideoProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play()
            setIsPlaying(true)
        }
    }

    return (
        <div className="group relative overflow-hidden rounded-md bg-muted">
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                controls={isPlaying}
                className="w-full rounded-md"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            />

            {!isPlaying && (
                <div
                    className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30 cursor-pointer"
                    onClick={handlePlay}
                >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-background/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-1 h-6 w-6 text-foreground" fill="currentColor" />
                    </div>
                </div>
            )}
        </div>
    )
}
