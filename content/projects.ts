export type Project = {
    slug: string
    title: string
    summary: string
    role?: string
    stack: string[]
    liveUrl: string

    coverImage: string
    galleryImages: string[]

    demoVideo?: {
        src: string
        poster: string
        duration?: string
    }

    howIBuilt: string[]
    whatILearned: string[]
    impact: string[]
}

export const projects: Project[] = [
    {
        slug: "scholaris",
        title: "Scholaris",
        summary: "AI study assistant launched for my department at Nasarawa State University, now serving 200+ students with v2 expanding to 3 faculties.",
        role: "Full-stack Developer",
        stack: ["Next.js", "TypeScript", "AI Integration", "Prisma", "PostgreSQL"],
        liveUrl: "https://scholaris-nsuk.vercel.app",
        coverImage: "/projects/scholaris/scholaris-dashboard.png",
        galleryImages: [
            "/projects/scholaris/scholaris-smart-study-planner.png",
            "/projects/scholaris/scholaris-exam-mode.png",
            "/projects/scholaris/scholaris-proctected-layout.png",
            "/projects/scholaris/scholaris-mobile-view.png",
        ],
        demoVideo: {
            src: "/projects/scholaris/Scholaris demo.mp4",
            poster: "/projects/scholaris/scholaris-dashboard.png",
            duration: "1:25",
        },
        howIBuilt: [
            "Architected a scalable schema using Prisma and PostgreSQL to handle complex relationships between students, courses, and grades.",
            "Integrated AI-driven study recommendations to personalize learning paths for each student.",
            "Built a responsive frontend with Next.js and Tailwind CSS, ensuring accessibility across devices.",
        ],
        whatILearned: [
            "Mastered combining traditional CRUD operations with AI features in a production environment.",
            "Deepened understanding of server-side component patterns in Next.js for improved performance.",
        ],
        impact: [
            "Served 200+ active students in the initial pilot department launch.",
            "Reduced exam anxiety and improved study efficiency through personalized planning tools.",
            "Scaling to 3 additional faculties in v2 based on successful adoption metrics.",
        ],
    },
    {
        slug: "docket",
        title: "Docket",
        summary: "Unified dashboard for Shopify and Stripe integrations. Built to solve the pain of managing multiple stores across different platforms.",
        role: "Full-Stack Developer",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Prisma", "PostgreSQL", "Supabase", "Stripe", "Shopify"],
        liveUrl: "https://my-docket.vercel.app",
        coverImage: "/projects/docket/dashboard.png",
        galleryImages: [
            "/projects/docket/Connected Interface.png",
            "/projects/docket/app-dashboard.png",
            "/projects/docket/notifications.png",
            "/projects/docket/settings.png",
        ],
        demoVideo: {
            src: "/projects/docket/Docket Demo.mp4",
            poster: "/projects/docket/dashboard.png",
            duration: "1:24",
        },
        howIBuilt: [
            "Developed a highly interactive dashboard using Redux for global state management of tasks and notifications.",
            "Integrated chart libraries to visualize team productivity and project timelines.",
            "Created a modular component system to allow for easy extensibility of dashboard widgets.",
        ],
        whatILearned: [
            "Gained expertise in managing complex global state in extensive React applications.",
            "Learned best practices for visualizing data to provide actionable insights to users.",
        ],
        impact: [
            "Improved team task completion rates by providing clear visibility into project deadlines.",
            "Streamlined communication channels, reducing the reliance on external messaging apps for task-related discussions.",
        ],
    },
]
