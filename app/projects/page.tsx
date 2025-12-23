import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { projects } from "@/content/projects"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectsPage() {
    return (
        <section className="relative overflow-hidden">
            {/* optional subtle grid bg */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="mb-8">
                    <Button asChild variant="ghost" className="pl-0 hover:bg-transparent hover:text-primary">
                        <Link href="/" className="flex items-center gap-2 text-muted-foreground transition-colors">
                            ← Back to Home
                        </Link>
                    </Button>
                </div>

                <div className="space-y-10">
                    {/* Header */}
                    <div className="space-y-3">
                        <p className="text-sm font-semibold tracking-wider text-muted-foreground">
                            PROJECTS
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            Selected work
                        </h1>
                        <p className="max-w-2xl text-muted-foreground">
                            A mix of frontend-heavy builds and full-stack apps powered by Supabase.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p) => (
                            <Link key={p.slug} href={`/projects/${p.slug}`} className="group">
                                <Card className="h-full border-border bg-background transition-colors group-hover:bg-accent">
                                    <CardHeader className="space-y-3">
                                        <div className="rounded-md border border-border bg-muted p-2">
                                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-background">
                                                <Image
                                                    src={p.coverImage}
                                                    alt={`${p.title} cover`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 100vw"
                                                />
                                            </div>
                                        </div>

                                        <CardTitle className="text-foreground">{p.title}</CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground">{p.summary}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {p.stack.slice(0, 4).map((t) => (
                                                <span
                                                    key={t}
                                                    className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                            {p.demoVideo ? (
                                                <span className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground">
                                                    Demo
                                                </span>
                                            ) : null}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
