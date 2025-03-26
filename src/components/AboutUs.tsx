import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "./ui/separator";
import {
  Users, Clock, UserPlus, BarChart3, Activity, PenTool, VideoIcon, Target,
  Lightbulb, Palette, Gamepad2, Globe, Database, ArrowUpRight
} from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  skills: string[];
  index: number;
}

const TeamMember = ({ name, role, skills, index }: TeamMemberProps) => {
  const getSkillIcon = (skill: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      "Interpersonal Skills": <Users className="h-4 w-4 text-yellow-400" />,
      "Time Management": <Clock className="h-4 w-4 text-yellow-400" />,
      "Team Collaboration": <UserPlus className="h-4 w-4 text-yellow-400" />,
      "Team Coordination": <Users className="h-4 w-4 text-yellow-400" />,
      "Crisis Management": <Activity className="h-4 w-4 text-yellow-400" />,
      "Process Optimization": <BarChart3 className="h-4 w-4 text-yellow-400" />,
      "Brand Building": <PenTool className="h-4 w-4 text-yellow-400" />,
      "Video Production": <VideoIcon className="h-4 w-4 text-yellow-400" />,
      "Customer Targeting": <Target className="h-4 w-4 text-yellow-400" />,
      "Innovations": <Lightbulb className="h-4 w-4 text-yellow-400" />,
      "Graphic Design": <Palette className="h-4 w-4 text-yellow-400" />,
      "Game Development": <Gamepad2 className="h-4 w-4 text-yellow-400" />,
      "Web Development": <Globe className="h-4 w-4 text-yellow-400" />,
      "Technology Adaptability": <ArrowUpRight className="h-4 w-4 text-yellow-400" />,
      "Database Management": <Database className="h-4 w-4 text-yellow-400" />
    };

    return iconMap[skill] || <div className="h-4 w-4" />;
  };

  const imageMap: Record<string, string> = {
    "Albert Boitsov": "albertt.jpg",
    "Ivan Turapin": "ivann.png",
    "Hugo Mattias Mõlder": "hugoo.png",
    "Cristina Rits": "cristinaa.png",
    "Ivan Vasilyev": "vasjaa.png",
  };

  const avatarUrl = imageMap[name]
    ? `https://cpyxqewlkqmiuwwmlzaz.supabase.co/storage/v1/object/public/pictures/${imageMap[name]}`
    : undefined;

  return (
    <div className="bg-white border border-fuchsia-500/30 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden group p-6 text-center rounded-lg">
      <Avatar className="h-24 w-24 mx-auto mb-4 border-2 border-yellow-400 group-hover:border-fuchsia-300 transition-colors">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="bg-fuchsia-700 text-yellow-400 font-bold">
          {name.split(" ").map((n) => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-semibold text-black mb-1">{name}</h3>
      <p className="text-fuchsia-900 text-sm font-medium mb-4">{role}</p>
      <div className="space-y-2 w-full">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center space-x-2 text-sm text-black justify-center">
            {getSkillIcon(skill)}
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutUsSection = () => {
  const teamMembers = [
    {
      name: "Albert Boitsov",
      role: "Co-Founder & CCO",
      skills: ["Interpersonal Skills", "Time Management", "Team Collaboration"],
      index: 1
    },
    {
      name: "Ivan Vasilyev",
      role: "Co-Founder & CFO",
      skills: ["Team Coordination", "Crisis Management", "Process Optimization"],
      index: 2
    },
    {
      name: "Ivan Turapin",
      role: "Co-Founder & CMO",
      skills: ["Brand Building", "Video Production", "Customer Targeting"],
      index: 3
    },
    {
      name: "Hugo Mattias Mõlder",
      role: "Co-Founder & CIO",
      skills: ["Innovations", "Graphic Design", "Game Development"],
      index: 4
    },
    {
      name: "Cristina Rits",
      role: "Co-Founder & CTO",
      skills: ["Web Development", "Technology Adaptability", "Database Management"],
      index: 5
    }
  ];

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left side - Team members grid */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                {...member}
              />
            ))}
          </div>

          {/* Right side - About Us text */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-yellow-400">
                About Us
              </h2>
              <p className="text-black text-lg">
              We believe that everything we do leaves a footprint and want to ensure ours leads to a better world. In our company, every voice matters, decisions are made openly, and ideas are judged by value. A passion unites us for innovation, self-improvement, and a desire to improve the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
