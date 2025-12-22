"use client"

import * as React from "react"
import { Code2, Zap, Database, Shield, Gauge, Network } from "lucide-react"

const services = [
    {
        id: 1,
        title: "Fullstack Web Development",
        description:
            "Complete web applications from frontend to backend. React/Next.js interfaces connected to Supabase databases—everything working together, nothing half-done.",
        icon: Code2,
    },
    {
        id: 2,
        title: "Real-Time Applications",
        description:
            "Live chat, collaborative editing, instant updates. No page refreshes needed. Your users see changes as they happen.",
        icon: Zap,
    },
    {
        id: 3,
        title: "Database Architecture",
        description:
            "PostgreSQL databases that make sense. Proper relationships, optimized queries, and data that stays organized as your app grows.",
        icon: Database,
    },
    {
        id: 4,
        title: "Authentication & Security",
        description:
            "Secure login systems that actually work. Social logins, email verification, role-based permissions—all built on Supabase Auth.",
        icon: Shield,
    },
    {
        id: 5,
        title: "Performance Optimization",
        description:
            "Fast load times, smooth interactions. Code splitting, lazy loading, query optimization—your app runs lean and quick.",
        icon: Gauge,
    },
    {
        id: 6,
        title: "API Integration",
        description:
            "Connect to payment processors, social platforms, any third-party service. Clean integrations with proper error handling.",
        icon: Network,
    },
]

export function Services() {
    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className="relative overflow-hidden"
        >
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
                <div className="space-y-12">
                    {/* Header */}
                    <div className="space-y-3 text-center">
                        <p className="text-sm font-semibold tracking-wider text-muted-foreground">
                            SERVICES
                        </p>
                        <h2
                            id="services-heading"
                            className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground max-w-3xl mx-auto"
                        >
                            Complete apps—UI, backend, database. One developer, zero middlemen.
                        </h2>
                    </div>

                    {/* Services Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => {
                            const Icon = service.icon
                            return (
                                <article
                                    key={service.id}
                                    className="group relative rounded-lg border border-border bg-background p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    style={{
                                        transform: "perspective(1000px) rotateX(2deg)",
                                        transformOrigin: "bottom",
                                    }}
                                >
                                    {/* Layered depth effect */}
                                    <div className="absolute inset-0 -z-10 rounded-lg border border-border bg-muted translate-x-1 translate-y-1" />
                                    <div className="absolute inset-0 -z-20 rounded-lg border border-border/50 bg-muted/50 translate-x-2 translate-y-2" />

                                    {/* Top edge highlight */}
                                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                                    {/* Icon container with depth */}
                                    <div className="mb-4">
                                        <div className="inline-flex rounded-lg bg-muted p-3 shadow-sm border border-border">
                                            <Icon className="h-6 w-6 text-foreground" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-foreground mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Corner accents */}
                                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-border/40 rounded-br-lg" />
                                    <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-border/40 rounded-tl-lg" />
                                </article>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}