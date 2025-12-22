"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { Menu, X } from "lucide-react"

const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
] as const

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    // Close sidebar when clicking outside
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [isOpen])

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
                    Joseph<span className="text-yellow-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="ml-4 border-l pl-4 border-border">
                        <ModeToggle />
                    </div>
                </nav>

                {/* Mobile Menu Toggle & Theme Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ModeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative p-3 text-muted-foreground hover:text-yellow-500 hover:bg-accent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 active:scale-95 bg-yellow-100 dark:bg-yellow-50"
                        aria-label="Toggle menu"
                        style={{
                            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                            animation: isOpen ? "none" : "blob 8s ease-in-out infinite"
                        }}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Navigation Sidebar - Slides from left */}
            <aside
                className={`fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-72 transform bg-background border-r border-border shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <nav className="flex flex-col gap-2 p-6">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="group relative overflow-hidden rounded-lg px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-accent"
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: isOpen ? "slideIn 0.3s ease-out forwards" : "none"
                            }}
                        >
                            <span className="relative z-10">
                                {item.label}
                            </span>
                            <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent transition-all duration-500 group-hover:left-full" />
                        </Link>
                    ))}
                </nav>
            </aside>

            <style jsx>{`
                @keyframes blob {
                    0%, 100% {
                        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                    }
                    25% {
                        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
                    }
                    50% {
                        border-radius: 55% 45% 25% 75% / 40% 50% 50% 60%;
                    }
                    75% {
                        border-radius: 40% 60% 50% 50% / 65% 35% 65% 35%;
                    }
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </header>
    )
}