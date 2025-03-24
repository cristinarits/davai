import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Users, Star } from "lucide-react";

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
}

const ValueCard = ({ icon: Icon, title, description, delay }: ValueCardProps) => {
  return (
    <Card className="bg-white border border-gray-200 hover:border-purple-400 transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-md" style={{ animationDelay: `${delay}ms` }}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-14 w-14 rounded-full bg-purple-100 flex items-center justify-center transition-colors group-hover:bg-purple-200">
            <Icon className="h-7 w-7 text-purple-700" />
          </div>

          <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const CompanyValues = () => {
  return (
    <section id="values" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-purple-700">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide our mission to make language learning effective and enjoyable
          </p>
        </div>

        {/* Wiggly Line Journey */}
        <div className="relative mb-16 hidden md:block">
          <div className="absolute w-full h-20 top-1/2 transform -translate-y-1/2 z-0">
            <svg viewBox="0 0 1200 100" className="w-full" preserveAspectRatio="none">
              <path 
                d="M0,50 C150,0 250,100 400,50 C550,0 650,100 800,50 C950,0 1050,100 1200,50" 
                strokeWidth="3" 
                fill="none" 
                stroke="#7a3b69"
                strokeDasharray="8,8"
                className="path"
              />
            </svg>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white rounded-full p-2 text-xs font-bold">
              START
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white rounded-full p-2 text-xs font-bold">
              FINISH
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
          <ValueCard 
            icon={Gamepad2}
            title="Joy & Fun"
            description="Forget about translating words and being unmotivated. Transform your journey into fun and easy method with customization, ranking, mini-games and much more."
            delay={100}
          />
          <ValueCard 
            icon={Users}
            title="Community"
            description="You are not alone! Connect with your classmates to play and learn together. Compete, challenge and get to the top of leaderboards."
            delay={200}
          />
          <ValueCard 
            icon={Star}
            title="Self-Improvement"
            description="DAVAI will help you understand school subjects by 101% adapting to your persona and having close integration with educational system."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;