const experiences = [
  {
    period: "May 2023 - December 2025",
    role: "Full Stack Engineer",
    company: "Cooliodev – California, US",
    achievements: [
      "Designed and managed a multi-AZ VPC architecture for a containerised Shopify public application",
      "Provisioned & controlled AWS Infrastructure using CDK Typescript, reducing deployment times from 3 hours to 10 minutes", 
      "Improved application deployment using Rollout strategy, releasing new versions safely without any downtime",
      "Built CI/CD pipeline using CodeBuild & Codepipeline, automating deployments across 3 environments and eliminating manual work by 90% - Containerised Node.js application with multi-stage builds and security best practices",
      "Integrated Shopify API to list products & discount codes of the merchant, and to publish AI-generated & SEO-optimised blog",
      "Built a serverless application using AWS serverless services and serverless framework v4 as IaC",
      "Revamped serverless framework (IaC) YAML code using nested stacks, improving scalability & maintainability",
      "Built a secure CI/CD pipeline for a serverless application using GitHub Actions, automating infrastructure provisioning across 2 environments",
      "Improved Lambda code using Idempotency, handling retries safely and ensuring data consistency",
      "Optimised GraphQL performance using Appsync batch resolvers, eliminating unnecessary calls to downstream services"
    ],
  },
  {
    period: "January 2020 - March 2023",
    role: "Software Engineer",
    company: "OCloudSolutions – Lahore, Pakistan",
    achievements: [
      "Developed a React-based serverless application with AWS Amplify, delivering the MVP on time while reducing operational and development costs",
      "Implemented real-time updates using MongoDB streams and PusherJS, significantly enhancing user engagement and responsiveness",
      "Led a team of 2 developers, assigning tasks and onboarding them on an existing project",
      "Optimised React code with code-splitting and lazy loading, reducing load time by 30% and improving user retention",
      "Developed and designed a scalable and secure backend application using NestJS, implementing a modular and clean architecture",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Work Experience
          </h2>
          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-16" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <ul className="list-disc p-4 space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    ></div>
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
