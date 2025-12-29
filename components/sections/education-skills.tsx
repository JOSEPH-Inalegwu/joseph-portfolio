"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
    {
        category: "Frontend Development",
        items: [
            "React.js",
            "Next.js (App Router)",
            "TypeScript",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "HTML5 & CSS3",
            "Responsive Design",
            "State Management",
            "Zod & React Hook Form",
        ],
    },
    {
        category: "Backend & Database",
        items: [
            "Supabase Auth & Storage",
            "PostgreSQL",
            "Row Level Security (RLS)",
            "Real-time Subscriptions",
            "Database Schema Design",
            "RESTful API Integration",
            "Serverless Functions",
        ],
    },
    {
        category: "Diploma in IT Skills",
        items: [
            "Microsoft Office Suite",
            "Data Analysis (Excel)",
            "Database (Access)",
            "Basic Networking",
            "Hardware Maintenance",
            "Documentation",
        ],
    },
]

const education = [
    {
        period: "2024 - 2027",
        institution: "Nasarawa State University, Keffi",
        degree: "BSc. Computer Science",
        status: "Currently Pursuing",
        description:
            "Pursuing a comprehensive Computer Science degree with focus on algorithms, data structures, software engineering, and foundational concepts for AI/ML engineering.",
    },
    {
        period: "2024 - Present",
        institution: "Self-Paced",
        degree: "Fullstack Web Development",
        status: "Currently Learning",
        description:
            "Front-end and Back-end integration mastery. Building scalable, type-safe applications using Next.js, TypeScript, and Supabase.",
    },
    {
        period: "2022 - 2024",
        institution: "Self-Taught",
        degree: "Frontend Development",
        status: "Completed",
        description:
            "Mastered modern frontend technologies including React, Next.js, and TypeScript through intensive self-study and hands-on projects.",
    },
    {
        period: "2021 - 2022",
        institution: "Africa InfoTech",
        degree: "Diploma in IT",
        status: "Completed",
        description:
            "Gained foundational skills in Microsoft Office Suite, computer systems, productivity tools, and basic networking concepts.",
    },
]

export function EducationSkills() {
    return (
        <section
            id="education"
            className="relative overflow-hidden py-20 sm:py-24"
        >
            {/* Background elements */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center space-y-4">
                    <p className="text-sm font-semibold tracking-wider text-muted-foreground">
                        EDUCATION & SKILLS
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground max-w-2xl mx-auto">
                        Mastering Frontend Artistry with AI-Driven Innovation
                    </h2>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

                    {/* Skills Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-8 w-1 bg-primary rounded-full" />
                            <h3 className="text-2xl font-bold text-foreground">
                                Technical Skills
                            </h3>
                        </div>

                        <div className="grid gap-6">
                            {skills.map((skillGroup, index) => (
                                <Card key={index} className="border-border bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
                                    <div className="p-6">
                                        <h4 className="text-lg font-semibold text-primary mb-4">
                                            {skillGroup.category}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="inline-flex items-center rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-foreground transition-colors hover:border-primary/30"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="h-8 w-1 bg-primary rounded-full" />
                            <h3 className="text-2xl font-bold text-foreground">
                                Education & Journey
                            </h3>
                        </div>

                        <div className="relative border-l border-border pl-8 space-y-12 ml-3">
                            {education.map((edu, index) => (
                                <div key={index} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary transition-transform duration-300 group-hover:scale-125" />

                                    <div className="space-y-3">
                                        <div className="flex flex-wrap items-center gap-3 text-sm">
                                            <span className="font-semibold text-primary">
                                                {edu.period}
                                            </span>
                                            <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                                            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${edu.status.includes("Pursuing") || edu.status.includes("Learning")
                                                ? 'bg-green-500/10 text-green-700 dark:text-green-400 ring-green-600/20'
                                                : 'bg-blue-500/10 text-blue-700 dark:text-blue-400 ring-blue-600/20'
                                                }`}>
                                                {edu.status}
                                            </span>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-foreground">
                                                {edu.degree}
                                            </h4>
                                            <p className="text-muted-foreground font-medium">
                                                {edu.institution}
                                            </p>
                                        </div>

                                        <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
