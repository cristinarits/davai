import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fuchsia-950 border-t border-stone-300/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="text-xl font-display font-semibold mb-4 text-stone-300">DAVAI</div>
            <p className="text-stone-300/80 mb-6 max-w-md">
              An interactive platform for learning Estonian with a focus on scientific and educational terminology for Russian-speaking students.
            </p>
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-md border border-stone-300/30 bg-fuchsia-950/50 px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 text-stone-300"
              />
              <Button size="sm" className="h-10 bg-amber-300 text-black hover:bg-amber-300/90">
                <span className="hidden sm:inline mr-2">Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm tracking-wide uppercase text-amber-300">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-stone-300/80 hover:text-amber-300 transition-colors">Features</a></li>
              <li><a href="#subjects" className="text-stone-300/80 hover:text-amber-300 transition-colors">Subjects</a></li>
              <li><a href="#" className="text-stone-300/80 hover:text-amber-300 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-stone-300/80 hover:text-amber-300 transition-colors">For Teachers</a></li>
              <li><a href="#" className="text-stone-300/80 hover:text-amber-300 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm tracking-wide uppercase text-amber-300">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-stone-300/80 hover:text-amber-300 transition-colors">About Us</a></li>
              <li><a href="#" className="text-stone-300/80 hover:text-amber-300 transition-colors">Team</a></li>
              <li><a href="#" className="text-stone-300/80 hover:text-amber-300 transition-colors">Contact</a></li>
              <li><a href="#" className="text-stone-300/80 hover:text-amber-300 transition-colors">Careers</a></li>
              <li><a href="#" className="text-stone-300/80 hover:text-amber-300 transition-colors">Partners</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-300/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-stone-300/80 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DAVAI. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-stone-300/80 hover:text-amber-300 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-stone-300/80 hover:text-amber-300 transition-colors text-sm">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;