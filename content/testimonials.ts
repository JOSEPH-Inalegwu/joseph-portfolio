export type TestimonialKind = "student" | "client"

export type Testimonial = {
    kind: TestimonialKind

    quote: string
    name: string

    // Student fields
    level?: "100L" | "200L" | "300L" | "400L" | "500L" | string
    department?: string
    school?: string

    // Client fields
    company?: string
    title?: string
    projectType?: "Landing Page" | "Business Website" | "Website + Dashboard" | string

    avatarType: "image" | "text"
    avatarImageUrl?: string
    avatarText?: string

    source?: "WhatsApp" | "Email" | "LinkedIn" | "In-person" | string
    date?: string
    verified?: boolean
}

export const testimonials: Testimonial[] = [
    // Students (Scholaris)
    {
        kind: "student",
        quote:
            "Scholaris helped me study by practicing questions consistently. My GPA moved from 3.50 to 4.27 after using it just in 200 level.",
        name: "Bright Oladele",
        level: "200L",
        department: "Computer Science",
        school: "Nasarawa State University",
        avatarType: "text",
        avatarText: "BO",
        source: "In-person",
        date: "2025",
        verified: true,
    },
    {
        kind: "student",
        quote:
            "Scholaris helped me study better for exams. Practicing questions there made revision easier and more organized.",
        name: "Faith Livinus",
        level: "200L",
        department: "Computer Science",
        school: "Nasarawa State University",
        avatarType: "text",
        avatarText: "FL",
        source: "WhatsApp",
        date: "2025",
        verified: false,
    },

    {
        kind: "student",
        quote:
            "Joseph, I didn't even know you built this! I've been using it to study for my exams even though I'm not in NSUK. It really helped me deal with anxiety and prepare better.",
        name: "Philip Owoicho",
        level: "External Student",
        department: "Computer Science",
        school: "External User",
        avatarType: "text",
        avatarText: "PO",
        source: "In-person",
        date: "2025",
        verified: true,
    },

    // Clients (Websites)
    {
        kind: "client",
        quote:
            "Joseph built a responsive landing page that was instrumental to the success of our Entrepreneurship Program Summit '25.",
        name: "Amara Nnadi",
        title: "International Speaker & Coach",
        company: "Amara Speaks",
        projectType: "Landing Page",
        avatarType: "text",
        avatarText: "AN",
        verified: false,
    },
]
