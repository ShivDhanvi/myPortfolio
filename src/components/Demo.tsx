import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Video, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Demo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone } = formData;

    // 1️⃣ Basic validation
    if (!name || !email || !phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // 2️⃣ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // 3️⃣ Phone validation
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
      toast({
        title: "Invalid Phone Number",
        description:
          "Please enter a valid phone number (10–15 digits, optional +91).",
        variant: "destructive",
      });
      return;
    }

    // 4️⃣ Success message before sending
    toast({
      title: "Registration Successful! 🎉",
      description: "I'll contact you shortly to schedule your free demo class.",
    });

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent! 🚀",
          description:
            "Thanks for reaching out! I'll reply to your email shortly.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Submission Failed",
          description:
            "EmailJS failed to send the message. Please try WhatsApp or direct email.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Configuration Error",
        description:
          "Ensure EmailJS keys are correctly set and the service is initialized.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "60-minute hands-on session",
    "Introduction to React fundamentals",
    "Live coding demonstration",
    "Q&A with industry expert",
    "Course curriculum overview",
    "Career guidance & mentorship",
  ];

  return (
    <section
      id="demo"
      className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Book Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Free Demo
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join a live session and discover how to build and deploy modern
              web applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Benefits */}
            <div className="space-y-6">
              <Card className="border-accent/30 shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Video className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">What to Expect</CardTitle>
                  <CardDescription>
                    A comprehensive introduction to modern web development
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/90">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 mt-6 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>Duration: 60 minutes</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>Flexible scheduling available</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Video className="w-4 h-4 text-accent" />
                      <span>Online via Google Meet / Zoom</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="bg-secondary/50 border-border">
                <CardContent className="pt-6">
                  <p className="text-foreground/90 italic mb-4">
                    "The demo session was incredibly helpful! Shivaram's
                    teaching style is clear and practical. I signed up
                    immediately after the session."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold">
                      RS
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        Srimathi M
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Engineering Student
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right: Registration Form */}
            <Card className="border-border shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Reserve Your Seat</CardTitle>
                <CardDescription>
                  Fill in your details and I'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 9123456789"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your learning goals..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Book Free Demo Class"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to receive updates about the course
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
