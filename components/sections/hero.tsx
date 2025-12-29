"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
    const whatsappNumber = "2347042482419"
    const message =
        "Hi Joseph! I'm interested in working together on a project. Let's discuss!"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    return (
        <section id="about" aria-labelledby="hero-heading" className="relative overflow-hidden">
            {/* Theme-aware background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="min-h-[calc(100vh-3.5rem)] py-20 sm:py-24 lg:py-28 flex items-center">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        {/* Left */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <header className="space-y-5">
                                <p className="text-sm font-semibold tracking-wider text-muted-foreground">
                                    FULL‑STACK DEVELOPER
                                </p>

                                <h1
                                    id="hero-heading"
                                    className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground"
                                >
                                    JOSEPH J.I
                                </h1>

                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">
                                        React
                                    </span>
                                    <span className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">
                                        Next.js
                                    </span>
                                    <span className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">
                                        Supabase
                                    </span>
                                    <span className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">
                                        PostgreSQL
                                    </span>
                                </div>
                            </header>

                            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                                I build production‑ready web apps from UI to database.
                                <span className="text-foreground font-medium">
                                    {" "}
                                    Real‑time features • Secure auth • Database design • Performance.
                                </span>
                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                {/* Book a Call */}
                                <Button asChild className="rounded-full">
                                    <a href="#contact" className="smooth-scroll">
                                        Book a Call
                                    </a>
                                </Button>

                                {/* Download CV */}
                                <Button asChild variant="outline" className="rounded-full">
                                    <a href="/Joseph-JI-CV.pdf" download="Joseph-JI-CV.pdf">
                                        Download CV
                                    </a>
                                </Button>
                            </div>
                        </div>

                        {/* Right (image) */}
                        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
                                <div className="relative aspect-square">
                                    <div className="absolute inset-0 rounded-2xl border border-border" />
                                    <div className="absolute inset-3 rounded-xl border border-border/60" />
                                    <div className="absolute inset-6 rounded-lg border border-border/40" />

                                    <div className="absolute inset-8 overflow-hidden rounded-lg bg-muted shadow-2xl">
                                        <Image
                                            src="/images/Jose.jpg"
                                            alt="Portrait of Joseph Jonah Inalegwu"
                                            fill
                                            priority
                                            className="object-cover scale-110 transition-transform duration-700 ease-out hover:scale-125"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}