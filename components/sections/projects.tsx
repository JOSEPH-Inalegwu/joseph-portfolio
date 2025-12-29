import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projects } from "@/content/projects"

export function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden py-16 sm:py-20">
            {/* Subtle grid background */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
            </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 space-y-3 text-center">
                    <p className="text-sm font-semibold tracking-wider text-muted-foreground">
                        PORTFOLIO
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground max-w-3xl mx-auto">
                        Turning product ideas into fast, usable web experiences
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Real projects. Real code. Real impact.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.slug} className="relative group">
                            {/* Layered depth effect */}
                            <div className="absolute inset-0 -z-10 rounded-lg border border-border bg-muted translate-x-1 translate-y-1" />
                            <div className="absolute inset-0 -z-20 rounded-lg border border-border/50 bg-muted/50 translate-x-2 translate-y-2" />

                            <Card className="border-border bg-background overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                                    <Image
                                        src={project.coverImage}
                                        alt={project.title}
                                        fill
                                        className="object-contain transition-transform hover:scale-105 duration-300"
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                    />
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{project.summary}</p>
                                </CardHeader>

                                <CardContent className="space-y-4 flex-1 flex flex-col justify-end">
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.stack.length > 3 && (
                                            <span className="rounded-md border border-border bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                                                +{project.stack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex gap-3">
                                        <Button asChild size="sm" className="flex-1">
                                            <Link href={`/projects/${project.slug}`}>View Details</Link>
                                        </Button>
                                        <Button asChild size="sm" variant="outline">
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                Live Site
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>

                                {/* Corner accents */}
                                <div className="absolute bottom-2 right-2 w-6 h-6 border-r border-b border-border/40 rounded-br-lg" />
                                <div className="absolute top-2 left-2 w-6 h-6 border-l border-t border-border/40 rounded-tl-lg" />
                            </Card>
                        </article>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-border bg-muted/30 p-8 sm:p-10">
                        <h3 className="text-xl font-semibold text-foreground">
                            Have a project in mind?
                        </h3>
                        <p className="max-w-md text-muted-foreground">
                            I'm available for freelance work and collaborations. Let's discuss how we can build something great together.
                        </p>
                        <Button asChild size="lg" className="rounded-full shadow-lg transition-transform hover:scale-105">
                            <a
                                href="https://wa.me/2347042482419?text=Hi%20Joseph!%20I%20saw%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Start a Project
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}