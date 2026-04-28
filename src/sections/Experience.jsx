import { Briefcase } from "lucide-react";

const experiences = [
  {
    period: "May 2023 – December 2025",
    role: "Full Stack Engineer",
    company: "Cooliodev",
    location: "California, US",
    achievements: [
      "Designed and managed a multi-AZ VPC architecture for a containerised Shopify public application",
      "Provisioned & controlled AWS infrastructure using CDK TypeScript, reducing deployment times from 3 hours to 10 minutes",
      "Improved application deployment using Rollout strategy, releasing new versions safely without downtime",
      "Built CI/CD pipeline using CodeBuild & CodePipeline, automating deployments across 3 environments and eliminating manual work by 90%",
      "Containerised Node.js application with multi-stage builds and security best practices",
      "Integrated Shopify API to list products & discount codes and publish AI-generated, SEO-optimised blogs",
      "Built a serverless application using AWS serverless services and Serverless Framework v4 as IaC",
      "Revamped IaC YAML using nested stacks, improving scalability & maintainability",
      "Built a secure CI/CD pipeline for a serverless application using GitHub Actions across 2 environments",
      "Improved Lambda code using Idempotency, handling retries safely and ensuring data consistency",
      "Optimised GraphQL performance using AppSync batch resolvers, eliminating unnecessary downstream calls",
    ],
  },
  {
    period: "January 2020 – March 2023",
    role: "Software Engineer",
    company: "OCloudSolutions",
    location: "Lahore, Pakistan",
    achievements: [
      "Developed a React-based serverless application with AWS Amplify, delivering the MVP on time while reducing operational costs",
      "Implemented real-time updates using MongoDB streams and PusherJS, significantly enhancing user engagement",
      "Led a team of 2 developers, assigning tasks and onboarding them on an existing project",
      "Optimised React code with code-splitting and lazy loading, reducing load time by 30%",
      "Developed a scalable and secure backend using NestJS with a modular, clean architecture",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-14">
          <span className="section-label mb-4 block">Career</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm">A timeline of my professional growth</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-14">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-3 w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full -translate-x-1/2 ring-4 ring-background z-10 shadow-lg shadow-primary/40" />

                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16" : "md:col-start-2 md:pl-16"}`}>
                  <div className="glass card-lift p-6 rounded-2xl border border-border">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold leading-tight">{exp.role}</h3>
                        <p className="text-primary-light text-sm font-medium">{exp.company}</p>
                        <p className="text-muted-foreground text-xs mt-0.5">{exp.location} · {exp.period}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mt-2">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 mt-[0.45rem]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
