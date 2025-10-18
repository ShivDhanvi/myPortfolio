import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import aiDashboard from "@/assets/project-ai-dashboard.jpg";
import weatherApp from "@/assets/project-weather.jpg";
import studentDashboard from "@/assets/project-dashboard.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Dashboard",
      description: "React dashboard with integrated ChatGPT assistant for real-time analytics and AI-driven insights",
      image: aiDashboard,
      tags: ["React", "OpenAI API", "TypeScript", "Tailwind"],
      outcomes: ["Real-time AI responses", "Data visualization", "Smart insights"],
      link: "/projects/ai-dashboard"
    },
    {
      title: "Weather Forecast App",
      description: "Modern weather application with API integration, location services, and beautiful UI animations",
      image: weatherApp,
      tags: ["React", "Weather API", "Geolocation", "CSS3"],
      outcomes: ["Live weather data", "7-day forecast", "Responsive design"],
      link: "/projects/weather-app"
    },
    {
      title: "Student Portal Dashboard",
      description: "Realtime student management system built with Firebase for live data synchronization",
      image: studentDashboard,
      tags: ["React", "Firebase", "Material UI", "Charts"],
      outcomes: ["Realtime updates", "User authentication", "Analytics tracking"],
      link: "/projects/student-portal"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Student <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world applications you'll build during the course
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-border hover:border-accent hover:shadow-2xl transition-all duration-300 group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 text-xs bg-secondary rounded-md text-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-foreground">Key Features:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Link to={project.link} className="flex-1">
                      <Button size="sm" variant="outline" className="w-full group/btn">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:text-accent" />
                        <span className="text-xs">View Demo</span>
                      </Button>
                    </Link>
                    <Button size="sm" variant="outline" className="group/btn">
                      <Github className="w-4 h-4 group-hover/btn:text-accent" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              These are just a few examples. You'll build multiple projects to create an impressive portfolio!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
