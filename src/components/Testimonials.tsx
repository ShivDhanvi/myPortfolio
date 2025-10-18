import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Mehta",
      role: "Full Stack Developer",
      company: "Tech Startup",
      avatar: "PM",
      rating: 5,
      text: "Shivaram's mentorship transformed my career. His practical approach to teaching React and AI integration helped me land my dream job. The real-world projects we built are now the highlight of my portfolio!",
    },
    {
      name: "Abhu Bhasa",
      role: "B.Com Student",
      company: "Hindustan College",
      avatar: "AB",
      rating: 5,
      text: "Best investment for blending commerce and technology! The practical data management and business automation skills instantly made me 10x more productive and job-ready.",
    },
    {
      name: "Sneha Reddy",
      role: "Frontend Developer",
      company: "E-commerce Platform",
      avatar: "SR",
      rating: 5,
      text: "From complete beginner to confident developer in just 3 months! The course structure is perfect, and the hands-on projects gave me real industry experience. Highly recommended!",
    },
    {
      name: "Vikram Singh",
      role: "Computer Science Student",
      company: "IIT Delhi",
      avatar: "VS",
      rating: 5,
      text: "Shivaram's teaching goes beyond just coding. He shares industry insights, best practices, and career guidance that you won't find in books. The AI integration module was a game-changer!",
    },
    {
      name: "Ananya Joshi",
      role: "UI/UX Developer",
      company: "Design Agency",
      avatar: "AJ",
      rating: 5,
      text: "The perfect blend of theory and practice. I loved how we built production-ready applications from scratch. Shivaram's patience and expertise made learning complex topics enjoyable.",
    },
    {
      name: "Rohit Sharma",
      role: "Backend Developer",
      company: "Fintech Startup",
      avatar: "RS",
      rating: 5,
      text: "As a backend developer wanting to learn frontend, this course was exactly what I needed. The Firebase and API integration modules helped me become a true full-stack developer!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Student{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hear from students who transformed their careers through
              mentorship
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent hover:shadow-xl transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6 space-y-4">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-accent" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground/90 leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-background rounded-xl border border-border">
              <div className="text-3xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm text-muted-foreground">
                Happy Students
              </div>
            </div>
            <div className="text-center p-6 bg-background rounded-xl border border-border">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Job Placement</div>
            </div>
            <div className="text-center p-6 bg-background rounded-xl border border-border">
              <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
            <div className="text-center p-6 bg-background rounded-xl border border-border">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                Projects Built
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
