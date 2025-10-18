import { Mail, Phone, Linkedin, Instagram, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "shivaramtechdev@gmail.com",
      href: "mailto:shivaramtechdev@gmail.com",
      color: "text-red-500",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 9123566804",
      href: "https://wa.me/919123566804",
      color: "text-green-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/shivaram-prasad-29a77a114/",
      color: "text-blue-600",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "View my profile",
      href: "https://www.instagram.com/cvadreams/",
      color: "text-gray-700",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your learning journey? Let's connect!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-accent hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => window.open(method.href, "_blank")}
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform ${method.color}`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground mb-1">
                        {method.label}
                      </div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                        {method.value}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Action */}
          <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-accent/30 shadow-lg">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Have Questions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Don't hesitate to reach out. I'm here to help you succeed in
                  your web development journey!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() =>
                      window.open("https://wa.me/919123566804", "_blank")
                    }
                    className="shadow-lg hover:shadow-xl"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    WhatsApp Me
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() =>
                      (window.location.href =
                        "mailto:shivaramtechdev@gmail.com")
                    }
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              📍 Based in Chennai, India | Teaching students globally 🌍
            </p>
            <div className="text-sm mt-2 text-muted-foreground">
              Personalized mentorship for students and professionals looking to
              build real-world projects 💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
