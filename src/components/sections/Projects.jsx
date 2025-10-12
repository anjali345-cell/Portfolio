import { RevealOnScroll } from "../RevealOnScroll";

const projectsData = [

  {
    id: 1,
    title: "Mortgage Calculator",
    description:
      "A user-friendly mortgage calculator that helps users estimate their monthly payments based on loan amount, interest rate, and loan term. Built with Next.js and styled with Tailwind CSS for a modern look.",
    tech: ["Next.js", "Tailwind CSS", "JavaScript", "Routing"],
    link: "https://better-com-henna.vercel.app/",
  },

  // {
  //   id: 2,
  //   title: "HR Management System",
  //   description:
  //     "A comprehensive HR management system that streamlines employee onboarding, performance tracking, and leave management. Built with Next.js and styled with Tailwind CSS for a modern look.",
  //   tech: ["Next.js", "Tailwind CSS", "JavaScript", "Routing"],
  //   link: "Still working on it",
  // },

  {
    id: 2,
    title: "Dashboard Web App",
    description:
      "Built a responsive dashboard with charts, cards, and task management features. Used TypeScript for type safety and better code organization. Styled with Tailwind CSS and ShadCN UI. Added dark/light theme support.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    link: "https://anjali-dashboard.vercel.app/",
  },
  {
    id: 3,
    title: "Skiper.ui Clone",
    description:
      "Developed a responsive web application using Next.js, React, and TypeScript. Implemented modern UI/UX with TailwindCSS, shadcn/ui, and Framer Motion. Built reusable components and debugged production issues.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    link: "https://skiper-ui-webb.vercel.app/",
  },
  {
    id: 4,
    title: "E-commerce Website",
    description:
      "Responsive e-commerce website featuring a modern UI, smooth navigation, and a well-structured product grid for an intuitive shopping experience.",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
    link: "https://e-commerce-web-sh.netlify.app/",
  },
  {
    id: 5,
    title: "Employees Management System",
    description:
      "Scalable Employees management System with admin panel login, Employees Dashboard, monitoring and automated scaling.",
    tech: ["React", "Node.js", "Tailwind", "localstorage"],
    link: "https://employee-management-system-repo.netlify.app/",
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my skills, projects, and experience in web development.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://anjali-shrivastava.netlify.app/",
  },
  {
    id: 7,
    title: "User Interface Design",
    description:
      "A small UI Design for a website, showcasing my design and frontend development skills.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://elegant-swan-f286d0.netlify.app/",
  },

];

const ProjectCard = ({ title, description, tech, link }) => (
  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>

    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t, i) => (
        <span
          key={i}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
        >
          {t}
        </span>
      ))}
    </div>

    <div className="flex justify-between items-center">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 transition-colors my-4"
      >
        View Project →
      </a>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* First 3 projects in a column */}
          <div className="space-y-6 mb-10">
            {projectsData.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Remaining projects in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.slice(3).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
