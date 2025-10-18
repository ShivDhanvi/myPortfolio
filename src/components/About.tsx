import { Award, Briefcase, GraduationCap, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "7+ Years Experience",
      description:
        "Building scalable web applications at TCS, IIT Madras, and Honeywell",
    },
    {
      icon: GraduationCap,
      title: "Expert Mentor",
      description:
        "Transforming academic knowledge into portfolio-ready projects",
    },
    {
      icon: Lightbulb,
      title: "AI Integration",
      description:
        "Teaching how to leverage ChatGPT & AI tools for developer productivity",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description:
        "Multiple awards for technical excellence and impactful contributions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From senior developer to passionate educator
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* add modern profile pictue */}
            {/* TODO: instead of rectangular box or circle, need to through some animations around a shape like amoeba */}
            <div className="w-full h-82 md:h-[26rem] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl shadow-lg flex items-center justify-center relative">
              <img
                src="/AboutMeImage.png"
                alt="Its me"
                className="absolute bottom-0"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I'm a{" "}
                <span className="font-semibold text-primary">
                  Senior Software Developer
                </span>{" "}
                with 7+ years of experience building scalable web applications
                using{" "}
                <span className="font-semibold">
                  React.js, Next.js, and Firebase
                </span>
                , working with teams at{" "}
                <span className="font-semibold">
                  IIT Madras, TCS, and Honeywell
                </span>
                .
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                My passion lies in simplifying complex frontend concepts and
                showing students how{" "}
                <span className="font-semibold text-accent">
                  AI tools can enhance developer productivity
                </span>{" "}
                — from using ChatGPT for debugging to integrating AI APIs into
                web apps.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                I've mentored developers and students to transform academic
                knowledge into{" "}
                <span className="font-semibold text-primary">
                  real-world, portfolio-ready projects
                </span>
                , helping them land their dream jobs in tech.
              </p>
            </div>

            {/* Highlights Grid in one row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 md:col-span-2">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="border-border hover:border-accent hover:shadow-lg transition-all duration-300 group"
                  >
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-secondary rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Technical Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "Node.js",
                "Firebase",
                "Redux",
                "HTML5",
                "CSS3",
                "Tailwind",
                "Material UI",
                "Git",
                "AWS",
                "Google Cloud",
                "Python",
                "N8N AI workflow",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground border border-border hover:border-accent hover:shadow-md transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
