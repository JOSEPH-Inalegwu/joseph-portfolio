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
        summary: "A comprehensive course management platform designed to streamline academic workflows for students and faculty.",
        role: "Full-stack Developer",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        liveUrl: "#",
        coverImage: "/projects/scholaris/scholaris thumbnail.png",
        galleryImages: [],
        demoVideo: {
            src: "/projects/scholaris/Scholaris demo.mp4",
            poster: "/projects/scholaris/scholaris thumbnail.png",
            duration: "2:15",
        },
        howIBuilt: [
            "Architected a scalable schema using Prisma and PostgreSQL to handle complex relationships between students, courses, and grades.",
            "Implemented secure authentication and role-based access control (RBAC) to differentiate between student and faculty permissions.",
            "Built a responsive frontend with Next.js and Tailwind CSS, ensuring accessibility across devices.",
        ],
        whatILearned: [
            "Mastered complex database modeling for many-to-many relationships in an academic context.",
            "Deepened understanding of server-side component patterns in Next.js for improved performance.",
        ],
        impact: [
            "Reduced course registration time by 40% through an optimized UI flow.",
            "Centralized academic data, eliminating the need for scattered spreadsheets and manual tracking.",
        ],
    },
    {
        slug: "docket",
        title: "Docket",
        summary: "An intelligent task management dashboard that unifies project tracking, notifications, and team collaboration.",
        role: "Frontend Engineer",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
        liveUrl: "#",
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
            duration: "1:45",
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
