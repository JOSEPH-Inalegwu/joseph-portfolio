"use client"

import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from "lucide-react"
import { sanitizeInput, cn } from "@/lib/utils"
import { useState } from "react"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })

    const [activeTab, setActiveTab] = useState<'message' | 'calendar'>('message')

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Sanitize inputs
        const sanitizedData = {
            name: sanitizeInput(values.name),
            email: sanitizeInput(values.email),
            subject: sanitizeInput(values.subject),
            message: sanitizeInput(values.message),
        }

        try {
            const result = await emailjs.send(
                "service_u1vnhta",
                "template_gz2p5fs",
                {
                    inquiry_type: sanitizedData.subject,
                    from_name: sanitizedData.name,
                    name: sanitizedData.name, // Sending both just in case
                    from_email: sanitizedData.email,
                    message: sanitizedData.message,
                    time: new Date().toLocaleString(),
                },
                "k-vw1CyF3j0S-pf4T"
            )

            if (result.status === 200) {
                alert("Message sent successfully!")
                form.reset()
            } else {
                alert("Failed to send message. Please try again.")
            }
        } catch (error) {
            alert("An error occurred. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <span className="mb-2 inline-block rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                        GET IN TOUCH
                    </span>
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Let's build something amazing
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Whether you have a project in mind, need a consultant, or just want to say hi, I'm always open to new opportunities and collaborations.
                    </p>
                </div>

                <div className="mx-auto max-w-3xl">
                    <div className="space-y-6">
                        {/* Toggle */}
                        <div className="flex p-1 bg-muted/50 rounded-lg w-full max-w-md mx-auto">
                            <button
                                onClick={() => setActiveTab('message')}
                                className={cn(
                                    "flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200",
                                    activeTab === 'message'
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Send a Message
                            </button>
                            <button
                                onClick={() => setActiveTab('calendar')}
                                className={cn(
                                    "flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200",
                                    activeTab === 'calendar'
                                        ? "bg-background text-foreground shadow-sm"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                Book a Call
                            </button>
                        </div>

                        <Card className="border-border bg-background/50 p-6 backdrop-blur-sm sm:p-8 min-h-[500px]">
                            {/* Message Form */}
                            <div className={activeTab === 'message' ? "block" : "hidden"}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                className="bg-background"
                                                {...form.register("name")}
                                            />
                                            {form.formState.errors.name && (
                                                <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                                            )}
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                className="bg-background"
                                                {...form.register("email")}
                                            />
                                            {form.formState.errors.email && (
                                                <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Subject</label>
                                        <Input
                                            id="subject"
                                            placeholder="Project Inquiry"
                                            className="bg-background"
                                            {...form.register("subject")}
                                        />
                                        {form.formState.errors.subject && (
                                            <p className="text-sm text-destructive">{form.formState.errors.subject.message}</p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell me about your project..."
                                            className="min-h-[150px] resize-none bg-background"
                                            {...form.register("message")}
                                        />
                                        {form.formState.errors.message && (
                                            <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                                        )}
                                    </div>
                                    <Button type="submit" className="mt-2 w-full sm:w-auto" disabled={isSubmitting}>
                                        <Send className="mr-2 h-4 w-4" />
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </Button>
                                </form>
                            </div>

                            {/* Calendar View */}
                            <div className={activeTab === 'calendar' ? "block" : "hidden"}>
                                <div className="flex flex-col items-center justify-center h-full gap-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-300">
                                    <div className="mb-2">
                                        <h3 className="text-xl font-semibold">Schedule a meeting</h3>
                                        <p className="text-muted-foreground max-w-sm mx-auto">
                                            Pick a time that works for you.
                                        </p>
                                    </div>

                                    {/* Cal.com Embed */}
                                    <div className="w-full rounded-lg border border-border bg-background overflow-hidden">
                                        <iframe
                                            src="https://cal.com/joseph-jonah-inalegwu-uh2g7p"
                                            style={{ width: "100%", height: "400px", border: "none" }}
                                            title="Book a call with Joseph"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
