import { Heart, Code2, Linkedin, Twitter, Icon, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-6 h-6 text-accent" />
                <span className="text-xl font-bold">Shivaram Prasad</span>
              </div>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Empowering the next generation of web developers with modern
                tools, AI integration, and industry best practices.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#demo"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    Book Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-primary-foreground/80">
                  📧 shivaramtechdev@gmail.com
                </li>
                <li className="text-primary-foreground/80">
                  📱 +91 9123566804
                </li>
                <li className="text-primary-foreground/80">
                  📍 Chennai, India
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-primary-foreground/70">
              © {currentYear} Shivaram Prasad. All rights reserved.
            </p>

            <p className="text-primary-foreground/70 flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-accent fill-accent" />{" "}
              using React & TypeScript
            </p>
          </div>

          {/* add social media icons and links for twitter, linkedIn& facebook */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://x.com/software83319"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
            >
              <Twitter className="w-5 h-5" /> Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/shivaramtechdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="https://www.facebook.com/CvaDreams"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
            >
              <Facebook className="w-5 h-5" /> FaceBook
            </a>
          </div>

          {/* Tagline */}
          <div className="text-center mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-accent font-medium italic">
              "Teaching students how to build real-world React applications —
              and leverage AI tools to code smarter, faster, and more
              creatively."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
