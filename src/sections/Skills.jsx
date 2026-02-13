import { useState } from "react";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "VTL", "HCL"],
    },
    {
      category: "Cloud Platforms",
      skills: ["Amazon Web Services (AWS)"],
    },
    {
      category: "Infrastructure as Code",
      skills: [
        "AWS CDK",
        "CloudFormation",
        "Terraform",
        "Serverless Framework",
      ],
    },
    {
      category: "AWS Serverless",
      skills: [
        "AWS AppSync",
        "AWS Lambda",
        "Amazon S3",
        "Amazon DynamoDB",
        "Amazon Cognito",
        "API Gateway",
        "Amazon EventBridge",
        "DynamoDB Streams",
        "AWS SES",
      ],
    },
    {
      category: "DevOps",
      skills: [
        "Docker",
        "Kubernetes",
        "Jenkins",
        "GitHub Actions",
        "Shell Scripting",
      ],
    },
    {
      category: "Frontend",
      skills: ["HTML5", "CSS3", "React", "TailwindCSS", "ShadcnUI"],
    },
    {
      category: "Backend",
      skills: [
        "NestJS",
        "ExpressJS",
        "Prisma",
        "TypeORM",
        "MongoDB",
        "PostgreSQL",
        "Node.js",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mx-auto text-center max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Key Skills
          </h2>
          <p className="text-muted-foreground">
            Skilled in the following technologies and tools
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {skillCategories.map((group, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm md:text-base
                ${
                  activeTab === index
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-primary/30 hover:border-primary/60 text-muted-foreground"
                }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories[activeTab].skills.map((skill, index) => (
            <div
              key={index}
              className="glass p-5 rounded-2xl border border-primary/30
              text-center hover:border-primary/50 transition-all duration-300"
            >
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
