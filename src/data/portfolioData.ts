import { ProfileData } from '../types';

export const portfolioData: ProfileData = {
  name: "Aaditya Mohan",
  title: "Software Engineer & Backend Specialist",
  heroRole: "Software Engineer",
  bio: "3+ years designing and scaling enterprise applications with Spring Boot, microservices, and AWS. I turn legacy systems into modern, well-documented, high-throughput APIs.",
  yearsOfExp: "3+",
  location: "Greater Noida, India",
  email: "aadimohan51@gmail.com",
  phone: "+91 8881685609",
  resumeUrl: "Aaditya_Mohan_Resume.pdf",
  githubUrl: "https://github.com/AadityaMohan-dev",
  linkedinUrl: "https://linkedin.com/in/aaditya-mohan",
  availability: {
    status: "Availability",
    code: "200 OK",
    text: "Open to full-time & freelance work"
  },
  metrics: [
    {
      number: "3+",
      label: "Years of Experience",
      description: "Designing, building & scaling enterprise distributed systems"
    },
    {
      number: "30%",
      label: "Latency Reduction",
      description: "Achieved via SQL query optimization, caching & refactoring"
    },
    {
      number: "85%+",
      label: "Unit Test Coverage",
      description: "Automated regression safety with JUnit 5 & Mockito"
    }
  ],
  skills: [
    // Languages
    { name: "Java (8/11/17)", category: "languages", featured: true },
    { name: "TypeScript", category: "languages", featured: true },
    { name: "JavaScript (ES6+)", category: "languages", featured: true },
    { name: "Python", category: "languages" },
    { name: "SQL", category: "languages", featured: true },

    // Backend
    { name: "Spring Boot", category: "backend", featured: true },
    { name: "Microservices", category: "backend", featured: true },
    { name: "Spring MVC", category: "backend" },
    { name: "Spring Security", category: "backend", featured: true },
    { name: "Hibernate / JPA", category: "backend", featured: true },
    { name: "RESTful APIs", category: "backend", featured: true },
    { name: "SOAP Web Services", category: "backend" },
    { name: "System Design", category: "backend", featured: true },

    // Frontend
    { name: "ReactJS", category: "frontend", featured: true },
    { name: "Next.js", category: "frontend", featured: true },
    { name: "Tailwind CSS", category: "frontend", featured: true },
    { name: "HTML5 / CSS3", category: "frontend" },
    { name: "Bootstrap", category: "frontend" },
    { name: "Vite", category: "frontend" },

    // Cloud & Databases
    { name: "AWS (EC2, S3, RDS)", category: "cloud_db", featured: true },
    { name: "MySQL", category: "cloud_db", featured: true },
    { name: "PostgreSQL", category: "cloud_db", featured: true },
    { name: "Docker", category: "cloud_db", featured: true },
    { name: "Git / GitHub / GitLab", category: "cloud_db", featured: true },
    { name: "CI/CD Pipelines", category: "cloud_db" },

    // Testing & Practices
    { name: "JUnit 5", category: "testing_practices", featured: true },
    { name: "Mockito", category: "testing_practices", featured: true },
    { name: "Postman", category: "testing_practices", featured: true },
    { name: "Swagger / OpenAPI", category: "testing_practices", featured: true },
    { name: "Design Patterns / OOP", category: "testing_practices" },
    { name: "Agile / Scrum", category: "testing_practices" }
  ],
  experiences: [
    {
      id: "sap-labs",
      role: "Java Consultant",
      company: "SAP Labs",
      contractInfo: "Contracted via NTT DATA / Havisoft",
      location: "Bengaluru, India",
      period: "Feb 2026 – Jul 2026",
      highlights: [
        "Architected and developed enterprise HR cloud microservices within SAP SuccessFactors Benefits and Advances modules using Java and Spring Boot.",
        "Designed and maintained high-throughput RESTful APIs supporting mission-critical employee benefit workflows with strict SLA guarantees.",
        "Engineered reliable system integrations connecting SAP SuccessFactors modules with external enterprise client systems.",
        "Diagnosed and resolved critical production bottlenecks, driving notable latency and reliability enhancements.",
        "Active participant in Agile ceremonies: sprint estimation, architecture reviews, and cross-team design syncs."
      ],
      stack: ["Java", "Spring Boot", "REST APIs", "SAP SuccessFactors", "SQL", "Git", "Agile/Scrum"],
      metrics: [
        { label: "Role Scope", value: "Enterprise HR Platform" },
        { label: "Architecture", value: "Microservices & Cloud" }
      ]
    },
    {
      id: "hexaware",
      role: "Full Stack Developer",
      company: "Hexaware Technologies",
      location: "Chennai, India",
      period: "Aug 2022 – May 2025",
      highlights: [
        "Engineered scalable full-stack enterprise web applications using Java 17, Spring Boot, ReactJS, and MySQL.",
        "Designed inter-service REST communication architectures with comprehensive OpenAPI/Swagger documentation.",
        "Optimized complex SQL queries, stored procedures, and table indexing, cutting API response latency by 30%.",
        "Spearheaded the lift-and-shift and modernization migration of legacy on-premises workloads to AWS cloud environments.",
        "Modernized core enterprise codebases by leading technical upgrades from legacy Java 1.5 to modern Java 17 LTS.",
        "Authored extensive automated unit and integration test suites using JUnit and Mockito, securing >85% code coverage."
      ],
      stack: ["Java 17", "Spring Boot", "ReactJS", "AWS", "MySQL", "JUnit", "Mockito", "Docker", "Git"],
      metrics: [
        { label: "Latency Cut", value: "30% Faster" },
        { label: "Code Coverage", value: ">85% Test Suite" },
        { label: "Tech Migration", value: "Java 1.5 → 17" }
      ]
    }
  ],
  projects: [
    {
      id: "financeflow",
      title: "FinanceFlow",
      tagline: "Financial Analytics & Expense Intelligence Platform",
      description: "A comprehensive SaaS platform to manage personal and business expenses, set dynamic budget thresholds, and visualize complex spending patterns through interactive charts and analytics.",
      stack: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Clerk Auth", "Tailwind CSS"],
      category: "fullstack",
      metrics: "Live Analytics & Interactive Dashboards",
      githubUrl: "https://github.com/AadityaMohan-dev",
      architectureHighlights: [
        "Server-side rendering and API routes with Next.js App Router",
        "Type-safe database layer powered by Prisma ORM and PostgreSQL",
        "Seamless session security and social logins via Clerk",
        "Responsive financial trend visualization widgets"
      ]
    },
    {
      id: "auth-app",
      title: "Enterprise Auth Service",
      tagline: "High-Security Identity & Session Management Microservice",
      description: "A scalable, production-ready authentication and authorization microservice handling JWT lifecycle, role-based access control (RBAC), and session revocation across distributed platforms.",
      stack: ["Java 17", "Spring Boot", "Spring Security", "MySQL", "JPA / Hibernate", "JWT", "REST APIs"],
      category: "backend",
      metrics: "Sub-millisecond Token Verification",
      githubUrl: "https://github.com/AadityaMohan-dev",
      architectureHighlights: [
        "Stateless token management with signed JWTs and refresh tokens",
        "Granular Role-Based Access Control (RBAC) interceptors",
        "Secure password hashing with BCrypt and replay attack prevention",
        "Comprehensive Swagger / OpenAPI contract documentation"
      ]
    },
    {
      id: "chatpal",
      title: "ChatPal GenAI",
      tagline: "Real-Time AI Conversational Agent & Stream Pipeline",
      description: "A real-time AI conversational engine leveraging WebSockets for bi-directional streaming, low-latency LLM response generation, conversation memory persistence, and adaptive prompt engineering.",
      stack: ["Java", "Spring Boot", "WebSockets", "LLM APIs", "ReactJS", "Tailwind CSS"],
      category: "ai_cloud",
      metrics: "Real-time Bi-directional Streaming",
      githubUrl: "https://github.com/AadityaMohan-dev",
      architectureHighlights: [
        "WebSocket full-duplex connection for ultra-responsive chat streaming",
        "Async event-driven message dispatching in Spring Boot",
        "Contextual memory windowing for conversational coherence",
        "Clean fallback mechanisms and rate-limiting safeguards"
      ]
    },
    {
      id: "byteblog",
      title: "ByteBlog Platform",
      tagline: "Developer Publishing & Content Platform",
      description: "A full-stack blogging system built with modern React frontend and Spring Boot microservices, supporting Markdown content authoring, tag taxonomies, user interactions, and role hierarchies.",
      stack: ["Spring Boot", "ReactJS", "MySQL", "Hibernate", "REST APIs", "Tailwind CSS"],
      category: "fullstack",
      metrics: "Full-text Tag & Content Indexing",
      githubUrl: "https://github.com/AadityaMohan-dev",
      architectureHighlights: [
        "Decoupled architecture with RESTful communication layer",
        "Optimized relational schema for high concurrency reads",
        "Rich text and code snippet markdown formatting",
        "Automated unit tested service layer with JUnit 5"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "IEC College of Technology",
      location: "Greater Noida, Uttar Pradesh, India",
      period: "Jun 2018 – Aug 2022",
      score: "Graduated with Honors / First Class"
    }
  ],
  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft (AZ-900)",
      badge: "AZ-900",
      date: "Certified"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman Academy",
      badge: "API Expert",
      date: "Certified"
    },
    {
      title: "React Developer Certification",
      issuer: "W3Schools",
      badge: "React Certified",
      date: "Certified"
    },
    {
      title: "Python Programming Specialist",
      issuer: "W3Schools",
      badge: "Python Certified",
      date: "Certified"
    }
  ]
};
