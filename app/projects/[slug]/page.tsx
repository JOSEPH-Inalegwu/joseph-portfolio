import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ProjectVideo } from "@/components/project-video"

import { projects } from "@/content/projects"

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)
    if (!project) notFound()

    return (
        <section className="relative overflow-hidden">
            {/* subtle grid bg */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="flex flex-col gap-8">
                    {/* Top section */}
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-semibold tracking-wider text-muted-foreground">
                            PROJECT
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            {project.title}
                        </h1>
                        <p className="max-w-2xl text-muted-foreground">{project.summary}</p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.stack.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-md border border-border bg-muted px-3 py-1 text-xs font-medium text-foreground"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-4">
                            <Button asChild className="rounded-full">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                    Live site
                                </a>
                            </Button>

                            <Button asChild variant="outline" className="rounded-full">
                                <Link href="/projects">All projects</Link>
                            </Button>

                            <Button asChild variant="ghost" className="rounded-full">
                                <Link href="/">Home</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Main image with 3D depth */}
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 rounded-lg border border-border bg-muted translate-x-1 translate-y-1" />
                        <div className="absolute inset-0 -z-20 rounded-lg border border-border/50 bg-muted/50 translate-x-2 translate-y-2" />

                        <div className="rounded-lg border border-border bg-background p-2 shadow-md">
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md bg-muted">
                                <Image
                                    src={project.coverImage}
                                    alt={`${project.title} main screenshot`}
                                    fill
                                    priority
                                    className="object-contain"
                                    sizes="(min-width: 1024px) 900px, 100vw"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Optional demo video */}
                    {project.demoVideo ? (
                        <div className="relative">
                            <div className="absolute inset-0 -z-10 rounded-lg border border-border bg-muted translate-x-1 translate-y-1" />

                            <Card className="border-border bg-background shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-foreground">Demo</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-muted-foreground">
                                        Short walkthrough demo ({project.demoVideo.duration ?? "video"}).
                                    </p>

                                    <div className="rounded-md border border-border bg-muted p-2">
                                        <ProjectVideo
                                            src={project.demoVideo.src}
                                            poster={project.demoVideo.poster}
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ) : null}

                    {/* Gallery */}
                    {project.galleryImages.length ? (
                        <div className="relative">
                            <div className="absolute inset-0 -z-10 rounded-lg border border-border bg-muted translate-x-1 translate-y-1" />

                            <Card className="border-border bg-background shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-foreground">Screenshots</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {project.galleryImages.map((src, idx) => (
                                            <div
                                                key={src}
                                                className="relative group"
                                            >
                                                <div className="absolute inset-0 -z-10 rounded-md border border-border bg-muted translate-x-0.5 translate-y-0.5" />

                                                <div className="rounded-md border border-border bg-background p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-muted">
                                                        <Image
                                                            src={src}
                                                            alt={`${project.title} screenshot ${idx + 1}`}
                                                            fill
                                                            className="object-contain"
                                                            sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ) : null}

                    {/* Case study blocks with 3D depth */}
                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="relative">
                            <div className="absolute inset-0 -z-10 rounded-lg border border-border bg-muted translate-x-1 translate-y-1" />

                            <Card className="border-border bg-background shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                                <CardHeader>
                                    <CardTitle className="text-foreground">How I built it</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {project.howIBuilt.map((x) => (
                                            <li key={x} className="text-sm text-muted-foreground">
                                                <span className="text-foreground font-medium">•</span> {x}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 -z-10 rounded-lg border border-border bg-muted translate-x-1 translate-y-1" />

                            <Card className="border-border bg-background shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                                <CardHeader>
                                    <CardTitle className="text-foreground">What I learned</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {project.whatILearned.map((x) => (
                                            <li key={x} className="text-sm text-muted-foreground">
                                                <span className="text-foreground font-medium">•</span> {x}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 -z-10 rounded-lg border border-border bg-muted translate-x-1 translate-y-1" />

                            <Card className="border-border bg-background shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg h-full">
                                <CardHeader>
                                    <CardTitle className="text-foreground">Impact</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {project.impact.map((x) => (
                                            <li key={x} className="text-sm text-muted-foreground">
                                                <span className="text-foreground font-medium">•</span> {x}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}