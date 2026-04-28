import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ibrarmunircoder", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ibrar-munir-53197a16b", label: "LinkedIn" },
];

const footerLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="/" className="text-xl font-extrabold tracking-tight">
              IB<span className="gradient-text">.</span>
            </a>
            <p className="text-xs text-muted-foreground mt-1.5">
              © {currentYear} Ibrar Munir. All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                target="_blank"
                rel="noreferrer"
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2.5 rounded-xl glass border border-border hover:border-primary/40 hover:text-primary transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
