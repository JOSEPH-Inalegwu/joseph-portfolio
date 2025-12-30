"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { testimonials } from "@/content/testimonials"

function Avatar({ t }: { t: (typeof testimonials)[number] }) {
    if (t.avatarType === "image" && t.avatarImageUrl) {
        return (
            <img
                src={t.avatarImageUrl}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover"
            />
        )
    }

    const text = t.avatarText ?? t.name?.charAt(0) ?? "?"
    return (
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-sm font-bold text-primary">{text}</span>
        </div>
    )
}

function MetaLine({ t }: { t: (typeof testimonials)[number] }) {
    if (t.kind === "student") {
        const parts = [
            t.level,
            t.department ? `${t.department}` : undefined,
            t.school,
        ].filter(Boolean)
        return <p className="text-xs text-muted-foreground">{parts.join(" • ")}</p>
    }

    const parts = [t.title, t.company, t.projectType].filter(Boolean)
    return <p className="text-xs text-muted-foreground">{parts.join(" • ")}</p>
}

function TestimonialGrid({ kind }: { kind: "student" | "client" }) {
    const list = testimonials.filter((t) => t.kind === kind)

    return (
        <div className="grid gap-8 md:grid-cols-3">
            {list.map((t, index) => (
                <Card
                    key={`${kind}-${index}`}
                    className="border-border bg-background/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                    <CardContent className="p-6 flex flex-col h-full">
                        <Quote className="h-8 w-8 text-primary/20 mb-4" />
                        <p className="mb-6 text-muted-foreground leading-relaxed italic flex-1">
                            “{t.quote}”
                        </p>

                        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                            <Avatar t={t} />
                            <div className="min-w-0">
                                <p className="font-semibold text-sm truncate">{t.name}</p>
                                <MetaLine t={t} />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 sm:py-28 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Students */}
                <div className="mb-14 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        What Students Say
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Feedback from the Scholaris pilot launch at Nasarawa State University.
                    </p>
                </div>

                <TestimonialGrid kind="student" />

                {/* Clients */}
                <div className="mt-20 mb-14 text-center">
                    <h3 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                        What Clients Say
                    </h3>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Results from website and MVP projects.
                    </p>
                </div>

                <TestimonialGrid kind="client" />
            </div>
        </section>
    )
}
