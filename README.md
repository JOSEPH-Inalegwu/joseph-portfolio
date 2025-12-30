# Joseph's Portfolio (2025)

Welcome to my personal portfolio repository. This project showcases my skills, experience, and projects as a Full-Stack Developer, built with modern web technologies.

## 🚀 Live Demo

[View Live Portfolio](https://joseph-jonah-portfolio.vercel.app)

## ✨ Features

- **Modern Hero Section**: High-conversion introductions with "Book a Call" CTA.
- **Featured Projects**: Detailed project cards with galleries, tech stacks, and impact metrics (e.g., *Scholaris*, *Docket*).
- **Testimonials**: Social proof section featuring real feedback from students and clients.
- **Services Showcase**: Clean grid layout displaying core offerings.
- **Contact Integration**: 
  - **EmailJS**: Functional contact form for direct messaging.
  - **Cal.com**: Integrated booking calendar with lazy loading for optimal performance.
- **Dark Mode**: Fully supported dark/light theme toggling.
- **Smooth Navigation**: Global smooth scrolling and sticky header padding handling.
- **Responsive Design**: Mobile-first approach ensuring great UX on all devices.

## 📸 Gallery

![Hero Section](/projects/screenshots/joseph-portfolio-hero.png)
*Modern Hero Section with clear CTAs*

![Testimonials Section](/projects/screenshots/joseph-portfolio-testimonial.png)
*Social Proof with Trust Badges*

![Responsive Mobile View](/projects/screenshots/joseph-portfolio-responsiveness.png)
*Mobile-First Responsive Design*

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: React Hook Form + Zod (Validation)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Scheduling**: [Cal.com](https://cal.com/)

## 📂 Project Structure

```bash
├── app/                  # App Router pages and layout
│   ├── globals.css       # Global styles (Tailwind, smooth scroll)
│   ├── layout.tsx        # Root layout with Providers, Navbar, Footer
│   └── page.tsx          # Homepage composition
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, Projects, Contact, Testimonials, etc.
│   └── ui/               # Reusable UI components (buttons, cards, inputs)
├── content/              # Data files for easy content management
│   ├── projects.ts       # Project data
│   └── testimonials.ts   # Testimonial data
└── public/               # Static assets (images, CV)
```

## ⚡ Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js 18+ installed
- npm, pnpm, or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/my_portfolio25.git
    cd my_portfolio25
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```

4.  **Open locally**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Environment Variables

To make the Contact form work, create a `.env.local` file (optional for local dev if hardcoded, but recommended for production):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by **Joseph**.
