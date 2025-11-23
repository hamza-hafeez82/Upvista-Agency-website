// Job mappings for search functionality
export interface JobMapping {
  title: string;
  slug: string;
  category: string;
  type: 'full-time' | 'intern' | 'potential';
  href: string;
  description?: string;
}

export const jobMappings: JobMapping[] = [
  // Full-time positions
  {
    title: "Software Engineer",
    slug: "software-engineer",
    category: "Engineering",
    type: "full-time",
    href: "/careers/jobs/software-engineer",
    description: "Core software development, system architecture & design, SDLC"
  },
  {
    title: "QA Engineer",
    slug: "qa-engineer", 
    category: "Engineering",
    type: "full-time",
    href: "/careers/jobs/qa-engineer",
    description: "Quality assurance, testing, automation"
  },
  {
    title: "Full Stack Developer",
    slug: "full-stack-developer",
    category: "Engineering", 
    type: "full-time",
    href: "/careers/jobs/full-stack-developer",
    description: "Frontend and backend development, full-stack solutions"
  },
  {
    title: "DevOps & Cloud Engineer",
    slug: "devops-engineer",
    category: "Engineering",
    type: "full-time", 
    href: "/careers/jobs/devops-engineer",
    description: "DevOps, cloud infrastructure, deployment automation"
  },
  
  // Intern positions
  {
    title: "Web Development Intern",
    slug: "web-development-intern",
    category: "Engineering",
    type: "intern",
    href: "/careers/jobs/web-development-intern", 
    description: "Web development internship, learning full-stack technologies"
  },
  {
    title: "Graphics Design Intern",
    slug: "graphics-design-intern",
    category: "Design",
    type: "intern",
    href: "/careers/jobs/graphics-design-intern",
    description: "Graphic design internship, creative design learning"
  },
  {
    title: "Motion Graphics Designer",
    slug: "motion-graphics-designer",
    category: "Design",
    type: "intern",
    href: "/careers/jobs/motion-graphics-designer",
    description: "Motion graphics and explainer video creation for SaaS products"
  },

  // Additional existing positions
  {
    title: "UI/UX Designer",
    slug: "ui-ux-design",
    category: "Design",
    type: "full-time",
    href: "/careers/jobs/ui-ux-design",
    description: "User interface and user experience design"
  },
  {
    title: "Product Manager",
    slug: "product-management",
    category: "Business",
    type: "full-time",
    href: "/careers/jobs/product-management",
    description: "Product strategy, roadmap, stakeholder management"
  },
  {
    title: "Marketing & Sales",
    slug: "marketing-and-sales",
    category: "Business",
    type: "full-time",
    href: "/careers/jobs/marketing-and-sales",
    description: "Marketing strategy and sales operations"
  },
  {
    title: "Customer Service",
    slug: "customer-service",
    category: "Business",
    type: "full-time",
    href: "/careers/jobs/customer-service",
    description: "Customer support and service excellence"
  },
  {
    title: "Human Resources",
    slug: "human-resources",
    category: "Corporate",
    type: "full-time",
    href: "/careers/jobs/human-resources",
    description: "Human resources, talent acquisition, employee relations"
  },
  {
    title: "Finance",
    slug: "finance",
    category: "Corporate",
    type: "full-time",
    href: "/careers/jobs/finance",
    description: "Financial planning, budgeting, analysis"
  },
  {
    title: "Operations",
    slug: "operations",
    category: "Corporate",
    type: "full-time",
    href: "/careers/jobs/operations",
    description: "Business operations and process optimization"
  },
  {
    title: "IT Infrastructure",
    slug: "it-infrastructure",
    category: "Engineering",
    type: "full-time",
    href: "/careers/jobs/it-infrastructure",
    description: "IT infrastructure management and system administration"
  },
  {
    title: "Quality Assurance",
    slug: "quality-assurance",
    category: "Engineering",
    type: "full-time",
    href: "/careers/jobs/quality-assurance",
    description: "Quality assurance processes and standards"
  },
  {
    title: "Research & Development",
    slug: "research-and-development",
    category: "Engineering",
    type: "full-time",
    href: "/careers/jobs/research-and-development",
    description: "Research and development initiatives"
  },
  {
    title: "Technical Writing",
    slug: "technical-writing",
    category: "Design",
    type: "full-time",
    href: "/careers/jobs/technical-writing",
    description: "Technical documentation and content creation"
  },
  {
    title: "Development Team",
    slug: "development-team",
    category: "Engineering",
    type: "full-time",
    href: "/careers/jobs/development-team",
    description: "Software development team leadership"
  },

  // Potential positions (for future expansion)
  {
    title: "Frontend Developer",
    slug: "frontend-developer",
    category: "Engineering",
    type: "potential",
    href: "/careers/apply", // Redirect to apply page for potential positions
    description: "Frontend development, React, Vue, Angular"
  },
  {
    title: "Backend Developer", 
    slug: "backend-developer",
    category: "Engineering",
    type: "potential",
    href: "/careers/apply",
    description: "Backend development, APIs, database design"
  },
  {
    title: "Mobile App Developer",
    slug: "mobile-app-developer", 
    category: "Engineering",
    type: "potential",
    href: "/careers/apply",
    description: "Mobile app development, iOS, Android"
  },
  {
    title: "UI/UX Designer",
    slug: "ui-ux-designer",
    category: "Design", 
    type: "potential",
    href: "/careers/apply",
    description: "User interface and user experience design"
  },
  {
    title: "Product Manager",
    slug: "product-manager",
    category: "Business",
    type: "potential", 
    href: "/careers/apply",
    description: "Product strategy, roadmap, stakeholder management"
  },
  {
    title: "Project Manager",
    slug: "project-manager",
    category: "Business",
    type: "potential",
    href: "/careers/apply",
    description: "Project coordination, team management, delivery"
  },
  {
    title: "Marketing Specialist",
    slug: "marketing-specialist", 
    category: "Business",
    type: "potential",
    href: "/careers/apply",
    description: "Digital marketing, content strategy, campaigns"
  },
  {
    title: "Sales Representative",
    slug: "sales-representative",
    category: "Business",
    type: "potential",
    href: "/careers/apply", 
    description: "Sales, client relationships, business development"
  },
  {
    title: "Business Development",
    slug: "business-development",
    category: "Business", 
    type: "potential",
    href: "/careers/apply",
    description: "Strategic partnerships, growth initiatives"
  },
  {
    title: "Customer Success Manager",
    slug: "customer-success-manager",
    category: "Business",
    type: "potential",
    href: "/careers/apply",
    description: "Customer retention, success strategies"
  },
  {
    title: "HR Specialist",
    slug: "hr-specialist",
    category: "Corporate", 
    type: "potential",
    href: "/careers/apply",
    description: "Human resources, talent acquisition, employee relations"
  },
  {
    title: "Finance Manager",
    slug: "finance-manager",
    category: "Corporate",
    type: "potential",
    href: "/careers/apply",
    description: "Financial planning, budgeting, analysis"
  },
  {
    title: "System Administrator",
    slug: "system-administrator",
    category: "Engineering",
    type: "potential", 
    href: "/careers/apply",
    description: "System maintenance, server management, security"
  },
  {
    title: "Data Analyst",
    slug: "data-analyst",
    category: "Engineering",
    type: "potential",
    href: "/careers/apply",
    description: "Data analysis, insights, reporting"
  },
  {
    title: "Content Writer",
    slug: "content-writer",
    category: "Design",
    type: "potential",
    href: "/careers/apply",
    description: "Content creation, copywriting, documentation"
  },
  {
    title: "Graphic Designer",
    slug: "graphic-designer", 
    category: "Design",
    type: "potential",
    href: "/careers/apply",
    description: "Visual design, branding, creative assets"
  }
];

// Search function
export function searchJobs(query: string, recruitmentType?: string): JobMapping[] {
  const lowercaseQuery = query.toLowerCase().trim();
  
  if (!lowercaseQuery) {
    return jobMappings;
  }

  let filteredJobs = jobMappings.filter(job => 
    job.title.toLowerCase().includes(lowercaseQuery) ||
    job.category.toLowerCase().includes(lowercaseQuery) ||
    job.description?.toLowerCase().includes(lowercaseQuery) ||
    job.slug.toLowerCase().includes(lowercaseQuery)
  );

  // Filter by recruitment type if specified
  if (recruitmentType) {
    switch (recruitmentType.toLowerCase()) {
      case "career recruitment":
        filteredJobs = filteredJobs.filter(job => job.type === "full-time");
        break;
      case "potential recruitment":
        filteredJobs = filteredJobs.filter(job => job.type === "potential");
        break;
      case "new graduate recruitment":
        filteredJobs = filteredJobs.filter(job => job.type === "intern");
        break;
    }
  }

  return filteredJobs;
}

// Get job by title
export function getJobByTitle(title: string): JobMapping | undefined {
  return jobMappings.find(job => 
    job.title.toLowerCase() === title.toLowerCase()
  );
}

// Get all job titles for dropdown
export function getAllJobTitles(): string[] {
  return jobMappings.map(job => job.title);
}

// Get jobs by category
export function getJobsByCategory(category: string): JobMapping[] {
  return jobMappings.filter(job => 
    job.category.toLowerCase() === category.toLowerCase()
  );
}
