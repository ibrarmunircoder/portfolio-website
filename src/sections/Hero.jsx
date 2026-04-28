import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const dotsCount = 24;
const dots = Array.from({ length: dotsCount }, (_, i) => ({
  id: `bg-dot-${i}`,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  duration: 15 + Math.random() * 20,
  delay: Math.random() * 5,
}));

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/85 to-background" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px]" />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: "var(--color-primary-light)",
              opacity: 0.35,
              left: dot.x,
              top: dot.y,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass border border-primary/20 text-sm text-primary-light font-medium">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Software Engineer · AWS Cloud Engineer
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight animate-fade-in animation-delay-100">
                Hi, I'm
                <br />
                Ibrar{" "}
                <span className="glow-text">Munir</span>
              </h1>
              <p className="text-base text-muted-foreground max-w-lg leading-relaxed animate-fade-in animation-delay-200">
                A software engineer based in Pakistan, with 5+ years of experience building secure and scalable cloud-native web applications by leveraging AWS services. Skilled in Infrastructure as Code (AWS CDK, Serverless Framework), CI/CD automation, and full-stack development with React, Typescript, NodeJS and NestJS. Seeking to leverage my expertise in cloud architecture and DevOps practices in an AWS Cloud Engineer role focused on designing resilient, scalable infrastructure solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/software-engineer.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/ibrarmunircoder" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ibrar-munir-53197a16b" },
                ].map((social, idx) => (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    key={idx}
                    href={social.href}
                    className="p-2.5 rounded-xl glass border border-border hover:border-primary/40 hover:text-primary transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="animate-fade-in animation-delay-300">
            <div className="relative max-w-sm mx-auto">
              {/* Glow behind image */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-primary/25 via-accent/15 to-transparent blur-3xl" />
              <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-primary/50 via-accent/30 to-transparent">
                <div className="relative bg-card rounded-3xl overflow-hidden">
                  <img
                    src="/profile-photo.jpeg"
                    alt="Ibrar Munir"
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badge – Available */}
              <div className="absolute -bottom-4 -right-4 glass border border-border rounded-2xl px-4 py-3 animate-float shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Available for work</span>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute -top-4 -left-4 glass border border-border rounded-2xl px-4 py-3 animate-float animation-delay-500 shadow-xl">
                <div className="text-2xl font-extrabold gradient-text">5+</div>
                <div className="text-xs text-muted-foreground mt-0.5">Years Exp.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a
          href="#skills"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
