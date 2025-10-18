import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full text-primary-foreground/90 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Senior Frontend Developer & Mentor</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent to-primary-foreground bg-clip-text text-transparent">
              Shivaram Prasad
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Empowering students to build{" "}
            <span className="font-semibold text-accent">
              real-world web applications
            </span>{" "}
            using React.js, JavaScript, and AI tools. Learn how to code smarter
            — not harder.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              className="group shadow-glow hover:shadow-[0_0_60px_hsl(var(--accent)/0.5)] transition-all duration-300"
              onClick={() => scrollToSection("demo")}
            >
              <Code2 className="w-5 h-5 mr-2" />
              Book a Free Demo Class
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-accent"
              onClick={() => scrollToSection("courses")}
            >
              View Course Modules
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">
                7+
              </div>
              <div className="text-sm text-primary-foreground/70 mt-1">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">
                25+
              </div>
              <div className="text-sm text-primary-foreground/70 mt-1">
                Students Mentored
              </div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-accent">
                50+
              </div>
              <div className="text-sm text-primary-foreground/70 mt-1">
                Projects Delivered
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
