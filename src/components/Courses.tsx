import {
  CheckCircle2,
  Brain,
  Code,
  Palette,
  Database,
  Zap,
  Rocket,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Courses = () => {
  const modules = [
    {
      icon: Code,
      title: "React.js Mastery",
      topics: [
        "React Fundamentals & Components",
        "Hooks & Lifecycle Methods",
        "Component Composition Patterns",
        "Performance Optimization",
      ],
    },
    {
      icon: Database,
      title: "State Management",
      topics: [
        "Redux Toolkit Deep Dive",
        "Context API Best Practices",
        "Advanced State Patterns",
        "Real-time Data Handling",
      ],
    },
    {
      icon: Zap,
      title: "Modern JavaScript",
      topics: [
        "ES6+ Features & Syntax",
        "Async/Await & Promises",
        "Functional Programming",
        "JavaScript Design Patterns",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Development",
      topics: [
        "HTML5 Semantic Markup",
        "CSS3 & Responsive Design",
        "Tailwind CSS & Material UI",
        "Animation & Transitions",
      ],
    },
    {
      icon: Rocket,
      title: "API Integration",
      topics: [
        "RESTful API Design",
        "Firebase & Backend Services",
        "Authentication & Security",
        "Data Fetching Strategies",
      ],
    },
    {
      icon: Brain,
      title: "AI for Developers",
      topics: [
        "Viber AI Tools",
        "AI-Powered Debugging",
        "Integrating OpenAI/ GEMINI/ Ollama APIs with Projects",
        "Building AI-Enhanced Apps",
      ],
    },
  ];

  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What You'll{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Learn
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive curriculum designed to transform you into a modern
              web developer
            </p>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-accent hover:shadow-xl transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {module.topics.map((topic, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* AI Focus Highlight */}
          <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-accent/30 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">
                AI-Powered Learning Advantage
              </CardTitle>
              <CardDescription className="text-base">
                Stand out in the job market with cutting-edge skills
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">10x</div>
                  <p className="text-sm text-muted-foreground">
                    Faster Development with AI Tools
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">
                    Real-World
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AI Integration Projects
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent">
                    Future-Ready
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Skills for Modern Development
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Courses;
