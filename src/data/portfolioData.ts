import { ProfileData } from '../types';

export const portfolioData: ProfileData = {
  name: "Aaditya Mohan",
  title: "Software Engineer",
  heroRole: "Software Engineer · Backend / Full Stack",
  bio: "Software Engineer with 3+ years of experience building enterprise applications, scalable APIs, and cloud-ready systems with Java, Spring Boot, React, and AWS.",
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
    text: "Available for full-time & freelance opportunities"
  },
  metrics: [
    {
      number: "3+",
      label: "Years Experience",
      description: "Designing, modernizing, and scaling enterprise distributed systems in production."
    },
    {
      number: "30%",
      label: "Latency Reduction",
      description: "Achieved through SQL query indexing, schema tuning, and backend refactoring."
    },
    {
      number: "85%+",
      label: "Unit Test Coverage",
      description: "Automated regression safety and test suites built using JUnit 5 & Mockito."
    }
  ],
  skills: [
    // Backend
    { name: "Java", category: "backend", featured: true },
    { name: "Java 17", category: "backend", featured: true },
    { name: "Spring Boot", category: "backend", featured: true },
    { name: "Spring MVC", category: "backend" },
    { name: "Spring Security", category: "backend", featured: true },
    { name: "Hibernate", category: "backend", featured: true },
    { name: "JPA", category: "backend", featured: true },
    { name: "REST APIs", category: "backend", featured: true },
    { name: "SOAP Web Services", category: "backend" },
    { name: "Microservices", category: "backend", featured: true },

    // Frontend
    { name: "ReactJS", category: "frontend", featured: true },
    { name: "TypeScript", category: "frontend", featured: true },
    { name: "JavaScript", category: "frontend", featured: true },
    { name: "HTML5 / CSS3", category: "frontend" },
    { name: "Tailwind CSS", category: "frontend", featured: true },
    { name: "Vite", category: "frontend" },

    // Cloud & Infrastructure
    { name: "AWS (EC2, S3, RDS)", category: "cloud_db", featured: true },
    { name: "Docker", category: "cloud_db", featured: true },
    { name: "Git", category: "cloud_db", featured: true },
    { name: "GitHub", category: "cloud_db" },
    { name: "GitLab CI/CD", category: "cloud_db", featured: true },

    // Data
    { name: "SQL", category: "languages", featured: true },
    { name: "MySQL", category: "cloud_db", featured: true },
    { name: "PostgreSQL", category: "cloud_db", featured: true },
    { name: "Python", category: "languages" },

    // Engineering Practices
    { name: "JUnit 5", category: "testing_practices", featured: true },
    { name: "Mockito", category: "testing_practices", featured: true },
    { name: "Postman", category: "testing_practices", featured: true },
    { name: "Swagger / OpenAPI", category: "testing_practices", featured: true },
    { name: "OOP", category: "testing_practices" },
    { name: "Design Patterns", category: "testing_practices", featured: true },
    { name: "System Design", category: "testing_practices", featured: true },
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
        "Developed enterprise HR applications within SAP SuccessFactors Benefits and Advances modules using Java and Spring Boot.",
        "Designed and maintained scalable REST APIs supporting employee benefit workflows.",
        "Collaborated with product owners, QA, and stakeholders to deliver business-critical features.",
        "Supported integrations between SAP SuccessFactors and enterprise platforms.",
        "Troubleshot production issues and implemented performance improvements.",
        "Participated in Agile ceremonies including sprint planning, estimation, code reviews, and retrospectives."
      ],
      stack: ["Java", "Spring Boot", "REST APIs", "SAP SuccessFactors", "SQL", "Git", "Agile"],
      metrics: [
        { label: "Scope", value: "SAP SuccessFactors" },
        { label: "Architecture", value: "Enterprise REST APIs" }
      ]
    },
    {
      id: "hexaware",
      role: "Full Stack Developer",
      company: "Hexaware Technologies",
      location: "Chennai, India",
      period: "Aug 2022 – May 2025",
      highlights: [
        "Developed scalable enterprise web applications using Java, Spring Boot, ReactJS, and MySQL.",
        "Designed REST APIs enabling seamless communication across microservices.",
        "Optimized SQL queries and indexing strategies, improving API response times by approximately 30%.",
        "Led migration of legacy applications from on-premises infrastructure to AWS cloud.",
        "Modernized enterprise applications by upgrading from Java 1.5 to Java 17.",
        "Built automated unit tests using JUnit and Mockito with 85%+ code coverage.",
        "Created API documentation using Swagger/OpenAPI."
      ],
      stack: ["Java 17", "Spring Boot", "ReactJS", "AWS", "MySQL", "JUnit", "Mockito", "Docker", "Git"],
      metrics: [
        { label: "Optimization", value: "30% Faster API Latency" },
        { label: "Test Coverage", value: "85%+ with JUnit & Mockito" },
        { label: "Modernization", value: "Java 1.5 → Java 17" },
        { label: "Cloud Migration", value: "On-Premises → AWS" }
      ]
    }
  ],
  projects: [
    {
      id: "financeflow",
      number: "01",
      title: "FinanceFlow",
      tagline: "Expense and Personal Finance Management Application",
      description: "A modern SaaS application designed for granular expense management, budget tracking, and real-time financial data visualization with interactive analytics.",
      problem: "Users struggle to aggregate heterogeneous expenses, understand monthly burn rates, and set actionable budget caps across categories without complex spreadsheets.",
      solution: "Engineered a full-stack platform with Next.js App Router, Prisma ORM, and PostgreSQL, providing instant budget aggregation and visual financial trend breakdowns.",
      keyChallenge: "Executing fast, aggregate analytical queries on relational transactions while maintaining zero-latency client chart renders and strict user data isolation via Clerk auth.",
      outcome: "Delivered an interactive, responsive personal finance dashboard featuring dynamic charts, categorized budget alerts, and instant balance reconciliation.",
      stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk", "Tailwind CSS"],
      category: "fullstack",
      metrics: "Full-Stack Data Visualization & Budget Tracking",
      githubUrl: "https://github.com/AadityaMohan-dev",
      architectureHighlights: [
        "Next.js App Router with Server Components & API routes",
        "Type-safe relational database layer with Prisma ORM & PostgreSQL",
        "Session authentication & secure user isolation via Clerk",
        "Dynamic financial charts and custom spending thresholds"
      ]
    },
    {
      id: "auth-app",
      number: "02",
      title: "Auth App",
      tagline: "Authentication & Secure Session Management Microservice",
      description: "An authentication service engineered for issuing, verifying, and managing secure sessions across distributed SaaS platforms and enterprise APIs.",
      problem: "Distributed microservices required a centralized, high-throughput identity provider to validate requests, enforce role hierarchies, and invalidate compromised sessions reliably.",
      solution: "Developed a stateless authentication microservice with Java, Spring Boot, Spring Security, and JPA, featuring signed JWT issuance, BCrypt password hashing, and role-based access control (RBAC).",
      keyChallenge: "Preventing token replay attacks and ensuring sub-millisecond RBAC permission verification during high-concurrency microservice invocations.",
      outcome: "Established a robust, production-grade identity service with OpenAPI documentation, seamless session management, and granular permission enforcement.",
      stack: ["Java", "Spring Boot", "Spring Security", "MySQL", "JPA", "REST APIs"],
      category: "backend",
      metrics: "Secure Session Management & RBAC Microservice",
      githubUrl: "https://github.com/AadityaMohan-dev",
      architectureHighlights: [
        "Stateless JWT lifecycle management with signed payload verification",
        "Granular Role-Based Access Control (RBAC) security filters",
        "Optimized relational schema with JPA / Hibernate and MySQL",
        "Complete contract specification with Swagger / OpenAPI"
      ]
    },
    {
      id: "chatpal",
      number: "03",
      title: "ChatPal",
      tagline: "GenAI-Powered Real-Time Chat Engine",
      description: "A GenAI conversational application featuring bi-directional real-time communication via WebSockets and streaming LLM-powered responses.",
      problem: "Traditional HTTP polling creates prohibitive latency, high server overhead, and poor conversational UX when interfacing with real-time generative AI streams.",
      solution: "Architected a full-duplex WebSocket communication pipeline on Spring Boot, orchestrating asynchronous streaming from LLM APIs directly to the client interface.",
      keyChallenge: "Managing persistent concurrent WebSocket connections, asynchronous message dispatching, and buffering streaming chunk tokens without memory bloat.",
      outcome: "Built an ultra-low latency conversational assistant capable of real-time multi-turn dialogues, context persistence, and resilient error recovery.",
      stack: ["Java", "Spring Boot", "WebSockets", "LLM API", "ReactJS", "Tailwind CSS"],
      category: "ai_cloud",
      metrics: "Real-time WebSocket & LLM Stream Pipeline",
      githubUrl: "https://github.com/AadityaMohan-dev",
      architectureHighlights: [
        "Full-duplex WebSocket connection for real-time bi-directional messaging",
        "Asynchronous event dispatching in Spring Boot backend",
        "Direct LLM API streaming integration with chunked buffer handling",
        "Clean fallback recovery and connection state monitoring"
      ]
    },
    {
      id: "byteblog",
      number: "04",
      title: "ByteBlog",
      tagline: "Full-Stack Enterprise Publishing Platform",
      description: "A full-stack blogging platform built with modern publishing workflows, authentication, and rich content editing.",
      problem: "Content publishers need a responsive authoring environment with fast text indexing, role-based editing privileges, and resilient relational data models.",
      solution: "Engineered a decoupled publishing platform using Spring Boot RESTful microservices paired with a ReactJS frontend, supporting rich Markdown rendering and tag taxonomy.",
      keyChallenge: "Designing an efficient relational schema in MySQL for fast article search, tag aggregation, and concurrent comment threads under high read traffic.",
      outcome: "Shipped a clean, full-stack content publishing platform with secure authoring workflows, tag-based discovery, and robust backend API endpoints.",
      stack: ["Spring Boot", "ReactJS", "MySQL", "Hibernate", "REST APIs"],
      category: "fullstack",
      metrics: "Decoupled REST Architecture & Content Workflows",
      githubUrl: "https://github.com/AadityaMohan-dev",
      architectureHighlights: [
        "Decoupled Spring Boot REST API & React client architecture",
        "Relational article, taxonomy, and author schema in MySQL",
        "Rich text & Markdown parsing with instant preview",
        "Automated unit-tested service layer with JUnit 5"
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech — Computer Science",
      institution: "IEC College of Technology",
      location: "Greater Noida, India",
      period: "2018 – 2022",
      score: "Graduated with Computer Science Degree"
    }
  ],
  certifications: [
    {
      title: "Microsoft Azure Fundamentals — AZ-900",
      issuer: "Microsoft",
      badge: "AZ-900",
      date: "Certified"
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      badge: "API Expert",
      date: "Certified"
    },
    {
      title: "React Certification",
      issuer: "W3Schools",
      badge: "React Certified",
      date: "Certified"
    },
    {
      title: "Python Programming Certification",
      issuer: "W3Schools",
      badge: "Python Certified",
      date: "Certified"
    }
  ]
};
