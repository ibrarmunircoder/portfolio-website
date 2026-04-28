import { useState } from "react";
import {
  SiJavascript, SiTypescript, SiPython, SiGnubash, SiTerraform,
  SiServerless, SiDocker, SiKubernetes, SiJenkins, SiGithubactions,
  SiArgo, SiPrometheus, SiGrafana, SiHelm,
  SiReact, SiTailwindcss, SiHtml5, SiCss,
  SiNestjs, SiExpress, SiPrisma, SiMongodb, SiPostgresql, SiNodedotjs,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { LuCode } from "react-icons/lu";
import {
  AwsLambda, AwsS3, AwsAppSync, AwsDynamoDB,
  AwsCognito, AwsApiGateway, AwsEventBridge, AwsSES, AwsCloudFormation,
} from "@/components/AwsIcons";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript,  color: "#3178C6" },
      { name: "Python",     icon: SiPython,      color: "#3776AB" },
      { name: "Shell",      icon: SiGnubash,     color: "#4EAA25" },
      { name: "HCL",        icon: SiTerraform,   color: "#844FBA" },
    ],
  },
  {
    category: "Cloud",
    skills: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    category: "IaC",
    skills: [
      { name: "AWS CDK",              icon: LuCode,       color: "#FF9900" },
      { name: "CloudFormation",       awsIcon: AwsCloudFormation },
      { name: "Terraform",            icon: SiTerraform,  color: "#844FBA" },
      { name: "Serverless Framework", icon: SiServerless, color: "#FD5750" },
    ],
  },
  {
    category: "AWS Serverless",
    skills: [
      { name: "Lambda",           awsIcon: AwsLambda },
      { name: "S3",               awsIcon: AwsS3 },
      { name: "DynamoDB",         awsIcon: AwsDynamoDB },
      { name: "Cognito",          awsIcon: AwsCognito },
      { name: "AppSync",          awsIcon: AwsAppSync },
      { name: "API Gateway",      awsIcon: AwsApiGateway },
      { name: "EventBridge",      awsIcon: AwsEventBridge },
      { name: "DynamoDB Streams", awsIcon: AwsDynamoDB },
      { name: "SES",              awsIcon: AwsSES },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker",         icon: SiDocker,        color: "#2496ED" },
      { name: "Kubernetes",     icon: SiKubernetes,    color: "#326CE5" },
      { name: "Jenkins",        icon: SiJenkins,       color: "#D24939" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "ArgoCD",         icon: SiArgo,          color: "#EF7B4D" },
      { name: "Prometheus",     icon: SiPrometheus,    color: "#E6522C" },
      { name: "Grafana",        icon: SiGrafana,       color: "#F46800" },
      { name: "Helm",           icon: SiHelm,          color: "#277A9F" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React",       icon: SiReact,       color: "#61DAFB" },
      { name: "TypeScript",  icon: SiTypescript,  color: "#3178C6" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5",       icon: SiHtml5,       color: "#E34F26" },
      { name: "CSS3",        icon: SiCss,         color: "#1572B6" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js",    icon: SiNodedotjs,  color: "#339933" },
      { name: "NestJS",     icon: SiNestjs,     color: "#E0234E" },
      { name: "ExpressJS",  icon: SiExpress,    color: "#ffffff"  },
      { name: "Prisma",     icon: SiPrisma,     color: "#5A67D8" },
      { name: "MongoDB",    icon: SiMongodb,    color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
  },
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto text-center max-w-2xl mb-14">
          <span className="section-label justify-center mb-4 block">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Key <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-sm">
            Technologies and tools I work with every day
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((group, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${activeTab === index
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25"
                  : "glass border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {skillCategories[activeTab].skills.map((skill, index) => {
            const AwsIcon = skill.awsIcon;
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass card-lift p-4 rounded-2xl border border-border flex flex-col items-center gap-3 text-center group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                  {AwsIcon
                    ? <AwsIcon className="w-10 h-10 rounded-lg" />
                    : <Icon className="w-7 h-7" style={{ color: skill.color }} />
                  }
                </div>
                <span className="font-medium text-xs leading-tight text-foreground/80">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
